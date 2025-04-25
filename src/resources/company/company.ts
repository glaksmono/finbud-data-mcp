// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RevenueSegmentationAPI from './revenue-segmentation';
import {
  RevenueSegmentation,
  RevenueSegmentationRetrieveByGeographyParams,
  RevenueSegmentationRetrieveByGeographyResponse,
  RevenueSegmentationRetrieveByProductParams,
  RevenueSegmentationRetrieveByProductResponse,
} from './revenue-segmentation';

export class Company extends APIResource {
  revenueSegmentation: RevenueSegmentationAPI.RevenueSegmentation =
    new RevenueSegmentationAPI.RevenueSegmentation(this._client);
}

Company.RevenueSegmentation = RevenueSegmentation;

export declare namespace Company {
  export {
    RevenueSegmentation as RevenueSegmentation,
    type RevenueSegmentationRetrieveByGeographyResponse as RevenueSegmentationRetrieveByGeographyResponse,
    type RevenueSegmentationRetrieveByProductResponse as RevenueSegmentationRetrieveByProductResponse,
    type RevenueSegmentationRetrieveByGeographyParams as RevenueSegmentationRetrieveByGeographyParams,
    type RevenueSegmentationRetrieveByProductParams as RevenueSegmentationRetrieveByProductParams,
  };
}
