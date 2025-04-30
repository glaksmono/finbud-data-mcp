// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'options',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_technical_indicator_options',
  description:
    'Retrieves historical technical indicator data (SMA, EMA, MACD, RSI) for a specified options ticker.\nQuery parameters vary based on the selected indicator.\n',
  inputSchema: {
    type: 'object',
    properties: {
      indicator: {
        type: 'string',
        enum: ['sma', 'ema', 'macd', 'rsi'],
      },
      optionsTicker: {
        type: 'string',
      },
      timespan: {
        type: 'string',
        description: 'The size of the aggregate time window.',
        enum: ['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'],
      },
      adjusted: {
        type: 'boolean',
        description: 'Whether aggregates are adjusted for splits (default: true).',
      },
      expand_underlying: {
        type: 'boolean',
        description: 'Include the underlying aggregate used in the calculation.',
      },
      limit: {
        type: 'integer',
        description: 'Limit the number of results. Max 5,000.',
      },
      long_window: {
        type: 'integer',
        description: 'The long window size. **Used only for MACD (default: 26).**',
      },
      order: {
        type: 'string',
        description: 'Order results by timestamp (asc/desc).',
        enum: ['asc', 'desc'],
      },
      series_type: {
        type: 'string',
        description: "The price type to use ('open', 'high', 'low', 'close').",
        enum: ['open', 'high', 'low', 'close'],
      },
      short_window: {
        type: 'integer',
        description: 'The short window size. **Used only for MACD (default: 12).**',
      },
      signal_window: {
        type: 'integer',
        description: 'The signal window size. **Used only for MACD (default: 9).**',
      },
      timestamp: {
        type: 'object',
        properties: {
          gt: {
            type: 'string',
            description: 'Timestamp greater than.',
          },
          gte: {
            type: 'string',
            description: 'Timestamp greater than or equal to.',
          },
          lt: {
            type: 'string',
            description: 'Timestamp less than.',
          },
          lte: {
            type: 'string',
            description: 'Timestamp less than or equal to.',
          },
        },
        required: [],
      },
      window: {
        type: 'integer',
        description: 'The window size (number of periods). **Required for SMA, EMA, RSI.**',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { optionsTicker, ...body } = args as any;
  return client.options.retrieveTechnicalIndicator(optionsTicker, body);
};

export default { metadata, tool, handler };
