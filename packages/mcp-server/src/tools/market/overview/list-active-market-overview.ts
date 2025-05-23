// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'market.overview',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_active_market_overview',
  description: 'Fetches a list of the stocks with the highest trading volume for the day.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: FinbudData, args: any) => {
  const {} = args;
  return client.market.overview.listActive();
};

export default { metadata, tool, handler };
