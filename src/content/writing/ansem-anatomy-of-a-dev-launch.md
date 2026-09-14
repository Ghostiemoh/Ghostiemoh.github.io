---
title: 79% of a memecoin's supply sat in the creator's wallets before anyone else could react
date: 2026-09-14
description: A full wallet-by-wallet trace of one Solana memecoin, ANSEM, from its creation transaction. The creator bought 79% of supply for $6,274, started selling within 50 seconds, and the token still ran 2,115x to a $389M peak eleven days later.
thumbnail: /images/writing-dune-ansem-thumb.webp
---

`9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump`, token name The Black Bull, ticker
ANSEM, a Token-2022 memecoin named after the Solana trader Ansem. This is a full
on-chain trace of it, minted 16 June 2026, 21:05:48 UTC, built from
`dex_solana.trades`, `tokens_solana.transfers`, `solana_utils.latest_balances`, and
`tokens_solana.fungible`. Every figure below is a public query, open to fork.

## Act 1: genesis in 50 seconds

In the creation transaction itself, one wallet,
`yHCxHBEaJW5tbndqC8JciSThr7U1cqLpdcsvHcx6PRe`, bought 792,454,486 ANSEM, 79% of
the entire supply, for $6,274. A PumpSwap pool was seeded the same second. There
is no bonding curve in this token's history, only two pump.fun trades exist in
its entire record.

Over the next 50 seconds the creator:

- sent 650,000,000 ANSEM (65% of supply) to `GV6UUmNxz2RpKxmNAPadYKb7uQpszwqQAu3qLJxVdC52` in one transfer at 21:06:25
- sent 142,454,486 ANSEM to `FnzKY6x7entQ1eR3D225dQyT7ybfka4PskBMQhb8L3CC`, a routing wallet, and sold that entire amount into the pool for $11,923 by 21:06:38

Before the first outside buyer could react, 79% of supply already sat in two
creator-controlled wallets, and selling had already started. `GV6UU` has since
paid out about 558 million of its 650 million tokens, into the liquidity that
later buyers provided.

## Act 2: eleven dead days, then ignition

Eleven days of near-nothing: under $1M of volume a day, market cap bouncing
between $120k and $720k. Then on 27 June, daily volume jumps from $59k to
$10.2M, and on 28 June to $87.3M in a single day across 394,000 trades. The
climb runs to a $389M market cap on 7 July, a 2,115x move from the token's low.
From there a long grind: $170M to $290M through August, with a second push
toward $370M late in the month.

![Area chart titled ANSEM implied market cap, daily, flat near zero for eleven days after launch, then spiking above $380 million in early July, pulling back to a $150M to $250M range through most of the month, and climbing again to a new high above $370 million by late August](/images/dune-ansem.webp "Eleven days of silence, then a spike that took the token from under a million dollars to nearly $400M in under two weeks, followed by two more months of real, sustained trading volume rather than a single pump and dump.")

## Act 3: who paid, and who got paid

Bucketing every wallet by when it first bought shows the familiar pattern:

- **First hour, 1,206 wallets:** put in $61.0M, pulled out $60.4M. Roughly flat in cash, left holding bags.
- **Days 1 to 3, 13,627 wallets:** net minus $2.3M.
- **Week 2 and later, 226,414 wallets:** put in $614M, pulled out $589M, a realized loss of $25.4M, still holding tokens bought in the $170M to $390M range.

On the other side of that ledger: a handful of high-frequency bots scalped the
volatility, `AgmLJBMD` netted $9.1M across 463,000 trades, and a few launch-day
and ignition-day snipers turned $1k-to-$250k stakes into $500k-to-$1.5M outcomes
each. `9L8gedW6` turned $1,467 into $674,951.

## Act 4: where it stands, 77 days on

Most dev launches round-trip to zero. This one has not. ANSEM is still a
roughly $309M token trading $8M to $16M a day, 77 days after that first 50
seconds. The largest current holder, `7oU9nR9V` at 49% of supply, is almost
certainly the PumpSwap pool reserve rather than one actor, worth verifying before
reading it as a single wallet's position. After that, `GV6UU`, the creator's
cold wallet, still holds 9.2%, and every other top holder is under 3%.

## What this is, and is not

Wallet labels here, bot, sniper, pool, cold wallet, are inference from on-chain
behaviour, not confirmed identities. Net cash flow is realized only, it counts
USD sold minus USD bought and ignores the value of any unsold bag, so the
losers' real losses are larger than the realized figures above show. This is
on-chain forensics, not a legal accusation: self-allocation and early creator
selling are visible on-chain and common on pump.fun-style launches, and the
purpose here is tracing what happened, not asserting intent.

Full dashboard, every query public and built to be forked:
[ANSEM: Anatomy of a Dev Launch](https://dune.com/ghostiemoh/ansem-anatomy-of-a-dev-launch)
on Dune.
