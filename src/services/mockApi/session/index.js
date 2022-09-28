import MockAdapter from 'axios-mock-adapter';

/** Adds mock requests to axios
 * @param {axios} axios instance
 * @param {string} API URL, e.g. '/session'
 * @returns {axios}
 */
const mockAdapter = (axios, apiUrl) => {
  const mockAdapter = new MockAdapter(axios);

  mockAdapter
    // Mock failed login at first request
    .onPost(apiUrl)
    .replyOnce((_) => [
      401, // HTTP 401 Unathorized
      {
        message: 'Unauthorized',
      },
    ])
    // Mock successful login
    .onPost(apiUrl)
    .reply((config) => [
      200, // HTTP 200 OK
      {
        jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        userData: {
          id: 1234,
          userName: 'Igor',
          email: 'Igor@hossegor.fr',
          address: 'Rue de la vague',
          city: 'Hossegor',
          postalCode: '40150',
          phoneNumber: '0612345678',
          sendTaskEmails: true,
          sendWeeklyEmails: true,
          updatedAt: Date.now(),
        },
      },
    ])
    // Mock log out request
    .onDelete(apiUrl)
    .reply((_) => [
      204, // HTTP 204 No Content
      {
        message: 'Unauthorized',
      },
    ]);

  return axios;
};

export default useMockAdapter;
