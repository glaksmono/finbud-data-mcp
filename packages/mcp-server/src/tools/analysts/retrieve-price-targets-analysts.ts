// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'analysts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_price_targets_analysts',
  description: 'Fetches analyst price target data for a given company stock symbol.',
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: FinbudData, args: any) => {
  const { symbol } = args;
  return client.analysts.retrievePriceTargets(symbol);
};

export default { metadata, tool, handler };
