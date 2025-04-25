// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Congress extends APIResource {
  /**
   * Fetches data from financial disclosures made by members of the U.S. House of
   * Representatives. Can be filtered by stock symbol.
   */
  retrieveDisclosure(
    query: CongressRetrieveDisclosureParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CongressRetrieveDisclosureResponse> {
    return this._client.get('/government/congress/disclosure', { query, ...options });
  }

  /**
   * Fetches data on stock trades made by U.S. Senators, as reported in Periodic
   * Transaction Reports (PTRs). Can be filtered by stock symbol.
   */
  retrieveTrading(
    query: CongressRetrieveTradingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CongressRetrieveTradingResponse> {
    return this._client.get('/government/congress/trading', { query, ...options });
  }
}

export type CongressRetrieveDisclosureResponse =
  Array<CongressRetrieveDisclosureResponse.CongressRetrieveDisclosureResponseItem>;

export namespace CongressRetrieveDisclosureResponse {
  export interface CongressRetrieveDisclosureResponseItem {
    /**
     * The estimated range of the transaction amount.
     */
    amount?: string;

    'asset-description'?: string;

    'cap-gains-over-200-usd'?: boolean;

    'disclosure-date'?: string;

    'disclosure-year'?: number;

    district?: string;

    /**
     * The type of owner (e.g., Self, SP for Spouse, JT for Joint).
     */
    owner?: string;

    'ptr-link'?: string;

    representative?: string;

    ticker?: string;

    'transaction-date'?: string;

    /**
     * The type of transaction (e.g., purchase, sale_full, sale_partial).
     */
    type?: string;
  }
}

export type CongressRetrieveTradingResponse =
  Array<CongressRetrieveTradingResponse.CongressRetrieveTradingResponseItem>;

export namespace CongressRetrieveTradingResponse {
  export interface CongressRetrieveTradingResponseItem {
    /**
     * The estimated range of the transaction amount.
     */
    amount?: string;

    'asset-description'?: string;

    'asset-type'?: string;

    comment?: string;

    'disclosure-date'?: string;

    /**
     * The type of owner (e.g., Self, Spouse, Child).
     */
    owner?: string;

    'ptr-link'?: string;

    'senator-name'?: string;

    ticker?: string;

    'transaction-date'?: string;

    /**
     * The type of transaction (e.g., Purchase, Sale (Full), Sale (Partial)).
     */
    type?: string;
  }
}

export interface CongressRetrieveDisclosureParams {
  /**
   * Filter disclosures by a specific stock symbol (e.g., AAPL).
   */
  symbol?: string;
}

export interface CongressRetrieveTradingParams {
  /**
   * Filter trades by a specific stock symbol (e.g., AAPL).
   */
  symbol?: string;
}

export declare namespace Congress {
  export {
    type CongressRetrieveDisclosureResponse as CongressRetrieveDisclosureResponse,
    type CongressRetrieveTradingResponse as CongressRetrieveTradingResponse,
    type CongressRetrieveDisclosureParams as CongressRetrieveDisclosureParams,
    type CongressRetrieveTradingParams as CongressRetrieveTradingParams,
  };
}
