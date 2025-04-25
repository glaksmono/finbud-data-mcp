// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'government.congress',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_disclosure_government_congress',
  description:
    'Fetches data from financial disclosures made by members of the U.S. House of Representatives. Can be filtered by stock symbol.\n',
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
        description: 'Filter disclosures by a specific stock symbol (e.g., AAPL).',
      },
    },
  },
};

export const handler = (client: FinbudData, args: any) => {
  const { ...body } = args;
  return client.government.congress.retrieveDisclosure(body);
};

export default { metadata, tool, handler };
