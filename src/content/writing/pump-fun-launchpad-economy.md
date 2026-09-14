---
title: The pump.fun graduation rate tripled while launches were actually falling
date: 2026-09-14
description: 1.15 million tokens launch on pump.fun every 30 days, but only 2.8% ever reach PumpSwap. That graduation rate has roughly tripled since June, from 0.9% to 2.9%, over the same months monthly launches eased off their spring peak.
thumbnail: /images/writing-dune-pumpfun-thumb.webp
---

The assembly line for Solana memecoins, measured through `dex_solana.trades`: the
pump.fun bonding curve where tokens start, and PumpSwap, the AMM they graduate to.

## The scale of the funnel

About 1.15 million tokens launch on pump.fun every 30 days, roughly 38,000 a day,
against $15.5B of combined bonding-curve and PumpSwap volume and $70M of trading
fees. PumpSwap alone carries about three times the bonding curve's own volume,
which means most of the dollar activity here is happening after a token has
already graduated, not during its first minutes on the curve.

## Graduation tripled while launches cooled

Only about 2.8% of launched tokens ever reach PumpSwap. That rate has roughly
tripled since June, from 0.9% to 2.9%, over the same months that monthly launches
eased off their spring peak.

![Line chart titled Monthly tokens launched and graduation rate, showing tokens launched declining from April through June before climbing into August, while the graduation rate line rises steadily from under 1% to nearly 3% over the same period](/images/dune-pumpfun.webp "The two lines cross in June: launches were near their low point for the period while graduation was just beginning its climb.")

Fewer tokens launching with a rising share of them actually graduating is a
different market than more tokens launching with graduation staying flat, even
though both could produce a similar PumpSwap volume number on their own.

## Where the dollars actually sit

Breaking the $15.5B of volume down by day shows PumpSwap (the AMM tokens graduate
into) pulling steadily away from the bonding curve through the second half of
August, peaking near $900M in a single day around August 27th, while bonding-curve
volume stays in a comparatively narrow band the whole month.

![Stacked area chart titled Daily volume, bonding curve vs PumpSwap (30d), showing PumpSwap volume in orange climbing sharply through late August to a peak above $800M while pump.fun bonding curve volume in purple stays relatively flat throughout](/images/dune-pumpfun-2.webp "PumpSwap's growth through the month is not matched by a similar rise on the bonding curve underneath it, consistent with more of the market's dollar activity moving to tokens that have already graduated.")

## Retention is improving under a huge top of funnel

Between 1.3 and 1.9 million new traders enter each week, and the returning-trader
count has grown from about 340,000 a week in June to 960,000 in August. Retention
is genuinely improving even while the top of the funnel, new token launches,
stays enormous by any normal market's standard.

## Reading the proxies correctly

"Launch" here means a token's first pump.fun trade inside the report window, and
"graduation" means its first PumpSwap trade, both are proxies bounded by the
window rather than direct program-event counts, so the earliest month in any
chart understates true launches, and totals read lower than pump.fun's own
event-log dashboards would show.

Full dashboard, every query public and built to be forked:
[Pump.fun and the Launchpad Economy](https://dune.com/ghostiemoh/pump-fun-and-the-launchpad-economy)
on Dune.
