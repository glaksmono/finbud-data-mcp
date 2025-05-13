// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'insider_trading',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_insider_trading',
  description: 'Fetches insider trading data for a specific company stock symbol.',
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of records to return (e.g., 100).',
      },
      page: {
        type: 'integer',
        description: 'The page number for pagination.',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { symbol, ...body } = args as any;
  return client.insiderTrading.retrieve(symbol, body);
};

export default { metadata, tool, handler };
