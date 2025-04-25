// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FinbudData from 'finbud-data';

const client = new FinbudData({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource congress', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveDisclosure', async () => {
    const responsePromise = client.government.congress.retrieveDisclosure();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveDisclosure: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.government.congress.retrieveDisclosure(
        { symbol: 'symbol' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTrading', async () => {
    const responsePromise = client.government.congress.retrieveTrading();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTrading: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.government.congress.retrieveTrading({ symbol: 'symbol' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });
});
