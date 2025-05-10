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
  name: 'get_calendar_earnings',
  description: 'Fetches the earnings calendar for a specified date range or the next few days.',
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description:
          "The starting date for the calendar (YYYY-MM-DD). Defaults to today if 'to' is provided, otherwise fetches the next few days.",
        format: 'date',
      },
      to: {
        type: 'string',
        description:
          "The ending date for the calendar (YYYY-MM-DD). Defaults to 90 days from 'from' if provided, otherwise fetches the next few days.",
        format: 'date',
      },
    },
  },
};

export const handler = (client: FinbudData, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.earnings.getCalendar(body);
};

export default { metadata, tool, handler };
