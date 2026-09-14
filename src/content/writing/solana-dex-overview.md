---
title: Solana's DEX market has no single leader, and it never sits still
date: 2026-09-14
description: PumpSwap tops the venue ranking at about 20%, then a dozen venues split the rest in single digits. New wallets outnumber returning ones two to one every week, and a late-August spike in both volume and trade count shows just how fast the mix can move.
thumbnail: /images/writing-dune-dex-overview-thumb.webp
---

All on-chain spot DEX trading on Solana, pulled from Dune's `dex_solana.trades` spell,
Raydium, Orca, Meteora, pump.fun and PumpSwap, Phoenix, SolFi, and about thirty other
venues. The last 30 days: roughly $59B in volume, 597 million trades, 8.8 million
traders, close to $2.0B a day.

## No venue is close to a majority

PumpSwap leads the 30-day venue ranking at 19.8%, ahead of a project labelled
BisonFi at 15.8% and Meteora at 11.3%. Below that it thins out fast: pump.fun's
bonding curve at 8.5%, Whirlpool at 6.3%, Tessera and Manifest both near 6.0%,
Raydium at 5.1%, then a run of smaller pooled market makers, Humidifi, Scorch,
AlphaQ, SolFi, each in low single digits.

![Donut chart titled DEX Market Share (30d), showing Solana DEX volume split across PumpSwap at 19.8%, BisonFi at 15.8%, Meteora at 11.3%, pumpdotfun, Whirlpool, Tessera, Manifest, Raydium and a long single-digit tail](/images/dune-dex-overview.webp "Twelve venues shown individually, the rest bucketed as Others. No single project holds even a quarter of the market.")

That fragmentation is not new-market noise, it has held roughly this shape for
months. Whatever venue is loudest in a given week, DEX flow on Solana keeps
splitting across a dozen or more real venues rather than consolidating into one
or two.

## A market of switchers, not a loyal base

New wallets outnumber returning ones by roughly 2 to 1 every week. That ratio has
ticked down slightly in recent weeks as retention improves, but the underlying
pattern holds: most of the trading population on any given venue is showing up
for the first time, not coming back to the same pools.

## A late-August spike in both volume and trades

The daily trend shows a clear break in the pattern around August 20th to 23rd,
both the trade-count line and the volume line jump together, volume briefly
crossing $3B a day and trade count pushing past 25 million, well above the
$1B-to-$2B, 15-to-20-million range that both series otherwise sit in.

![Line chart titled Daily Volume vs Trades (30d), showing Solana DEX volume in orange and trade count in purple, both spiking together around August 20th to 23rd before easing back down toward the end of the month](/images/dune-dex-overview-2.webp "Volume and trade count move together through most of the month, which is itself worth noting: a volume spike with no matching jump in trades would usually mean a few large orders, not broader activity.")

Volume and trade count rising together, rather than volume spiking on its own,
is the detail that matters here. A jump in dollar volume with a flat trade count
usually means a handful of large orders moved the number. Here both lines move
together, which points to broader participation during that window rather than
a few whales.

## Reading the number against a benchmark

Summed `amount_usd` here includes some aggregator double-counting, Jupiter-routed
swaps can appear at both the router and the underlying pool, so this reads above
DefiLlama's Solana DEX figure. The ranking between venues is unaffected by that,
only the absolute totals should be treated as an upper bound.

For the story behind why the market-wide monthly total fell so sharply earlier
in the year, see [Solana DEX volume fell 81%, and almost none of it was
Solana](/writing/solana-dex-crash), the companion piece built from the same
underlying data.

Full dashboard, every query public and built to be forked:
[Solana DEX Overview](https://dune.com/ghostiemoh/solana-dex-overview) on Dune.
