using INT01_Flowcase_UserProfile.Clients;
using INT01_Flowcase_UserProfile.Handlers;
using INT01_Flowcase_UserProfile.Models.Flowcase;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace INT01_Flowcase_UserProfile.Functions
{
    public class INT01_Get_CV_Details
    {
        private readonly ILogger<INT01_Get_CV_Details> _logger;
        private readonly IFlowcaseClient _flowcaseClient;
        private readonly UserProfileHandler _handler;
        public INT01_Get_CV_Details
        (
            ILogger<INT01_Get_CV_Details> logger,
            IFlowcaseClient flowcaseClient,
            UserProfileHandler handler
        )
        {
            _logger = logger;
            _flowcaseClient = flowcaseClient;
            _handler = handler;
        }

        [Function(nameof(INT01_Get_CV_Details))]
        public async Task Run([TimerTrigger("%TimerTrigger%")] TimerInfo myTimer)
        {
            using (_logger.BeginScope("{INTId}", "INT01"))
            {
                try
                {
                    List<User> getUsers = await _flowcaseClient.SearchUsers(); //get list of user profiles from Flowcase
                    _logger.LogInformation("Retrieved {countUsers} users from Flowcase.", getUsers.Count);

                    foreach (User user in getUsers)
                    {
                        await _handler.UpdateUserInformation(user);
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
