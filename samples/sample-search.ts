import { Search, AuthService, getAuthToken } from "./index";

const clientId = "teddy";
const userName = "benny";
const password = "lover";
const baseURL = "www.url.com";
// const redirectURL = "optional";

// Optionally gets a token using Cognito authorization
const token = await getAuthToken(clientId, userName, password);

// Authorizes to the API
const auth = new AuthService(baseURL, clientId, token);

// Declares a search client.
const search = new Search.SearchClient(auth, baseURL);

// Queries the search client
const query = search.query({
  kind: "osdu:wks:work-product-component--WellLog:*",
});

console.log(query);
