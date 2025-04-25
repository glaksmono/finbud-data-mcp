// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'government.congress',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_trading_government_congress',
  description:
    'Fetches data on stock trades made by U.S. Senators, as reported in Periodic Transaction Reports (PTRs). Can be filtered by stock symbol.\n',
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
        description: 'Filter trades by a specific stock symbol (e.g., AAPL).',
      },
    },
  },
};

export const handler = (client: FinbudData, args: any) => {
  const { ...body } = args;
  return client.government.congress.retrieveTrading(body);
};

export default { metadata, tool, handler };
