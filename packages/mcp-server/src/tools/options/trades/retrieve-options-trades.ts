// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'options.trades',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_options_trades',
  description:
    'Retrieves comprehensive, tick-level trade data for a specified options ticker within a defined time range.\nIncludes price, size, exchange, conditions, and precise timestamps. Max 50,000 results per request.\n',
  inputSchema: {
    type: 'object',
    properties: {
      optionsTicker: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Limit the number of results. Max 50,000.',
      },
      order: {
        type: 'string',
        description: 'Order results (asc/desc).',
        enum: ['asc', 'desc'],
      },
      sort: {
        type: 'string',
        description: "Sort field (defaults to 'timestamp').",
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
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { optionsTicker, ...body } = args as any;
  return client.options.trades.retrieve(optionsTicker, body);
};

export default { metadata, tool, handler };
