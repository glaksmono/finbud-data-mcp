# Analysts

Types:

- <code><a href="./src/resources/analysts.ts">AnalystRetrieveEstimatesResponse</a></code>
- <code><a href="./src/resources/analysts.ts">AnalystRetrievePriceTargetsResponse</a></code>
- <code><a href="./src/resources/analysts.ts">AnalystRetrieveRecommendationsResponse</a></code>

Methods:

- <code title="get /analysts/estimates/{symbol}">client.analysts.<a href="./src/resources/analysts.ts">retrieveEstimates</a>(symbol) -> AnalystRetrieveEstimatesResponse</code>
- <code title="get /analysts/price-targets/{symbol}">client.analysts.<a href="./src/resources/analysts.ts">retrievePriceTargets</a>(symbol) -> AnalystRetrievePriceTargetsResponse</code>
- <code title="get /analysts/recommendations/{symbol}">client.analysts.<a href="./src/resources/analysts.ts">retrieveRecommendations</a>(symbol) -> AnalystRetrieveRecommendationsResponse</code>

# Charts

Types:

- <code><a href="./src/resources/charts.ts">ChartRetrieveHistoricalResponse</a></code>

Methods:

- <code title="get /charts/{symbol}/{timeframe}">client.charts.<a href="./src/resources/charts.ts">retrieveHistorical</a>(timeframe, { ...params }) -> ChartRetrieveHistoricalResponse</code>

# Company

## RevenueSegmentation

Types:

- <code><a href="./src/resources/company/revenue-segmentation.ts">RevenueSegmentationRetrieveByGeographyResponse</a></code>
- <code><a href="./src/resources/company/revenue-segmentation.ts">RevenueSegmentationRetrieveByProductResponse</a></code>

Methods:

- <code title="get /company/revenue-segmentation/geography/{symbol}">client.company.revenueSegmentation.<a href="./src/resources/company/revenue-segmentation.ts">retrieveByGeography</a>(symbol, { ...params }) -> RevenueSegmentationRetrieveByGeographyResponse</code>
- <code title="get /company/revenue-segmentation/product/{symbol}">client.company.revenueSegmentation.<a href="./src/resources/company/revenue-segmentation.ts">retrieveByProduct</a>(symbol, { ...params }) -> RevenueSegmentationRetrieveByProductResponse</code>

# Earnings

Types:

- <code><a href="./src/resources/earnings.ts">EarningGetCalendarResponse</a></code>
- <code><a href="./src/resources/earnings.ts">EarningGetTranscriptsResponse</a></code>

Methods:

- <code title="get /earnings/calendar">client.earnings.<a href="./src/resources/earnings.ts">getCalendar</a>({ ...params }) -> EarningGetCalendarResponse</code>
- <code title="get /earnings/transcripts/{symbol}">client.earnings.<a href="./src/resources/earnings.ts">getTranscripts</a>(symbol, { ...params }) -> EarningGetTranscriptsResponse</code>

# Economics

Types:

- <code><a href="./src/resources/economics.ts">EconomicGetCalendarResponse</a></code>
- <code><a href="./src/resources/economics.ts">EconomicGetIndicatorDataResponse</a></code>

Methods:

- <code title="get /economics/calendar">client.economics.<a href="./src/resources/economics.ts">getCalendar</a>({ ...params }) -> EconomicGetCalendarResponse</code>
- <code title="get /economics/indicators/{name}">client.economics.<a href="./src/resources/economics.ts">getIndicatorData</a>(name, { ...params }) -> EconomicGetIndicatorDataResponse</code>

# Etf

Types:

- <code><a href="./src/resources/etf.ts">EtfRetrieveHoldingsResponse</a></code>

Methods:

- <code title="get /etf/holdings/{symbol}">client.etf.<a href="./src/resources/etf.ts">retrieveHoldings</a>(symbol, { ...params }) -> EtfRetrieveHoldingsResponse</code>

# Financials

Types:

- <code><a href="./src/resources/financials.ts">FinancialRetrieveBalanceSheetResponse</a></code>
- <code><a href="./src/resources/financials.ts">FinancialRetrieveCashFlowResponse</a></code>
- <code><a href="./src/resources/financials.ts">FinancialRetrieveFinancialScoreResponse</a></code>
- <code><a href="./src/resources/financials.ts">FinancialRetrieveIncomeStatementResponse</a></code>
- <code><a href="./src/resources/financials.ts">FinancialRetrieveKeyMetricsResponse</a></code>
- <code><a href="./src/resources/financials.ts">FinancialRetrieveRatiosResponse</a></code>

Methods:

- <code title="get /financials/balance-sheet/{symbol}">client.financials.<a href="./src/resources/financials.ts">retrieveBalanceSheet</a>(symbol, { ...params }) -> FinancialRetrieveBalanceSheetResponse</code>
- <code title="get /financials/cash-flow/{symbol}">client.financials.<a href="./src/resources/financials.ts">retrieveCashFlow</a>(symbol, { ...params }) -> FinancialRetrieveCashFlowResponse</code>
- <code title="get /financials/score/{symbol}">client.financials.<a href="./src/resources/financials.ts">retrieveFinancialScore</a>(symbol, { ...params }) -> FinancialRetrieveFinancialScoreResponse</code>
- <code title="get /financials/income-statement/{symbol}">client.financials.<a href="./src/resources/financials.ts">retrieveIncomeStatement</a>(symbol, { ...params }) -> FinancialRetrieveIncomeStatementResponse</code>
- <code title="get /financials/key-metrics/{symbol}">client.financials.<a href="./src/resources/financials.ts">retrieveKeyMetrics</a>(symbol, { ...params }) -> FinancialRetrieveKeyMetricsResponse</code>
- <code title="get /financials/ratios/{symbol}">client.financials.<a href="./src/resources/financials.ts">retrieveRatios</a>(symbol, { ...params }) -> FinancialRetrieveRatiosResponse</code>

# Government

## Congress

Types:

- <code><a href="./src/resources/government/congress.ts">CongressRetrieveDisclosureResponse</a></code>
- <code><a href="./src/resources/government/congress.ts">CongressRetrieveTradingResponse</a></code>

Methods:

- <code title="get /government/congress/disclosure">client.government.congress.<a href="./src/resources/government/congress.ts">retrieveDisclosure</a>({ ...params }) -> CongressRetrieveDisclosureResponse</code>
- <code title="get /government/congress/trading">client.government.congress.<a href="./src/resources/government/congress.ts">retrieveTrading</a>({ ...params }) -> CongressRetrieveTradingResponse</code>

# InsiderTrading

Types:

- <code><a href="./src/resources/insider-trading.ts">InsiderTradingRetrieveResponse</a></code>

Methods:

- <code title="get /insider-trading/{symbol}">client.insiderTrading.<a href="./src/resources/insider-trading.ts">retrieve</a>(symbol, { ...params }) -> InsiderTradingRetrieveResponse</code>

# Market

## Overview

Types:

- <code><a href="./src/resources/market/overview.ts">OverviewListActiveResponse</a></code>
- <code><a href="./src/resources/market/overview.ts">OverviewListGainersResponse</a></code>
- <code><a href="./src/resources/market/overview.ts">OverviewListLosersResponse</a></code>

Methods:

- <code title="get /market/overview/active">client.market.overview.<a href="./src/resources/market/overview.ts">listActive</a>() -> OverviewListActiveResponse</code>
- <code title="get /market/overview/gainers">client.market.overview.<a href="./src/resources/market/overview.ts">listGainers</a>() -> OverviewListGainersResponse</code>
- <code title="get /market/overview/losers">client.market.overview.<a href="./src/resources/market/overview.ts">listLosers</a>() -> OverviewListLosersResponse</code>

# News

Types:

- <code><a href="./src/resources/news.ts">NewsRetrieveCryptoResponse</a></code>
- <code><a href="./src/resources/news.ts">NewsRetrieveForexResponse</a></code>
- <code><a href="./src/resources/news.ts">NewsRetrieveStockResponse</a></code>

Methods:

- <code title="get /news/crypto">client.news.<a href="./src/resources/news.ts">retrieveCrypto</a>({ ...params }) -> NewsRetrieveCryptoResponse</code>
- <code title="get /news/forex">client.news.<a href="./src/resources/news.ts">retrieveForex</a>({ ...params }) -> NewsRetrieveForexResponse</code>
- <code title="get /news/stock/{symbol}">client.news.<a href="./src/resources/news.ts">retrieveStock</a>(symbol, { ...params }) -> NewsRetrieveStockResponse</code>

# Options

Types:

- <code><a href="./src/resources/options/options.ts">OptionRetrieveQuotesResponse</a></code>
- <code><a href="./src/resources/options/options.ts">OptionRetrieveTechnicalIndicatorResponse</a></code>

Methods:

- <code title="get /options/quotes/{optionsTicker}">client.options.<a href="./src/resources/options/options.ts">retrieveQuotes</a>(optionsTicker, { ...params }) -> OptionRetrieveQuotesResponse</code>
- <code title="get /options/technicals/{indicator}/{optionsTicker}">client.options.<a href="./src/resources/options/options.ts">retrieveTechnicalIndicator</a>(optionsTicker, { ...params }) -> OptionRetrieveTechnicalIndicatorResponse</code>

## Snapshot

Types:

- <code><a href="./src/resources/options/snapshot.ts">SnapshotRetrieveChainResponse</a></code>
- <code><a href="./src/resources/options/snapshot.ts">SnapshotRetrieveContractResponse</a></code>
- <code><a href="./src/resources/options/snapshot.ts">SnapshotRetrieveUnifiedResponse</a></code>

Methods:

- <code title="get /options/snapshot/chain/{underlyingAsset}">client.options.snapshot.<a href="./src/resources/options/snapshot.ts">retrieveChain</a>(underlyingAsset, { ...params }) -> SnapshotRetrieveChainResponse</code>
- <code title="get /options/snapshot/contract/{underlyingAsset}/{optionContract}">client.options.snapshot.<a href="./src/resources/options/snapshot.ts">retrieveContract</a>(optionContract, { ...params }) -> SnapshotRetrieveContractResponse</code>
- <code title="get /options/snapshot/unified">client.options.snapshot.<a href="./src/resources/options/snapshot.ts">retrieveUnified</a>({ ...params }) -> SnapshotRetrieveUnifiedResponse</code>

## Trades

Types:

- <code><a href="./src/resources/options/trades.ts">TradeRetrieveResponse</a></code>
- <code><a href="./src/resources/options/trades.ts">TradeRetrieveLastResponse</a></code>

Methods:

- <code title="get /options/trades/{optionsTicker}">client.options.trades.<a href="./src/resources/options/trades.ts">retrieve</a>(optionsTicker, { ...params }) -> TradeRetrieveResponse</code>
- <code title="get /options/trades/last/{optionsTicker}">client.options.trades.<a href="./src/resources/options/trades.ts">retrieveLast</a>(optionsTicker) -> TradeRetrieveLastResponse</code>

# Quotes

Types:

- <code><a href="./src/resources/quotes.ts">QuoteRetrieveResponse</a></code>

Methods:

- <code title="get /quotes/{symbol}">client.quotes.<a href="./src/resources/quotes.ts">retrieve</a>(symbol) -> QuoteRetrieveResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchGeneralSearchResponse</a></code>

Methods:

- <code title="get /search/general">client.search.<a href="./src/resources/search.ts">generalSearch</a>({ ...params }) -> SearchGeneralSearchResponse</code>

# Technicals

Types:

- <code><a href="./src/resources/technicals.ts">TechnicalRetrieveIndicatorDataResponse</a></code>

Methods:

- <code title="get /technicals/{indicator}/{symbol}/{interval}">client.technicals.<a href="./src/resources/technicals.ts">retrieveIndicatorData</a>(interval, { ...params }) -> TechnicalRetrieveIndicatorDataResponse</code>
