// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'technicals',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_indicator_data_technicals',
  description:
    "Fetches historical technical indicator data for a specific stock symbol, indicator type, and time interval. Supports various indicators like SMA, EMA, WMA, DEMA, TEMA, Williams %R, RSI, ADX, and Standard Deviation. Specific required parameters depend on the chosen indicator (e.g., 'period' is required for most).\n",
  inputSchema: {
    type: 'object',
    properties: {
      indicator: {
        type: 'string',
        enum: ['sma', 'ema', 'wma', 'dema', 'tema', 'williams', 'rsi', 'adx', 'standard-deviation'],
      },
      symbol: {
        type: 'string',
      },
      interval: {
        type: 'string',
        enum: ['1min', '5min', '15min', '30min', '1hour', '4hour', 'daily'],
      },
      period: {
        type: 'integer',
        description:
          'The time period (number of data points) to use for calculating the indicator (e.g., 10 for a 10-day SMA). **Required for all indicators except Standard Deviation.**',
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
  const { interval, ...body } = args as any;
  return client.technicals.retrieveIndicatorData(interval, body);
};

export default { metadata, tool, handler };
