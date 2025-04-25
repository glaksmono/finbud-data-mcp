// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class News extends APIResource {
  /**
   * Fetches recent news articles related to the cryptocurrency market.
   */
  retrieveCrypto(
    query: NewsRetrieveCryptoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsRetrieveCryptoResponse> {
    return this._client.get('/news/crypto', { query, ...options });
  }

  /**
   * Fetches recent news articles related to the Forex market.
   */
  retrieveForex(
    query: NewsRetrieveForexParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsRetrieveForexResponse> {
    return this._client.get('/news/forex', { query, ...options });
  }

  /**
   * Fetches recent news articles for a given company stock symbol or multiple
   * symbols.
   */
  retrieveStock(
    symbol: string,
    query: NewsRetrieveStockParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsRetrieveStockResponse> {
    return this._client.get(path`/news/stock/${symbol}`, { query, ...options });
  }
}

export type NewsRetrieveCryptoResponse = Array<NewsRetrieveCryptoResponse.NewsRetrieveCryptoResponseItem>;

export namespace NewsRetrieveCryptoResponse {
  export interface NewsRetrieveCryptoResponseItem {
    'published-date'?: string;

    site?: string;

    symbol?: string;

    text?: string;

    title?: string;

    url?: string;
  }
}

export type NewsRetrieveForexResponse = Array<NewsRetrieveForexResponse.NewsRetrieveForexResponseItem>;

export namespace NewsRetrieveForexResponse {
  export interface NewsRetrieveForexResponseItem {
    'published-date'?: string;

    site?: string;

    symbol?: string;

    text?: string;

    title?: string;

    url?: string;
  }
}

export type NewsRetrieveStockResponse = Array<NewsRetrieveStockResponse.NewsRetrieveStockResponseItem>;

export namespace NewsRetrieveStockResponse {
  export interface NewsRetrieveStockResponseItem {
    'published-date'?: string;

    site?: string;

    symbol?: string;

    text?: string;

    title?: string;

    url?: string;
  }
}

export interface NewsRetrieveCryptoParams {
  /**
   * The maximum number of news articles to return (e.g., 50).
   */
  limit?: number;

  /**
   * The page number for pagination.
   */
  page?: number;
}

export interface NewsRetrieveForexParams {
  /**
   * The maximum number of news articles to return (e.g., 50).
   */
  limit?: number;

  /**
   * The page number for pagination.
   */
  page?: number;
}

export interface NewsRetrieveStockParams {
  /**
   * The maximum number of news articles to return (e.g., 50).
   */
  limit?: number;

  /**
   * The page number for pagination (if supported by the provider).
   */
  page?: number;
}

export declare namespace News {
  export {
    type NewsRetrieveCryptoResponse as NewsRetrieveCryptoResponse,
    type NewsRetrieveForexResponse as NewsRetrieveForexResponse,
    type NewsRetrieveStockResponse as NewsRetrieveStockResponse,
    type NewsRetrieveCryptoParams as NewsRetrieveCryptoParams,
    type NewsRetrieveForexParams as NewsRetrieveForexParams,
    type NewsRetrieveStockParams as NewsRetrieveStockParams,
  };
}
