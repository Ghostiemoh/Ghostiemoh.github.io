---
title: One DEX and a Bitcoin-exposure token carry most of Base's on-chain activity
date: 2026-09-14
description: Aerodrome holds 52% of Base's $26B in monthly DEX volume on its own. Past the obvious WETH and USDC pairs, the third-largest traded asset is cbBTC, making Base a real venue for Bitcoin exposure on an EVM chain.
thumbnail: /images/writing-dune-base-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.bco{--m:#0ea5e9;--mi:#0678ac;--md:#044d6e;--wash:#e6f1f6;--ink:#17151a;--body:#3a3640;--mut:#6b6672;--faint:#9a95a0;--ln:#dde5e8;--lns:#ced9de;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.bco *{box-sizing:border-box}
.bco .band{display:flex;align-items:center;gap:.6rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.bco .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.88)}
.bco .band .k2{margin-left:auto;font-family:"Roboto Mono",ui-monospace,monospace;font-size:.62rem;letter-spacing:.08em;color:rgba(255,255,255,.72)}
.bco .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.bco .kpi{background:var(--surf);padding:1rem .95rem}
.bco .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.55rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.bco .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.bco .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.bco .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.bco .sec:first-of-type{border-top:0;margin-top:1.2rem}
.bco .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.bco .fids .n{color:var(--mi);font-weight:500}
.bco .fids .t{color:var(--ink);font-weight:500}
.bco .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.bco h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.4rem;line-height:1.2;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.bco p{margin:0 0 .95rem;color:var(--body)}
.bco p.lede{font-size:1.06rem;color:var(--ink)}
.bco p.note{color:var(--mut);font-size:.92rem}
.bco b,.bco strong{font-weight:700;color:var(--ink)}
.bco .flag{color:var(--warn);font-weight:700}
.bco .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:1.05rem 1rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,16,25,.04),0 10px 30px -16px rgba(20,16,25,.14)}
.bco .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:0 0 .05rem}
.bco .fig .fs{font-size:.8rem;color:var(--faint);margin:0 0 .55rem}
.bco .fig .fw{width:100%;overflow-x:auto}
.bco .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.bco-chart{display:block;width:100%;height:auto;font-family:"Roboto Mono",monospace}
.bco .fig .fc{font-size:.78rem;color:var(--mut);margin-top:.6rem;line-height:1.5}
.bco .fig .fc .sr{color:var(--faint)}
.bco details.nd{margin-top:.6rem;border-top:1px dashed var(--lns);padding-top:.45rem}
.bco details.nd summary{font-family:"Roboto Mono",monospace;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);cursor:pointer}
.bco table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.78rem;font-variant-numeric:tabular-nums}
.bco table.ndt th,.bco table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.bco table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.66rem}
.bco table.ndt td.n{text-align:right}
.bco .chan{display:grid;grid-template-columns:1fr;gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:12px;overflow:hidden;margin:1.3rem 0}
.bco .chan>div{background:var(--surf);padding:.9rem 1rem}
.bco .chan .ct{font-family:"Roboto Mono",monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mi);margin-bottom:.22rem}
.bco .chan .cd{font-size:.9rem;color:var(--body)}
.bco .chan .cd b{font-weight:700}
.bco .chan .p2{border-left:3px solid var(--m);background:var(--wash)}
.bco .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.bco .edge p{margin:0;font-size:.94rem;color:var(--body)}
.bco .edge p+p{margin-top:.6rem}
.bco .edge b{color:var(--mi)}
.bco .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.bco .closer p{margin:0;color:var(--ink);font-size:.98rem}
.bco .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
.bco .srcs{font-family:"Roboto Mono",monospace;font-size:.78rem;color:var(--mut);line-height:1.7}
.bco .srcs b{color:var(--ink);font-weight:500}
.bco .tag{display:inline-block;font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;padding:.1rem .42rem;border-radius:4px;background:var(--warnw);color:var(--warn);border:1px solid rgba(176,116,26,.3)}
@media (max-width:560px){.bco .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="bco">
<div class="band"><span class="k">On-chain report &middot; Dune analytics</span><span class="k2">dex.trades + base.transactions, trailing 30 days</span></div>
<div class="kpis">
<div class="kpi"><div class="v">$26B</div><div class="l">30-day DEX volume</div><div class="s">~$865M a day</div></div>
<div class="kpi"><div class="v">52%</div><div class="l">Aerodrome's share</div><div class="s">the chain's own DEX</div></div>
<div class="kpi"><div class="v">47M</div><div class="l">Trades, 30 days</div><div class="s">429K traders</div></div>
<div class="kpi"><div class="v">$4.2B</div><div class="l">cbBTC volume</div><div class="s">3rd-largest asset traded</div></div>
</div>
<section class="sec"><div class="fids"><span class="n">01</span><span class="t">Aerodrome owns the chain it was built for</span><span class="r"></span></div>
<h3 class="nh">One DEX carries most of Base's on-chain activity</h3>
<p class="lede">A month of on-chain activity on Base, from <code>dex.trades</code> and <code>base.transactions</code>.</p>
<p>Base does about $26B in DEX volume over 30 days (roughly $865M a day), across 47 million trades and 429,000 traders. Aerodrome, the chain's own ve(3,3) DEX, holds 52% of that volume on its own, ahead of Uniswap at 31% and PancakeSwap at 14%. Little else on the chain registers a meaningful share.</p>
<figure class="fig"><p class="ft">Venue share of Base DEX volume</p><div class="fw"><svg class="bco-chart" viewBox="0 0 640 153.70000000000002" role="img" aria-label="Bar chart showing Aerodrome at 52 percent, Uniswap at 31 percent and PancakeSwap at 14 percent of Base DEX volume" xmlns="http://www.w3.org/2000/svg"><text x="118" y="31.452" fill="var(--mut)" font-size="11" text-anchor="end">Aerodrome</text><rect x="128" y="10" width="442.00" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="578.00" y="29.03" fill="var(--ink)" font-size="11" font-weight="700">52%</text><text x="118" y="79.352" fill="var(--mut)" font-size="11" text-anchor="end">Uniswap</text><rect x="128" y="57.900000000000006" width="263.50" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="399.50" y="76.93" fill="var(--ink)" font-size="11" font-weight="700">31%</text><text x="118" y="127.25200000000001" fill="var(--mut)" font-size="11" text-anchor="end">PancakeSwap</text><rect x="128" y="105.80000000000001" width="119.00" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="255.00" y="124.83000000000001" fill="var(--ink)" font-size="11" font-weight="700">14%</text></svg></div><figcaption class="fc">Aerodrome's own daily volume holds remarkably steady, even through days that otherwise look dramatic on the full series. <span class="sr">Source: Dune, dex.trades.</span></figcaption></figure>
<figure class="fig"><p class="ft">As captured on Dune, daily series</p><div class="fw"><img src="/images/dune-base.webp" alt="Stacked area chart titled Base daily DEX volume by venue 30d, showing Aerodrome as the dominant layer under Uniswap and PancakeSwap, with a sharp Uniswap-driven spike around August 18th" loading="lazy" decoding="async"/></div><figcaption class="fc">That spike around August 18th is close to entirely a Uniswap event layered on top of Aerodrome's normal volume, not a chain-wide surge.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">02</span><span class="t">Base is a real venue for Bitcoin exposure</span><span class="r"></span></div>
<div class="edge"><p><b>Past the obvious WETH and USDC trading pairs, the third-largest traded asset on Base by volume is cbBTC</b>, at roughly $4.2B over the 30-day window. That makes Base a genuine venue for Bitcoin price exposure on an EVM chain, not just an L2 for ETH-denominated activity. Below the majors, the token list turns into a mix of AI-themed and Chinese-language memecoins, OpenAI, Claude, VIRTUAL, and Basecat among them.</p></div></section>
<section class="sec"><div class="fids"><span class="n">03</span><span class="t">The network underneath the trading</span><span class="r"></span></div>
<table class="ndt"><thead><tr><th>Metric</th><th class="n">Range</th></tr></thead><tbody><tr><td>Transactions per day</td><td class="n">6M to 13M</td></tr><tr><td>Active addresses per day</td><td class="n">200K to 400K</td></tr><tr><td>Gas per day (L2 execution only)</td><td class="n">16 to 90 ETH</td></tr></tbody></table>
<p class="note">That gas figure covers L2 execution only and excludes the L1 data-availability component Base pays to settle to Ethereum, so the real per-user cost of activity on the chain runs higher than the on-chain gas number alone would suggest.</p></section>
<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Where the totals can overstate</span><span class="r"></span></div>
<p class="note">DEX volume here sums <code>amount_usd</code> and includes aggregator routing, the same double-counting pattern as the other DEX dashboards in this series, so cross-checking against DefiLlama's Base figure is the right sanity check before quoting an absolute total rather than a share or a ranking.</p>
<p class="note">Full dashboard, every query public and built to be forked: <a href="https://dune.com/ghostiemoh/base-chain-overview" target="_blank" rel="noopener">Base Chain Overview</a> on Dune.</p></section>
</div>
