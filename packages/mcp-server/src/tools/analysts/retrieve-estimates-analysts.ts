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
  name: 'retrieve_estimates_analysts',
  description: 'Fetches analyst estimates (revenue, EPS) for a given company stock symbol.',
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { symbol, ...body } = args as any;
  return client.analysts.retrieveEstimates(symbol);
};

export default { metadata, tool, handler };
