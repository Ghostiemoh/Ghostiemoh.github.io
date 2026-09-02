---
title: Solana DEX volume fell 81%, and almost none of it was Solana
date: 2026-09-01
description: One venue drove the entire drop, and inside that venue one pool type drove almost all of it. Everything else on Solana traded flat to up.
---

Through August 2026 a number kept getting quoted: Solana on-chain trading volume
was down about **81%** from its April peak. On a monthly chart it looks like a
cliff with no recovery.

I pulled every Solana DEX trade from Dune's `dex_solana.trades` spell, February to
August 2026, across Raydium, Orca, Meteora, PumpSwap, pump.fun, Phoenix and about
thirty smaller venues. Volume is `amount_usd` per trade leg, with anything at or
below zero or at or above 25 million dollars dropped as an outlier. The headline is
real:

| Month | All Solana DEX volume |
| --- | --- |
| Mar 2026 | $144.2B |
| Apr 2026 | $307.7B |
| May 2026 | $261.4B |
| Jun 2026 | $79.8B |
| Jul 2026 | $64.9B |
| Aug 2026 | $59.2B |

April to August is an 81% fall. But trade count over the same window only dropped
about 18%, from 729 million to 597 million, and the number of unique traders
actually rose, from 7.8 million to 8.8 million. A lot fewer dollars, slightly fewer
trades, more people. That gap is the tell that something specific is going on, not
a broad collapse in activity.

## It is one venue

Split the monthly total into Meteora and everything else:

| Month | Meteora | Everyone else | Meteora share |
| --- | --- | --- | --- |
| Feb | $58.3B | $102.3B | 36% |
| Apr | $256.8B | $50.9B | 83% |
| Aug | $6.7B | $52.4B | 11% |

Meteora was 83% of all Solana DEX volume at the April peak and 11% by August. Its
own volume fell from 256.8 billion dollars to 6.7 billion. Take Meteora out and the
rest of the market did 50.9 billion in April and 52.4 billion in August, and
stayed between 41 and 55 billion every month in between. For every venue except
one, there was no crash.

![Stacked column chart of monthly Solana DEX volume split into Meteora and every other venue, February to August 2026](/images/dune-dex-crash.jpg "The full monthly series. The Meteora block balloons in April and May, then nearly vanishes by August, while everyone else holds flat.")

## It is not even all of that venue

Meteora runs several pool types. Only one moved. Its DAMM v2 constant-product pools
(labelled `cpamm`) went from **252.6 billion dollars in April to 918 million in
August**, a 99.6% collapse. Average trade size in those pools at the peak was about
680 dollars, which is not retail swap flow.

Meteora's main DLMM order book, over the exact same seven months, did 5.5 billion
dollars in February and 5.5 billion in August, and never strayed far from a 4 to
5.5 billion dollar band in between. The launchpad and legacy AMM pools are rounding
error and also flat.

So the "Solana DEX crash" is really a collapse in one pool type, on one venue:
high-notional, incentive-sensitive volume that piled into a specific set of pools
and then unwound. The data shows it left. It does not show why, though the shape
fits an incentive or points program ending.

## Where the real market went

The active market did not shrink, it rotated. Comparing the last 30 days against
the same 30-day window three months earlier, PumpSwap roughly doubled, from 5.0 to
11.7 billion dollars, and is now the largest non-market-maker DEX on Solana.
Raydium fell 52% over the same comparison. Below the top names the field is
crowded, with a cluster of market-maker venues picking up the freed-up flow.

## What you should actually say

"Solana DEX volume is down 81%" is true and misleading in the same breath. One
venue drove the whole move, and within it one pool type drove nearly all of it.
Quote the Meteora-adjusted figure, which is flat to slightly up, and treat the DAMM
v2 drop as incentive money leaving rather than demand disappearing. If you want one
venue to watch, it is PumpSwap.

The live dashboard, with every query visible and built to be forked, is at
[dune.com/ghostiemoh](https://dune.com/ghostiemoh).
