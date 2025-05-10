// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FinbudData from 'finbud-data';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import retrieve_estimates_analysts from './analysts/retrieve-estimates-analysts';
import retrieve_price_targets_analysts from './analysts/retrieve-price-targets-analysts';
import retrieve_recommendations_analysts from './analysts/retrieve-recommendations-analysts';
import retrieve_historical_charts from './charts/retrieve-historical-charts';
import retrieve_by_geography_company_revenue_segmentation from './company/revenue-segmentation/retrieve-by-geography-company-revenue-segmentation';
import retrieve_by_product_company_revenue_segmentation from './company/revenue-segmentation/retrieve-by-product-company-revenue-segmentation';
import get_calendar_earnings from './earnings/get-calendar-earnings';
import get_transcripts_earnings from './earnings/get-transcripts-earnings';
import get_calendar_economics from './economics/get-calendar-economics';
import get_indicator_data_economics from './economics/get-indicator-data-economics';
import retrieve_holdings_etf from './etf/retrieve-holdings-etf';
import retrieve_balance_sheet_financials from './financials/retrieve-balance-sheet-financials';
import retrieve_cash_flow_financials from './financials/retrieve-cash-flow-financials';
import retrieve_financial_score_financials from './financials/retrieve-financial-score-financials';
import retrieve_income_statement_financials from './financials/retrieve-income-statement-financials';
import retrieve_key_metrics_financials from './financials/retrieve-key-metrics-financials';
import retrieve_ratios_financials from './financials/retrieve-ratios-financials';
import retrieve_disclosure_government_congress from './government/congress/retrieve-disclosure-government-congress';
import retrieve_trading_government_congress from './government/congress/retrieve-trading-government-congress';
import retrieve_insider_trading from './insider-trading/retrieve-insider-trading';
import list_active_market_overview from './market/overview/list-active-market-overview';
import list_gainers_market_overview from './market/overview/list-gainers-market-overview';
import list_losers_market_overview from './market/overview/list-losers-market-overview';
import retrieve_crypto_news from './news/retrieve-crypto-news';
import retrieve_forex_news from './news/retrieve-forex-news';
import retrieve_stock_news from './news/retrieve-stock-news';
import retrieve_quotes_options from './options/retrieve-quotes-options';
import retrieve_technical_indicator_options from './options/retrieve-technical-indicator-options';
import retrieve_chain_options_snapshot from './options/snapshot/retrieve-chain-options-snapshot';
import retrieve_contract_options_snapshot from './options/snapshot/retrieve-contract-options-snapshot';
import retrieve_unified_options_snapshot from './options/snapshot/retrieve-unified-options-snapshot';
import retrieve_options_trades from './options/trades/retrieve-options-trades';
import retrieve_last_options_trades from './options/trades/retrieve-last-options-trades';
import retrieve_quotes from './quotes/retrieve-quotes';
import general_search_search from './search/general-search-search';
import retrieve_indicator_data_technicals from './technicals/retrieve-indicator-data-technicals';

export type HandlerFunction = (client: FinbudData, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_estimates_analysts);
addEndpoint(retrieve_price_targets_analysts);
addEndpoint(retrieve_recommendations_analysts);
addEndpoint(retrieve_historical_charts);
addEndpoint(retrieve_by_geography_company_revenue_segmentation);
addEndpoint(retrieve_by_product_company_revenue_segmentation);
addEndpoint(get_calendar_earnings);
addEndpoint(get_transcripts_earnings);
addEndpoint(get_calendar_economics);
addEndpoint(get_indicator_data_economics);
addEndpoint(retrieve_holdings_etf);
addEndpoint(retrieve_balance_sheet_financials);
addEndpoint(retrieve_cash_flow_financials);
addEndpoint(retrieve_financial_score_financials);
addEndpoint(retrieve_income_statement_financials);
addEndpoint(retrieve_key_metrics_financials);
addEndpoint(retrieve_ratios_financials);
addEndpoint(retrieve_disclosure_government_congress);
addEndpoint(retrieve_trading_government_congress);
addEndpoint(retrieve_insider_trading);
addEndpoint(list_active_market_overview);
addEndpoint(list_gainers_market_overview);
addEndpoint(list_losers_market_overview);
addEndpoint(retrieve_crypto_news);
addEndpoint(retrieve_forex_news);
addEndpoint(retrieve_stock_news);
addEndpoint(retrieve_quotes_options);
addEndpoint(retrieve_technical_indicator_options);
addEndpoint(retrieve_chain_options_snapshot);
addEndpoint(retrieve_contract_options_snapshot);
addEndpoint(retrieve_unified_options_snapshot);
addEndpoint(retrieve_options_trades);
addEndpoint(retrieve_last_options_trades);
addEndpoint(retrieve_quotes);
addEndpoint(general_search_search);
addEndpoint(retrieve_indicator_data_technicals);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
