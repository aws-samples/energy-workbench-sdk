import { OsduSearch } from "../src";
import { AuthService, getAuthToken } from "../src";

const clientId = "teddy";
const userName = "benny";
const password = "lover";
const baseURL = "www.url.com";
// const redirectURL = "optional";

const token = await getAuthToken(clientId, userName, password);

const auth = new AuthService(baseURL, clientId, token);

const client = new OsduSearch.OsduSearchClient(auth, baseURL);

const query = client.query({
  kind: "osdu:wks:work-product-component--WellLog:*",
});

console.log(query);
