using INT01_Flowcase_UserProfile.Clients;
using INT01_Flowcase_UserProfile.Handlers;
using INT01_Flowcase_UserProfile.Models.Flowcase;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace INT01_Flowcase_UserProfile.Functions
{
    public class INT01_Download_CV
    {
        private readonly ILogger<INT01_Download_CV> _logger;
        private readonly IFlowcaseClient _flowcaseClient;
        private readonly UserProfileHandler _handler;
        public INT01_Download_CV
        (
            ILogger<INT01_Download_CV> logger,
            IFlowcaseClient flowcaseClient,
            UserProfileHandler handler
        )
        {
            _logger = logger;
            _flowcaseClient = flowcaseClient;
            _handler = handler;
        }

        [Function(nameof(INT01_Download_CV))]
        public async Task Run([TimerTrigger("%TimerTrigger%")] TimerInfo myTimer)
        {
            using (_logger.BeginScope("{INTId}", "INT01"))
            {
                try
                {
                    List<User> getUsers = await _flowcaseClient.SearchUsers(); //get list of user profiles from Flowcase
                    _logger.LogInformation("Retrieved {countUsers} users from Flowcase.", getUsers.Count);

                    var chunkUsers = getUsers.Chunk(10);
                    foreach (var chunk in chunkUsers)
                    {
                        foreach (User user in chunk)
                        {
                            await _handler.HandleCVUpload(user);
                        }

                        await Task.Delay(60000); //workaround for rate-limit set by Flowcase API for this operation (max 10 request per minute)
                    }

                    _logger.LogInformation("Successfully updated {countUsers} user profiles.", getUsers.Count);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, ex.Message);
                    throw;
                }
            }
        }
    }
}
