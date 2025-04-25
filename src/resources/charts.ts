// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Charts extends APIResource {
  /**
   * Fetches historical intraday chart data for a specific company stock symbol and
   * timeframe. Optional query parameters allow specifying a date range ('from',
   * 'to') and requesting extended hours data ('extended').
   */
  retrieveHistorical(
    timeframe: '1min' | '5min' | '15min' | '30min' | '1hour' | '4hour',
    params: ChartRetrieveHistoricalParams,
    options?: RequestOptions,
  ): APIPromise<ChartRetrieveHistoricalResponse> {
    const { symbol, ...query } = params;
    return this._client.get(path`/charts/${symbol}/${timeframe}`, { query, ...options });
  }
}

export type ChartRetrieveHistoricalResponse =
  Array<ChartRetrieveHistoricalResponse.ChartRetrieveHistoricalResponseItem>;

export namespace ChartRetrieveHistoricalResponse {
  export interface ChartRetrieveHistoricalResponseItem {
    close?: number;

    date?: string;

    high?: number;

    low?: number;

    open?: number;

    volume?: number;
  }
}

export interface ChartRetrieveHistoricalParams {
  /**
   * Path param: The stock symbol of the company (e.g., AAPL). **Notation Guide:**
   *
   * - U.S. Stocks: All caps (e.g. AAPL)
   * - Intl. Stocks: All caps + "." + exchange (e.g. MC.PA, 9988.HK)
   * - Crypto: Ticker + "USD" (e.g. BTCUSD, DOGEUSD)
   * - Futures: Append "=F", all caps (e.g. ES=F, GC=F)
   */
  symbol: string;

  /**
   * Query param: Include extended trading hours data (true/false). Defaults to
   * false.
   */
  extended?: boolean;

  /**
   * Query param: The starting date for the historical data (YYYY-MM-DD).
   */
  from?: string;

  /**
   * Query param: The ending date for the historical data (YYYY-MM-DD).
   */
  to?: string;
}

export declare namespace Charts {
  export {
    type ChartRetrieveHistoricalResponse as ChartRetrieveHistoricalResponse,
    type ChartRetrieveHistoricalParams as ChartRetrieveHistoricalParams,
  };
}
