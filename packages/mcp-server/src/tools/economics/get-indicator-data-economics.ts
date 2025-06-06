// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'finbud-data-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'economics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/economics/indicators/{name}',
  operationId: 'getEconomicIndicator',
};

export const tool: Tool = {
  name: 'get_indicator_data_economics',
  description:
    "Fetches historical data for a specific economic indicator (e.g., real GDP, CPI, unemployment rate). The indicator name should be provided in kebab-case (e.g., 'real-gdp').\n",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      from: {
        type: 'string',
        description: 'The starting date for the historical data (YYYY-MM-DD).',
        format: 'date',
      },
      to: {
        type: 'string',
        description: 'The ending date for the historical data (YYYY-MM-DD).',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  return asTextContentResult(await client.economics.getIndicatorData(name, body));
};

export default { metadata, tool, handler };
