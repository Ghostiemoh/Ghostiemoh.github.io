---
title: Solana's transaction failure rate has climbed every month this year
date: 2026-09-14
description: 5.1 billion user transactions in the last 30 days at a 57% success rate. The failure rate rose from 24% in April to 43% in August even as throughput nearly doubled, the signature of bots spraying transactions to land memecoin and arbitrage fills.
thumbnail: /images/writing-dune-network-health-thumb.webp
---

Throughput and reliability of the Solana network, from `solana.blocks`, per-block
transaction counts. The full `solana.transactions` table exceeds this plan's query
engine limits, so there is no wallet-level or fee detail here, only network-wide
counts.

## The headline is the failure rate, not the volume

Solana processed about 5.1 billion user (non-vote) transactions in the last 30
days at a 57% success rate. The failure rate has climbed every single month this
year: 24% in April, up to 43% in August, even as monthly throughput grew from 2.9
billion to 5.2 billion user transactions over the same window.

![Column chart titled Monthly user-transaction failure rate (6mo), climbing steadily from about 24% in April to a peak above 40% in August, with a partial-month dip visible at the start of September](/images/dune-network-health.webp "Six straight months of a rising failure rate, tracking almost exactly with the throughput growth over the same period.")

## More throughput and more failure, together

Vote transactions, the messages validators send for consensus, run at a steady
pace of roughly 4.6 billion a month and are excluded from both the success-rate
and per-block figures here. User transactions have grown from about a third of
all transactions on the network earlier in the year to roughly 53% now.

![Column chart titled Monthly transactions, user versus vote (6mo), showing user (non-vote) transactions in purple growing from below vote transactions in April to well above them by August, with both bars shrinking sharply in the partial first days of September](/images/dune-network-health-2.webp "User transactions overtake vote transactions by June and keep growing from there. The near-zero September bars are a partial month, not a network event.")

Read that second chart's final bar carefully: the near-zero September figures
are a single partial day of data at the time of the report's last refresh, not
a sudden network stoppage. The same caveat applies to any monthly total ending
on the current, still-accumulating month.

## Why failures rise alongside throughput

The pattern is the familiar one on Solana: bots spray transactions to try to land
memecoin launches and arbitrage fills, most of those attempts miss, and the
network records each miss as a failed transaction rather than the sender simply
not sending it. Rising throughput and a rising failure rate together are what
that contention pattern actually looks like on-chain, not two separate stories.

## What this dashboard cannot show

No fee or priority-fee data, no per-program or per-wallet breakdown, that all
requires `solana.transactions`, which is outside this plan's query engine limits.
For fee and priority-fee dynamics specifically, a source like Blockworks or
Helius is the better fit than this dashboard.

Full dashboard, every query public and built to be forked:
[Solana Network Health](https://dune.com/ghostiemoh/solana-network-health) on
Dune.
