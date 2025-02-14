using System.Net.Http.Headers;
using Azure.Data.Tables;
using Azure.Storage.Blobs;
using INT01_Flowcase_UserProfile.Clients;
using INT01_Flowcase_UserProfile.Handlers;
using INT01_Flowcase_UserProfile.Models.Configuration;
using INT01_Flowcase_UserProfile.Utils;
using Microsoft.Extensions.Azure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Polly;
using Polly.Extensions.Http;

namespace INT01_Flowcase_UserProfile.Extensions
{
    public static class HostBuilderExtension
    {
        public static void RegisterHandlers(this IServiceCollection services)
        {
            services.AddScoped<UserProfileHandler>();
        }

        public static void RegisterFlowcaseClient(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddConfiguration<FlowcaseConfiguration>(configuration, FlowcaseConfiguration.SectionName, out var flowcaseConfig);
            services.AddHttpClient<IFlowcaseClient, FlowcaseClient>(options =>
            {
                options.BaseAddress = new Uri(flowcaseConfig.BaseUrl);
                options.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", flowcaseConfig.APIKey);
            })
                .AddPolicyHandler(GetRetryPolicy())
                .AddPolicyHandler(GetCircuitBreakerPolicy());
        }

        public static void RegisterBlobContainerClient(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddConfiguration<StorageConfiguration>(configuration, StorageConfiguration.SectionName, out var storageConfig);
            services.AddAzureClients(options =>
            {
                options.UseCredential(CredentialUtil.DefaultAzureCredential);

                options.AddBlobServiceClient(new Uri(storageConfig.BlobEndpoint));
                options.AddClient<BlobContainerClient, BlobClientOptions>((_, _, provider) =>
                    provider.GetService<BlobServiceClient>()!.GetBlobContainerClient(storageConfig.Container));

                options.AddTableServiceClient(new Uri(storageConfig.TableEndpoint));

                options.AddClient<TableClient, TableClientOptions>((_, _, provider) =>
                    provider.GetService<TableServiceClient>()!.GetTableClient("ansatte")).WithName("employees-table");

                options.AddClient<TableClient, TableClientOptions>((_, _, provider) =>
                    provider.GetService<TableServiceClient>()!.GetTableClient("sammendrag")).WithName("summaries-table");

                options.AddClient<TableClient, TableClientOptions>((_, _, provider) =>
                    provider.GetService<TableServiceClient>()!.GetTableClient("kursogsertifiseringer")).WithName("courses-table");

                options.AddClient<TableClient, TableClientOptions>((_, _, provider) =>
                    provider.GetService<TableServiceClient>()!.GetTableClient("prosjekthistorikk")).WithName("projects-table");

                options.AddClient<TableClient, TableClientOptions>((_, _, provider) =>
                    provider.GetService<TableServiceClient>()!.GetTableClient("kompetanse")).WithName("skills-table");
            });

            services.AddScoped<StorageClient>();
        }

        public static void AddLoggingFilters(this ILoggingBuilder logging)
        {
            logging.AddFilter("System.Net.Http", LogLevel.Error);
            logging.AddFilter("Azure.Core", LogLevel.Error);
            logging.AddFilter("Azure.Storage.Blobs", LogLevel.Error);
            logging.AddFilter("Azure.Identity", LogLevel.Error);
        }

        public static void RemoveDefaultApplicationInsightsFilter(this ILoggingBuilder logging)
        {
            logging.Services.Configure<LoggerFilterOptions>(options =>
            {
                var defaultRule = options.Rules.FirstOrDefault(rule =>
                    rule.ProviderName == "Microsoft.Extensions.Logging.ApplicationInsights.ApplicationInsightsLoggerProvider");

                if (defaultRule is not null)
                    options.Rules.Remove(defaultRule);
            });
        }

        private static IAsyncPolicy<HttpResponseMessage> GetRetryPolicy()
        {
            return HttpPolicyExtensions
                .HandleTransientHttpError()
                .OrResult(msg => msg.StatusCode == System.Net.HttpStatusCode.NotFound)
                .WaitAndRetryAsync(3, retryAttempt => TimeSpan.FromSeconds(Math.Pow(2, retryAttempt)));
        }

        private static IAsyncPolicy<HttpResponseMessage> GetCircuitBreakerPolicy()
        {
            return HttpPolicyExtensions
                .HandleTransientHttpError()
                .CircuitBreakerAsync(5, TimeSpan.FromSeconds(30));
        }

        private static void AddConfiguration<T>(this IServiceCollection services, IConfiguration configuration, string sectionName, out T configOut) where T : class
        {
            var config = configuration.GetSection(sectionName).Get<T>();
            if (config is null) throw new ArgumentNullException(nameof(config));

            configOut = config;
            services.AddScoped(provider => config);
        }

        private static void AddConfiguration<T>(this IServiceCollection services, IConfiguration configuration, string sectionName) where T : class
        {
            var config = configuration.GetSection(sectionName).Get<T>();
            if (config is null) throw new ArgumentNullException(nameof(config));
            services.AddScoped(provider => config);
        }
    }
}
