// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'general_search_search',
  description:
    'Search for various financial instruments including stocks, ETFs, forex, and cryptocurrencies by name or symbol across different exchanges.\n',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: "The search query string (e.g., company name or symbol like 'AA' or 'Apple').",
      },
      exchange: {
        type: 'string',
        description: 'Filter results by a specific stock exchange (e.g., NASDAQ, NYSE, EURONEXT).',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of search results to return.',
      },
    },
  },
};

export const handler = (client: FinbudData, args: any) => {
  const { ...body } = args;
  return client.search.generalSearch(body);
};

export default { metadata, tool, handler };
