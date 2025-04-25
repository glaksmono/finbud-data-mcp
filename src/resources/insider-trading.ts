// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InsiderTrading extends APIResource {
  /**
   * Fetches insider trading data for a specific company stock symbol.
   */
  retrieve(
    symbol: string,
    query: InsiderTradingRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InsiderTradingRetrieveResponse> {
    return this._client.get(path`/insider-trading/${symbol}`, { query, ...options });
  }
}

export type InsiderTradingRetrieveResponse =
  Array<InsiderTradingRetrieveResponse.InsiderTradingRetrieveResponseItem>;

export namespace InsiderTradingRetrieveResponse {
  export interface InsiderTradingRetrieveResponseItem {
    /**
     * Indicates acquisition (A) or disposition (D).
     */
    'acquistion-or-disposition'?: string;

    'company-cik'?: string;

    'filing-date'?: string;

    'form-type'?: string;

    link?: string;

    price?: number | null;

    'reporting-cik'?: string;

    'reporting-name'?: string;

    'securities-owned'?: number;

    'securities-transacted'?: number;

    'security-name'?: string;

    symbol?: string;

    'transaction-date'?: string;

    'transaction-type'?: string;

    'type-of-owner'?: string;
  }
}

export interface InsiderTradingRetrieveParams {
  /**
   * The maximum number of records to return (e.g., 100).
   */
  limit?: number;

  /**
   * The page number for pagination.
   */
  page?: number;
}

export declare namespace InsiderTrading {
  export {
    type InsiderTradingRetrieveResponse as InsiderTradingRetrieveResponse,
    type InsiderTradingRetrieveParams as InsiderTradingRetrieveParams,
  };
}
