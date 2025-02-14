using Azure.Identity;

namespace INT01_Flowcase_UserProfile.Utils
{
    public static class CredentialUtil
    {
        /// <summary>
        /// Enable the type of credential that will be used
        /// </summary>
        public static DefaultAzureCredential DefaultAzureCredential =>
            new DefaultAzureCredential(new DefaultAzureCredentialOptions
            {
                ExcludeEnvironmentCredential = true,
                ExcludeInteractiveBrowserCredential = true,
                ExcludeAzurePowerShellCredential = true,
                ExcludeSharedTokenCacheCredential = true,
                ExcludeAzureCliCredential = false,
#if DEBUG // When debugging locally, enable the Visual Studio Code/IDE credentials and disable Managed Identity
                ExcludeVisualStudioCodeCredential = false,
                ExcludeVisualStudioCredential = false,
                ExcludeManagedIdentityCredential = true
#else // If not debugging locally, exclude the Visual Studio Code/IDE credentials and enable Manage Identity
        ExcludeVisualStudioCodeCredential = true,
        ExcludeVisualStudioCredential = true,
        ExcludeManagedIdentityCredential = false
#endif
            });
    }
}
