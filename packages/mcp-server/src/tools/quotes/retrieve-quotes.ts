// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_quotes',
  description:
    'Fetches the real-time full stock quote(s) for one or more comma-separated company stock symbols.',
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
  return client.quotes.retrieve(symbol);
};

export default { metadata, tool, handler };
