// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'finbud-data-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/quotes/{symbol}',
  operationId: 'getFullQuotes',
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

export const handler = async (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { symbol, ...body } = args as any;
  return asTextContentResult(await client.quotes.retrieve(symbol));
};

export default { metadata, tool, handler };
