---
title: Solana DEX volume fell 81%, and almost none of it was Solana
date: 2026-09-01
description: One venue drove the entire drop, and inside that venue one pool type drove almost all of it. Everything else on Solana traded flat to up.
thumbnail: /images/writing-dune-dex-crash-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.sdx{--m:#c0272d;--mi:#8d191e;--md:#5a1013;--wash:#f5eaeb;--ink:#17151a;--body:#3a3640;--mut:#6b6672;--faint:#9a95a0;--ln:#e7dfdf;--lns:#dcd0d1;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.sdx *{box-sizing:border-box}
.sdx .band{display:flex;align-items:center;gap:.6rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.sdx .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.88)}
.sdx .band .k2{margin-left:auto;font-family:"Roboto Mono",ui-monospace,monospace;font-size:.62rem;letter-spacing:.08em;color:rgba(255,255,255,.72)}
.sdx .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.sdx .kpi{background:var(--surf);padding:1rem .95rem}
.sdx .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.55rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.sdx .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.sdx .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.sdx .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.sdx .sec:first-of-type{border-top:0;margin-top:1.2rem}
.sdx .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.sdx .fids .n{color:var(--mi);font-weight:500}
.sdx .fids .t{color:var(--ink);font-weight:500}
.sdx .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.sdx h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.4rem;line-height:1.2;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.sdx p{margin:0 0 .95rem;color:var(--body)}
.sdx p.lede{font-size:1.06rem;color:var(--ink)}
.sdx p.note{color:var(--mut);font-size:.92rem}
.sdx b,.sdx strong{font-weight:700;color:var(--ink)}
.sdx .flag{color:var(--warn);font-weight:700}
.sdx .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:1.05rem 1rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,16,25,.04),0 10px 30px -16px rgba(20,16,25,.14)}
.sdx .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:0 0 .05rem}
.sdx .fig .fs{font-size:.8rem;color:var(--faint);margin:0 0 .55rem}
.sdx .fig .fw{width:100%;overflow-x:auto}
.sdx .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.sdx-chart{display:block;width:100%;height:auto;font-family:"Roboto Mono",monospace}
.sdx .fig .fc{font-size:.78rem;color:var(--mut);margin-top:.6rem;line-height:1.5}
.sdx .fig .fc .sr{color:var(--faint)}
.sdx details.nd{margin-top:.6rem;border-top:1px dashed var(--lns);padding-top:.45rem}
.sdx details.nd summary{font-family:"Roboto Mono",monospace;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);cursor:pointer}
.sdx table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.78rem;font-variant-numeric:tabular-nums}
.sdx table.ndt th,.sdx table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.sdx table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.66rem}
.sdx table.ndt td.n{text-align:right}
.sdx .chan{display:grid;grid-template-columns:1fr;gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:12px;overflow:hidden;margin:1.3rem 0}
.sdx .chan>div{background:var(--surf);padding:.9rem 1rem}
.sdx .chan .ct{font-family:"Roboto Mono",monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mi);margin-bottom:.22rem}
.sdx .chan .cd{font-size:.9rem;color:var(--body)}
.sdx .chan .cd b{font-weight:700}
.sdx .chan .p2{border-left:3px solid var(--m);background:var(--wash)}
.sdx .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.sdx .edge p{margin:0;font-size:.94rem;color:var(--body)}
.sdx .edge p+p{margin-top:.6rem}
.sdx .edge b{color:var(--mi)}
.sdx .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.sdx .closer p{margin:0;color:var(--ink);font-size:.98rem}
.sdx .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
.sdx .srcs{font-family:"Roboto Mono",monospace;font-size:.78rem;color:var(--mut);line-height:1.7}
.sdx .srcs b{color:var(--ink);font-weight:500}
.sdx .tag{display:inline-block;font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;padding:.1rem .42rem;border-radius:4px;background:var(--warnw);color:var(--warn);border:1px solid rgba(176,116,26,.3)}
@media (max-width:560px){.sdx .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="sdx">
<div class="band"><span class="k">On-chain report &middot; Dune analytics</span><span class="k2">dex_solana.trades, Feb-Aug 2026</span></div>
<div class="kpis">
<div class="kpi"><div class="v">-81%</div><div class="l">Apr to Aug, all-DEX volume</div><div class="s">the quoted headline</div></div>
<div class="kpi"><div class="v">$307.7B</div><div class="l">April peak</div><div class="s">the monthly high</div></div>
<div class="kpi"><div class="v">$59.2B</div><div class="l">August total</div><div class="s">the monthly low</div></div>
<div class="kpi"><div class="v">8.8M</div><div class="l">Unique traders</div><div class="s">up from 7.8M, not down</div></div>
</div>
<section class="sec"><div class="fids"><span class="n">01</span><span class="t">The headline number</span><span class="r"></span></div>
<h3 class="nh">Volume fell 81%. Trade count fell 18%, and traders went up</h3>
<p class="lede">Through August 2026 a number kept getting quoted: Solana on-chain trading volume was down about 81% from its April peak. On a monthly chart it looks like a cliff with no recovery.</p>
<p>I pulled every Solana DEX trade from Dune's <code>dex_solana.trades</code> spell, February to August 2026, across Raydium, Orca, Meteora, PumpSwap, pump.fun, Phoenix and about thirty smaller venues. Volume is <code>amount_usd</code> per trade leg, with anything at or below zero or at or above 25 million dollars dropped as an outlier. The headline is real, but trade count over the same window only dropped about 18%, from 729 million to 597 million, and the number of unique traders actually rose, from 7.8 million to 8.8 million. A lot fewer dollars, slightly fewer trades, more people. That gap is the tell that something specific is going on, not a broad collapse in activity.</p>
<figure class="fig"><p class="ft">All Solana DEX volume, by month</p><p class="fs">2026, dropped-outlier basis</p><div class="fw"><svg class="sdx-chart" viewBox="0 0 640 250" role="img" aria-label="Column chart of Solana DEX volume by month, from 144.2 billion in March to a 307.7 billion peak in April, falling to 59.2 billion by August" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="204.0" x2="620" y2="204.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="207.0" fill="var(--mut)" font-size="10" text-anchor="end">$0B</text><line x1="40" y1="158.0" x2="620" y2="158.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="161.0" fill="var(--mut)" font-size="10" text-anchor="end">$88B</text><line x1="40" y1="112.0" x2="620" y2="112.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="115.0" fill="var(--mut)" font-size="10" text-anchor="end">$177B</text><line x1="40" y1="66.0" x2="620" y2="66.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="69.0" fill="var(--mut)" font-size="10" text-anchor="end">$265B</text><line x1="40" y1="20.0" x2="620" y2="20.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="23.0" fill="var(--mut)" font-size="10" text-anchor="end">$354B</text><rect x="68.0" y="129.0" width="40.6" height="75.0" rx="3" fill="var(--m)" fill-opacity="1"/><text x="88.3" y="121.0" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">$144.2B</text><text x="88.3" y="220.0" fill="var(--mut)" font-size="11" text-anchor="middle">Mar</text><rect x="164.7" y="44.0" width="40.6" height="160.0" rx="3" fill="var(--m)" fill-opacity="1"/><text x="185.0" y="36.0" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">$307.7B</text><text x="185.0" y="220.0" fill="var(--mut)" font-size="11" text-anchor="middle">Apr</text><rect x="261.4" y="68.1" width="40.6" height="135.9" rx="3" fill="var(--m)" fill-opacity="1"/><text x="281.7" y="60.1" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">$261.4B</text><text x="281.7" y="220.0" fill="var(--mut)" font-size="11" text-anchor="middle">May</text><rect x="358.0" y="162.5" width="40.6" height="41.5" rx="3" fill="var(--m)" fill-opacity="1"/><text x="378.3" y="154.5" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">$79.8B</text><text x="378.3" y="220.0" fill="var(--mut)" font-size="11" text-anchor="middle">Jun</text><rect x="454.7" y="170.3" width="40.6" height="33.7" rx="3" fill="var(--m)" fill-opacity="1"/><text x="475.0" y="162.3" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">$64.9B</text><text x="475.0" y="220.0" fill="var(--mut)" font-size="11" text-anchor="middle">Jul</text><rect x="551.4" y="173.2" width="40.6" height="30.8" rx="3" fill="var(--m)" fill-opacity="1"/><text x="571.7" y="165.2" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">$59.2B</text><text x="571.7" y="220.0" fill="var(--mut)" font-size="11" text-anchor="middle">Aug</text></svg></div><figcaption class="fc">April to August is an 81% fall on this line alone. <span class="sr">Source: Dune, dex_solana.trades.</span></figcaption><details class="nd"><summary>Data</summary><table class="ndt"><thead><tr><th>Month</th><th class="n">All Solana DEX volume</th></tr></thead><tbody><tr><td>Mar 2026</td><td class="n">$144.2B</td></tr><tr><td>Apr 2026</td><td class="n">$307.7B</td></tr><tr><td>May 2026</td><td class="n">$261.4B</td></tr><tr><td>Jun 2026</td><td class="n">$79.8B</td></tr><tr><td>Jul 2026</td><td class="n">$64.9B</td></tr><tr><td>Aug 2026</td><td class="n">$59.2B</td></tr></tbody></table></details></figure></section>
<section class="sec"><div class="fids"><span class="n">02</span><span class="t">It is one venue</span><span class="r"></span></div>
<h3 class="nh">Meteora went from 83% of the market to 11%</h3>
<p>Split the monthly total into Meteora and everything else. Meteora was 83% of all Solana DEX volume at the April peak and 11% by August. Its own volume fell from 256.8 billion dollars to 6.7 billion. Take Meteora out and the rest of the market did 50.9 billion in April and 52.4 billion in August, and stayed between 41 and 55 billion every month in between. For every venue except one, there was no crash.</p>
<figure class="fig"><p class="ft">Meteora vs everyone else</p><p class="fs">Monthly DEX volume, Feb / Apr / Aug 2026</p><div class="fw"><svg class="sdx-chart" viewBox="0 0 640 297.40000000000003" role="img" aria-label="Bar chart splitting Solana DEX volume between Meteora and every other venue in February, April and August 2026" xmlns="http://www.w3.org/2000/svg"><text x="150" y="31.452" fill="var(--mut)" font-size="11" text-anchor="end">Feb, Meteora</text><rect x="160" y="10" width="93.08" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="261.08" y="29.03" fill="var(--ink)" font-size="11" font-weight="700">$58.3B</text><text x="150" y="79.352" fill="var(--mut)" font-size="11" text-anchor="end">Feb, everyone else</text><rect x="160" y="57.900000000000006" width="163.33" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="0.4"/><text x="331.33" y="76.93" fill="var(--ink)" font-size="11" font-weight="700">$102.3B</text><text x="150" y="127.25200000000001" fill="var(--mut)" font-size="11" text-anchor="end">Apr, Meteora</text><rect x="160" y="105.80000000000001" width="410.00" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="578.00" y="124.83000000000001" fill="var(--ink)" font-size="11" font-weight="700">$256.8B</text><text x="150" y="175.15200000000002" fill="var(--mut)" font-size="11" text-anchor="end">Apr, everyone else</text><rect x="160" y="153.70000000000002" width="81.27" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="0.4"/><text x="249.27" y="172.73000000000002" fill="var(--ink)" font-size="11" font-weight="700">$50.9B</text><text x="150" y="223.05200000000002" fill="var(--mut)" font-size="11" text-anchor="end">Aug, Meteora</text><rect x="160" y="201.60000000000002" width="10.70" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="1"/><text x="178.70" y="220.63000000000002" fill="var(--ink)" font-size="11" font-weight="700">$6.7B</text><text x="150" y="270.95200000000006" fill="var(--mut)" font-size="11" text-anchor="end">Aug, everyone else</text><rect x="160" y="249.50000000000003" width="83.66" height="25.950000000000003" rx="3" fill="var(--m)" fill-opacity="0.4"/><text x="251.66" y="268.53000000000003" fill="var(--ink)" font-size="11" font-weight="700">$52.4B</text></svg></div><figcaption class="fc">Meteora (solid bars) balloons in April, then nearly vanishes by August. Everyone else (faded bars) holds flat. <span class="sr">Source: Dune, dex_solana.trades.</span></figcaption></figure>
<figure class="fig"><p class="ft">The full monthly series, as captured on Dune</p><div class="fw"><img src="/images/dune-dex-crash.jpg" alt="Stacked column chart of monthly Solana DEX volume split into Meteora and every other venue, February to August 2026" loading="lazy" decoding="async"/></div><figcaption class="fc">The Meteora block balloons in April and May, then nearly vanishes by August, while everyone else holds flat.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">03</span><span class="t">It is not even all of that venue</span><span class="r"></span></div>
<h3 class="nh">One pool type, not one venue, explains almost everything</h3>
<p>Meteora runs several pool types. Only one moved. Its DAMM v2 constant-product pools (labelled <code>cpamm</code>) went from 252.6 billion dollars in April to 918 million in August, a 99.6% collapse. Average trade size in those pools at the peak was about 680 dollars, which is not retail swap flow. Meteora's main DLMM order book, over the exact same seven months, did 5.5 billion dollars in February and 5.5 billion in August, and never strayed far from a 4 to 5.5 billion dollar band in between. The launchpad and legacy AMM pools are rounding error and also flat.</p>
<div class="edge"><p><b>The "Solana DEX crash" is really a collapse in one pool type, on one venue:</b> high-notional, incentive-sensitive volume that piled into a specific set of pools and then unwound. The data shows it left. It does not show why, though the shape fits an incentive or points program ending.</p></div></section>
<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Where the real market went</span><span class="r"></span></div>
<h3 class="nh">It rotated. It did not shrink</h3>
<div class="chan">
<div><div class="ct">PumpSwap, roughly doubled</div><div class="cd">From <b>$5.0B to $11.7B</b> over the trailing 30 days versus the same window three months earlier. Now the largest non-market-maker DEX on Solana.</div></div>
<div><div class="ct">Raydium, down over the same comparison</div><div class="cd">Fell <b>52%</b> over the same comparison. Below the top names the field is crowded, with a cluster of market-maker venues picking up the freed-up flow.</div></div>
</div></section>
<section class="sec"><div class="fids"><span class="n">05</span><span class="t">What you should actually say</span><span class="r"></span></div>
<div class="closer"><div class="q">True, and misleading in the same breath</div><p>"Solana DEX volume is down 81%" is true and misleading in the same breath. One venue drove the whole move, and within it one pool type drove nearly all of it. Quote the Meteora-adjusted figure, which is flat to slightly up, and treat the DAMM v2 drop as incentive money leaving rather than demand disappearing. If you want one venue to watch, it is PumpSwap.</p></div>
<p class="note">The live dashboard, with every query visible and built to be forked, is at <a href="https://dune.com/ghostiemoh" target="_blank" rel="noopener">dune.com/ghostiemoh</a>.</p></section>
</div>
