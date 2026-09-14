---
title: Eight Dune dashboards, and what the on-chain data actually says
date: 2026-09-14
description: A report across all eight of my public Dune dashboards, BNB Chain's quiet lead over every other DEX venue, Solana's rising transaction failure rate, a stablecoin monitor, the pump.fun graduation funnel, and a full forensic trace of one memecoin's first 50 seconds. Every figure links to the query behind it.
thumbnail: /images/writing-dune-dashboards.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.dune{--m:#7c3aed;--mi:#6d28d9;--md:#4c1d95;--wash:#f1ecfc;--ink:#1a1330;--body:#3b3550;--mut:#6e6784;--faint:#a099b3;--ln:#e3dcf3;--lns:#d3c9ec;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.dune *{box-sizing:border-box}
.dune .band{display:flex;align-items:center;gap:.55rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.dune .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.9)}
.dune .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.dune .kpi{background:var(--surf);padding:1rem .95rem}
.dune .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.5rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.dune .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.dune .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.dune .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.dune .sec:first-of-type{border-top:0;margin-top:1.2rem}
.dune .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.dune .fids .n{color:var(--mi);font-weight:500}
.dune .fids .t{color:var(--ink);font-weight:500}
.dune .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.dune h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.35rem;line-height:1.22;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.dune p{margin:0 0 .95rem;color:var(--body)}
.dune p.lede{font-size:1.05rem;color:var(--ink)}
.dune p.note{color:var(--mut);font-size:.92rem}
.dune b,.dune strong{font-weight:700;color:var(--ink)}
.dune .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:.7rem .7rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(26,19,48,.04),0 10px 30px -16px rgba(76,29,149,.16)}
.dune .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.dune .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:.7rem 0 .05rem}
.dune .fig .fc{font-size:.8rem;color:var(--mut);margin-top:.35rem;line-height:1.5}
.dune table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.76rem;font-variant-numeric:tabular-nums}
.dune table.ndt th,.dune table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.dune table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.64rem}
.dune table.ndt td.n{text-align:right}
.dune table.ndt a{color:var(--mi)}
.dune .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.dune .edge p{margin:0;font-size:.94rem;color:var(--body)}
.dune .edge p+p{margin-top:.6rem}
.dune .edge b{color:var(--mi)}
.dune .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.dune .closer p{margin:0;color:var(--ink);font-size:.98rem}
.dune .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
@media (max-width:560px){.dune .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="dune">
<div class="band"><span class="k">Dune, eight dashboards</span></div>
<div class="kpis">
<div class="kpi"><div class="v">$84B</div><div class="l">Largest DEX venue, 30 days</div><div class="s">BNB Chain, not Solana</div></div>
<div class="kpi"><div class="v">43%</div><div class="l">Peak monthly failure rate</div><div class="s">Solana, August 2026</div></div>
<div class="kpi"><div class="v">$7.3B</div><div class="l">USDC on-chain supply</div><div class="s">across 8.2M Solana accounts</div></div>
<div class="kpi"><div class="v">2,115x</div><div class="l">One memecoin's run</div><div class="s">from a $184k low, traced wallet by wallet</div></div>
</div>

<section class="sec"><div class="fids"><span class="n">00</span><span class="t">Why these eight</span><span class="r"></span></div>
<h3 class="nh">Every chart here is a query you can open and fork</h3>
<p class="lede">These are the eight public dashboards on <a href="https://dune.com/ghostiemoh">dune.com/ghostiemoh</a>, all built on Dune's own indexed Solana and EVM tables, all dated 2026-09-01, all with the outlier guards and caveats written into the dashboard itself rather than left for a reader to discover the hard way.</p>
<p>The rule is the same one this whole site runs on: no invented numbers, no smoothing over a caveat to make a chart cleaner. Where a total reads above a benchmark like DefiLlama because of aggregator double-counting, the dashboard says so. Where a metric is a proxy, like "graduation" standing in for a token's first PumpSwap trade, the dashboard says that too.</p>
</section>

<section class="sec"><div class="fids"><span class="n">01</span><span class="t">Solana DEX overview</span><span class="r"></span></div>
<h3 class="nh">A $59B market with no single leader</h3>
<p>All on-chain spot trading on Solana, aggregated from <code>dex_solana.trades</code>: roughly $59B over 30 days, 597M trades, 8.8M traders. No venue is close to a majority. PumpSwap leads at about 20%, then a long tail of pooled market makers and RFQ venues each taking single digits.</p>
<figure class="fig">
<img src="/images/dune-dex-overview.webp" alt="Donut chart titled DEX Market Share (30d) showing Solana DEX volume split across PumpSwap at 19.8%, Bisonfi at 15.8%, and a long tail of Meteora, pumpdotfun, Whirlpool, Tessera, Raydium and others each in single digits." loading="lazy" decoding="async" />
<p class="ft">Solana DEX Overview, DEX Market Share (30d)</p>
<p class="fc">New wallets outnumber returning ones about 2 to 1 every week. This is a market of switchers, not a market with a loyal base sitting on one venue.</p>
</figure>
<p class="note">Full dashboard: <a href="https://dune.com/ghostiemoh/solana-dex-overview">Solana DEX Overview</a> on Dune.</p>
</section>

<section class="sec"><div class="fids"><span class="n">02</span><span class="t">The DEX crash that wasn't</span><span class="r"></span></div>
<h3 class="nh">An 81% drop that is really one venue's incentive program ending</h3>
<p>This one already has its own <a href="/#work">portfolio case study</a>, so the short version here: the headline "Solana DEX volume down 81%" is real and misleading in the same breath. Meteora went from 83% of all Solana DEX volume in April to 11% in August, almost entirely inside its DAMM v2 pools. Every other venue combined held a flat $47B to $55B band the whole time, and PumpSwap more than doubled into the gap Meteora left.</p>
<figure class="fig">
<img src="/images/dune-dex-crash.jpg" alt="Chart from the Solana's DEX Crash That Wasn't dashboard showing monthly Solana DEX volume split into Meteora and all other venues, February to August 2026, with the Meteora block ballooning in April and May then nearly disappearing by August." loading="lazy" decoding="async" />
<p class="ft">Solana's DEX Crash That Wasn't, monthly venue split</p>
<p class="fc">Take Meteora out of the total and Solana DEX activity is flat to slightly up across the same five months.</p>
</figure>
<p class="note">Full dashboard: <a href="https://dune.com/ghostiemoh/solana-s-dex-crash-that-wasn-t">Solana's DEX Crash That Wasn't</a> on Dune.</p>
</section>

<section class="sec"><div class="fids"><span class="n">03</span><span class="t">The cross-chain DEX league</span><span class="r"></span></div>
<h3 class="nh">The biggest DEX venue in crypto is not on Solana or Ethereum</h3>
<p>Ranking every chain Dune indexes on a common USD basis puts BNB Chain first: roughly $84B in 30 days, about 34% of all tracked DEX volume, close to 89% of it on PancakeSwap alone. Solana is second at $59B, Ethereum third at $36B, Base fourth at $26B. Most chains turn out to be single-DEX economies once you look, Uniswap owns Ethereum, Arbitrum, Polygon and several newer chains outright, Aerodrome owns Base.</p>
<figure class="fig">
<img src="/images/dune-cross-chain.webp" alt="Bar chart titled 30-day DEX volume by chain, ranking BNB Chain far ahead of Solana, Ethereum, Base, and a long tail of smaller chains including polygon, ink, ronin, abstract, somnia and superseed." loading="lazy" decoding="async" />
<p class="ft">The Cross-Chain DEX League, 30-day volume by chain</p>
<p class="fc">The size of the drop from BNB Chain to the third and fourth chains is the real story: most trading concentrates in the top two or three venues, then falls off a cliff.</p>
</figure>
<p class="note">Full dashboard: <a href="https://dune.com/ghostiemoh/the-cross-chain-dex-league">The Cross-Chain DEX League</a> on Dune.</p>
</section>

<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Solana stablecoin monitor</span><span class="r"></span></div>
<h3 class="nh">USDC alone outweighs the other four stablecoins combined</h3>
<p>USDC holds about $7.3B on-chain across 8.2M accounts, more than USDT, USD1, PYUSD and USDG added together. USD1 is the outlier worth watching: $1.2B held by only about 37,000 accounts, one of the most concentrated stablecoins on any chain. On the flow side, USDC settles roughly $280B of transfers every 30 days, a velocity near 38 times its own supply, while net issuance for USDC and USDG has run mildly negative even as usage stays high.</p>
<figure class="fig">
<img src="/images/dune-stablecoin.webp" alt="Bar chart titled On-chain circulating supply by stablecoin, showing USDC well above USDT, USD1, PYUSD and USDG on Solana." loading="lazy" decoding="async" />
<p class="ft">Solana Stablecoin Monitor, on-chain supply by stablecoin</p>
<p class="fc">Supply is contracting slightly for USDC and USDG even while transfer volume stays high, a sign usage and net issuance are two different questions.</p>
</figure>
<p class="note">Full dashboard: <a href="https://dune.com/ghostiemoh/solana-stablecoin-monitor">Solana Stablecoin Monitor</a> on Dune.</p>
</section>

<section class="sec"><div class="fids"><span class="n">05</span><span class="t">Pump.fun and the launchpad economy</span><span class="r"></span></div>
<h3 class="nh">The graduation rate tripled while the number of launches fell</h3>
<p>About 1.15 million tokens launch on pump.fun every 30 days, against $15.5B of combined bonding-curve and PumpSwap volume. Only around 2.8% of launched tokens ever reach PumpSwap, but that graduation rate has roughly tripled since June, from 0.9% to 2.9%, even as monthly launches eased off their spring peak. Returning traders have grown from about 340,000 a week in June to 960,000 in August, so retention is improving at the same time the top of the funnel cools slightly.</p>
<figure class="fig">
<img src="/images/dune-pumpfun.webp" alt="Line chart titled Monthly tokens launched and graduation rate, showing tokens launched easing from April through June then climbing into August, while the graduation rate line rises steadily from under 1% to nearly 3% over the same months." loading="lazy" decoding="async" />
<p class="ft">Pump.fun and the Launchpad Economy, launches and graduation rate</p>
<p class="fc">The two lines cross in June: launches were falling while graduation was just starting its climb.</p>
</figure>
<p class="note">Full dashboard: <a href="https://dune.com/ghostiemoh/pump-fun-and-the-launchpad-economy">Pump.fun and the Launchpad Economy</a> on Dune.</p>
</section>

<section class="sec"><div class="fids"><span class="n">06</span><span class="t">Base chain overview</span><span class="r"></span></div>
<h3 class="nh">A single DEX and a Bitcoin-exposure asset carry the chain</h3>
<p>Base does about $26B in DEX volume over 30 days across 47 million trades. Aerodrome, the chain's own ve(3,3) DEX, holds 52% of that on its own, ahead of Uniswap at 31% and PancakeSwap at 14%. Past the obvious WETH and USDC pairs, the third-largest traded asset is cbBTC at roughly $4.2B, making Base a real venue for Bitcoin exposure on an EVM chain, with a scattering of AI-themed and Chinese-language memecoins below that.</p>
<figure class="fig">
<img src="/images/dune-base.webp" alt="Stacked area chart titled Base daily DEX volume by venue, 30 days, showing aerodrome as the dominant orange layer under uniswap in teal, pancakeswap in gold, and a spike from uniswap around August 18th." loading="lazy" decoding="async" />
<p class="ft">Base Chain Overview, daily DEX volume by venue</p>
<p class="fc">The mid-month spike is almost entirely Uniswap; Aerodrome's own volume stays remarkably steady underneath it.</p>
</figure>
<p class="note">Full dashboard: <a href="https://dune.com/ghostiemoh/base-chain-overview">Base Chain Overview</a> on Dune.</p>
</section>

<section class="sec"><div class="fids"><span class="n">07</span><span class="t">Solana network health</span><span class="r"></span></div>
<h3 class="nh">Throughput is climbing and so is the failure rate</h3>
<p>Solana processed about 5.1 billion user transactions in the last 30 days at a 57% success rate. The failure rate has climbed every month this year, from 24% in April to 43% in August, even as monthly throughput grew from 2.9 billion to 5.2 billion transactions. This is the familiar Solana contention pattern: bots spraying transactions to land memecoin and arbitrage fills, with most of those attempts landing on-chain as recorded failures rather than silently disappearing.</p>
<figure class="fig">
<img src="/images/dune-network-health.webp" alt="Column chart titled Monthly user-transaction failure rate, six months, climbing steadily from about 24% in April to a peak above 40% in August, with September showing a partial-month dip." loading="lazy" decoding="async" />
<p class="ft">Solana Network Health, monthly failure rate</p>
<p class="fc">This is the network absorbing more attempted activity than it can execute, not a sign that fewer transactions are succeeding in absolute terms.</p>
</figure>
<p class="note">Full dashboard: <a href="https://dune.com/ghostiemoh/solana-network-health">Solana Network Health</a> on Dune.</p>
</section>

<section class="sec"><div class="fids"><span class="n">08</span><span class="t">ANSEM, anatomy of a dev launch</span><span class="r"></span></div>
<h3 class="nh">79% of supply sat in the creator's wallets before the first outside buyer could react</h3>
<p>This is the forensic dashboard: a full wallet-by-wallet trace of one memecoin, ANSEM, from its creation transaction. The creator bought 792 million tokens, 79% of supply, for $6,274 the moment the token was minted, then split that stake across two wallets and started selling within 50 seconds, before a bonding curve had even formed. The token sat dead for 11 days, then ran 2,115x to a $389M market cap, and 77 days later is still a roughly $309M token trading $8M to $16M a day.</p>
<figure class="fig">
<img src="/images/dune-ansem.webp" alt="Area chart titled ANSEM implied market cap, daily, showing the token flat near zero for eleven days after launch, then spiking to over $380 million, pulling back, and climbing again to a new high above $370 million by late August." loading="lazy" decoding="async" />
<p class="ft">ANSEM: Anatomy of a Dev Launch, implied market cap</p>
<p class="fc">Bucketed by entry cohort, the first-hour buyers came out roughly flat in cash; the 226,000 wallets that bought from week two onward put in $614M and pulled out $589M, a realized loss of $25.4M, while still holding tokens bought near the top.</p>
</figure>
<div class="edge">
<p><b>On method, not accusation.</b> Wallet labels like bot, sniper, or cold wallet are inference from on-chain behaviour, not confirmed identities, and the dashboard says so directly. Self-allocation and early creator selling are visible on-chain and common on pump.fun-style launches; this traces what happened without claiming to know why, or whom.</p>
</div>
<p class="note">Full dashboard: <a href="https://dune.com/ghostiemoh/ansem-anatomy-of-a-dev-launch">ANSEM: Anatomy of a Dev Launch</a> on Dune.</p>
</section>

<section class="sec"><div class="fids"><span class="n">09</span><span class="t">All eight, linked</span><span class="r"></span></div>
<h3 class="nh">Every dashboard, one table</h3>
<table class="ndt">
<thead><tr><th>Dashboard</th><th>Focus</th><th>Dune link</th></tr></thead>
<tbody>
<tr><td>Solana DEX Overview</td><td>Venue mix, users, trend</td><td><a href="https://dune.com/ghostiemoh/solana-dex-overview">Open</a></td></tr>
<tr><td>Solana's DEX Crash That Wasn't</td><td>Meteora vs the rest of the market</td><td><a href="https://dune.com/ghostiemoh/solana-s-dex-crash-that-wasn-t">Open</a></td></tr>
<tr><td>The Cross-Chain DEX League</td><td>Every chain, ranked on one basis</td><td><a href="https://dune.com/ghostiemoh/the-cross-chain-dex-league">Open</a></td></tr>
<tr><td>Solana Stablecoin Monitor</td><td>Supply, holders, flow</td><td><a href="https://dune.com/ghostiemoh/solana-stablecoin-monitor">Open</a></td></tr>
<tr><td>Pump.fun and the Launchpad Economy</td><td>Launches, graduation, retention</td><td><a href="https://dune.com/ghostiemoh/pump-fun-and-the-launchpad-economy">Open</a></td></tr>
<tr><td>Base Chain Overview</td><td>DEX venues, tokens, network</td><td><a href="https://dune.com/ghostiemoh/base-chain-overview">Open</a></td></tr>
<tr><td>Solana Network Health</td><td>Throughput and failure rate</td><td><a href="https://dune.com/ghostiemoh/solana-network-health">Open</a></td></tr>
<tr><td>ANSEM: Anatomy of a Dev Launch</td><td>Full forensic wallet trace</td><td><a href="https://dune.com/ghostiemoh/ansem-anatomy-of-a-dev-launch">Open</a></td></tr>
</tbody>
</table>
<p class="note">Every SQL query behind every chart above is public on Dune. Fork it, change a threshold, or point it at a different window, and it will run.</p>
<div class="closer"><div class="q">The standing rule</div><p>Every figure in this report traces back to a public Dune query linked above. Where a number reads above a benchmark like DefiLlama, or a metric is a proxy rather than a direct measurement, the dashboard says so in its own method notes, not only here.</p></div>
</section>
</div>
