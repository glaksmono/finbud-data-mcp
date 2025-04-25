// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trades extends APIResource {
  /**
   * Retrieves comprehensive, tick-level trade data for a specified options ticker
   * within a defined time range. Includes price, size, exchange, conditions, and
   * precise timestamps. Max 50,000 results per request.
   */
  retrieve(
    optionsTicker: string,
    query: TradeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TradeRetrieveResponse> {
    return this._client.get(path`/options/trades/${optionsTicker}`, { query, ...options });
  }

  /**
   * Retrieves the most recent trade for a specified options ticker symbol.
   */
  retrieveLast(optionsTicker: string, options?: RequestOptions): APIPromise<TradeRetrieveLastResponse> {
    return this._client.get(path`/options/trades/last/${optionsTicker}`, options);
  }
}

export interface TradeRetrieveResponse {
  /**
   * URL for the next page of results.
   */
  'next-url'?: string | null;

  'request-id'?: string;

  results?: Array<TradeRetrieveResponse.Result>;

  status?: string;
}

export namespace TradeRetrieveResponse {
  export interface Result {
    /**
     * List of condition codes.
     */
    conditions?: Array<number>;

    /**
     * Trade correction indicator.
     */
    correction?: number;

    /**
     * Exchange ID.
     */
    exchange?: number;

    /**
     * Participant/Exchange Unix Timestamp (nanoseconds).
     */
    'participant-timestamp'?: number;

    /**
     * Trade price.
     */
    price?: number;

    /**
     * SIP Unix Timestamp (nanoseconds).
     */
    'sip-timestamp'?: number;

    /**
     * Trade size (volume).
     */
    size?: number;
  }
}

export interface TradeRetrieveLastResponse {
  'request-id'?: string;

  results?: TradeRetrieveLastResponse.Results;

  status?: string;
}

export namespace TradeRetrieveLastResponse {
  export interface Results {
    /**
     * List of condition codes.
     */
    conditions?: Array<number>;

    /**
     * Exchange ID.
     */
    exchange?: number;

    /**
     * Participant/Exchange Unix Timestamp (nanoseconds).
     */
    'participant-timestamp'?: number;

    /**
     * Trade price.
     */
    price?: number;

    /**
     * SIP Unix Timestamp (nanoseconds).
     */
    'sip-timestamp'?: number;

    /**
     * Trade size (volume).
     */
    size?: number;

    /**
     * The options ticker symbol requested.
     */
    ticker?: string;
  }
}

export interface TradeRetrieveParams {
  /**
   * Limit the number of results. Max 50,000.
   */
  limit?: number;

  /**
   * Order results (asc/desc).
   */
  order?: 'asc' | 'desc';

  /**
   * Sort field (defaults to 'timestamp').
   */
  sort?: string;

  timestamp?: TradeRetrieveParams.Timestamp;
}

export namespace TradeRetrieveParams {
  export interface Timestamp {
    /**
     * Timestamp greater than.
     */
    gt?: string;

    /**
     * Timestamp greater than or equal to.
     */
    gte?: string;

    /**
     * Timestamp less than.
     */
    lt?: string;

    /**
     * Timestamp less than or equal to.
     */
    lte?: string;
  }
}

export declare namespace Trades {
  export {
    type TradeRetrieveResponse as TradeRetrieveResponse,
    type TradeRetrieveLastResponse as TradeRetrieveLastResponse,
    type TradeRetrieveParams as TradeRetrieveParams,
  };
}
