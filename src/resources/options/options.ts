// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SnapshotAPI from './snapshot';
import {
  Snapshot,
  SnapshotRetrieveChainParams,
  SnapshotRetrieveChainResponse,
  SnapshotRetrieveContractParams,
  SnapshotRetrieveContractResponse,
  SnapshotRetrieveUnifiedParams,
  SnapshotRetrieveUnifiedResponse,
} from './snapshot';
import * as TradesAPI from './trades';
import { TradeRetrieveLastResponse, TradeRetrieveParams, TradeRetrieveResponse, Trades } from './trades';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Options extends APIResource {
  snapshot: SnapshotAPI.Snapshot = new SnapshotAPI.Snapshot(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);

  /**
   * Retrieves historical quotes (NBBO - National Best Bid and Offer) for a specified
   * options contract over a defined time range. Includes bid/ask prices, sizes,
   * exchange IDs, and timestamps. Max 50,000 results per request.
   */
  retrieveQuotes(
    optionsTicker: string,
    query: OptionRetrieveQuotesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OptionRetrieveQuotesResponse> {
    return this._client.get(path`/options/quotes/${optionsTicker}`, { query, ...options });
  }

  /**
   * Retrieves historical technical indicator data (SMA, EMA, MACD, RSI) for a
   * specified options ticker. Query parameters vary based on the selected indicator.
   */
  retrieveTechnicalIndicator(
    optionsTicker: string,
    params: OptionRetrieveTechnicalIndicatorParams,
    options?: RequestOptions,
  ): APIPromise<OptionRetrieveTechnicalIndicatorResponse> {
    const { indicator, ...query } = params;
    return this._client.get(path`/options/technicals/${indicator}/${optionsTicker}`, { query, ...options });
  }
}

export interface OptionRetrieveQuotesResponse {
  /**
   * URL for the next page of results.
   */
  'next-url'?: string | null;

  'request-id'?: string;

  results?: Array<OptionRetrieveQuotesResponse.Result>;

  status?: string;
}

export namespace OptionRetrieveQuotesResponse {
  export interface Result {
    /**
     * Ask exchange ID.
     */
    'ask-exchange'?: number;

    /**
     * Ask price.
     */
    'ask-price'?: number;

    /**
     * Ask size (number of contracts).
     */
    'ask-size'?: number;

    /**
     * Bid exchange ID.
     */
    'bid-exchange'?: number;

    /**
     * Bid price.
     */
    'bid-price'?: number;

    /**
     * Bid size (number of contracts).
     */
    'bid-size'?: number;

    /**
     * Sequence number of the quote event.
     */
    'sequence-number'?: number;

    /**
     * SIP Unix Timestamp (nanoseconds).
     */
    'sip-timestamp'?: number;
  }
}

export interface OptionRetrieveTechnicalIndicatorResponse {
  /**
   * URL for the next page of results.
   */
  'next-url'?: string | null;

  'request-id'?: string;

  results?: OptionRetrieveTechnicalIndicatorResponse.Results;

  status?: string;
}

export namespace OptionRetrieveTechnicalIndicatorResponse {
  export interface Results {
    underlying?: Results.Underlying;

    values?: Array<Results.Value>;
  }

  export namespace Results {
    export interface Underlying {
      aggregates?: Array<unknown>;

      url?: string;
    }

    export interface Value {
      histogram?: number;

      signal?: number;

      /**
       * Unix millisecond timestamp of the aggregate's start time.
       */
      timestamp?: number;

      /**
       * The calculated indicator value.
       */
      value?: number;
    }
  }
}

export interface OptionRetrieveQuotesParams {
  /**
   * Limit the number of results. Max 50,000.
   */
  limit?: number;

  /**
   * Order results (asc/desc).
   */
  order?: 'asc' | 'desc';

  /**
   * Sort field (defaults to 'timestamp').
   */
  sort?: string;

  timestamp?: OptionRetrieveQuotesParams.Timestamp;
}

export namespace OptionRetrieveQuotesParams {
  export interface Timestamp {
    /**
     * Timestamp greater than.
     */
    gt?: string;

    /**
     * Timestamp greater than or equal to.
     */
    gte?: string;

    /**
     * Timestamp less than.
     */
    lt?: string;

    /**
     * Timestamp less than or equal to.
     */
    lte?: string;
  }
}

export interface OptionRetrieveTechnicalIndicatorParams {
  /**
   * Path param: The technical indicator to calculate.
   */
  indicator: 'sma' | 'ema' | 'macd' | 'rsi';

  /**
   * Query param: The size of the aggregate time window.
   */
  timespan: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';

  /**
   * Query param: Whether aggregates are adjusted for splits (default: true).
   */
  adjusted?: boolean;

  /**
   * Query param: Include the underlying aggregate used in the calculation.
   */
  expand_underlying?: boolean;

  /**
   * Query param: Limit the number of results. Max 5,000.
   */
  limit?: number;

  /**
   * Query param: The long window size. **Used only for MACD (default: 26).**
   */
  long_window?: number;

  /**
   * Query param: Order results by timestamp (asc/desc).
   */
  order?: 'asc' | 'desc';

  /**
   * Query param: The price type to use ('open', 'high', 'low', 'close').
   */
  series_type?: 'open' | 'high' | 'low' | 'close';

  /**
   * Query param: The short window size. **Used only for MACD (default: 12).**
   */
  short_window?: number;

  /**
   * Query param: The signal window size. **Used only for MACD (default: 9).**
   */
  signal_window?: number;

  /**
   * Query param:
   */
  timestamp?: OptionRetrieveTechnicalIndicatorParams.Timestamp;

  /**
   * Query param: The window size (number of periods). **Required for SMA, EMA,
   * RSI.**
   */
  window?: number;
}

export namespace OptionRetrieveTechnicalIndicatorParams {
  export interface Timestamp {
    /**
     * Timestamp greater than.
     */
    gt?: string;

    /**
     * Timestamp greater than or equal to.
     */
    gte?: string;

    /**
     * Timestamp less than.
     */
    lt?: string;

    /**
     * Timestamp less than or equal to.
     */
    lte?: string;
  }
}

Options.Snapshot = Snapshot;
Options.Trades = Trades;

export declare namespace Options {
  export {
    type OptionRetrieveQuotesResponse as OptionRetrieveQuotesResponse,
    type OptionRetrieveTechnicalIndicatorResponse as OptionRetrieveTechnicalIndicatorResponse,
    type OptionRetrieveQuotesParams as OptionRetrieveQuotesParams,
    type OptionRetrieveTechnicalIndicatorParams as OptionRetrieveTechnicalIndicatorParams,
  };

  export {
    Snapshot as Snapshot,
    type SnapshotRetrieveChainResponse as SnapshotRetrieveChainResponse,
    type SnapshotRetrieveContractResponse as SnapshotRetrieveContractResponse,
    type SnapshotRetrieveUnifiedResponse as SnapshotRetrieveUnifiedResponse,
    type SnapshotRetrieveChainParams as SnapshotRetrieveChainParams,
    type SnapshotRetrieveContractParams as SnapshotRetrieveContractParams,
    type SnapshotRetrieveUnifiedParams as SnapshotRetrieveUnifiedParams,
  };

  export {
    Trades as Trades,
    type TradeRetrieveResponse as TradeRetrieveResponse,
    type TradeRetrieveLastResponse as TradeRetrieveLastResponse,
    type TradeRetrieveParams as TradeRetrieveParams,
  };
}
