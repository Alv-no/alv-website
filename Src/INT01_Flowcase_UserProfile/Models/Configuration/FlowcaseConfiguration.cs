namespace INT01_Flowcase_UserProfile.Models.Configuration
{
    public class FlowcaseConfiguration
    {
        public const string SectionName = "Flowcase";
        public required string BaseUrl { get; set; }
        public required string APIKey { get; set; }
    }
}
