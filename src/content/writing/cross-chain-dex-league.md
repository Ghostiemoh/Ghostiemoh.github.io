---
title: The biggest DEX in crypto is not on Solana or Ethereum
date: 2026-09-14
description: Ranking every chain Dune indexes on one common basis puts BNB Chain first at roughly $84B in 30 days, almost entirely PancakeSwap. Solana is second, Ethereum third, and most chains below the top four turn out to be single-DEX economies once you actually look.
thumbnail: /images/writing-dune-cross-chain-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.ccx{--m:#4338ca;--mi:#2d2495;--md:#1d175f;--wash:#ececf5;--ink:#17151a;--body:#3a3640;--mut:#6b6672;--faint:#9a95a0;--ln:#e0dfe7;--lns:#d2d1db;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.ccx *{box-sizing:border-box}
.ccx .band{display:flex;align-items:center;gap:.6rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.ccx .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.88)}
.ccx .band .k2{margin-left:auto;font-family:"Roboto Mono",ui-monospace,monospace;font-size:.62rem;letter-spacing:.08em;color:rgba(255,255,255,.72)}
.ccx .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.ccx .kpi{background:var(--surf);padding:1rem .95rem}
.ccx .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.55rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.ccx .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.ccx .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.ccx .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.ccx .sec:first-of-type{border-top:0;margin-top:1.2rem}
.ccx .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.ccx .fids .n{color:var(--mi);font-weight:500}
.ccx .fids .t{color:var(--ink);font-weight:500}
.ccx .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.ccx h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.4rem;line-height:1.2;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.ccx p{margin:0 0 .95rem;color:var(--body)}
.ccx p.lede{font-size:1.06rem;color:var(--ink)}
.ccx p.note{color:var(--mut);font-size:.92rem}
.ccx b,.ccx strong{font-weight:700;color:var(--ink)}
.ccx .flag{color:var(--warn);font-weight:700}
.ccx .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:1.05rem 1rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,16,25,.04),0 10px 30px -16px rgba(20,16,25,.14)}
.ccx .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:0 0 .05rem}
.ccx .fig .fs{font-size:.8rem;color:var(--faint);margin:0 0 .55rem}
.ccx .fig .fw{width:100%;overflow-x:auto}
.ccx .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.ccx-chart{display:block;width:100%;height:auto;font-family:"Roboto Mono",monospace}
.ccx .fig .fc{font-size:.78rem;color:var(--mut);margin-top:.6rem;line-height:1.5}
.ccx .fig .fc .sr{color:var(--faint)}
.ccx details.nd{margin-top:.6rem;border-top:1px dashed var(--lns);padding-top:.45rem}
.ccx details.nd summary{font-family:"Roboto Mono",monospace;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);cursor:pointer}
.ccx table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.78rem;font-variant-numeric:tabular-nums}
.ccx table.ndt th,.ccx table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.ccx table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.66rem}
.ccx table.ndt td.n{text-align:right}
.ccx .chan{display:grid;grid-template-columns:1fr;gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:12px;overflow:hidden;margin:1.3rem 0}
.ccx .chan>div{background:var(--surf);padding:.9rem 1rem}
.ccx .chan .ct{font-family:"Roboto Mono",monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mi);margin-bottom:.22rem}
.ccx .chan .cd{font-size:.9rem;color:var(--body)}
.ccx .chan .cd b{font-weight:700}
.ccx .chan .p2{border-left:3px solid var(--m);background:var(--wash)}
.ccx .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.ccx .edge p{margin:0;font-size:.94rem;color:var(--body)}
.ccx .edge p+p{margin-top:.6rem}
.ccx .edge b{color:var(--mi)}
.ccx .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.ccx .closer p{margin:0;color:var(--ink);font-size:.98rem}
.ccx .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
.ccx .srcs{font-family:"Roboto Mono",monospace;font-size:.78rem;color:var(--mut);line-height:1.7}
.ccx .srcs b{color:var(--ink);font-weight:500}
.ccx .tag{display:inline-block;font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;padding:.1rem .42rem;border-radius:4px;background:var(--warnw);color:var(--warn);border:1px solid rgba(176,116,26,.3)}
@media (max-width:560px){.ccx .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="ccx">
<div class="band"><span class="k">On-chain report &middot; Dune analytics</span><span class="k2">dex.trades + dex_solana.trades, trailing 30 days</span></div>
<div class="kpis">
<div class="kpi"><div class="v">$84B</div><div class="l">BNB Chain, 30d</div><div class="s">34% of all tracked volume</div></div>
<div class="kpi"><div class="v">89%</div><div class="l">Of BNB volume</div><div class="s">on PancakeSwap alone</div></div>
<div class="kpi"><div class="v">$59B</div><div class="l">Solana, 30d</div><div class="s">second place, 24%</div></div>
<div class="kpi"><div class="v">$36B</div><div class="l">Ethereum, 30d</div><div class="s">third place, 14%</div></div>
</div>
<section class="sec"><div class="fids"><span class="n">01</span><span class="t">BNB Chain leads, by a wide margin</span><span class="r"></span></div>
<h3 class="nh">The biggest DEX in crypto is not on Solana or Ethereum</h3>
<p class="lede">Where on-chain spot trading actually happens in 2026, ranked across every chain Dune indexes, EVM chains through <code>dex.trades</code>, Solana through <code>dex_solana.trades</code>, on a common USD basis.</p>
<p>BNB Chain did roughly $84B in DEX volume over the last 30 days, about 34% of all tracked volume across every chain in the dashboard, close to 89% of that on PancakeSwap alone. Solana is second at $59B (24%), Ethereum third at $36B (14%), Base fourth at $26B (11%). A chain labelled <code>robinhood</code> in the underlying data now clears about $22B a month, almost entirely Uniswap.</p>
<figure class="fig"><p class="ft">30-day DEX volume by chain</p><div class="fw"><svg class="ccx-chart" viewBox="0 0 640 249.50000000000003" role="img" aria-label="Bar chart ranking chains by 30 day DEX volume, led by BNB Chain at 84 billion dollars" xmlns="http://www.w3.org/2000/svg"><text x="110" y="31.452" fill="var(--mut)" font-size="11" text-anchor="end">BNB Chain</text><rect x="120" y="10" width="450.00" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="578.00" y="29.03" fill="var(--ink)" font-size="11" font-weight="700">$84B</text><text x="110" y="79.352" fill="var(--mut)" font-size="11" text-anchor="end">Solana</text><rect x="120" y="57.900000000000006" width="316.07" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="444.07" y="76.93" fill="var(--ink)" font-size="11" font-weight="700">$59B</text><text x="110" y="127.25200000000001" fill="var(--mut)" font-size="11" text-anchor="end">Ethereum</text><rect x="120" y="105.80000000000001" width="192.86" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="320.86" y="124.83000000000001" fill="var(--ink)" font-size="11" font-weight="700">$36B</text><text x="110" y="175.15200000000002" fill="var(--mut)" font-size="11" text-anchor="end">Base</text><rect x="120" y="153.70000000000002" width="139.29" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="267.29" y="172.73000000000002" fill="var(--ink)" font-size="11" font-weight="700">$26B</text><text x="110" y="223.05200000000002" fill="var(--mut)" font-size="11" text-anchor="end">"robinhood"</text><rect x="120" y="201.60000000000002" width="117.86" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="245.86" y="220.63000000000002" fill="var(--ink)" font-size="11" font-weight="700">$22B</text></svg></div><figcaption class="fc">The gap between the top chain and the third and fourth-place chains is the real story here. <span class="sr">Source: Dune, dex.trades / dex_solana.trades.</span></figcaption></figure>
<figure class="fig"><p class="ft">As captured on Dune, full ranking</p><div class="fw"><img src="/images/dune-cross-chain.webp" alt="Bar chart titled 30-day DEX volume by chain, showing BNB Chain far ahead of every other chain, followed by a steep drop to Solana, Ethereum, Base, and a long tail of smaller chains" loading="lazy" decoding="async"/></div><figcaption class="fc">Most on-chain trading concentrates in two or three venues, then falls off a cliff.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">02</span><span class="t">Most chains are single-DEX economies</span><span class="r"></span></div>
<h3 class="nh">A "chain" is often really one DEX with gas fees attached</h3>
<p>Once you rank the leading venue on each chain, a pattern shows up fast: one project owns almost the entire chain.</p>
<div class="chan">
<div><div class="ct">Uniswap</div><div class="cd">Owns <b>Ethereum, Arbitrum, Polygon, Unichain, X Layer</b>, and the Robinhood chain outright.</div></div>
<div><div class="ct">Aerodrome</div><div class="cd">Owns <b>Base</b>.</div></div>
<div><div class="ct">PancakeSwap</div><div class="cd">Owns <b>BNB Chain</b>.</div></div>
<div><div class="ct">prjx</div><div class="cd">Runs almost the entirety of <b>HyperEVM</b>.</div></div>
<div><div class="ct">kuru</div><div class="cd">Runs almost the entirety of <b>Monad</b>.</div></div>
</div></section>
<section class="sec"><div class="fids"><span class="n">03</span><span class="t">Why the absolute numbers read high</span><span class="r"></span></div>
<p class="note">Volume here sums <code>amount_usd</code> with aggregator routing included, a swap routed through Jupiter or 1inch can appear at both the router and the underlying pool, so per-chain totals read above DefiLlama's equivalent figures. The ranking between chains is robust to that, since the same double-counting affects every chain roughly proportionally; the absolute dollar figures should be read as an upper bound, not a precise settlement total.</p></section>
<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Reading a chain label literally</span><span class="r"></span></div>
<div class="edge"><p><span class="tag">as-labelled</span> &nbsp;<code>robinhood</code> is the chain label exactly as it appears in <code>dex.trades</code>, not a description added for this write-up. Unfamiliar labels like that are worth taking at face value rather than assuming they are typos or artifacts, Dune's source tables name chains the way their own indexers see them.</p></div>
<p class="note">Full dashboard, every query public and built to be forked: <a href="https://dune.com/ghostiemoh/the-cross-chain-dex-league" target="_blank" rel="noopener">The Cross-Chain DEX League</a> on Dune.</p></section>
</div>
