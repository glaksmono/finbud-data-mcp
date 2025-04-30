// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FinbudData from 'finbud-data';

export const metadata: Metadata = {
  resource: 'economics',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_calendar_economics',
  description:
    'Fetches a calendar of upcoming or past economic events (e.g., CPI release, FOMC meeting) for a specified date range.',
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description:
          "The starting date for the calendar (YYYY-MM-DD). Defaults to the provider's default start date.",
        format: 'date',
      },
      to: {
        type: 'string',
        description:
          "The ending date for the calendar (YYYY-MM-DD). Defaults to the provider's default end date.",
        format: 'date',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.economics.getCalendar(body);
};

export default { metadata, tool, handler };
