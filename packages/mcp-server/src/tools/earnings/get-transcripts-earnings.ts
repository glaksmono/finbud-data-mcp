// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'earnings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_transcripts_earnings',
  description:
    'Fetches the earnings call transcripts for a given company stock symbol, optionally filtered by year or quarter.',
  inputSchema: {
    type: 'object',
    properties: {
      symbol: {
        type: 'string',
      },
      quarter: {
        type: 'string',
        description:
          "Filter transcripts by a specific quarter (1, 2, 3, or 4). Requires 'year' to be specified.",
        enum: [1, 2, 3, 4],
      },
      year: {
        type: 'integer',
        description: 'Filter transcripts by a specific year.',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const { symbol, ...body } = args as any;
  return client.earnings.getTranscripts(symbol, body);
};

export default { metadata, tool, handler };
