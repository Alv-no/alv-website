using Azure;
using Azure.Data.Tables;

namespace INT01_Flowcase_UserProfile.Models.TableEntities
{
    public class SummaryEntity : ITableEntity
    {
        public string PartitionKey { get; set; } = "sammendrag";
        public required string RowKey { get; set; }
        public required string Slug { get; set; }
        public required string Navn { get; set; }
        public required string Sammendrag { get; set; }
        public DateTime Edited { get; set; } = DateTime.UtcNow;
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }
    }
}
