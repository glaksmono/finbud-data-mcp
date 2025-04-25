// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Search for various financial instruments including stocks, ETFs, forex, and
   * cryptocurrencies by name or symbol across different exchanges.
   */
  generalSearch(
    query: SearchGeneralSearchParams,
    options?: RequestOptions,
  ): APIPromise<SearchGeneralSearchResponse> {
    return this._client.get('/search/general', { query, ...options });
  }
}

export type SearchGeneralSearchResponse = Array<SearchGeneralSearchResponse.SearchGeneralSearchResponseItem>;

export namespace SearchGeneralSearchResponse {
  export interface SearchGeneralSearchResponseItem {
    /**
     * The currency the security is traded in.
     */
    currency: string;

    /**
     * The short name or symbol of the stock exchange.
     */
    exchangeShortName: string;

    /**
     * The name of the company or security.
     */
    name: string;

    /**
     * The full name of the stock exchange.
     */
    stockExchange: string;

    /**
     * The ticker symbol of the security.
     */
    symbol: string;
  }
}

export interface SearchGeneralSearchParams {
  /**
   * The search query string (e.g., company name or symbol like 'AA' or 'Apple').
   */
  query: string;

  /**
   * Filter results by a specific stock exchange (e.g., NASDAQ, NYSE, EURONEXT).
   */
  exchange?: string;

  /**
   * The maximum number of search results to return.
   */
  limit?: number;
}

export declare namespace Search {
  export {
    type SearchGeneralSearchResponse as SearchGeneralSearchResponse,
    type SearchGeneralSearchParams as SearchGeneralSearchParams,
  };
}
