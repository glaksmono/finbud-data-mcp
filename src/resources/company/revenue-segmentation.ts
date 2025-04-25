// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class RevenueSegmentation extends APIResource {
  /**
   * Fetches a breakdown of a company's revenue by geographic segment for a given
   * stock symbol, optionally filtered by period (annual/quarter).
   */
  retrieveByGeography(
    symbol: string,
    query: RevenueSegmentationRetrieveByGeographyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RevenueSegmentationRetrieveByGeographyResponse> {
    return this._client.get(path`/company/revenue-segmentation/geography/${symbol}`, { query, ...options });
  }

  /**
   * Fetches a breakdown of a company's revenue by product segment for a given stock
   * symbol, optionally filtered by period (annual/quarter).
   */
  retrieveByProduct(
    symbol: string,
    query: RevenueSegmentationRetrieveByProductParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RevenueSegmentationRetrieveByProductResponse> {
    return this._client.get(path`/company/revenue-segmentation/product/${symbol}`, { query, ...options });
  }
}

export type RevenueSegmentationRetrieveByGeographyResponse =
  Array<RevenueSegmentationRetrieveByGeographyResponse.RevenueSegmentationRetrieveByGeographyResponseItem>;

export namespace RevenueSegmentationRetrieveByGeographyResponse {
  export interface RevenueSegmentationRetrieveByGeographyResponseItem {
    americas?: number;

    date?: string;

    europe?: number;

    'greater-china'?: number;

    japan?: number;

    'rest-of-asia-pacific'?: number;

    symbol?: string;
  }
}

export type RevenueSegmentationRetrieveByProductResponse =
  Array<RevenueSegmentationRetrieveByProductResponse.RevenueSegmentationRetrieveByProductResponseItem>;

export namespace RevenueSegmentationRetrieveByProductResponse {
  export interface RevenueSegmentationRetrieveByProductResponseItem {
    date?: string;

    ipad?: number;

    iphone?: number;

    mac?: number;

    services?: number;

    symbol?: string;

    'wearables-home-and-accessories'?: number;
  }
}

export interface RevenueSegmentationRetrieveByGeographyParams {
  /**
   * The period of the segmentation data (annual or quarter). Defaults to annual.
   */
  period?: 'annual' | 'quarter';

  /**
   * The structure of the response (flat or hierarchical). Defaults to flat.
   */
  structure?: 'flat' | 'hierarchical';
}

export interface RevenueSegmentationRetrieveByProductParams {
  /**
   * The period of the segmentation data (annual or quarter). Defaults to annual.
   */
  period?: 'annual' | 'quarter';

  /**
   * The structure of the response (flat or hierarchical). Defaults to flat.
   */
  structure?: 'flat' | 'hierarchical';
}

export declare namespace RevenueSegmentation {
  export {
    type RevenueSegmentationRetrieveByGeographyResponse as RevenueSegmentationRetrieveByGeographyResponse,
    type RevenueSegmentationRetrieveByProductResponse as RevenueSegmentationRetrieveByProductResponse,
    type RevenueSegmentationRetrieveByGeographyParams as RevenueSegmentationRetrieveByGeographyParams,
    type RevenueSegmentationRetrieveByProductParams as RevenueSegmentationRetrieveByProductParams,
  };
}
