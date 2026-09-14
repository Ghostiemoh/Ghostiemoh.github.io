---
title: The pump.fun graduation rate tripled while launches were actually falling
date: 2026-09-14
description: 1.15 million tokens launch on pump.fun every 30 days, but only 2.8% ever reach PumpSwap. That graduation rate has roughly tripled since June, from 0.9% to 2.9%, over the same months monthly launches eased off their spring peak.
thumbnail: /images/writing-dune-pumpfun-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.pfl{--m:#e0521c;--mi:#a53911;--md:#69250b;--wash:#f6ece8;--ink:#17151a;--body:#3a3640;--mut:#6b6672;--faint:#9a95a0;--ln:#e8e1de;--lns:#ddd3cf;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.pfl *{box-sizing:border-box}
.pfl .band{display:flex;align-items:center;gap:.6rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.pfl .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.88)}
.pfl .band .k2{margin-left:auto;font-family:"Roboto Mono",ui-monospace,monospace;font-size:.62rem;letter-spacing:.08em;color:rgba(255,255,255,.72)}
.pfl .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.pfl .kpi{background:var(--surf);padding:1rem .95rem}
.pfl .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.55rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.pfl .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.pfl .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.pfl .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.pfl .sec:first-of-type{border-top:0;margin-top:1.2rem}
.pfl .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.pfl .fids .n{color:var(--mi);font-weight:500}
.pfl .fids .t{color:var(--ink);font-weight:500}
.pfl .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.pfl h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.4rem;line-height:1.2;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.pfl p{margin:0 0 .95rem;color:var(--body)}
.pfl p.lede{font-size:1.06rem;color:var(--ink)}
.pfl p.note{color:var(--mut);font-size:.92rem}
.pfl b,.pfl strong{font-weight:700;color:var(--ink)}
.pfl .flag{color:var(--warn);font-weight:700}
.pfl .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:1.05rem 1rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,16,25,.04),0 10px 30px -16px rgba(20,16,25,.14)}
.pfl .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:0 0 .05rem}
.pfl .fig .fs{font-size:.8rem;color:var(--faint);margin:0 0 .55rem}
.pfl .fig .fw{width:100%;overflow-x:auto}
.pfl .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.pfl-chart{display:block;width:100%;height:auto;font-family:"Roboto Mono",monospace}
.pfl .fig .fc{font-size:.78rem;color:var(--mut);margin-top:.6rem;line-height:1.5}
.pfl .fig .fc .sr{color:var(--faint)}
.pfl details.nd{margin-top:.6rem;border-top:1px dashed var(--lns);padding-top:.45rem}
.pfl details.nd summary{font-family:"Roboto Mono",monospace;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);cursor:pointer}
.pfl table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.78rem;font-variant-numeric:tabular-nums}
.pfl table.ndt th,.pfl table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.pfl table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.66rem}
.pfl table.ndt td.n{text-align:right}
.pfl .chan{display:grid;grid-template-columns:1fr;gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:12px;overflow:hidden;margin:1.3rem 0}
.pfl .chan>div{background:var(--surf);padding:.9rem 1rem}
.pfl .chan .ct{font-family:"Roboto Mono",monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mi);margin-bottom:.22rem}
.pfl .chan .cd{font-size:.9rem;color:var(--body)}
.pfl .chan .cd b{font-weight:700}
.pfl .chan .p2{border-left:3px solid var(--m);background:var(--wash)}
.pfl .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.pfl .edge p{margin:0;font-size:.94rem;color:var(--body)}
.pfl .edge p+p{margin-top:.6rem}
.pfl .edge b{color:var(--mi)}
.pfl .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.pfl .closer p{margin:0;color:var(--ink);font-size:.98rem}
.pfl .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
.pfl .srcs{font-family:"Roboto Mono",monospace;font-size:.78rem;color:var(--mut);line-height:1.7}
.pfl .srcs b{color:var(--ink);font-weight:500}
.pfl .tag{display:inline-block;font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;padding:.1rem .42rem;border-radius:4px;background:var(--warnw);color:var(--warn);border:1px solid rgba(176,116,26,.3)}
@media (max-width:560px){.pfl .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="pfl">
<div class="band"><span class="k">On-chain report &middot; Dune analytics</span><span class="k2">dex_solana.trades, trailing 30 days</span></div>
<div class="kpis">
<div class="kpi"><div class="v">1.15M</div><div class="l">Tokens launched / 30d</div><div class="s">~38,000 a day</div></div>
<div class="kpi"><div class="v">2.8%</div><div class="l">Graduation rate</div><div class="s">to PumpSwap</div></div>
<div class="kpi"><div class="v">$15.5B</div><div class="l">Combined volume</div><div class="s">bonding curve + PumpSwap</div></div>
<div class="kpi"><div class="v">$70M</div><div class="l">Trading fees</div><div class="s">30-day total</div></div>
</div>
<section class="sec"><div class="fids"><span class="n">01</span><span class="t">The scale of the funnel</span><span class="r"></span></div>
<h3 class="nh">The assembly line for Solana memecoins</h3>
<p class="lede">Measured through <code>dex_solana.trades</code>: the pump.fun bonding curve where tokens start, and PumpSwap, the AMM they graduate to.</p>
<p>About 1.15 million tokens launch on pump.fun every 30 days, roughly 38,000 a day, against $15.5B of combined bonding-curve and PumpSwap volume and $70M of trading fees. PumpSwap alone carries about three times the bonding curve's own volume, which means most of the dollar activity here is happening after a token has already graduated, not during its first minutes on the curve.</p></section>
<section class="sec"><div class="fids"><span class="n">02</span><span class="t">Graduation tripled while launches cooled</span><span class="r"></span></div>
<h3 class="nh">From 0.9% to 2.9% since June</h3>
<p>Only about 2.8% of launched tokens ever reach PumpSwap. That rate has roughly tripled since June, from 0.9% to 2.9%, over the same months that monthly launches eased off their spring peak. Fewer tokens launching with a rising share of them actually graduating is a different market than more tokens launching with graduation staying flat, even though both could produce a similar PumpSwap volume number on their own.</p>
<figure class="fig"><p class="ft">As captured on Dune</p><div class="fw"><img src="/images/dune-pumpfun.webp" alt="Line chart titled Monthly tokens launched and graduation rate, showing tokens launched declining from April through June before climbing into August, while the graduation rate rises steadily from under 1 percent to nearly 3 percent" loading="lazy" decoding="async"/></div><figcaption class="fc">The two lines cross in June: launches were near their low point for the period while graduation was just beginning its climb.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">03</span><span class="t">Where the dollars actually sit</span><span class="r"></span></div>
<p>Breaking the $15.5B of volume down by day shows PumpSwap (the AMM tokens graduate into) pulling steadily away from the bonding curve through the second half of August, peaking near $900M in a single day around August 27th, while bonding-curve volume stays in a comparatively narrow band the whole month.</p>
<figure class="fig"><p class="ft">As captured on Dune</p><div class="fw"><img src="/images/dune-pumpfun-2.webp" alt="Stacked area chart titled Daily volume, bonding curve vs PumpSwap 30d, showing PumpSwap volume climbing sharply through late August to a peak above 800 million while bonding curve volume stays relatively flat" loading="lazy" decoding="async"/></div><figcaption class="fc">PumpSwap's growth through the month is not matched by a similar rise on the bonding curve underneath it.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Retention is improving under a huge top of funnel</span><span class="r"></span></div>
<p>Between 1.3 and 1.9 million new traders enter each week, and the returning-trader count has grown from about 340,000 a week in June to 960,000 in August. Retention is genuinely improving even while the top of the funnel, new token launches, stays enormous by any normal market's standard.</p>
<figure class="fig"><p class="ft">Returning traders per week</p><div class="fw"><svg class="pfl-chart" viewBox="0 0 640 220" role="img" aria-label="Bar chart of weekly returning traders growing from 340 thousand in June to 960 thousand in August" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="174.0" x2="620" y2="174.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="177.0" fill="var(--mut)" font-size="10" text-anchor="end">0K</text><line x1="40" y1="135.5" x2="620" y2="135.5" stroke="var(--ln)" stroke-width="1"/><text x="32" y="138.5" fill="var(--mut)" font-size="10" text-anchor="end">275K</text><line x1="40" y1="97.0" x2="620" y2="97.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="100.0" fill="var(--mut)" font-size="10" text-anchor="end">550K</text><line x1="40" y1="58.5" x2="620" y2="58.5" stroke="var(--ln)" stroke-width="1"/><text x="32" y="61.5" fill="var(--mut)" font-size="10" text-anchor="end">825K</text><line x1="40" y1="20.0" x2="620" y2="20.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="23.0" fill="var(--mut)" font-size="10" text-anchor="end">1100K</text><rect x="124.1" y="126.4" width="121.8" height="47.6" rx="3" fill="var(--m)" fill-opacity="1"/><text x="185.0" y="118.4" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">340K</text><text x="185.0" y="190.0" fill="var(--mut)" font-size="11" text-anchor="middle">June</text><rect x="414.1" y="39.6" width="121.8" height="134.4" rx="3" fill="var(--m)" fill-opacity="1"/><text x="475.0" y="31.6" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">960K</text><text x="475.0" y="190.0" fill="var(--mut)" font-size="11" text-anchor="middle">August</text></svg></div><figcaption class="fc">Nearly a 3x rise in weekly returning traders across two months, even as the launch funnel stayed enormous.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">05</span><span class="t">Reading the proxies correctly</span><span class="r"></span></div>
<p class="note">"Launch" here means a token's first pump.fun trade inside the report window, and "graduation" means its first PumpSwap trade, both are proxies bounded by the window rather than direct program-event counts, so the earliest month in any chart understates true launches, and totals read lower than pump.fun's own event-log dashboards would show.</p>
<p class="note">Full dashboard, every query public and built to be forked: <a href="https://dune.com/ghostiemoh/pump-fun-and-the-launchpad-economy" target="_blank" rel="noopener">Pump.fun and the Launchpad Economy</a> on Dune.</p></section>
</div>
