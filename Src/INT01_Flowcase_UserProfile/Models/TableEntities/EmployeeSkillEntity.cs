using Azure;
using Azure.Data.Tables;

namespace INT01_Flowcase_UserProfile.Models.TableEntities
{
    public class EmployeeSkillEntity : ITableEntity
    {
        public string PartitionKey { get; set; } = "ansattkompetanse";
        public required string RowKey { get; set; }
        public required string Slug { get; set; }
        public required string SkillId { get; set; }
        public required string EmployeeName { get; set; }
        public int YearsExperience { get; set; }
        public DateTime Edited { get; set; } = DateTime.UtcNow;
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }
    }
}
