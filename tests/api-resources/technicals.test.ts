// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FinbudData from 'finbud-data';

const client = new FinbudData({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource technicals', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveIndicatorData: only required params', async () => {
    const responsePromise = client.technicals.retrieveIndicatorData('1min', {
      indicator: 'sma',
      symbol: 'symbol',
      period: 1,
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
  test.skip('retrieveIndicatorData: required and optional params', async () => {
    const response = await client.technicals.retrieveIndicatorData('1min', {
      indicator: 'sma',
      symbol: 'symbol',
      period: 1,
      from: '2019-12-27',
      to: '2019-12-27',
    });
  });
});
