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
  name: 'retrieve_recommendations_analysts',
  description:
    'Fetches analyst stock recommendations (buy, hold, sell ratings) for a given company stock symbol.',
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
  return client.analysts.retrieveRecommendations(symbol);
};

export default { metadata, tool, handler };
