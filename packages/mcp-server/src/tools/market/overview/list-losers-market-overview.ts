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
  name: 'list_losers_market_overview',
  description: 'Fetches a list of the stocks with the largest percentage loss for the day.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  return client.market.overview.listLosers();
};

export default { metadata, tool, handler };
