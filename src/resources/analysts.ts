// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Analysts extends APIResource {
  /**
   * Fetches analyst estimates (revenue, EPS) for a given company stock symbol.
   */
  retrieveEstimates(symbol: string, options?: RequestOptions): APIPromise<AnalystRetrieveEstimatesResponse> {
    return this._client.get(path`/analysts/estimates/${symbol}`, options);
  }

  /**
   * Fetches analyst price target data for a given company stock symbol.
   */
  retrievePriceTargets(
    symbol: string,
    options?: RequestOptions,
  ): APIPromise<AnalystRetrievePriceTargetsResponse> {
    return this._client.get(path`/analysts/price-targets/${symbol}`, options);
  }

  /**
   * Fetches analyst stock recommendations (buy, hold, sell ratings) for a given
   * company stock symbol.
   */
  retrieveRecommendations(
    symbol: string,
    options?: RequestOptions,
  ): APIPromise<AnalystRetrieveRecommendationsResponse> {
    return this._client.get(path`/analysts/recommendations/${symbol}`, options);
  }
}

export type AnalystRetrieveEstimatesResponse =
  Array<AnalystRetrieveEstimatesResponse.AnalystRetrieveEstimatesResponseItem>;

export namespace AnalystRetrieveEstimatesResponse {
  export interface AnalystRetrieveEstimatesResponseItem {
    date?: string;

    'estimated-ebit-avg'?: number;

    'estimated-ebit-high'?: number;

    'estimated-ebit-low'?: number;

    'estimated-ebitda-avg'?: number;

    'estimated-ebitda-high'?: number;

    'estimated-ebitda-low'?: number;

    'estimated-eps-avg'?: number;

    'estimated-eps-high'?: number;

    'estimated-eps-low'?: number;

    'estimated-net-income-avg'?: number;

    'estimated-net-income-high'?: number;

    'estimated-net-income-low'?: number;

    'estimated-revenue-avg'?: number;

    'estimated-revenue-high'?: number;

    'estimated-revenue-low'?: number;

    'estimated-sga-expense-avg'?: number;

    'estimated-sga-expense-high'?: number;

    'estimated-sga-expense-low'?: number;

    'number-analyst-estimated-revenue'?: number;

    'number-analysts-estimated-eps'?: number;

    symbol?: string;
  }
}

export type AnalystRetrievePriceTargetsResponse =
  Array<AnalystRetrievePriceTargetsResponse.AnalystRetrievePriceTargetsResponseItem>;

export namespace AnalystRetrievePriceTargetsResponse {
  export interface AnalystRetrievePriceTargetsResponseItem {
    'adj-price-target'?: number;

    'analyst-company'?: string;

    'analyst-name'?: string;

    'news-base-url'?: string;

    'news-publisher'?: string;

    'news-title'?: string;

    'news-url'?: string;

    'price-target'?: number;

    'price-when-posted'?: number;

    'published-date'?: string;

    rating?: string;

    symbol?: string;
  }
}

export type AnalystRetrieveRecommendationsResponse =
  Array<AnalystRetrieveRecommendationsResponse.AnalystRetrieveRecommendationsResponseItem>;

export namespace AnalystRetrieveRecommendationsResponse {
  export interface AnalystRetrieveRecommendationsResponseItem {
    'analyst-ratings-buy'?: number;

    'analyst-ratings-hold'?: number;

    'analyst-ratings-sell'?: number;

    'analyst-ratings-strong-buy'?: number;

    'analyst-ratings-strong-sell'?: number;

    date?: string;

    symbol?: string;
  }
}

export declare namespace Analysts {
  export {
    type AnalystRetrieveEstimatesResponse as AnalystRetrieveEstimatesResponse,
    type AnalystRetrievePriceTargetsResponse as AnalystRetrievePriceTargetsResponse,
    type AnalystRetrieveRecommendationsResponse as AnalystRetrieveRecommendationsResponse,
  };
}
