# Finbud Data TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export FINBUD_DATA_API_KEY="My API Key"
npx -y finbud-data-mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "finbud_data_api": {
      "command": "npx",
      "args": ["-y", "finbud-data-mcp"],
      "env": {
        "FINBUD_DATA_API_KEY": "My API Key",
        "MCP_SERVER_URL": "https://data.finbud.ai/api"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "finbud-data-mcp/server";

// import a specific tool
import retrieveEstimatesAnalysts from "finbud-data-mcp/tools/analysts/retrieve-estimates-analysts";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveEstimatesAnalysts, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `analysts`:

- `retrieve_estimates_analysts` (`read`): Fetches analyst estimates (revenue, EPS) for a given company stock symbol.
- `retrieve_price_targets_analysts` (`read`): Fetches analyst price target data for a given company stock symbol.
- `retrieve_recommendations_analysts` (`read`): Fetches analyst stock recommendations (buy, hold, sell ratings) for a given company stock symbol.

### Resource `charts`:

- `retrieve_historical_charts` (`read`): Fetches historical intraday chart data for a specific company stock symbol and timeframe. Optional query parameters allow specifying a date range ('from', 'to') and requesting extended hours data ('extended').

### Resource `company.revenue_segmentation`:

- `retrieve_by_geography_company_revenue_segmentation` (`read`): Fetches a breakdown of a company's revenue by geographic segment for a given stock symbol, optionally filtered by period (annual/quarter).
- `retrieve_by_product_company_revenue_segmentation` (`read`): Fetches a breakdown of a company's revenue by product segment for a given stock symbol, optionally filtered by period (annual/quarter).

### Resource `earnings`:

- `get_calendar_earnings` (`read`): Fetches the earnings calendar for a specified date range or the next few days.
- `get_transcripts_earnings` (`read`): Fetches the earnings call transcripts for a given company stock symbol, optionally filtered by year or quarter.

### Resource `economics`:

- `get_calendar_economics` (`read`): Fetches a calendar of upcoming or past economic events (e.g., CPI release, FOMC meeting) for a specified date range.
- `get_indicator_data_economics` (`read`): Fetches historical data for a specific economic indicator (e.g., real GDP, CPI, unemployment rate). The indicator name should be provided in kebab-case (e.g., 'real-gdp').

### Resource `etf`:

- `retrieve_holdings_etf` (`read`): Fetches the underlying holdings for a specific Exchange Traded Fund (ETF) symbol.

### Resource `financials`:

- `retrieve_balance_sheet_financials` (`read`): Fetches the 10 most recent annual balance sheet statements for a given company stock symbol.
- `retrieve_cash_flow_financials` (`read`): Fetches the 10 most recent annual cash flow statements for a given company stock symbol.
- `retrieve_financial_score_financials` (`read`): Fetches the financial score for a given company stock symbol. The score provides a quick assessment of a company's financial health.
- `retrieve_income_statement_financials` (`read`): Fetches the 10 most recent annual income statements for a given company stock symbol.
- `retrieve_key_metrics_financials` (`read`): Fetches the 10 most recent annual key metrics for a given company stock symbol.
- `retrieve_ratios_financials` (`read`): Fetches the 10 most recent annual financial ratios for a given company stock symbol.

### Resource `government.congress`:

- `retrieve_disclosure_government_congress` (`read`): Fetches data from financial disclosures made by members of the U.S. House of Representatives. Can be filtered by stock symbol.
- `retrieve_trading_government_congress` (`read`): Fetches data on stock trades made by U.S. Senators, as reported in Periodic Transaction Reports (PTRs). Can be filtered by stock symbol.

### Resource `insider_trading`:

- `retrieve_insider_trading` (`read`): Fetches insider trading data for a specific company stock symbol.

### Resource `market.overview`:

- `list_active_market_overview` (`read`): Fetches a list of the stocks with the highest trading volume for the day.
- `list_gainers_market_overview` (`read`): Fetches a list of the stocks with the highest percentage gain for the day.
- `list_losers_market_overview` (`read`): Fetches a list of the stocks with the largest percentage loss for the day.

### Resource `news`:

- `retrieve_crypto_news` (`read`): Fetches recent news articles related to the cryptocurrency market.
- `retrieve_forex_news` (`read`): Fetches recent news articles related to the Forex market.
- `retrieve_stock_news` (`read`): Fetches recent news articles for a given company stock symbol or multiple symbols.

### Resource `options`:

- `retrieve_quotes_options` (`read`): Retrieves historical quotes (NBBO - National Best Bid and Offer) for a specified options contract over a defined time range.
  Includes bid/ask prices, sizes, exchange IDs, and timestamps. Max 50,000 results per request.
- `retrieve_technical_indicator_options` (`read`): Retrieves historical technical indicator data (SMA, EMA, MACD, RSI) for a specified options ticker.
  Query parameters vary based on the selected indicator.

### Resource `options.snapshot`:

- `retrieve_chain_options_snapshot` (`read`): Retrieves a comprehensive snapshot of all options contracts for a specified underlying asset ticker.
  This consolidates key metrics like pricing, greeks, IV, quotes, trades, and open interest.
- `retrieve_contract_options_snapshot` (`read`): Retrieves a comprehensive snapshot for a specific options contract identifier.
  Consolidates vital metrics like break-even price, day changes, IV, open interest, greeks, last quote/trade, and underlying asset info.
- `retrieve_unified_options_snapshot` (`read`): Retrieves a snapshot of the latest market data for one or more option contract tickers.
  This typically includes last trade, last quote, day's aggregate data, and previous day's aggregate data.

### Resource `options.trades`:

- `retrieve_options_trades` (`read`): Retrieves comprehensive, tick-level trade data for a specified options ticker within a defined time range.
  Includes price, size, exchange, conditions, and precise timestamps. Max 50,000 results per request.
- `retrieve_last_options_trades` (`read`): Retrieves the most recent trade for a specified options ticker symbol.

### Resource `quotes`:

- `retrieve_quotes` (`read`): Fetches the real-time full stock quote(s) for one or more comma-separated company stock symbols.

### Resource `search`:

- `general_search_search` (`read`): Search for various financial instruments including stocks, ETFs, forex, and cryptocurrencies by name or symbol across different exchanges.

### Resource `technicals`:

- `retrieve_indicator_data_technicals` (`read`): Fetches historical technical indicator data for a specific stock symbol, indicator type, and time interval. Supports various indicators like SMA, EMA, WMA, DEMA, TEMA, Williams %R, RSI, ADX, and Standard Deviation. Specific required parameters depend on the chosen indicator (e.g., 'period' is required for most).
