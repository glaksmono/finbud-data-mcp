// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Snapshot extends APIResource {
  /**
   * Retrieves a comprehensive snapshot of all options contracts for a specified
   * underlying asset ticker. This consolidates key metrics like pricing, greeks, IV,
   * quotes, trades, and open interest.
   */
  retrieveChain(
    underlyingAsset: string,
    query: SnapshotRetrieveChainParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotRetrieveChainResponse> {
    return this._client.get(path`/options/snapshot/chain/${underlyingAsset}`, { query, ...options });
  }

  /**
   * Retrieves a comprehensive snapshot for a specific options contract identifier.
   * Consolidates vital metrics like break-even price, day changes, IV, open
   * interest, greeks, last quote/trade, and underlying asset info.
   */
  retrieveContract(
    optionContract: string,
    params: SnapshotRetrieveContractParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotRetrieveContractResponse> {
    const { underlyingAsset } = params;
    return this._client.get(path`/options/snapshot/contract/${underlyingAsset}/${optionContract}`, options);
  }

  /**
   * Retrieves a snapshot of the latest market data for one or more option contract
   * tickers. This typically includes last trade, last quote, day's aggregate data,
   * and previous day's aggregate data.
   */
  retrieveUnified(
    query: SnapshotRetrieveUnifiedParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotRetrieveUnifiedResponse> {
    return this._client.get('/options/snapshot/unified', { query, ...options });
  }
}

export interface SnapshotRetrieveChainResponse {
  /**
   * URL to fetch the next page of results, if available.
   */
  'next-url'?: string | null;

  /**
   * A request id assigned by the server.
   */
  'request-id'?: string;

  results?: Array<SnapshotRetrieveChainResponse.Result>;

  /**
   * The status of this request's response.
   */
  status?: string;
}

export namespace SnapshotRetrieveChainResponse {
  export interface Result {
    /**
     * The price of the underlying asset for the contract to break even.
     */
    'break-even-price'?: number;

    /**
     * The most recent daily bar for this contract.
     */
    day?: unknown;

    /**
     * The details for this contract (strike, expiration, type, etc.).
     */
    details?: unknown;

    /**
     * The greeks for this contract (delta, gamma, theta, vega). May not always be
     * present.
     */
    greeks?: unknown;

    /**
     * The market's forecast for the volatility of the underlying asset.
     */
    'implied-volatility'?: number | null;

    /**
     * The most recent quote for this contract (bid/ask price and size). Requires
     * quotes plan.
     */
    'last-quote'?: unknown;

    /**
     * The most recent trade for this contract (price, size, timestamp). Requires
     * trades plan.
     */
    'last-trade'?: unknown;

    /**
     * The quantity of this contract held at the end of the last trading day.
     */
    'open-interest'?: number;

    /**
     * Information on the underlying stock for this options contract.
     */
    'underlying-asset'?: unknown;
  }
}

export interface SnapshotRetrieveContractResponse {
  /**
   * A request id assigned by the server.
   */
  'request-id'?: string;

  /**
   * Contains the snapshot data for the specified contract.
   */
  results?: SnapshotRetrieveContractResponse.Results;

  /**
   * The status of this request's response.
   */
  status?: string;
}

export namespace SnapshotRetrieveContractResponse {
  /**
   * Contains the snapshot data for the specified contract.
   */
  export interface Results {
    /**
     * The price of the underlying asset for the contract to break even.
     */
    'break-even-price'?: number;

    /**
     * The most recent daily bar for this contract.
     */
    day?: unknown;

    /**
     * The details for this contract (strike, expiration, type, etc.).
     */
    details?: unknown;

    /**
     * The greeks for this contract (delta, gamma, theta, vega). May not always be
     * present.
     */
    greeks?: unknown;

    /**
     * The market's forecast for the volatility of the underlying asset.
     */
    'implied-volatility'?: number | null;

    /**
     * The most recent quote for this contract (bid/ask price and size). Requires
     * quotes plan.
     */
    'last-quote'?: unknown;

    /**
     * The most recent trade for this contract (price, size, timestamp). Requires
     * trades plan.
     */
    'last-trade'?: unknown;

    /**
     * The quantity of this contract held at the end of the last trading day.
     */
    'open-interest'?: number;

    /**
     * Information on the underlying stock for this options contract.
     */
    'underlying-asset'?: unknown;
  }
}

export interface SnapshotRetrieveUnifiedResponse {
  'request-id'?: string;

  results?: Array<SnapshotRetrieveUnifiedResponse.Result>;

  status?: string;
}

export namespace SnapshotRetrieveUnifiedResponse {
  export interface Result {
    day?: unknown;

    'last-quote'?: unknown;

    'last-trade'?: unknown;

    min?: unknown;

    'prev-day'?: unknown;

    ticker?: string;

    'todays-change'?: number;

    'todays-change-perc'?: number;

    updated?: number;
  }
}

export interface SnapshotRetrieveChainParams {
  /**
   * Query by the type of contract.
   */
  'contract-type'?: 'call' | 'put';

  expiration_date?: SnapshotRetrieveChainParams.ExpirationDate;

  /**
   * Query by contract expiration date (YYYY-MM-DD).
   */
  'expiration-date'?: string;

  /**
   * Limit the number of results returned.
   */
  limit?: number;

  /**
   * Order results based on the 'sort' field.
   */
  order?: 'asc' | 'desc';

  /**
   * Sort field used for ordering (e.g., 'strike_price', 'expiration_date').
   */
  sort?: string;

  strike_price?: SnapshotRetrieveChainParams.StrikePrice;

  /**
   * Query by strike price of a contract.
   */
  'strike-price'?: number;
}

export namespace SnapshotRetrieveChainParams {
  export interface ExpirationDate {
    /**
     * Expiration date greater than (YYYY-MM-DD).
     */
    gt?: string;

    /**
     * Expiration date greater than or equal to (YYYY-MM-DD).
     */
    gte?: string;

    /**
     * Expiration date less than (YYYY-MM-DD).
     */
    lt?: string;

    /**
     * Expiration date less than or equal to (YYYY-MM-DD).
     */
    lte?: string;
  }

  export interface StrikePrice {
    /**
     * Strike price greater than.
     */
    gt?: number;

    /**
     * Strike price greater than or equal to.
     */
    gte?: number;

    /**
     * Strike price less than.
     */
    lt?: number;

    /**
     * Strike price less than or equal to.
     */
    lte?: number;
  }
}

export interface SnapshotRetrieveContractParams {
  /**
   * The underlying ticker symbol of the option contract (e.g., EVRI).
   */
  underlyingAsset: string;
}

export interface SnapshotRetrieveUnifiedParams {
  /**
   * A comma-separated list of option contract tickers (e.g.,
   * O:AAPL240119C00175000,O:MSFT240119C00400000).
   */
  tickers: string;

  /**
   * Limit the number of results (if applicable to the underlying endpoint).
   */
  limit?: number;
}

export declare namespace Snapshot {
  export {
    type SnapshotRetrieveChainResponse as SnapshotRetrieveChainResponse,
    type SnapshotRetrieveContractResponse as SnapshotRetrieveContractResponse,
    type SnapshotRetrieveUnifiedResponse as SnapshotRetrieveUnifiedResponse,
    type SnapshotRetrieveChainParams as SnapshotRetrieveChainParams,
    type SnapshotRetrieveContractParams as SnapshotRetrieveContractParams,
    type SnapshotRetrieveUnifiedParams as SnapshotRetrieveUnifiedParams,
  };
}
