// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'financials',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_balance_sheet_financials',
  description: 'Fetches the 10 most recent annual balance sheet statements for a given company stock symbol.',
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
      },
      datatype: {
        type: 'string',
        description: 'The format of the returned data (json or csv).',
        enum: ['json', 'csv'],
      },
      limit: {
        type: 'number',
        description: 'The maximum number of records to return.',
      },
      period: {
        type: 'string',
        description: 'The period of financial data to retrieve (annual or quarter).',
        enum: ['annual', 'quarter'],
      },
    },
  },
};

export const handler = (client: FinbudData, args: any) => {
  const { symbol, ...body } = args;
  return client.financials.retrieveBalanceSheet(symbol, body);
};

export default { metadata, tool, handler };
