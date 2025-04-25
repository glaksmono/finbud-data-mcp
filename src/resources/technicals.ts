// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Technicals extends APIResource {
  /**
   * Fetches historical technical indicator data for a specific stock symbol,
   * indicator type, and time interval. Supports various indicators like SMA, EMA,
   * WMA, DEMA, TEMA, Williams %R, RSI, ADX, and Standard Deviation. Specific
   * required parameters depend on the chosen indicator (e.g., 'period' is required
   * for most).
   */
  retrieveIndicatorData(
    interval: '1min' | '5min' | '15min' | '30min' | '1hour' | '4hour' | 'daily',
    params: TechnicalRetrieveIndicatorDataParams,
    options?: RequestOptions,
  ): APIPromise<TechnicalRetrieveIndicatorDataResponse> {
    const { indicator, symbol, ...query } = params;
    return this._client.get(path`/technicals/${indicator}/${symbol}/${interval}`, { query, ...options });
  }
}

export type TechnicalRetrieveIndicatorDataResponse =
  Array<TechnicalRetrieveIndicatorDataResponse.TechnicalRetrieveIndicatorDataResponseItem>;

export namespace TechnicalRetrieveIndicatorDataResponse {
  export interface TechnicalRetrieveIndicatorDataResponseItem {
    close?: number;

    date?: string;

    high?: number;

    low?: number;

    open?: number;

    rsi?: number;

    sma?: number;

    volume?: number;
  }
}

export interface TechnicalRetrieveIndicatorDataParams {
  /**
   * Path param: The technical indicator to calculate. Allowed values: `sma`, `ema`,
   * `wma`, `dema`, `tema`, `williams`, `rsi`, `adx`, `standard-deviation`.
   */
  indicator: 'sma' | 'ema' | 'wma' | 'dema' | 'tema' | 'williams' | 'rsi' | 'adx' | 'standard-deviation';

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
   * Query param: The time period (number of data points) to use for calculating the
   * indicator (e.g., 10 for a 10-day SMA). **Required for all indicators except
   * Standard Deviation.**
   */
  period: number;

  /**
   * Query param: The starting date for the historical data (YYYY-MM-DD).
   */
  from?: string;

  /**
   * Query param: The ending date for the historical data (YYYY-MM-DD).
   */
  to?: string;
}

export declare namespace Technicals {
  export {
    type TechnicalRetrieveIndicatorDataResponse as TechnicalRetrieveIndicatorDataResponse,
    type TechnicalRetrieveIndicatorDataParams as TechnicalRetrieveIndicatorDataParams,
  };
}
