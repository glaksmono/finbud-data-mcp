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
  name: 'retrieve_financial_score_financials',
  description:
    "Fetches the financial score for a given company stock symbol. The score provides a quick assessment of a company's financial health.",
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: "The maximum number of records to return. Defaults to provider's default.",
      },
    },
  },
};

export const handler = (client: FinbudData, args: any) => {
  const { symbol, ...body } = args;
  return client.financials.retrieveFinancialScore(symbol, body);
};

export default { metadata, tool, handler };
