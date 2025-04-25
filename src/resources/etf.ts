// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Etf extends APIResource {
  /**
   * Fetches the underlying holdings for a specific Exchange Traded Fund (ETF)
   * symbol.
   */
  retrieveHoldings(
    symbol: string,
    query: EtfRetrieveHoldingsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EtfRetrieveHoldingsResponse> {
    return this._client.get(path`/etf/holdings/${symbol}`, { query, ...options });
  }
}

export type EtfRetrieveHoldingsResponse = Array<EtfRetrieveHoldingsResponse.EtfRetrieveHoldingsResponseItem>;

export namespace EtfRetrieveHoldingsResponse {
  export interface EtfRetrieveHoldingsResponseItem {
    asset?: string;

    cusip?: string;

    date?: string;

    isin?: string;

    'market-value-percentage'?: number;

    sedol?: string | null;

    'shares-number'?: number;

    symbol?: string;

    'weight-percentage'?: number;
  }
}

export interface EtfRetrieveHoldingsParams {
  /**
   * Retrieve holdings for a specific date (YYYY-MM-DD). Defaults to the latest
   * available data.
   */
  date?: string;
}

export declare namespace Etf {
  export {
    type EtfRetrieveHoldingsResponse as EtfRetrieveHoldingsResponse,
    type EtfRetrieveHoldingsParams as EtfRetrieveHoldingsParams,
  };
}
