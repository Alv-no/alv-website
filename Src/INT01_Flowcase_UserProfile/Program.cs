using INT01_Flowcase_UserProfile.Extensions;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var host = new HostBuilder()
    .ConfigureFunctionsWebApplication()
    .ConfigureServices((context, services) =>
    {
        services.AddApplicationInsightsTelemetryWorkerService(options =>
        {
            options.EnableDependencyTrackingTelemetryModule = false;
        });
        services.ConfigureFunctionsApplicationInsights();
        services.RegisterFlowcaseClient(context.Configuration);
        services.RegisterBlobContainerClient(context.Configuration);
        services.RegisterHandlers();
    })
    .ConfigureLogging(options =>
    {
        options.RemoveDefaultApplicationInsightsFilter();
        options.AddLoggingFilters();
    })
    .Build();

host.Run();