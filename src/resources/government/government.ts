// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CongressAPI from './congress';
import {
  Congress,
  CongressRetrieveDisclosureParams,
  CongressRetrieveDisclosureResponse,
  CongressRetrieveTradingParams,
  CongressRetrieveTradingResponse,
} from './congress';

export class Government extends APIResource {
  congress: CongressAPI.Congress = new CongressAPI.Congress(this._client);
}

Government.Congress = Congress;

export declare namespace Government {
  export {
    Congress as Congress,
    type CongressRetrieveDisclosureResponse as CongressRetrieveDisclosureResponse,
    type CongressRetrieveTradingResponse as CongressRetrieveTradingResponse,
    type CongressRetrieveDisclosureParams as CongressRetrieveDisclosureParams,
    type CongressRetrieveTradingParams as CongressRetrieveTradingParams,
  };
}
