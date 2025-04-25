// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FinbudData from 'finbud-data';

const client = new FinbudData({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource snapshot', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveChain', async () => {
    const responsePromise = client.options.snapshot.retrieveChain('underlyingAsset');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveChain: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.options.snapshot.retrieveChain(
        'underlyingAsset',
        {
          'contract-type': 'call',
          expiration_date: { gt: '2019-12-27', gte: '2019-12-27', lt: '2019-12-27', lte: '2019-12-27' },
          'expiration-date': '2019-12-27',
          limit: 1,
          order: 'asc',
          sort: 'sort',
          strike_price: { gt: 0, gte: 0, lt: 0, lte: 0 },
          'strike-price': 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveContract: only required params', async () => {
    const responsePromise = client.options.snapshot.retrieveContract('optionContract', {
      underlyingAsset: 'underlyingAsset',
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
  test.skip('retrieveContract: required and optional params', async () => {
    const response = await client.options.snapshot.retrieveContract('optionContract', {
      underlyingAsset: 'underlyingAsset',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveUnified: only required params', async () => {
    const responsePromise = client.options.snapshot.retrieveUnified({ tickers: 'tickers' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveUnified: required and optional params', async () => {
    const response = await client.options.snapshot.retrieveUnified({ tickers: 'tickers', limit: 1 });
  });
});
