using Azure;
using Azure.Data.Tables;

namespace INT01_Flowcase_UserProfile.Models.TableEntities
{
    public class ProjectEntity : ITableEntity
    {
        public string PartitionKey { get; set; } = "prosjekthistorikk";
        public required string RowKey { get; set; }
        public required string Slug { get; set; }
        public required string Employee { get; set; }
        public string? MonthFrom { get; set; }
        public string? YearFrom { get; set; }
        public string? MonthTo { get; set; }
        public string? YearTo { get; set; }
        public required string Customer { get; set; }
        public string? ProjectName { get; set; }
        public string? ProjectDescription { get; set; }
        public string? Roles { get; set; }
        public string? Skills { get; set; }
        public string? Industry { get; set; }
        public DateTime Edited { get; set; } = DateTime.UtcNow;
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }
    }
}
