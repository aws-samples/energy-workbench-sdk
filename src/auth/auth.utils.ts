import {
  CognitoIdentityProviderClient,
  AuthFlowType,
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export async function getAuthToken(
  clientId: string,
  username: string,
  password: string
): Promise<string> {
  const client = new CognitoIdentityProviderClient({ region: "us-east-1" });

  const command = new InitiateAuthCommand({
    AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
    ClientId: clientId,
  });

  const response = await client.send(command);

  return response.AuthenticationResult!.AccessToken;
}
