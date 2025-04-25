// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Earnings extends APIResource {
  /**
   * Fetches the earnings calendar for a specified date range or the next few days.
   */
  getCalendar(
    query: EarningGetCalendarParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EarningGetCalendarResponse> {
    return this._client.get('/earnings/calendar', { query, ...options });
  }

  /**
   * Fetches the earnings call transcripts for a given company stock symbol,
   * optionally filtered by year or quarter.
   */
  getTranscripts(
    symbol: string,
    query: EarningGetTranscriptsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EarningGetTranscriptsResponse> {
    return this._client.get(path`/earnings/transcripts/${symbol}`, { query, ...options });
  }
}

export type EarningGetCalendarResponse = Array<EarningGetCalendarResponse.EarningGetCalendarResponseItem>;

export namespace EarningGetCalendarResponse {
  export interface EarningGetCalendarResponseItem {
    date?: string;

    eps?: number | null;

    'eps-estimated'?: number | null;

    'fiscal-date-ending'?: string;

    revenue?: number | null;

    'revenue-estimated'?: number | null;

    symbol?: string;

    /**
     * Time of the earnings announcement (e.g., "amc" - after market close, "bmo" -
     * before market open).
     */
    time?: string;

    'updated-from-date'?: string;
  }
}

export type EarningGetTranscriptsResponse =
  Array<EarningGetTranscriptsResponse.EarningGetTranscriptsResponseItem>;

export namespace EarningGetTranscriptsResponse {
  export interface EarningGetTranscriptsResponseItem {
    /**
     * The full content of the earnings call transcript.
     */
    content?: string;

    date?: string;

    quarter?: number;

    symbol?: string;

    year?: number;
  }
}

export interface EarningGetCalendarParams {
  /**
   * The starting date for the calendar (YYYY-MM-DD). Defaults to today if 'to' is
   * provided, otherwise fetches the next few days.
   */
  from?: string;

  /**
   * The ending date for the calendar (YYYY-MM-DD). Defaults to 90 days from 'from'
   * if provided, otherwise fetches the next few days.
   */
  to?: string;
}

export interface EarningGetTranscriptsParams {
  /**
   * Filter transcripts by a specific quarter (1, 2, 3, or 4). Requires 'year' to be
   * specified.
   */
  quarter?: 1 | 2 | 3 | 4;

  /**
   * Filter transcripts by a specific year.
   */
  year?: number;
}

export declare namespace Earnings {
  export {
    type EarningGetCalendarResponse as EarningGetCalendarResponse,
    type EarningGetTranscriptsResponse as EarningGetTranscriptsResponse,
    type EarningGetCalendarParams as EarningGetCalendarParams,
    type EarningGetTranscriptsParams as EarningGetTranscriptsParams,
  };
}
