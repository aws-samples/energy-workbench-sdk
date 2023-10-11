import axios from "axios";

import { BaseClient } from "../base";
import {
  GroupRequest,
  GroupResponse
} from "./group.models";

/**
 * Client for accessing OSDU group API.
 */
export class GroupClient extends BaseClient {
  protected baseURL: string;
  public cognitoRegion: string;
  /**
   * Create GroupClient.
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
  async query(request?: GroupRequest): Promise<GroupResponse> {
    const auth = await this.getAuthToken();

    const url = `${this.baseURL}/api/entitlements/v2/groups`;

    const config = {
      headers: {
        Authorization: `Bearer ${auth.clientSecret}`,
        "Content-Type": "application/json",
        "data-partition-id": "osdu",
      },
    };

    const { data } = await axios.get(url, config);

    return data;
  }
}
