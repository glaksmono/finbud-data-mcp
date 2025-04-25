// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FinbudData from 'finbud-data';

const client = new FinbudData({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource etf', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveHoldings', async () => {
    const responsePromise = client.etf.retrieveHoldings('symbol');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHoldings: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.etf.retrieveHoldings('symbol', { date: '2019-12-27' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });
});
