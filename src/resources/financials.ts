// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Financials extends APIResource {
  /**
   * Fetches the 10 most recent annual balance sheet statements for a given company
   * stock symbol.
   */
  retrieveBalanceSheet(
    symbol: string,
    query: FinancialRetrieveBalanceSheetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinancialRetrieveBalanceSheetResponse> {
    return this._client.get(path`/financials/balance-sheet/${symbol}`, { query, ...options });
  }

  /**
   * Fetches the 10 most recent annual cash flow statements for a given company stock
   * symbol.
   */
  retrieveCashFlow(
    symbol: string,
    query: FinancialRetrieveCashFlowParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinancialRetrieveCashFlowResponse> {
    return this._client.get(path`/financials/cash-flow/${symbol}`, { query, ...options });
  }

  /**
   * Fetches the financial score for a given company stock symbol. The score provides
   * a quick assessment of a company's financial health.
   */
  retrieveFinancialScore(
    symbol: string,
    query: FinancialRetrieveFinancialScoreParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinancialRetrieveFinancialScoreResponse> {
    return this._client.get(path`/financials/score/${symbol}`, { query, ...options });
  }

  /**
   * Fetches the 10 most recent annual income statements for a given company stock
   * symbol.
   */
  retrieveIncomeStatement(
    symbol: string,
    query: FinancialRetrieveIncomeStatementParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinancialRetrieveIncomeStatementResponse> {
    return this._client.get(path`/financials/income-statement/${symbol}`, { query, ...options });
  }

  /**
   * Fetches the 10 most recent annual key metrics for a given company stock symbol.
   */
  retrieveKeyMetrics(
    symbol: string,
    query: FinancialRetrieveKeyMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinancialRetrieveKeyMetricsResponse> {
    return this._client.get(path`/financials/key-metrics/${symbol}`, { query, ...options });
  }

  /**
   * Fetches the 10 most recent annual financial ratios for a given company stock
   * symbol.
   */
  retrieveRatios(
    symbol: string,
    query: FinancialRetrieveRatiosParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinancialRetrieveRatiosResponse> {
    return this._client.get(path`/financials/ratios/${symbol}`, { query, ...options });
  }
}

export type FinancialRetrieveBalanceSheetResponse =
  Array<FinancialRetrieveBalanceSheetResponse.FinancialRetrieveBalanceSheetResponseItem>;

export namespace FinancialRetrieveBalanceSheetResponse {
  export interface FinancialRetrieveBalanceSheetResponseItem {
    'accepted-date'?: string;

    'account-payables'?: number;

    'accumulated-other-comprehensive-income-loss'?: number;

    'calendar-year'?: string;

    'capital-lease-obligations'?: number;

    'cash-and-cash-equivalents'?: number;

    'cash-and-short-term-investments'?: number;

    cik?: string;

    'common-stock'?: number;

    date?: string;

    'deferred-revenue'?: number;

    'deferred-revenue-non-current'?: number;

    'deferred-tax-liabilities-non-current'?: number;

    'filling-date'?: string;

    'final-link'?: string;

    goodwill?: number;

    'goodwill-and-intangible-assets'?: number;

    'intangible-assets'?: number;

    inventory?: number;

    link?: string;

    'long-term-debt'?: number;

    'long-term-investments'?: number;

    'minority-interest'?: number;

    'net-debt'?: number;

    'net-receivables'?: number;

    'other-assets'?: number;

    'other-current-assets'?: number;

    'other-current-liabilities'?: number;

    'other-liabilities'?: number;

    'other-non-current-assets'?: number;

    'other-non-current-liabilities'?: number;

    'othertotal-stockholders-equity'?: number;

    period?: string;

    'preferred-stock'?: number;

    'property-plant-equipment-net'?: number;

    'reported-currency'?: string;

    'retained-earnings'?: number;

    'short-term-debt'?: number;

    'short-term-investments'?: number;

    symbol?: string;

    'tax-assets'?: number;

    'tax-payables'?: number;

    'total-assets'?: number;

    'total-current-assets'?: number;

    'total-current-liabilities'?: number;

    'total-debt'?: number;

    'total-equity'?: number;

    'total-investments'?: number;

    'total-liabilities'?: number;

    'total-liabilities-and-stockholders-equity'?: number;

    'total-liabilities-and-total-equity'?: number;

    'total-non-current-assets'?: number;

    'total-non-current-liabilities'?: number;

    'total-stockholders-equity'?: number;
  }
}

export type FinancialRetrieveCashFlowResponse =
  Array<FinancialRetrieveCashFlowResponse.FinancialRetrieveCashFlowResponseItem>;

export namespace FinancialRetrieveCashFlowResponse {
  export interface FinancialRetrieveCashFlowResponseItem {
    'accepted-date'?: string;

    'accounts-payables'?: number;

    'accounts-receivables'?: number;

    'acquisitions-net'?: number;

    'calendar-year'?: string;

    'capital-expenditure'?: number;

    'cash-at-beginning-of-period'?: number;

    'cash-at-end-of-period'?: number;

    'change-in-working-capital'?: number;

    cik?: string;

    'common-stock-issued'?: number;

    'common-stock-repurchased'?: number;

    date?: string;

    'debt-repayment'?: number;

    'deferred-income-tax'?: number;

    'depreciation-and-amortization'?: number;

    'dividends-paid'?: number;

    'effect-of-forex-changes-on-cash'?: number;

    'filling-date'?: string;

    'final-link'?: string;

    'free-cash-flow'?: number;

    inventory?: number;

    'investments-in-property-plant-and-equipment'?: number;

    link?: string;

    'net-cash-provided-by-operating-activities'?: number;

    'net-cash-used-for-investing-activites'?: number;

    'net-cash-used-provided-by-financing-activities'?: number;

    'net-change-in-cash'?: number;

    'net-income'?: number;

    'operating-cash-flow'?: number;

    'other-financing-activites'?: number;

    'other-investing-activites'?: number;

    'other-non-cash-items'?: number;

    'other-working-capital'?: number;

    period?: string;

    'purchases-of-investments'?: number;

    'reported-currency'?: string;

    'sales-maturities-of-investments'?: number;

    'stock-based-compensation'?: number;

    symbol?: string;
  }
}

export type FinancialRetrieveFinancialScoreResponse =
  Array<FinancialRetrieveFinancialScoreResponse.FinancialRetrieveFinancialScoreResponseItem>;

export namespace FinancialRetrieveFinancialScoreResponse {
  export interface FinancialRetrieveFinancialScoreResponseItem {
    'altman-z-score'?: number;

    ebit?: number;

    'market-cap'?: number;

    'piotroski-score'?: number;

    'retained-earnings'?: number;

    revenue?: number;

    symbol?: string;

    'total-assets'?: number;

    'total-liabilities'?: number;

    'working-capital'?: number;
  }
}

export type FinancialRetrieveIncomeStatementResponse =
  Array<FinancialRetrieveIncomeStatementResponse.FinancialRetrieveIncomeStatementResponseItem>;

export namespace FinancialRetrieveIncomeStatementResponse {
  export interface FinancialRetrieveIncomeStatementResponseItem {
    'accepted-date'?: string;

    'calendar-year'?: string;

    cik?: string;

    'cost-and-expenses'?: number;

    'cost-of-revenue'?: number;

    date?: string;

    'depreciation-and-amortization'?: number;

    ebitda?: number;

    ebitdaratio?: number;

    eps?: number;

    epsdiluted?: number;

    'filling-date'?: string;

    'final-link'?: string;

    'general-and-administrative-expenses'?: number;

    'gross-profit'?: number;

    'gross-profit-ratio'?: number;

    'income-before-tax'?: number;

    'income-before-tax-ratio'?: number;

    'income-tax-expense'?: number;

    'interest-expense'?: number;

    'interest-income'?: number;

    link?: string;

    'net-income'?: number;

    'net-income-ratio'?: number;

    'operating-expenses'?: number;

    'operating-income'?: number;

    'operating-income-ratio'?: number;

    'other-expenses'?: number;

    period?: string;

    'reported-currency'?: string;

    'research-and-development-expenses'?: number;

    revenue?: number;

    'selling-and-marketing-expenses'?: number;

    'selling-general-and-administrative-expenses'?: number;

    symbol?: string;

    'total-other-income-expenses-net'?: number;

    'weighted-average-shs-out'?: number;

    'weighted-average-shs-out-dil'?: number;
  }
}

export type FinancialRetrieveKeyMetricsResponse =
  Array<FinancialRetrieveKeyMetricsResponse.FinancialRetrieveKeyMetricsResponseItem>;

export namespace FinancialRetrieveKeyMetricsResponse {
  export interface FinancialRetrieveKeyMetricsResponseItem {
    'average-inventory'?: number;

    'average-payables'?: number;

    'average-receivables'?: number;

    'book-value-per-share'?: number;

    'calendar-year'?: string;

    'capex-per-share'?: number;

    'capex-to-depreciation'?: number;

    'capex-to-operating-cash-flow'?: number;

    'capex-to-revenue'?: number;

    'cash-per-share'?: number;

    'current-ratio'?: number;

    date?: string;

    'days-of-inventory-on-hand'?: number;

    'days-payables-outstanding'?: number;

    'days-sales-outstanding'?: number;

    'debt-to-assets'?: number;

    'debt-to-equity'?: number;

    'dividend-yield'?: number;

    'earnings-yield'?: number;

    'enterprise-value'?: number;

    'enterprise-value-over-ebitda'?: number;

    'ev-to-free-cash-flow'?: number;

    'ev-to-operating-cash-flow'?: number;

    'ev-to-sales'?: number;

    'free-cash-flow-per-share'?: number;

    'free-cash-flow-yield'?: number;

    'graham-net-net'?: number;

    'graham-number'?: number;

    'income-quality'?: number;

    'intangibles-to-total-assets'?: number;

    'interest-coverage'?: number;

    'interest-debt-per-share'?: number;

    'inventory-turnover'?: number;

    'invested-capital'?: number;

    'market-cap'?: number;

    'net-current-asset-value'?: number;

    'net-debt-to-ebitda'?: number;

    'net-income-per-share'?: number;

    'operating-cash-flow-per-share'?: number;

    'payables-turnover'?: number;

    'payout-ratio'?: number;

    'pb-ratio'?: number;

    'pe-ratio'?: number;

    period?: string;

    'pfcf-ratio'?: number;

    pocfratio?: number;

    'price-to-sales-ratio'?: number;

    'ptb-ratio'?: number;

    'receivables-turnover'?: number;

    'research-and-ddevelopement-to-revenue'?: number;

    'return-on-tangible-assets'?: number;

    'revenue-per-share'?: number;

    roe?: number;

    roic?: number;

    'sales-general-and-administrative-to-revenue'?: number;

    'shareholders-equity-per-share'?: number;

    'stock-based-compensation-to-revenue'?: number;

    symbol?: string;

    'tangible-asset-value'?: number;

    'tangible-book-value-per-share'?: number;

    'working-capital'?: number;
  }
}

export type FinancialRetrieveRatiosResponse =
  Array<FinancialRetrieveRatiosResponse.FinancialRetrieveRatiosResponseItem>;

export namespace FinancialRetrieveRatiosResponse {
  export interface FinancialRetrieveRatiosResponseItem {
    'asset-turnover'?: number;

    'calendar-year'?: string;

    'capital-expenditure-coverage-ratio'?: number;

    'cash-conversion-cycle'?: number;

    'cash-flow-coverage-ratios'?: number;

    'cash-flow-to-debt-ratio'?: number;

    'cash-per-share'?: number;

    'cash-ratio'?: number;

    'company-equity-multiplier'?: number;

    'current-ratio'?: number;

    date?: string;

    'days-of-inventory-outstanding'?: number;

    'days-of-payables-outstanding'?: number;

    'days-of-sales-outstanding'?: number;

    'debt-equity-ratio'?: number;

    'debt-ratio'?: number;

    'dividend-paid-and-capex-coverage-ratio'?: number;

    'dividend-payout-ratio'?: number;

    'dividend-yield'?: number;

    'ebit-per-revenue'?: number;

    'ebt-per-ebit'?: number;

    'effective-tax-rate'?: number;

    'enterprise-value-multiple'?: number;

    'fixed-asset-turnover'?: number;

    'free-cash-flow-operating-cash-flow-ratio'?: number;

    'free-cash-flow-per-share'?: number;

    'gross-profit-margin'?: number;

    'interest-coverage'?: number;

    'inventory-turnover'?: number;

    'long-term-debt-to-capitalization'?: number;

    'net-income-per-ebt'?: number;

    'net-profit-margin'?: number;

    'operating-cash-flow-per-share'?: number;

    'operating-cash-flow-sales-ratio'?: number;

    'operating-cycle'?: number;

    'operating-profit-margin'?: number;

    'payables-turnover'?: number;

    'payout-ratio'?: number;

    period?: string;

    'pretax-profit-margin'?: number;

    'price-book-value-ratio'?: number;

    'price-cash-flow-ratio'?: number;

    'price-earnings-ratio'?: number;

    'price-earnings-to-growth-ratio'?: number;

    'price-fair-value'?: number;

    'price-sales-ratio'?: number;

    'price-to-book-ratio'?: number;

    'price-to-free-cash-flows-ratio'?: number;

    'price-to-operating-cash-flows-ratio'?: number;

    'price-to-sales-ratio'?: number;

    'quick-ratio'?: number;

    'receivables-turnover'?: number;

    'return-on-assets'?: number;

    'return-on-capital-employed'?: number;

    'return-on-equity'?: number;

    'short-term-coverage-ratios'?: number;

    symbol?: string;

    'total-debt-to-capitalization'?: number;
  }
}

export interface FinancialRetrieveBalanceSheetParams {
  /**
   * The format of the returned data (json or csv).
   */
  datatype?: 'json' | 'csv';

  /**
   * The maximum number of records to return.
   */
  limit?: number;

  /**
   * The period of financial data to retrieve (annual or quarter).
   */
  period?: 'annual' | 'quarter';
}

export interface FinancialRetrieveCashFlowParams {
  /**
   * The format of the returned data (json or csv).
   */
  datatype?: 'json' | 'csv';

  /**
   * The maximum number of records to return.
   */
  limit?: number;

  /**
   * The period of financial data to retrieve (annual or quarter).
   */
  period?: 'annual' | 'quarter';
}

export interface FinancialRetrieveFinancialScoreParams {
  /**
   * The maximum number of records to return. Defaults to provider's default.
   */
  limit?: number;
}

export interface FinancialRetrieveIncomeStatementParams {
  /**
   * The format of the returned data (json or csv).
   */
  datatype?: 'json' | 'csv';

  /**
   * The maximum number of records to return.
   */
  limit?: number;

  /**
   * The period of financial data to retrieve (annual or quarter).
   */
  period?: 'annual' | 'quarter';
}

export interface FinancialRetrieveKeyMetricsParams {
  /**
   * The format of the returned data (json or csv).
   */
  datatype?: 'json' | 'csv';

  /**
   * The maximum number of records to return.
   */
  limit?: number;

  /**
   * The period of financial data to retrieve (annual or quarter).
   */
  period?: 'annual' | 'quarter';
}

export interface FinancialRetrieveRatiosParams {
  /**
   * The format of the returned data (json or csv).
   */
  datatype?: 'json' | 'csv';

  /**
   * The maximum number of records to return.
   */
  limit?: number;

  /**
   * The period of financial data to retrieve (annual or quarter).
   */
  period?: 'annual' | 'quarter';
}

export declare namespace Financials {
  export {
    type FinancialRetrieveBalanceSheetResponse as FinancialRetrieveBalanceSheetResponse,
    type FinancialRetrieveCashFlowResponse as FinancialRetrieveCashFlowResponse,
    type FinancialRetrieveFinancialScoreResponse as FinancialRetrieveFinancialScoreResponse,
    type FinancialRetrieveIncomeStatementResponse as FinancialRetrieveIncomeStatementResponse,
    type FinancialRetrieveKeyMetricsResponse as FinancialRetrieveKeyMetricsResponse,
    type FinancialRetrieveRatiosResponse as FinancialRetrieveRatiosResponse,
    type FinancialRetrieveBalanceSheetParams as FinancialRetrieveBalanceSheetParams,
    type FinancialRetrieveCashFlowParams as FinancialRetrieveCashFlowParams,
    type FinancialRetrieveFinancialScoreParams as FinancialRetrieveFinancialScoreParams,
    type FinancialRetrieveIncomeStatementParams as FinancialRetrieveIncomeStatementParams,
    type FinancialRetrieveKeyMetricsParams as FinancialRetrieveKeyMetricsParams,
    type FinancialRetrieveRatiosParams as FinancialRetrieveRatiosParams,
  };
}
