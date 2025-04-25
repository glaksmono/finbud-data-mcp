// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Overview extends APIResource {
  /**
   * Fetches a list of the stocks with the highest trading volume for the day.
   */
  listActive(options?: RequestOptions): APIPromise<OverviewListActiveResponse> {
    return this._client.get('/market/overview/active', options);
  }

  /**
   * Fetches a list of the stocks with the highest percentage gain for the day.
   */
  listGainers(options?: RequestOptions): APIPromise<OverviewListGainersResponse> {
    return this._client.get('/market/overview/gainers', options);
  }

  /**
   * Fetches a list of the stocks with the largest percentage loss for the day.
   */
  listLosers(options?: RequestOptions): APIPromise<OverviewListLosersResponse> {
    return this._client.get('/market/overview/losers', options);
  }
}

export type OverviewListActiveResponse = Array<OverviewListActiveResponse.OverviewListActiveResponseItem>;

export namespace OverviewListActiveResponse {
  export interface OverviewListActiveResponseItem {
    /**
     * The absolute price change.
     */
    change?: number;

    /**
     * The percentage change in price.
     */
    'changes-percentage'?: number;

    name?: string;

    /**
     * The current or closing price.
     */
    price?: number;

    symbol?: string;
  }
}

export type OverviewListGainersResponse = Array<OverviewListGainersResponse.OverviewListGainersResponseItem>;

export namespace OverviewListGainersResponse {
  export interface OverviewListGainersResponseItem {
    /**
     * The absolute price change.
     */
    change?: number;

    /**
     * The percentage change in price.
     */
    'changes-percentage'?: number;

    name?: string;

    /**
     * The current or closing price.
     */
    price?: number;

    symbol?: string;
  }
}

export type OverviewListLosersResponse = Array<OverviewListLosersResponse.OverviewListLosersResponseItem>;

export namespace OverviewListLosersResponse {
  export interface OverviewListLosersResponseItem {
    /**
     * The absolute price change (will be negative).
     */
    change?: number;

    /**
     * The percentage change in price (will be negative).
     */
    'changes-percentage'?: number;

    name?: string;

    /**
     * The current or closing price.
     */
    price?: number;

    symbol?: string;
  }
}

export declare namespace Overview {
  export {
    type OverviewListActiveResponse as OverviewListActiveResponse,
    type OverviewListGainersResponse as OverviewListGainersResponse,
    type OverviewListLosersResponse as OverviewListLosersResponse,
  };
}
