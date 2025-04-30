// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'news',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_forex_news',
  description: 'Fetches recent news articles related to the Forex market.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The maximum number of news articles to return (e.g., 50).',
      },
      page: {
        type: 'integer',
        description: 'The page number for pagination.',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.news.retrieveForex(body);
};

export default { metadata, tool, handler };
