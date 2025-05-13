// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'charts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_historical_charts',
  description:
    "Fetches historical intraday chart data for a specific company stock symbol and timeframe. Optional query parameters allow specifying a date range ('from', 'to') and requesting extended hours data ('extended').\n",
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
      },
      timeframe: {
        type: 'string',
        enum: ['1min', '5min', '15min', '30min', '1hour', '4hour'],
      },
      extended: {
        type: 'boolean',
        description: 'Include extended trading hours data (true/false). Defaults to false.',
      },
      from: {
        type: 'string',
        description: 'The starting date for the historical data (YYYY-MM-DD).',
        format: 'date',
      },
      to: {
        type: 'string',
        description: 'The ending date for the historical data (YYYY-MM-DD).',
        format: 'date',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { timeframe, ...body } = args as any;
  return client.charts.retrieveHistorical(timeframe, body);
};

export default { metadata, tool, handler };
