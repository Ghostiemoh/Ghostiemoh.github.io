---
title: Solana's DEX market has no single leader, and it never sits still
date: 2026-09-14
description: PumpSwap tops the venue ranking at about 20%, then a dozen venues split the rest in single digits. New wallets outnumber returning ones two to one every week, and a late-August spike in both volume and trade count shows just how fast the mix can move.
thumbnail: /images/writing-dune-dex-overview-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.sdv{--m:#7c3aed;--mi:#520dc7;--md:#34097f;--wash:#ece7f6;--ink:#17151a;--body:#3a3640;--mut:#6b6672;--faint:#9a95a0;--ln:#e2dee8;--lns:#d4cfde;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.sdv *{box-sizing:border-box}
.sdv .band{display:flex;align-items:center;gap:.6rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.sdv .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.88)}
.sdv .band .k2{margin-left:auto;font-family:"Roboto Mono",ui-monospace,monospace;font-size:.62rem;letter-spacing:.08em;color:rgba(255,255,255,.72)}
.sdv .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.sdv .kpi{background:var(--surf);padding:1rem .95rem}
.sdv .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.55rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.sdv .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.sdv .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.sdv .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.sdv .sec:first-of-type{border-top:0;margin-top:1.2rem}
.sdv .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.sdv .fids .n{color:var(--mi);font-weight:500}
.sdv .fids .t{color:var(--ink);font-weight:500}
.sdv .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.sdv h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.4rem;line-height:1.2;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.sdv p{margin:0 0 .95rem;color:var(--body)}
.sdv p.lede{font-size:1.06rem;color:var(--ink)}
.sdv p.note{color:var(--mut);font-size:.92rem}
.sdv b,.sdv strong{font-weight:700;color:var(--ink)}
.sdv .flag{color:var(--warn);font-weight:700}
.sdv .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:1.05rem 1rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,16,25,.04),0 10px 30px -16px rgba(20,16,25,.14)}
.sdv .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:0 0 .05rem}
.sdv .fig .fs{font-size:.8rem;color:var(--faint);margin:0 0 .55rem}
.sdv .fig .fw{width:100%;overflow-x:auto}
.sdv .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.sdv-chart{display:block;width:100%;height:auto;font-family:"Roboto Mono",monospace}
.sdv .fig .fc{font-size:.78rem;color:var(--mut);margin-top:.6rem;line-height:1.5}
.sdv .fig .fc .sr{color:var(--faint)}
.sdv details.nd{margin-top:.6rem;border-top:1px dashed var(--lns);padding-top:.45rem}
.sdv details.nd summary{font-family:"Roboto Mono",monospace;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);cursor:pointer}
.sdv table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.78rem;font-variant-numeric:tabular-nums}
.sdv table.ndt th,.sdv table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.sdv table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.66rem}
.sdv table.ndt td.n{text-align:right}
.sdv .chan{display:grid;grid-template-columns:1fr;gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:12px;overflow:hidden;margin:1.3rem 0}
.sdv .chan>div{background:var(--surf);padding:.9rem 1rem}
.sdv .chan .ct{font-family:"Roboto Mono",monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mi);margin-bottom:.22rem}
.sdv .chan .cd{font-size:.9rem;color:var(--body)}
.sdv .chan .cd b{font-weight:700}
.sdv .chan .p2{border-left:3px solid var(--m);background:var(--wash)}
.sdv .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.sdv .edge p{margin:0;font-size:.94rem;color:var(--body)}
.sdv .edge p+p{margin-top:.6rem}
.sdv .edge b{color:var(--mi)}
.sdv .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.sdv .closer p{margin:0;color:var(--ink);font-size:.98rem}
.sdv .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
.sdv .srcs{font-family:"Roboto Mono",monospace;font-size:.78rem;color:var(--mut);line-height:1.7}
.sdv .srcs b{color:var(--ink);font-weight:500}
.sdv .tag{display:inline-block;font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;padding:.1rem .42rem;border-radius:4px;background:var(--warnw);color:var(--warn);border:1px solid rgba(176,116,26,.3)}
@media (max-width:560px){.sdv .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="sdv">
<div class="band"><span class="k">On-chain report &middot; Dune analytics</span><span class="k2">dex_solana.trades, trailing 30 days</span></div>
<div class="kpis">
<div class="kpi"><div class="v">$59B</div><div class="l">30-day DEX volume</div><div class="s">~$2.0B a day</div></div>
<div class="kpi"><div class="v">597M</div><div class="l">Trades, 30 days</div><div class="s">across every venue</div></div>
<div class="kpi"><div class="v">8.8M</div><div class="l">Unique traders</div><div class="s">30-day window</div></div>
<div class="kpi"><div class="v">19.8%</div><div class="l">Largest venue's share</div><div class="s">PumpSwap, no majority</div></div>
</div>
<section class="sec"><div class="fids"><span class="n">01</span><span class="t">No venue is close to a majority</span><span class="r"></span></div>
<h3 class="nh">Fragmented, and it has held that shape for months</h3>
<p class="lede">All on-chain spot DEX trading on Solana, pulled from Dune's <code>dex_solana.trades</code> spell: Raydium, Orca, Meteora, pump.fun and PumpSwap, Phoenix, SolFi, and about thirty other venues.</p>
<p>PumpSwap leads the 30-day venue ranking at 19.8%, ahead of a project labelled BisonFi at 15.8% and Meteora at 11.3%. Below that it thins out fast: pump.fun's bonding curve at 8.5%, Whirlpool at 6.3%, Tessera and Manifest both near 6.0%, Raydium at 5.1%, then a run of smaller pooled market makers, Humidifi, Scorch, AlphaQ, SolFi, each in low single digits. That fragmentation is not new-market noise, it has held roughly this shape for months. Whatever venue is loudest in a given week, DEX flow on Solana keeps splitting across a dozen or more real venues rather than consolidating into one or two.</p>
<figure class="fig"><p class="ft">Top venues by 30-day share</p><div class="fw"><svg class="sdv-chart" viewBox="0 0 640 297.40000000000003" role="img" aria-label="Bar chart of the six leading Solana DEX venues by 30 day market share, led by PumpSwap at 19.8 percent" xmlns="http://www.w3.org/2000/svg"><text x="118" y="31.452" fill="var(--mut)" font-size="11" text-anchor="end">PumpSwap</text><rect x="128" y="10" width="442.00" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="578.00" y="29.03" fill="var(--ink)" font-size="11" font-weight="700">19.8%</text><text x="118" y="79.352" fill="var(--mut)" font-size="11" text-anchor="end">BisonFi</text><rect x="128" y="57.900000000000006" width="352.71" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="488.71" y="76.93" fill="var(--ink)" font-size="11" font-weight="700">15.8%</text><text x="118" y="127.25200000000001" fill="var(--mut)" font-size="11" text-anchor="end">Meteora</text><rect x="128" y="105.80000000000001" width="252.25" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="388.25" y="124.83000000000001" fill="var(--ink)" font-size="11" font-weight="700">11.3%</text><text x="118" y="175.15200000000002" fill="var(--mut)" font-size="11" text-anchor="end">pump.fun</text><rect x="128" y="153.70000000000002" width="189.75" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="325.75" y="172.73000000000002" fill="var(--ink)" font-size="11" font-weight="700">8.5%</text><text x="118" y="223.05200000000002" fill="var(--mut)" font-size="11" text-anchor="end">Whirlpool</text><rect x="128" y="201.60000000000002" width="140.64" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="276.64" y="220.63000000000002" fill="var(--ink)" font-size="11" font-weight="700">6.3%</text><text x="118" y="270.95200000000006" fill="var(--mut)" font-size="11" text-anchor="end">Raydium</text><rect x="128" y="249.50000000000003" width="113.85" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="249.85" y="268.53000000000003" fill="var(--ink)" font-size="11" font-weight="700">5.1%</text></svg></div><figcaption class="fc">No single project holds even a quarter of the market. <span class="sr">Source: Dune, dex_solana.trades.</span></figcaption></figure>
<figure class="fig"><p class="ft">As captured on Dune</p><div class="fw"><img src="/images/dune-dex-overview.webp" alt="Donut chart titled DEX Market Share 30d, showing Solana DEX volume split across PumpSwap, BisonFi, Meteora, pumpdotfun, Whirlpool, Tessera, Manifest, Raydium and a long single-digit tail" loading="lazy" decoding="async"/></div><figcaption class="fc">Twelve venues shown individually, the rest bucketed as Others.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">02</span><span class="t">A market of switchers</span><span class="r"></span></div>
<h3 class="nh">Not a loyal base</h3>
<div class="edge"><p>New wallets outnumber returning ones by roughly 2 to 1 every week. That ratio has ticked down slightly in recent weeks as retention improves, but the underlying pattern holds: most of the trading population on any given venue is showing up for the first time, not coming back to the same pools.</p></div></section>
<section class="sec"><div class="fids"><span class="n">03</span><span class="t">A late-August spike</span><span class="r"></span></div>
<h3 class="nh">Volume and trade count moved together</h3>
<p>The daily trend shows a clear break in the pattern around August 20th to 23rd, both the trade-count line and the volume line jump together, volume briefly crossing $3B a day and trade count pushing past 25 million, well above the $1B-to-$2B, 15-to-20-million range that both series otherwise sit in. Volume and trade count rising together, rather than volume spiking on its own, is the detail that matters here. A jump in dollar volume with a flat trade count usually means a handful of large orders moved the number. Here both lines move together, which points to broader participation during that window rather than a few whales.</p>
<figure class="fig"><p class="ft">As captured on Dune</p><div class="fw"><img src="/images/dune-dex-overview-2.webp" alt="Line chart titled Daily Volume vs Trades 30d, showing Solana DEX volume in orange and trade count in purple, both spiking together around August 20th to 23rd" loading="lazy" decoding="async"/></div><figcaption class="fc">Volume and trade count move together through most of the month, which is itself worth noting: a volume spike with no matching jump in trades would usually mean a few large orders, not broader activity.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Reading the number against a benchmark</span><span class="r"></span></div>
<p class="note">Summed <code>amount_usd</code> here includes some aggregator double-counting, Jupiter-routed swaps can appear at both the router and the underlying pool, so this reads above DefiLlama's Solana DEX figure. The ranking between venues is unaffected by that, only the absolute totals should be treated as an upper bound.</p>
<div class="closer"><div class="q">The companion piece</div><p>For the story behind why the market-wide monthly total fell so sharply earlier in the year, see <a href="/writing/solana-dex-crash">Solana DEX volume fell 81%, and almost none of it was Solana</a>, built from the same underlying data.</p></div>
<p class="note">Full dashboard, every query public and built to be forked: <a href="https://dune.com/ghostiemoh/solana-dex-overview" target="_blank" rel="noopener">Solana DEX Overview</a> on Dune.</p></section>
</div>
