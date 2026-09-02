// Single source of truth for portfolio content.
// Accuracy rule: every figure here is traceable to a workbook in /public/projects
// or a linked repository. Never invent, round up, or embellish a metric.
// No em dashes or en dashes anywhere in this file (see portfolioData.test.js).

export const profile = {
  name: 'Muhammad Auwal Abdulaziz',
  title: 'Data Analyst',
  location: 'Abuja, Nigeria',
  timezone: 'UTC+1',
  email: 'Ghostiemoh@gmail.com',
  availability: 'Available for new work now. Based in Abuja, Nigeria (UTC+1), with good overlap into European and US morning hours.',
  confidentialityNote:
    'Some recent work is covered by client confidentiality and is not shown here. I can walk through the shape of it on a call.',
  github: 'https://github.com/Ghostiemoh',
  githubUser: 'Ghostiemoh',
  linkedin: 'https://www.linkedin.com/in/ghostieemoh/',
  twitter: 'https://x.com/Ghostieemoh',
  twitterUser: 'Ghostieemoh',
  telegram: 'https://t.me/Ghostiemoh',
  telegramUser: 'Ghostiemoh',
  resume: '/resume.html',
  headline: 'I turn messy data into findings people can act on.',
  summary:
    'I clean, question, and visualise data so a decision-maker can see what matters and what to do about it. Most of my work is in Excel, SQL, and Power BI, with a second track in Solana on-chain analysis.',
  positioning:
    'The tools are just tools. The job is making the evidence clear enough to act on, and saying what the next step should be.',
  bioLine:
    'Mathematics graduate, based in Abuja. I work as a data analyst across Excel, SQL, and Power BI, and I care most about the step where a number becomes a decision.'
};

// Hero flow rail.
export const pipeline = ['Data', 'Analysis', 'Insight', 'Story', 'Decision'];

// Ways a client can engage. Data work leads; on-chain is the smaller, last item.
export const services = [
  {
    title: 'Data cleaning and validation',
    detail:
      'A messy spreadsheet or export turned into a structurally sound dataset: types, duplicates, blanks, inconsistent labels, and integrity checks such as line-item totals.',
    scope: 'Usually 3 to 5 hours'
  },
  {
    title: 'SQL reporting layer',
    detail:
      'Your recurring questions written as reusable queries and views, so the same numbers can be re-run each month with no rework.',
    scope: 'Usually 1 to 2 days'
  },
  {
    title: 'Excel or Power BI dashboard',
    detail:
      'A report built around the decision a reader has to make, with slicers for self-serve exploration and a short written read of what it shows.',
    scope: 'Usually 1 to 2 days'
  },
  {
    title: 'On-chain dashboard',
    detail:
      'A Dune dashboard on Solana DEX flow, wallet cohorts, or protocol revenue, with the query logic documented and open to fork.',
    scope: 'Scoped per question'
  }
];

export const evidence = [
  {
    label: 'Education',
    value: 'B.Sc Mathematics',
    detail: 'Yusuf Maitama Sule University, Kano'
  },
  {
    label: 'Training',
    value: 'Advanced Data Analytics',
    detail: '3MTT, with Google, NITDA and Deeptech, 2025'
  },
  {
    label: 'Scope',
    value: 'SQL, Excel, Power BI, Python',
    detail: 'Cleaning, analysis, dashboards, reporting'
  },
  {
    label: 'Approach',
    value: 'Problem to recommendation',
    detail: 'Every case study ends with what to do next'
  }
];

export const caseStudies = [
  {
    id: 'CC-01',
    slug: 'call-centre-service-level',
    featured: true,
    title: 'Where a call centre was losing time, not capacity',
    outcome: 'The 20-second miss was a peak-hour queue problem, not an agent-quality one.',
    category: 'Operational analytics',
    role: '20 agents, 1,251 daily records',
    tools: ['Excel', 'PivotTables', 'Service metrics'],
    problem:
      'A 20-agent support line wanted to know whether it was missing its promise to answer calls within 20 seconds, and whether slow agents were the cause.',
    dataset:
      '1,251 agent-day records covering 20 agents over roughly 62 to 63 days each: incoming calls, answered calls, abandoned calls, and the share answered within 20 seconds.',
    process:
      'Rebuilt the raw log into a PivotTable model, then compared each agent on answer rate, speed to answer, and abandoned volume so consistent behaviour could be told apart from volume pressure.',
    finding:
      'The line answers 92.7% of calls but only 70.9% inside the 20-second target. The answer rate is tight across agents (91.7% to 94.0%); the speed varies almost twice as much (68.4% to 73.2%) and tracks how many calls were coming in, not who was on shift.',
    implication:
      'The gap is a queue-timing problem, not an agent-quality one. Adding capacity or overflow routing at the busiest intervals will move the number more than coaching individuals.',
    chart: {
      kind: 'bars',
      orientation: 'horizontal',
      axisMax: 100,
      unit: '%',
      bars: [
        { label: 'Calls answered', value: 92.7, display: '92.7%' },
        { label: 'Answered within 20s target', value: 70.9, display: '70.9%', highlight: true }
      ],
      gapNote: '21.8-point gap',
      caption:
        'Almost a quarter of answered calls arrive late rather than not at all. That points at the queue, not the agents.'
    },
    links: [
      { label: 'Workbook', href: '/projects/call-center-analysis.xlsx' },
      { label: 'Repository', href: 'https://github.com/Ghostiemoh/call-center-analysis' }
    ],
    deeper: {
      checked: [
        'Answer-rate spread across the 20 agents (91.7% to 94.0%, about 2.3 points) against the service-level spread (68.4% to 73.2%, about 4.8 points).',
        'Abandoned calls per agent, which run from 968 to 1,730 against a total of 27,139.',
        'Incoming calls per agent-day, averaging 198.5, checked against where the slow answers cluster.'
      ],
      recommend: [
        'Treat the 21.8-point gap as a scheduling and routing question: staff or overflow-route the busiest intervals first.',
        'Only look at individual coaching after the peak-hour queue is handled, since the answer rate is already even.'
      ]
    }
  },
  {
    id: 'RS-02',
    slug: 'retail-sales-partial-year',
    featured: true,
    title: 'Reading a sales trend without falling for a partial year',
    outcome: 'The apparent 2016 downturn was a data coverage gap. The real trend was up.',
    category: 'Retail BI',
    role: '113,036 orders, 2011 to 2016',
    tools: ['Excel', 'PivotTables', 'Slicers'],
    problem:
      'A bike retailer wanted a read on revenue growth by year, and a view of which categories, countries, and customer ages were carrying it.',
    dataset:
      '113,036 orders spanning 2011 to 2016, with cost, price, profit, country, product category, and customer age on every row. Total revenue 85.3M dollars, total profit 32.2M dollars.',
    process:
      'Built a PivotTable model with slicers for age group, country, category, and year, then checked order counts against revenue so a high-volume, low-value year could not pass as a strong one.',
    finding:
      'Revenue climbs from 9.0M dollars in 2011 to a 20.0M-dollar peak in 2015, then shows 17.7M for 2016. But 2016 is only a partial year in the data, so the drop is a coverage gap, not a decline. Bikes alone drive 20.5M of the 32.2M-dollar profit; the United States is the largest profit market at 11.1M.',
    implication:
      'Annualise or exclude the partial 2016 period before anyone reports a downturn. When comparing years, hold category and country mix steady so a mix shift is not misread as growth.',
    chart: {
      kind: 'bars',
      orientation: 'vertical',
      axisMax: 24,
      unit: 'M',
      prefix: '$',
      bars: [
        { label: '2011', value: 8.96, display: '$9.0M' },
        { label: '2012', value: 9.18, display: '$9.2M' },
        { label: '2013', value: 15.24, display: '$15.2M' },
        { label: '2014', value: 14.15, display: '$14.2M' },
        { label: '2015', value: 20.02, display: '$20.0M', highlight: true },
        { label: '2016', value: 17.71, display: '$17.7M', muted: true, tag: 'partial year' }
      ],
      caption:
        '2016 looks like a fall, but the data for that year stops early. The trend line is up, not down.'
    },
    links: [
      { label: 'Workbook', href: '/projects/retail-sales-dashboard.xlsx' },
      { label: 'Repository', href: 'https://github.com/Ghostiemoh/retail-sales-dashboard' }
    ],
    deeper: {
      checked: [
        'Revenue and profit by year, by country, by product category, and by customer age band.',
        'Order counts next to revenue for every year, so a busy but thin year cannot read as a strong one.',
        'Category mix per year, since bikes, accessories, and clothing carry very different margins.'
      ],
      recommend: [
        'Report 2011 to 2015 as the trend and flag 2016 as incomplete, or annualise it before charting.',
        'Keep country and category mix constant in year-on-year comparisons.'
      ]
    }
  },
  {
    id: 'DX-07',
    slug: 'solana-dex-crash-that-wasnt',
    featured: true,
    title: 'The Solana DEX crash that was really one venue',
    outcome: 'An 81% market drop was a single venue. Every other Solana DEX was flat to up.',
    category: 'On-chain analytics',
    role: '40+ venues, seven months of trades',
    tools: ['Dune SQL', 'dex_solana.trades', 'Solana'],
    problem:
      'A widely repeated figure said Solana on-chain trading had collapsed: total DEX volume down about 81% from its April 2026 peak to August. The question was whether the market had actually shrunk, or whether one thing was pulling the whole number down.',
    dataset:
      'Every Solana DEX trade in the dex_solana.trades spell on Dune from February to August 2026, covering Raydium, Orca, Meteora, PumpSwap, pump.fun, Phoenix and about thirty other venues. Volume is amount_usd per trade leg, with trades at or below 0 and at or above 25,000,000 dollars dropped as outliers.',
    process:
      'Broke the monthly total down by venue, then broke the one venue that moved down by pool type, then compared the last 30 days against the same 30-day window three months earlier to see where the remaining flow had gone.',
    finding:
      'Meteora was 83.5% of all Solana DEX volume in April and 11.3% in August; its monthly volume fell from 256.8B dollars to 6.7B. Every other Solana DEX combined did 50.9B dollars in April and 52.4B in August, and stayed between 41B and 55B every month in between. Inside Meteora the drop is almost entirely one pool type: DAMM v2 constant-product pools went from 252.6B dollars in April to 918M in August, a 99.6% fall, while the main Meteora DLMM book stayed near a 4B to 5.5B band every month.',
    implication:
      'The 81% figure is accurate and misleading. The tradable market did not shrink, it rotated: PumpSwap roughly doubled to 11.7B dollars over the period and is now the largest non-market-maker venue on Solana. Report the Meteora-adjusted number, and treat the DAMM v2 drop as incentive-driven volume leaving rather than organic demand disappearing.',
    chart: {
      kind: 'bars',
      orientation: 'vertical',
      axisMax: 320,
      unit: 'B',
      prefix: '$',
      bars: [
        { label: 'All DEXs, Apr', value: 307.7, display: '$308B' },
        { label: 'All DEXs, Aug', value: 59.2, display: '$59B' },
        { label: 'Ex-Meteora, Apr', value: 50.9, display: '$51B', highlight: true },
        { label: 'Ex-Meteora, Aug', value: 52.4, display: '$52B', highlight: true, tag: 'up on April' }
      ],
      caption:
        'The 81% fall is one venue. Take Meteora out and the rest of the Solana DEX market traded slightly more in August than at the April peak.'
    },
    links: [
      { label: 'Live dashboard', href: 'https://dune.com/ghostiemoh/solana-s-dex-crash-that-wasn-t' },
      { label: 'More on Dune', href: 'https://dune.com/ghostiemoh' }
    ],
    image: '/images/dune-dex-crash.jpg',
    imageAlt:
      'Stacked column chart from the live Dune dashboard: monthly Solana DEX volume split into Meteora and all other venues, February to August 2026.',
    imageCaption:
      'From the live dashboard on Dune. The Meteora block balloons in April and May, then nearly disappears by August, while the rest of the market holds steady.',
    deeper: {
      checked: [
        'The Meteora share of all Solana DEX volume by month: 36% in February, 83.5% at the April peak, 11.3% in August.',
        'Meteora split by pool type. DAMM v2 (cpamm) fell from 252.6B dollars in April to 918M in August; the DLMM book held near a 4B to 5.5B band every month from February on; DBC and legacy AMM pools stay under 1% of the total throughout.',
        'Trade count and unique traders against dollar volume: trades fell about 18% and unique traders rose from 7.8M to 8.8M while volume fell 81%, so the change is in notional size, not participation.',
        'The last 30 days against the same window three months earlier, per venue, to see where flow rotated.'
      ],
      recommend: [
        'Quote the Meteora-adjusted figure. Excluding Meteora, Solana DEX volume is flat to slightly up across the period.',
        'Treat the DAMM v2 unwind as incentive-sensitive until shown otherwise. The data establishes that the volume left, not why, so the cause is inference.',
        'Watch PumpSwap. It absorbed most of the freed-up flow and is now the largest non-market-maker DEX on Solana.'
      ]
    }
  },
  {
    id: 'CS-03',
    slug: 'coffee-shop-basket-not-footfall',
    featured: true,
    title: 'Revenue doubled while footfall stayed flat',
    outcome: 'Six months of revenue growth came from bigger baskets, not more visits.',
    category: 'Retail BI',
    role: '149,116 transactions, three stores',
    tools: ['Excel', 'PivotTables', 'Slicers'],
    problem:
      'A three-branch coffee retailer wanted to know what was behind six months of revenue growth, and where to put staff.',
    dataset:
      '149,116 transactions across three New York locations, with product, category, store, price, quantity, day, and hour on every row. Total revenue 698,812 dollars.',
    process:
      'Built a PivotTable model with store and category slicers, then broke transactions down by month, by weekday, by hour, and by store to separate a traffic story from a basket story.',
    finding:
      'Revenue more than doubles, from 81.7k dollars in January to 166.5k in June. Yet daily transaction counts sit within 6% of each other across every weekday, and the three stores are within 3% of each other on revenue. Coffee and tea are about 70% of all transactions, and 10:00 is the single busiest hour.',
    implication:
      'The growth is coming from basket value and product mix, not more visits. Track average transaction value and attach rate, and staff the mid-morning peak rather than spending to bring in new footfall.',
    chart: {
      kind: 'bars',
      orientation: 'vertical',
      axisMax: 180,
      unit: 'k',
      prefix: '$',
      bars: [
        { label: 'Jan', value: 81.7, display: '$81.7k' },
        { label: 'Feb', value: 76.1, display: '$76.1k' },
        { label: 'Mar', value: 98.8, display: '$98.8k' },
        { label: 'Apr', value: 118.9, display: '$118.9k' },
        { label: 'May', value: 156.7, display: '$156.7k' },
        { label: 'Jun', value: 166.5, display: '$166.5k', highlight: true, tag: '2.0x January' }
      ],
      caption:
        'Six months, roughly double the revenue. Transaction counts barely moved, so the change is in what each customer buys.'
    },
    links: [
      { label: 'Workbook', href: '/projects/coffee-shop-sales.xlsx' },
      { label: 'Repository', href: 'https://github.com/Ghostiemoh/coffee-shop-sales-dashboard' }
    ],
    deeper: {
      checked: [
        'Revenue by month against transaction count by month, so growth in value is not confused with growth in visits.',
        'Transaction counts by weekday (all near 21,000) and by store (within 3% on revenue).',
        'Category and product mix, and the hour-of-day distribution.'
      ],
      recommend: [
        'Report average transaction value and attach rate alongside revenue, since those are what moved.',
        'Schedule staff around the 10:00 peak; the three stores can share one staffing template.'
      ]
    }
  },
  {
    id: 'CW-08',
    slug: 'x-account-enrichment',
    featured: false,
    title: '740 rows of X account data, filled and checked',
    outcome:
      'All 740 tweet links resolved to display names, 735 to live follower counts, and the five that failed were named and explained.',
    category: 'Client work',
    role: 'Paid engagement, over Telegram',
    tools: ['Google Sheets', 'X', 'Data enrichment'],
    problem:
      'A client had five sheets holding about 740 rows, each row a link to a tweet. Every row needed the account current X display name and follower count added.',
    dataset: '740 rows of tweet URLs across five sheets.',
    process:
      'Opened each linked account, wrote the display name and current follower count back into the sheet, and checked every link that did not resolve rather than leaving a blank.',
    finding:
      'Display names for all 740 accounts. Follower counts for 735. The other five were suspended accounts, listed by handle in the handover so the client knew exactly what was missing and why.',
    implication:
      'Delivered in about forty-five minutes, accepted with no revisions, and paid on the spot: 150 dollars in USDC. Not deep analysis, but the fast, complete, clearly-reported turnaround that repeat work is built on.'
  },
  {
    id: 'DC-04',
    slug: 'decodelabs-data-cleaning',
    featured: false,
    title: 'DecodeLabs: getting 1,200 orders analysis-ready',
    outcome: '1,200 orders validated to zero duplicates, key conflicts, or arithmetic errors.',
    category: 'Data preparation',
    role: 'DecodeLabs Global virtual internship, project 1',
    tools: ['Python', 'openpyxl', 'pandas', 'Excel'],
    problem:
      'A sales export had to be cleaned and structurally sound before any reporting could be trusted.',
    dataset: '1,200 sales orders with inconsistent formats, blank coupon codes, and an unstructured cell range.',
    process:
      'Scripted the clean in Python (openpyxl and pandas): audited for duplicates and key conflicts, imputed 309 blank CouponCode values as "None", applied currency formatting, validated that TotalPrice equals Quantity times UnitPrice on every row, and converted the range into a named, filterable Excel table.',
    finding:
      'Zero duplicate rows, zero primary-key conflicts, and zero arithmetic discrepancies across all 1,200 records after the pass.',
    implication:
      'This is the invisible work that makes a later dashboard number defensible. Every figure downstream now traces back to a checked row.',
    links: [
      { label: 'Repository', href: 'https://github.com/Ghostiemoh/decodelabs-internship-project-1' }
    ]
  },
  {
    id: 'SQ-05',
    slug: 'decodelabs-sql-insights',
    featured: false,
    title: 'DecodeLabs: asking a sales database six sharper questions',
    outcome: 'Six reusable queries that turn a flat export into a monthly reporting layer.',
    category: 'SQL analytics',
    role: 'DecodeLabs Global virtual internship, project 3',
    tools: ['SQL', 'Aggregation', 'Window logic'],
    problem:
      'The same 1,200-order dataset needed to be queried directly so seasonality, fulfilment, and coupon behaviour could be inspected from one place.',
    dataset: 'A single transactions table, 14 columns, loaded for query-based analysis.',
    process:
      'Wrote six query patterns: headline metrics, product revenue ranking, an order-status funnel with percentage splits, a year-on-year comparison locked to the January to June window so seasonality cannot distort it, coupon performance against return rate, and high-value outliers past the IQR upper bound of 3,330.41 dollars.',
    finding:
      'The six queries turn a flat export into a reusable reporting layer: the same questions can be re-run on next month with no rework.',
    implication:
      'Moving the logic into SQL is what makes analysis repeatable instead of a one-off spreadsheet.',
    links: [
      { label: 'Repository', href: 'https://github.com/Ghostiemoh/decodelabs-internship-project-3' }
    ]
  },
  {
    id: 'PB-06',
    slug: 'apocalypse-sales-power-bi',
    featured: false,
    title: 'A sales dashboard built in Power BI, end to end',
    outcome: 'A supplied sales export turned into a Power BI report: KPIs, a customer ranking, and demand by age band in one drillable view.',
    category: 'Power BI',
    role: 'Build from a supplied dataset',
    tools: ['Power BI', 'Power Query', 'DAX', 'Star schema'],
    problem:
      'A raw sales export needed to become a report where units sold, profit, the top customers, and buyer age could all be read at a glance and drilled into.',
    dataset:
      'A supplied training dataset covering 3,001 units sold across a set of retail customers, with profit, order date, and buyer age group on each record.',
    process:
      'Shaped the export into a star schema with Power Query, wrote DAX measures for the totals, then laid KPI cards over a customer ranking, an age-group breakdown, and a purchase-date distribution, each with drill-down.',
    finding:
      'Units sold concentrate in a few accounts: one customer alone is 951 of the 3,001, and the top four cover more than two thirds. Demand skews to the older age band. The dataset is a training one, so this is a Power BI workflow proof, not a client result.',
    implication:
      'It is the Power BI proof point in this set: Power Query, a star schema, DAX measures, and an interactive layout working together.',
    links: [
      { label: 'PDF', href: '/projects/apocalypse-dashboard.pdf' },
      { label: 'PBIX file', href: '/projects/apocalypse-dashboard.pbix' },
      { label: 'Repository', href: 'https://github.com/Ghostiemoh/apocalypse-food-prep-power-bi' }
    ],
    image: '/images/powerbi-apocalypse.png',
    imageAlt:
      'Power BI report titled Apocalypse Sales Dashboard: KPI cards for units sold and profit, a bar chart of units sold by customer, a purchases-by-age-group bar chart, and a purchase-date pie chart.',
    imageCaption:
      'The finished report. KPI cards over a customer ranking, demand by age band, and a purchase-date split, each one drillable.'
  }
];

export const shelf = [
  {
    group: 'SQL',
    items: [
      {
        name: 'COVID-19 data exploration',
        detail: 'CTEs, window functions, and views over global case and vaccination data.',
        href: 'https://github.com/Ghostiemoh/SQL-Inputs'
      },
      {
        name: 'Nashville housing cleaning',
        detail: 'De-duplication, null handling, address splitting, and a BULK INSERT load.',
        href: 'https://github.com/Ghostiemoh/SQL-Inputs'
      }
    ]
  },
  {
    group: 'Excel and BI',
    items: [
      {
        name: 'Bicycle sales performance',
        detail: '1,000 customers, 48% purchase rate, segmented by region, commute, and occupation.',
        href: 'https://github.com/Ghostiemoh/bicycle-sales-performance'
      },
      {
        name: 'Excel Beginners Practice Lab',
        detail: '12 self-correcting workbooks with live formula validation against a hidden key.',
        href: 'https://github.com/Ghostiemoh/excel-beginners-practice-lab'
      }
    ]
  },
  {
    group: 'On-chain',
    items: [
      {
        name: 'Solana DEX, stablecoin and network dashboards on Dune',
        detail: 'Eight public dashboards on DEX volume and market share, stablecoin supply, Pump.fun, network health, and cross-chain flow, built on dex_solana.trades and related spells.',
        href: 'https://dune.com/ghostiemoh'
      },
      {
        name: 'Solana wallet and venture-flow investigations',
        detail: 'Wallet clustering, a dump blacklist, and MarginFi protocol analytics.',
        href: 'https://github.com/Ghostiemoh/Blockchain-Analysis'
      },
      {
        name: 'Solana Analytics Skill',
        detail: 'A coding-agent skill for Dune and Flipside SQL, IDL decoding, and holder analysis.',
        href: 'https://github.com/Ghostiemoh/solana-analytics-skill'
      }
    ]
  },
  {
    group: 'Side projects',
    layout: 'cards',
    note: 'Built to sharpen the craft, not products for sale. They show how I think about tooling and reproducible process.',
    items: [
      {
        name: 'Nexora',
        detail: 'A study in local-first data tooling: spreadsheet cleaning, SQL, and reporting that runs entirely in the browser.',
        repo: 'https://github.com/Ghostiemoh/nexora',
        live: 'https://nexora-analytics.vercel.app',
        preview: 'grid'
      },
      {
        name: 'Wavefront',
        detail: 'Tracks which Solana market narratives are forming and decaying, on Birdeye data.',
        repo: 'https://github.com/Ghostiemoh/wavefront',
        live: 'https://wavefront-gray.vercel.app',
        preview: 'signal'
      },
      {
        name: 'Sunboard',
        detail: 'Token intelligence dashboard: market view, liquidity depth, holder distribution.',
        repo: 'https://github.com/Ghostiemoh/sunboard',
        live: 'https://sunboard.vercel.app',
        preview: 'gauge'
      }
    ]
  },
  {
    group: 'Teaching',
    items: [
      {
        name: '30-day Excel, SQL and Power BI series',
        detail: 'A daily curriculum with exercise templates and datasets.',
        href: 'https://github.com/Ghostiemoh/Excel-SQL-Mastery-Template'
      }
    ]
  }
];

export const method = [
  {
    step: '01',
    title: 'Collect',
    text: 'Pin down the question, find the data behind it, and note what that data can and cannot answer.'
  },
  {
    step: '02',
    title: 'Clean',
    text: 'Fix structure, types, blanks, duplicates, and inconsistent labels so the numbers can be trusted.'
  },
  {
    step: '03',
    title: 'Analyse',
    text: 'Segment, aggregate, and compare. Check whether a difference is real or just noise.'
  },
  {
    step: '04',
    title: 'Explain',
    text: 'Turn the result into a chart, a plain sentence, and a recommendation someone can act on.'
  }
];

export const capabilities = [
  {
    title: 'Data cleaning and validation',
    description:
      'Standardising messy spreadsheets and transactional exports: dates, categories, missing values, duplicates, and integrity checks such as line-item totals.'
  },
  {
    title: 'SQL analysis',
    description:
      'Querying transactional data with joins, CTEs, window functions, and views to answer operational and commercial questions.'
  },
  {
    title: 'Dashboards and BI',
    description:
      'Excel and Power BI reports built around the decision a reader needs to make, with slicers for self-serve exploration.'
  },
  {
    title: 'On-chain data',
    description:
      'Wallet activity, token flow, and governance participation across Solana, using Dune and Flipside SQL.'
  }
];

export const credentials = [
  {
    title: 'B.Sc (Education) Mathematics',
    issuer: 'Yusuf Maitama Sule University, Kano',
    year: '2023'
  },
  {
    title: 'Advanced Data Analytics',
    issuer: '3MTT, with Google, NITDA and Deeptech',
    year: '2025',
    href: 'https://app.3mtt.training/verify?id=FE/24/4155597910'
  },
  {
    title: 'Data Analytics Virtual Internship',
    issuer: 'DecodeLabs Global',
    year: '2026'
  },
  {
    title: 'Claude Code 101, Claude 101, Agent Skills',
    issuer: 'Anthropic',
    year: '2026'
  },
  {
    title: 'Introduction to Data Analytics',
    issuer: 'Simplilearn, SkillUp',
    year: '2023',
    href: '/legacy/Certificates/2.jpg'
  },
  {
    title: 'Blockchain Professional, BIP Cohort 1',
    issuer: 'NITDA, Dominium Academy and BSV Blockchain',
    year: '2023',
    href: '/legacy/Certificates/3.png'
  },
  {
    title: 'Digital Literacy for All',
    issuer: 'NITDA',
    year: '2025',
    href: '/legacy/Certificates/4.html'
  }
];
