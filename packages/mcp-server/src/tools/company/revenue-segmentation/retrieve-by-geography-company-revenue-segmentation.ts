// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'company.revenue_segmentation',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_by_geography_company_revenue_segmentation',
  description:
    "Fetches a breakdown of a company's revenue by geographic segment for a given stock symbol, optionally filtered by period (annual/quarter).",
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
      },
      period: {
        type: 'string',
        description: 'The period of the segmentation data (annual or quarter). Defaults to annual.',
        enum: ['annual', 'quarter'],
      },
      structure: {
        type: 'string',
        description: 'The structure of the response (flat or hierarchical). Defaults to flat.',
        enum: ['flat', 'hierarchical'],
      },
    },
  },
};

export const handler = (client: FinbudData, args: any) => {
  const { symbol, ...body } = args;
  return client.company.revenueSegmentation.retrieveByGeography(symbol, body);
};

export default { metadata, tool, handler };
