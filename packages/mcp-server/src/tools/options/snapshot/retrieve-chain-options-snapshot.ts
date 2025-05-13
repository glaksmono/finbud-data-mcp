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
  name: 'retrieve_chain_options_snapshot',
  description:
    'Retrieves a comprehensive snapshot of all options contracts for a specified underlying asset ticker.\nThis consolidates key metrics like pricing, greeks, IV, quotes, trades, and open interest.\n',
  inputSchema: {
    type: 'object',
    properties: {
      underlyingAsset: {
        type: 'string',
      },
      'contract-type': {
        type: 'string',
        description: 'Query by the type of contract.',
        enum: ['call', 'put'],
      },
      expiration_date: {
        type: 'object',
        properties: {
          gt: {
            type: 'string',
            description: 'Expiration date greater than (YYYY-MM-DD).',
            format: 'date',
          },
          gte: {
            type: 'string',
            description: 'Expiration date greater than or equal to (YYYY-MM-DD).',
            format: 'date',
          },
          lt: {
            type: 'string',
            description: 'Expiration date less than (YYYY-MM-DD).',
            format: 'date',
          },
          lte: {
            type: 'string',
            description: 'Expiration date less than or equal to (YYYY-MM-DD).',
            format: 'date',
          },
        },
        required: [],
      },
      'expiration-date': {
        type: 'string',
        description: 'Query by contract expiration date (YYYY-MM-DD).',
        format: 'date',
      },
      limit: {
        type: 'integer',
        description: 'Limit the number of results returned.',
      },
      order: {
        type: 'string',
        description: "Order results based on the 'sort' field.",
        enum: ['asc', 'desc'],
      },
      sort: {
        type: 'string',
        description: "Sort field used for ordering (e.g., 'strike_price', 'expiration_date').",
      },
      strike_price: {
        type: 'object',
        properties: {
          gt: {
            type: 'number',
            description: 'Strike price greater than.',
          },
          gte: {
            type: 'number',
            description: 'Strike price greater than or equal to.',
          },
          lt: {
            type: 'number',
            description: 'Strike price less than.',
          },
          lte: {
            type: 'number',
            description: 'Strike price less than or equal to.',
          },
        },
        required: [],
      },
      'strike-price': {
        type: 'number',
        description: 'Query by strike price of a contract.',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { underlyingAsset, ...body } = args as any;
  return client.options.snapshot.retrieveChain(underlyingAsset, body);
};

export default { metadata, tool, handler };
