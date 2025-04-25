// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OverviewAPI from './overview';
import {
  Overview,
  OverviewListActiveResponse,
  OverviewListGainersResponse,
  OverviewListLosersResponse,
} from './overview';

export class Market extends APIResource {
  overview: OverviewAPI.Overview = new OverviewAPI.Overview(this._client);
}

Market.Overview = Overview;

export declare namespace Market {
  export {
    Overview as Overview,
    type OverviewListActiveResponse as OverviewListActiveResponse,
    type OverviewListGainersResponse as OverviewListGainersResponse,
    type OverviewListLosersResponse as OverviewListLosersResponse,
  };
}
