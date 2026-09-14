---
title: USDC alone outweighs Solana's other four largest stablecoins combined
date: 2026-09-14
description: $7.3B of USDC sits on-chain across 8.2 million accounts, more than USDT, USD1, PYUSD and USDG added together. USD1 is the outlier worth watching, $1.2B held by only 37,000 accounts, one of the most concentrated stablecoins on any chain.
thumbnail: /images/writing-dune-stablecoin-thumb.webp
---

Stock and flow for the five largest Solana stablecoins, from `tokens_solana.transfers`
for movement and `solana_utils.latest_balances` for supply and holders.

## The stock side: USDC dominates, USD1 concentrates

USDC holds about $7.3B on-chain across 8.2 million accounts (3.0 million of them
with a meaningful balance), more than USDT ($3.8B), USD1 ($1.2B), PYUSD ($0.8B),
and USDG ($0.6B) combined.

![Bar chart titled On-chain circulating supply by stablecoin, showing USDC well ahead of USDT, USD1, PYUSD and USDG on Solana](/images/dune-stablecoin.webp "USDC alone is roughly double USDT's supply, and larger than the other four stablecoins added together.")

USD1 is the number worth a second look: $1.2B held by only about 37,000 accounts,
an average balance far above any of the other four stablecoins here. That level
of concentration in this few wallets is unusual for a stablecoin at this supply
size, and worth watching for how that balance moves if a handful of large holders
ever unwind a position at once.

## The flow side: USDC moves 38 times its own supply every month

USDC settles roughly $280B of transfers every 30 days, about 80% of all tracked
stablecoin transfer volume on Solana, a monthly velocity near 38 times its own
on-chain supply. PYUSD is the other flow story here: it moves about $12B a
month at a very high value per transfer, the signature of treasury and
institutional movement rather than everyday retail spending.

## Supply is flat to shrinking even while usage stays high

Net issuance, mint minus burn, has run mildly negative for both USDC and USDG
over the tracked window. On-chain supply for those two is flat to slightly
contracting at the same time transfer volume stays high, a reminder that usage
and net issuance answer two different questions and can move in opposite
directions.

## What the numbers can and cannot say

On-chain supply here counts tokens actually sitting in Solana accounts, and can
differ from an issuer's own reported circulating supply, bridged balances,
frozen accounts, and treasury holdings all complicate a direct comparison.
Cross-checking against DefiLlama Stablecoins or Artemis is the right move before
treating either number as the final word.

Full dashboard, every query public and built to be forked:
[Solana Stablecoin Monitor](https://dune.com/ghostiemoh/solana-stablecoin-monitor)
on Dune.
