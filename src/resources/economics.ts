// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Economics extends APIResource {
  /**
   * Fetches a calendar of upcoming or past economic events (e.g., CPI release, FOMC
   * meeting) for a specified date range.
   */
  getCalendar(
    query: EconomicGetCalendarParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EconomicGetCalendarResponse> {
    return this._client.get('/economics/calendar', { query, ...options });
  }

  /**
   * Fetches historical data for a specific economic indicator (e.g., real GDP, CPI,
   * unemployment rate). The indicator name should be provided in kebab-case (e.g.,
   * 'real-gdp').
   */
  getIndicatorData(
    name: string,
    query: EconomicGetIndicatorDataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EconomicGetIndicatorDataResponse> {
    return this._client.get(path`/economics/indicators/${name}`, { query, ...options });
  }
}

export type EconomicGetCalendarResponse = Array<EconomicGetCalendarResponse.EconomicGetCalendarResponseItem>;

export namespace EconomicGetCalendarResponse {
  export interface EconomicGetCalendarResponseItem {
    actual?: number | null;

    change?: number | null;

    'change-percentage'?: number | null;

    country?: string;

    date?: string;

    estimate?: number | null;

    event?: string;

    /**
     * Estimated market impact level (e.g., Low, Medium, High).
     */
    impact?: string;

    previous?: number | null;
  }
}

export type EconomicGetIndicatorDataResponse =
  Array<EconomicGetIndicatorDataResponse.EconomicGetIndicatorDataResponseItem>;

export namespace EconomicGetIndicatorDataResponse {
  export interface EconomicGetIndicatorDataResponseItem {
    date?: string;

    value?: number;
  }
}

export interface EconomicGetCalendarParams {
  /**
   * The starting date for the calendar (YYYY-MM-DD). Defaults to the provider's
   * default start date.
   */
  from?: string;

  /**
   * The ending date for the calendar (YYYY-MM-DD). Defaults to the provider's
   * default end date.
   */
  to?: string;
}

export interface EconomicGetIndicatorDataParams {
  /**
   * The starting date for the historical data (YYYY-MM-DD).
   */
  from?: string;

  /**
   * The ending date for the historical data (YYYY-MM-DD).
   */
  to?: string;
}

export declare namespace Economics {
  export {
    type EconomicGetCalendarResponse as EconomicGetCalendarResponse,
    type EconomicGetIndicatorDataResponse as EconomicGetIndicatorDataResponse,
    type EconomicGetCalendarParams as EconomicGetCalendarParams,
    type EconomicGetIndicatorDataParams as EconomicGetIndicatorDataParams,
  };
}
