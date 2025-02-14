using INT01_Flowcase_UserProfile.Models.Flowcase;

namespace INT01_Flowcase_UserProfile.Clients
{
    public interface IFlowcaseClient
    {
        /// <summary>
        /// Retrieve basic information about each user
        /// </summary>
        Task<List<User>> SearchUsers();

        /// <summary>
        /// Download rendered CVs (résumés) and Reference Projects (word/pdf) in a specified language, using a specified template.
        /// </summary>
        /// <param name="userId">user id</param>
        /// <param name="cvId">default cv id of user</param>
        /// <returns></returns>
        Task<byte[]> DownloadUserCV(string userId, string cvId);

        /// <summary>
        /// Get CV as detailed JSON object
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="cvId"></param>
        /// <returns></returns>
        Task<CV?> GetUserCV(string userId, string cvId);
    }
}
