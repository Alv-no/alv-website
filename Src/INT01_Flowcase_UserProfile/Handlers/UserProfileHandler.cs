using INT01_Flowcase_UserProfile.Clients;
using INT01_Flowcase_UserProfile.Models.Flowcase;
using INT01_Flowcase_UserProfile.Models.TableEntities;
using INT01_Flowcase_UserProfile.Transforms;
using Microsoft.Extensions.Logging;

namespace INT01_Flowcase_UserProfile.Handlers
{
    public class UserProfileHandler
    {
        private readonly ILogger<UserProfileHandler> _logger;
        private readonly IFlowcaseClient _flowcaseClient;
        private readonly StorageClient _storageClient;

        public UserProfileHandler
        (
            ILogger<UserProfileHandler> logger,
            IFlowcaseClient flowcaseClient,
            StorageClient storageClient
        )
        {
            _logger = logger;
            _flowcaseClient = flowcaseClient;
            _storageClient = storageClient;
        }

        public async Task HandleCVUpload(User user)
        {
            // download user CV as PDF from Flowcase and upload to Azure blob storage
            byte[] filecontent = await _flowcaseClient.DownloadUserCV(user.user_id, user.default_cv_id);
            string filename = $"{user.email.Split("@")[0]}.pdf";

            _logger.LogInformation("Uploading file '{filename}' to blob.", filename);
            await _storageClient.UploadPDFToBlob(filename, filecontent);
            await CreateOrUpdateEmployee(user, filename);
        }

        private async Task CreateOrUpdateEmployee(User user, string userCVName)
        {
            EmployeeEntity newEmployee = user.MapToEmployeeEntity(userCVName);

            var splitName = user.name.Split(" ");
            string userIdentifier = splitName.Length > 1 ? splitName[^1].ToLower() : user.email.Split("@")[0].ToLower();
            EmployeeEntity? existingEmployee = _storageClient.GetEmployee(userIdentifier);

            if (existingEmployee is not null && !AnyUpdatesInEmployeeEntity(newEmployee, existingEmployee))
                return;

            _logger.LogInformation("Updating employee '{userLastname}' in table.", userIdentifier);
            await _storageClient.UpdateEmployee(newEmployee);
        }


        public async Task UpdateUserInformation(User user)
        {
            CV? userCV = await _flowcaseClient.GetUserCV(user.user_id, user.default_cv_id);
            if (userCV is null) return;

            //PROCESS CV SUMMARY
            Qualification? qualification = userCV.key_qualifications
                .FirstOrDefault(x => x.label?.no?.ToLower() == "standard");

            if (qualification is null)
                _logger.LogError("User '{username}' has no CV summary with title 'Standard'. CV summary not uploaded.", user.name);
            else
                await CreateOrUpdateCVSummary(user, qualification);

            string employeeLastName = userCV.name.Split(" ")[^1].ToLower();

            //PROCESS CV CERTIFICATIONS
            foreach (Certification certification in userCV.certifications.Where(x => !x.disabled))
            {
                if (!string.IsNullOrEmpty(certification.name.no))
                    await CreateOrUpdateCourse(certification.name.no.Trim(), employeeLastName);
            }

            //PROCESS CV COURSES
            foreach (Course course in userCV.courses.Where(x => !x.disabled))
            {
                if (!string.IsNullOrEmpty(course.name.no))
                    await CreateOrUpdateCourse(course.name.no.Trim(), employeeLastName);
            }

            //PROCESS CV PROJECTS
            foreach (Project project in userCV.project_experiences.Where(x => !x.disabled))
            {
                if (!string.IsNullOrEmpty(project.customer?.no) && project.customer?.no?.ToLower() != "alv as")
                    await CreateOrUpdateProject(user.name, project);
            }

            //PROCESS CV SKILLS 
            foreach (Technology technology in userCV.technologies)
            {
                foreach (TechnologySkill skill in technology.technology_skills)
                {
                    if (!string.IsNullOrEmpty(skill.tags?.no))
                        await CreateOrUpdateSkill(skill.tags.no.Trim(), employeeLastName);
                }
            }
        }

        private async Task CreateOrUpdateCourse(string courseTitle, string employee)
        {
            CourseEntity? existingCourse = _storageClient.GetCourseByTitle(courseTitle);

            if (existingCourse is not null)
            {
                if (!existingCourse.Employees.Split(",").Contains(employee))
                {
                    _logger.LogInformation("Updating course '{courseTitle}'.", existingCourse.Title);

                    existingCourse.Employees += $",{employee}";
                    existingCourse.Edited = DateTime.UtcNow;
                    await _storageClient.CreateOrUpdateCourse(existingCourse);
                }
            }
            else
            {
                _logger.LogInformation("Registering new course '{courseTitle}'.", courseTitle);
                CourseEntity newCourse = courseTitle.MapToCourseEntity(employee);
                await _storageClient.CreateOrUpdateCourse(newCourse);
            }
        }

        private async Task CreateOrUpdateSkill(string skillTitle, string employee)
        {
            SkillEntity? existingSkill = _storageClient.GetSkillByTitle(skillTitle);

            if (existingSkill is not null)
            {
                if (!existingSkill.Employees.Split(",").Contains(employee))
                {
                    _logger.LogInformation("Updating skill '{skillTitle}' for employee '{employeeLastname}'.", existingSkill.Title, employee);

                    existingSkill.Employees += $",{employee}";
                    existingSkill.Edited = DateTime.UtcNow;
                    await _storageClient.CreateOrUpdateSkill(existingSkill);
                }
            }
            else
            {
                _logger.LogInformation("Registering new course '{courseTitle}' for employee '{userLastname}'.", skillTitle, employee);
                SkillEntity newSkill = skillTitle.MapToSkillEntity(employee);
                await _storageClient.CreateOrUpdateSkill(newSkill);
            }
        }

        private async Task CreateOrUpdateProject(string username, Project project)
        {
            ProjectEntity? existingProject = _storageClient.GetProject(username, project.customer.no.Trim(), project.description?.no?.Trim());
            if (existingProject is not null)
            {
                ProjectEntity updatedProject = project.MapToProjectEntity(existingProject);
                _logger.LogInformation("Updating project '{projectname}' for user '{username}'.", existingProject.ProjectName, existingProject.Employee);
                await _storageClient.CreateOrUpdateProject(updatedProject);
            }
            else
            {
                ProjectEntity newProject = project.MapToProjectEntity(username);
                _logger.LogInformation("Registering new project '{projectname}' for user '{username}'.", newProject.ProjectName, newProject.Employee);
                await _storageClient.CreateOrUpdateProject(newProject);
            }
        }

        private async Task CreateOrUpdateCVSummary(User user, Qualification qualification)
        {
            if (string.IsNullOrEmpty(qualification.long_description?.no)) return;

            SummaryEntity? existingSummary = _storageClient.GetSummary(user.email.Split("@")[0]);
            if (existingSummary is not null)
            {
                existingSummary.Sammendrag = qualification.long_description.no;
                existingSummary.Edited = DateTime.UtcNow;

                _logger.LogInformation("Updating CV summary for user '{username}'", user.name);
                await _storageClient.CreateOrUpdateSummary(existingSummary);
            }
            else
            {
                SummaryEntity newSummary = qualification.long_description.no.MapToSummaryEntity(user.name, user.email);
                _logger.LogInformation("Registering new CV summary for user '{username}'", user.name);
                await _storageClient.CreateOrUpdateSummary(newSummary);
            }
        }

        private bool AnyUpdatesInEmployeeEntity(EmployeeEntity newEntity, EmployeeEntity existingEntity) =>
            newEntity.Fornavn != existingEntity.Fornavn
            || newEntity.Etternavn != existingEntity.Etternavn
            || newEntity.Epost != existingEntity.Epost
            || newEntity.Telefonnummer != existingEntity.Telefonnummer;
    }
}
