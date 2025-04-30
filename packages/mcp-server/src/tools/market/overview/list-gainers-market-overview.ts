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
  name: 'list_gainers_market_overview',
  description: 'Fetches a list of the stocks with the highest percentage gain for the day.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  return client.market.overview.listGainers();
};

export default { metadata, tool, handler };
