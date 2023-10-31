import {
  CognitoIdentityProviderClient,
  AdminCreateUserCommand,
  AdminSetUserPasswordCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { exit } from "process";

/**
 * Class to add a cognito user. The AWS account should be defined in environment variables
 */
export class AddUser {
  private cognitoClient: CognitoIdentityProviderClient;
  protected poolId: string;
  /**
   * Add cognito user
   *
   * @param poolId - cognito pool id to add the user
   */
  constructor(poolId: string) {
    this.cognitoClient = new CognitoIdentityProviderClient({});
    this.poolId = poolId;
  }

  /**
   * Add user to cognito pool id
   *
   * @returns Promise adding cognito user
   */
  async add(userName: string, userPassword: string): Promise<void> {
    const params = {
      UserPoolId: this.poolId,
      Username: userName,
      TemporaryPassword: userPassword,
    };
    try {
      const responseAdd = await this.cognitoClient.send(
        new AdminCreateUserCommand(params)
      );
      console.log(`User ${userName} added successfully!`, responseAdd);
    } catch (error) {
      console.error("Error adding user:", error);
      exit();
    }
    const paramsPerm = {
      UserPoolId: this.poolId,
      Username: userName,
      Password: userPassword,
      Permanent: true,
    };
    try {
      const responsePass = await this.cognitoClient.send(
        new AdminSetUserPasswordCommand(paramsPerm)
      );
      console.log(`User ${userName} password set successfully!`, responsePass);
    } catch (error) {
      console.error("Error setting user password:", error);
      exit();
    }
  }
}
