// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'etf',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_holdings_etf',
  description: 'Fetches the underlying holdings for a specific Exchange Traded Fund (ETF) symbol.',
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
      },
      date: {
        type: 'string',
        description:
          'Retrieve holdings for a specific date (YYYY-MM-DD). Defaults to the latest available data.',
        format: 'date',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { symbol, ...body } = args as any;
  return client.etf.retrieveHoldings(symbol, body);
};

export default { metadata, tool, handler };
