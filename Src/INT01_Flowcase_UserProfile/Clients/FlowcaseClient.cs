using System.Text;
using System.Text.Json;
using INT01_Flowcase_UserProfile.Models.Flowcase;

namespace INT01_Flowcase_UserProfile.Clients
{
    public class FlowcaseClient : IFlowcaseClient
    {
        private readonly HttpClient _httpClient;

        public FlowcaseClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<User>> SearchUsers()
        {
            string getUsers = await REST(HttpMethod.Get, "v2/users/search?deactivated=false&size=500");
            return JsonSerializer.Deserialize<List<User>>(getUsers) ?? new List<User>();
        }

        public async Task<byte[]> DownloadUserCV(string userId, string cvId)
        {
            byte[] getUserCV = await RESTDownload($"v1/cvs/download/{userId}/{cvId}/no/pdf");
            return getUserCV;
        }

        public async Task<CV?> GetUserCV(string userId, string cvId)
        {
            string getUserCV = await REST(HttpMethod.Get, $"v3/cvs/{userId}/{cvId}");
            return JsonSerializer.Deserialize<CV>(getUserCV) ?? null;
        }


        private async Task<string> REST(HttpMethod httpMethod, string uri, string? body = null)
        {
            HttpRequestMessage request = new HttpRequestMessage(httpMethod, uri);
            if (httpMethod != HttpMethod.Get && httpMethod != HttpMethod.Delete && !string.IsNullOrEmpty(body))
                request.Content = new StringContent(body, Encoding.UTF8, "application/json");

            HttpResponseMessage response = await _httpClient.SendAsync(request);
            var responseContent = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
                throw new Exception(responseContent);

            return responseContent;
        }

        private async Task<byte[]> RESTDownload(string uri)
        {
            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, uri);
            HttpResponseMessage response = await _httpClient.SendAsync(request);
            var responseContent = await response.Content.ReadAsByteArrayAsync();

            if (!response.IsSuccessStatusCode)
                throw new Exception(Encoding.UTF8.GetString(responseContent));

            return responseContent;
        }
    }
}
