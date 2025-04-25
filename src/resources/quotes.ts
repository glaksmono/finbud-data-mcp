// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Quotes extends APIResource {
  /**
   * Fetches the real-time full stock quote(s) for one or more comma-separated
   * company stock symbols.
   */
  retrieve(symbol: string, options?: RequestOptions): APIPromise<QuoteRetrieveResponse> {
    return this._client.get(path`/quotes/${symbol}`, options);
  }
}

export type QuoteRetrieveResponse = Array<QuoteRetrieveResponse.QuoteRetrieveResponseItem>;

export namespace QuoteRetrieveResponse {
  export interface QuoteRetrieveResponseItem {
    'avg-volume'?: number;

    change?: number;

    'changes-percentage'?: number;

    'day-high'?: number;

    'day-low'?: number;

    'earnings-announcement'?: string;

    eps?: number;

    exchange?: string;

    'market-cap'?: number;

    name?: string;

    open?: number;

    pe?: number;

    'previous-close'?: number;

    price?: number;

    'price-avg200'?: number;

    'price-avg50'?: number;

    'shares-outstanding'?: number;

    symbol?: string;

    timestamp?: number;

    volume?: number;

    'year-high'?: number;

    'year-low'?: number;
  }
}

export declare namespace Quotes {
  export { type QuoteRetrieveResponse as QuoteRetrieveResponse };
}
