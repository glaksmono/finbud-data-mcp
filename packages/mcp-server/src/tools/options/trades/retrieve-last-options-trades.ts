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
  name: 'retrieve_last_options_trades',
  description: 'Retrieves the most recent trade for a specified options ticker symbol.\n',
  inputSchema: {
    type: 'object',
    properties: {
      optionsTicker: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: FinbudData, args: any) => {
  const { optionsTicker } = args;
  return client.options.trades.retrieveLast(optionsTicker);
};

export default { metadata, tool, handler };
