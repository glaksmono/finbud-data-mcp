// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FinbudData from 'finbud-data';

const client = new FinbudData({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource financials', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveBalanceSheet', async () => {
    const responsePromise = client.financials.retrieveBalanceSheet('symbol');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBalanceSheet: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.financials.retrieveBalanceSheet(
        'symbol',
        { datatype: 'json', limit: 0, period: 'annual' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCashFlow', async () => {
    const responsePromise = client.financials.retrieveCashFlow('symbol');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCashFlow: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.financials.retrieveCashFlow(
        'symbol',
        { datatype: 'json', limit: 0, period: 'annual' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFinancialScore', async () => {
    const responsePromise = client.financials.retrieveFinancialScore('symbol');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFinancialScore: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.financials.retrieveFinancialScore('symbol', { limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveIncomeStatement', async () => {
    const responsePromise = client.financials.retrieveIncomeStatement('symbol');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveIncomeStatement: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.financials.retrieveIncomeStatement(
        'symbol',
        { datatype: 'json', limit: 0, period: 'annual' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveKeyMetrics', async () => {
    const responsePromise = client.financials.retrieveKeyMetrics('symbol');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveKeyMetrics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.financials.retrieveKeyMetrics(
        'symbol',
        { datatype: 'json', limit: 0, period: 'annual' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRatios', async () => {
    const responsePromise = client.financials.retrieveRatios('symbol');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRatios: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.financials.retrieveRatios(
        'symbol',
        { datatype: 'json', limit: 0, period: 'annual' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(FinbudData.NotFoundError);
  });
});
