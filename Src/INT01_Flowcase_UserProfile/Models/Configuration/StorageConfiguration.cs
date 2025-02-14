namespace INT01_Flowcase_UserProfile.Models.Configuration
{
    public class StorageConfiguration
    {
        public const string SectionName = "Storage";
        public required string BlobEndpoint { get; set; }
        public required string TableEndpoint { get; set; }
        public required string Container { get; set; }
        public required string BlobSAS { get; set; }
    }
}
