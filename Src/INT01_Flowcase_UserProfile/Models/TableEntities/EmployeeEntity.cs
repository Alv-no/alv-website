using Azure;
using Azure.Data.Tables;

namespace INT01_Flowcase_UserProfile.Models.TableEntities
{
    public class EmployeeEntity : ITableEntity
    {
        public string PartitionKey { get; set; } = "ansatte";
        public required string RowKey { get; set; }

        public required string Fornavn { get; set; }
        public required string Etternavn { get; set; }
        public required string Slug { get; set; }
        public required string CV { get; set; }
        public string? Telefonnummer { get; set; }
        public string? Epost { get; set; }
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }
    }
}
