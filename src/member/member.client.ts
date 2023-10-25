import axios from "axios";

import { BaseClient } from "../base";
import {
  MemberRequest,
  MemberResponse,
  AddMember
} from "./member.models";
import {MemberList} from "./member.types";

/**
 * Class to list members for a group
 */
export class Members extends BaseClient {
  protected baseURL: string;
  public cognitoRegion: string;
  /**
   * Query members for a given group
   *
   * @param baseURL - Base URL for the OSDU instance in use
   * @param cognitoRegion - AWS region for the cognito
   */
  constructor(baseURL: string, cognitoRegion: string) {
    super(baseURL, cognitoRegion);
  }

  /**
   * query members for a group
   *
   * @returns Promise resolving to members
   */
  async query(groupName: string): Promise<Members> {
    const auth = await this.getAuthToken();

    const url = `${this.baseURL}/api/entitlements/v2/groups/${groupName}/members`;

    const config = {
      headers: {
        Authorization: `Bearer ${auth.clientSecret}`,
        "Content-Type": "application/json",
        "data-partition-id": "osdu",
      },
    };
    try {
      const { data } = await axios.get(url, config);
      return data;
    } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
        }
        throw error;
    }
  }
}
