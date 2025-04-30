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
  name: 'retrieve_unified_options_snapshot',
  description:
    "Retrieves a snapshot of the latest market data for one or more option contract tickers.\nThis typically includes last trade, last quote, day's aggregate data, and previous day's aggregate data.\n",
  inputSchema: {
    type: 'object',
    properties: {
      tickers: {
        type: 'string',
        description:
          'A comma-separated list of option contract tickers (e.g., O:AAPL240119C00175000,O:MSFT240119C00400000).',
      },
      limit: {
        type: 'integer',
        description: 'Limit the number of results (if applicable to the underlying endpoint).',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.options.snapshot.retrieveUnified(body);
};

export default { metadata, tool, handler };
