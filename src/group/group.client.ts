import axios from "axios";

import { BaseClient } from "../base";
import {
  GroupRequest,
  GroupResponse,
  AddGroup
} from "./group.models";

/**
 * Class to list all groups
 */
export class GroupList extends BaseClient {
  protected baseURL: string;
  public cognitoRegion: string;
  /**
   * Query Groups
   *
   * @param baseURL - Base URL for the OSDU instance in use
   * @param cognitoRegion - AWS region for the cognito
   */
  constructor(baseURL: string, cognitoRegion: string) {
    super(baseURL, cognitoRegion);
  }

  /**
   * query groups
   *
   * @returns Promise resolving to group results
   */
  async query(): Promise<GroupResponse> {
    const auth = await this.getAuthToken();

    const url = `${this.baseURL}/api/entitlements/v2/groups`;

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

/**
 * Class to add a new group
 */
export class GroupAdd extends BaseClient {
  protected baseURL: string;
  public cognitoRegion: string;
  /**
   * Create Group
   *
   * @param baseURL - Base URL for the OSDU instance in use
   * @param cognitoRegion - AWS region for the cognito
   */
  constructor(baseURL: string, cognitoRegion: string) {
    super(baseURL, cognitoRegion);
  }

  /**
   * add group
   *
   * @param groupData - The data for the group to add.
   * @returns Promise with adding group result
   */
  async add(groupData: string): Promise<GroupResponse> {
    const auth = await this.getAuthToken();

    const url = `${this.baseURL}/api/entitlements/v2/groups`;

    const config = {
      headers: {
        Authorization: `Bearer ${auth.clientSecret}`,
        "Content-Type": "application/json",
        "data-partition-id": "osdu",
      },
    };

    const { data } = await axios.post(url, groupData, config);

    return data;
  }
}
