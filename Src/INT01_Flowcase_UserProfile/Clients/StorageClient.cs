using Azure.Data.Tables;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using INT01_Flowcase_UserProfile.Models.Configuration;
using INT01_Flowcase_UserProfile.Models.TableEntities;
using Microsoft.Extensions.Azure;
using Microsoft.Extensions.Logging;

namespace INT01_Flowcase_UserProfile.Clients
{
    public class StorageClient
    {
        private readonly StorageConfiguration _configuration;
        private readonly BlobContainerClient _containerClient;
        private readonly TableClient _employeesTable;
        private readonly TableClient _summariesTable;
        private readonly TableClient _coursesTable;
        private readonly TableClient _projectsTable;
        private readonly TableClient _skillsTable;
        private readonly ILogger<StorageClient> _logger;

        public StorageClient
        (
            ILogger<StorageClient> logger,
            StorageConfiguration configuration,
            BlobContainerClient containerClient,
            IAzureClientFactory<TableClient> tableFactory
        )
        {
            _logger = logger;
            _configuration = configuration;
            _containerClient = containerClient;
            _employeesTable = tableFactory.CreateClient("employees-table");
            _summariesTable = tableFactory.CreateClient("summaries-table");
            _coursesTable = tableFactory.CreateClient("courses-table");
            _projectsTable = tableFactory.CreateClient("projects-table");
            _skillsTable = tableFactory.CreateClient("skills-table");
        }

        public async Task UploadPDFToBlob(string filename, byte[] content)
        {
            BlobClient blobClient = _containerClient.GetBlobClient(filename);
            using var stream = new MemoryStream(content);

            await blobClient.UploadAsync(stream, new BlobUploadOptions
            {
                HttpHeaders = new BlobHttpHeaders
                {
                    ContentType = "application/pdf"
                }
            });
        }

        public EmployeeEntity? GetEmployee(string rowkey)
        {
            return _employeesTable
                .Query<EmployeeEntity>(filter: $"RowKey eq '{rowkey}'")
                .FirstOrDefault();
        }

        public async Task UpdateEmployee(EmployeeEntity entity)
        {
            entity.CV = $"{_containerClient.Uri}/{entity.CV}?{_configuration.BlobSAS}";
            await _employeesTable.UpsertEntityAsync(entity);
        }

        public SummaryEntity? GetSummary(string rowkey)
        {
            return _summariesTable
                .Query<SummaryEntity>(filter: $"RowKey eq '{rowkey}'")
                .FirstOrDefault();
        }

        public async Task CreateOrUpdateSummary(SummaryEntity entity)
        {
            await _summariesTable.UpsertEntityAsync(entity);
        }

        public CourseEntity? GetCourseByTitle(string title)
        {
            return _coursesTable
                .Query<CourseEntity>(x => x.Title.Equals(title, StringComparison.InvariantCultureIgnoreCase))
                .FirstOrDefault();
        }

        public async Task CreateOrUpdateCourse(CourseEntity entity)
        {
            await _coursesTable.UpsertEntityAsync(entity);
        }

        public ProjectEntity? GetProject(string employee, string customer, string? project = null)
        {

            if (!string.IsNullOrEmpty(project))
                return _projectsTable
                    .Query<ProjectEntity>(x => x.Employee == employee && x.Customer == customer && x.ProjectName == project)
                    .FirstOrDefault();
            else
                return _projectsTable
                    .Query<ProjectEntity>(x => x.Employee == employee && x.Customer == customer)
                    .FirstOrDefault();
        }

        public async Task CreateOrUpdateProject(ProjectEntity entity)
        {
            await _projectsTable.UpsertEntityAsync(entity);
        }

        public SkillEntity? GetSkillByTitle(string title)
        {
            return _skillsTable
                .Query<SkillEntity>(x => x.Title.Equals(title, StringComparison.OrdinalIgnoreCase))
                .FirstOrDefault();
        }

        public async Task CreateOrUpdateSkill(SkillEntity entity)
        {
            await _skillsTable.UpsertEntityAsync(entity);
        }
    }
}
