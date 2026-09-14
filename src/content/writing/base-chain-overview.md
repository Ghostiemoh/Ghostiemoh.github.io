---
title: One DEX and a Bitcoin-exposure token carry most of Base's on-chain activity
date: 2026-09-14
description: Aerodrome holds 52% of Base's $26B in monthly DEX volume on its own. Past the obvious WETH and USDC pairs, the third-largest traded asset is cbBTC, making Base a real venue for Bitcoin exposure on an EVM chain.
thumbnail: /images/writing-dune-base-thumb.webp
---

A month of on-chain activity on Base, from `dex.trades` and `base.transactions`.

## Aerodrome owns the chain it was built for

Base does about $26B in DEX volume over 30 days (roughly $865M a day), across
47 million trades and 429,000 traders. Aerodrome, the chain's own ve(3,3) DEX,
holds 52% of that volume on its own, ahead of Uniswap at 31% and PancakeSwap
at 14%. Little else on the chain registers a meaningful share.

![Stacked area chart titled Base daily DEX volume by venue (30d), showing Aerodrome as the dominant orange layer under a teal Uniswap layer and a gold PancakeSwap layer, with a sharp Uniswap-driven spike in volume around August 18th](/images/dune-base.webp "The mid-month spike is almost entirely Uniswap, Aerodrome's own daily volume barely moves underneath it, holding a remarkably steady base level through days that otherwise look dramatic on the chart.")

That spike around August 18th is worth reading carefully rather than at face
value: it is close to entirely a Uniswap event layered on top of Aerodrome's
normal volume, not a chain-wide surge. Aerodrome's own line stays close to flat
straight through it.

## Base is a real venue for Bitcoin exposure

Past the obvious WETH and USDC trading pairs, the third-largest traded asset on
Base by volume is cbBTC, at roughly $4.2B over the 30-day window. That makes
Base a genuine venue for Bitcoin price exposure on an EVM chain, not just an L2
for ETH-denominated activity. Below the majors, the token list turns into a mix
of AI-themed and Chinese-language memecoins, OpenAI, Claude, VIRTUAL, and Basecat
among them.

## The network underneath the trading

6 to 13 million transactions a day, from 200,000 to 400,000 active addresses,
at 16 to 90 ETH a day in gas. That gas figure covers L2 execution only and
excludes the L1 data-availability component Base pays to settle to Ethereum, so
the real per-user cost of activity on the chain runs higher than the on-chain
gas number alone would suggest.

## Where the totals can overstate

DEX volume here sums `amount_usd` and includes aggregator routing, the same
double-counting pattern as the other DEX dashboards in this series, so
cross-checking against DefiLlama's Base figure is the right sanity check before
quoting an absolute total rather than a share or a ranking.

Full dashboard, every query public and built to be forked:
[Base Chain Overview](https://dune.com/ghostiemoh/base-chain-overview) on Dune.
