// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'options.snapshot',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_contract_options_snapshot',
  description:
    'Retrieves a comprehensive snapshot for a specific options contract identifier.\nConsolidates vital metrics like break-even price, day changes, IV, open interest, greeks, last quote/trade, and underlying asset info.\n',
  inputSchema: {
    type: 'object',
    properties: {
      underlyingAsset: {
        type: 'string',
      },
      optionContract: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: FinbudData, args: any) => {
  const { optionContract, ...body } = args;
  return client.options.snapshot.retrieveContract(optionContract, body);
};

export default { metadata, tool, handler };
