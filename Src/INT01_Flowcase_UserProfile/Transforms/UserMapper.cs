using INT01_Flowcase_UserProfile.Models.Flowcase;
using INT01_Flowcase_UserProfile.Models.TableEntities;

namespace INT01_Flowcase_UserProfile.Transforms
{
    public static class UserMapper
    {
        public static EmployeeEntity MapToEmployeeEntity(this User user, string cvName)
        {
            var splitName = user.name.Split(" ");
            string userIdentifier = splitName.Length > 1 ? splitName[^1].ToLower() : user.email.Split("@")[0].ToLower();
            EmployeeEntity entity = new EmployeeEntity
            {
                RowKey = userIdentifier,
                Fornavn = splitName.Length > 1 ? string.Join(" ", splitName.Take(splitName.Length - 1)) : splitName[0],
                Etternavn = splitName.Length > 1 ? splitName[^1] : string.Empty,
                CV = cvName,
                Slug = userIdentifier,
                Telefonnummer = user.telephone,
                Epost = user.email
            };

            return entity;
        }

        public static SummaryEntity MapToSummaryEntity(this string summary, string username, string usermail)
        {
            SummaryEntity summaryEntity = new SummaryEntity
            {
                RowKey = usermail.Split("@")[0],
                Slug = Guid.NewGuid().ToString(),
                Navn = username,
                Sammendrag = summary
            };

            return summaryEntity;
        }

        public static CourseEntity MapToCourseEntity(this string courseTitle, string employee)
        {
            string guid = Guid.NewGuid().ToString();
            CourseEntity courseEntity = new CourseEntity
            {
                RowKey = guid,
                Title = courseTitle,
                Slug = guid,
                Employees = employee,
                Edited = DateTime.UtcNow
            };

            return courseEntity;
        }

        public static SkillEntity MapToSkillEntity(this string skillTitle, string employee)
        {
            string guid = Guid.NewGuid().ToString();
            SkillEntity skillEntity = new SkillEntity
            {
                RowKey = guid,
                Title = skillTitle,
                Slug = guid,
                Employees = employee,
                Edited = DateTime.UtcNow
            };

            return skillEntity;
        }

        public static ProjectEntity MapToProjectEntity(this Project flowcaseProject, string employeeName)
        {
            string id = Guid.NewGuid().ToString();
            ProjectEntity projectEntity = new ProjectEntity
            {
                RowKey = id,
                Slug = id,
                Employee = employeeName,
                Customer = flowcaseProject.customer.no.Trim(),
                ProjectName = flowcaseProject.description?.no?.Trim(),
                MonthFrom = flowcaseProject.month_from,
                YearFrom = flowcaseProject.year_from,
                MonthTo = flowcaseProject.month_to,
                YearTo = flowcaseProject.year_to,
                ProjectDescription = flowcaseProject.long_description?.no,
                Roles = string.Join(", ", flowcaseProject.roles
                .Where(x => !string.IsNullOrEmpty(x.name?.no))
                .Select(x => x.name.no.Trim())),
                Skills = string.Join(", ", flowcaseProject.project_experience_skills
                .Where(x => !string.IsNullOrEmpty(x.tags?.no))
                .Select(x => x.tags.no.Trim())),
                Industry = flowcaseProject.industry?.no?.Trim(),
            };

            return projectEntity;
        }

        public static ProjectEntity MapToProjectEntity(this Project flowcaseProject, ProjectEntity projectEntity)
        {
            projectEntity.MonthFrom = flowcaseProject.month_from;
            projectEntity.YearFrom = flowcaseProject.year_from;
            projectEntity.MonthTo = flowcaseProject.month_to;
            projectEntity.YearTo = flowcaseProject.year_to;
            projectEntity.ProjectDescription = flowcaseProject.long_description?.no;
            projectEntity.Roles = string.Join(", ", flowcaseProject.roles
                .Where(x => !string.IsNullOrEmpty(x.name?.no))
                .Select(x => x.name.no.Trim()));
            projectEntity.Skills = string.Join(", ", flowcaseProject.project_experience_skills
                .Where(x => !string.IsNullOrEmpty(x.tags?.no))
                .Select(x => x.tags.no.Trim()));
            projectEntity.Industry = flowcaseProject.industry?.no?.Trim();
            projectEntity.Edited = DateTime.UtcNow;

            return projectEntity;
        }
    }
}
