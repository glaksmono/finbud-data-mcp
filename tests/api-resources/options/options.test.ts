// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FinbudData from 'finbud-data';

const client = new FinbudData({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource options', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveQuotes', async () => {
    const responsePromise = client.options.retrieveQuotes('optionsTicker');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveQuotes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.options.retrieveQuotes(
        'optionsTicker',
        { limit: 1, order: 'asc', sort: 'sort', timestamp: { gt: 'gt', gte: 'gte', lt: 'lt', lte: 'lte' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTechnicalIndicator: only required params', async () => {
    const responsePromise = client.options.retrieveTechnicalIndicator('optionsTicker', {
      indicator: 'sma',
      timespan: 'minute',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTechnicalIndicator: required and optional params', async () => {
    const response = await client.options.retrieveTechnicalIndicator('optionsTicker', {
      indicator: 'sma',
      timespan: 'minute',
      adjusted: true,
      expand_underlying: true,
      limit: 1,
      long_window: 1,
      order: 'asc',
      series_type: 'open',
      short_window: 1,
      signal_window: 1,
      timestamp: { gt: 'gt', gte: 'gte', lt: 'lt', lte: 'lte' },
      window: 1,
    });
  });
});
