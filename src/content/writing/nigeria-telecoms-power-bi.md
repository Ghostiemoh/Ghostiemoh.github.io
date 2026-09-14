---
title: Nigeria's telecoms market, five pages deep, and where one small operator actually stands in it
date: 2026-09-14
description: A full walkthrough of the Nigeria Telecoms Power BI build across all five pages. The 2 billion headline is seven quarters added together, MTN and Airtel hold 86% of the market between them, and a dedicated page benchmarks ntel, the operator this project was built for, at 0.027% market share.
thumbnail: /images/writing-telecom-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.ntl{--m:#0f4c5c;--mi:#0c3c48;--md:#082a33;--wash:#e8f0f1;--ink:#141b1c;--body:#38403f;--mut:#68706f;--faint:#98a09e;--ln:#dde6e5;--lns:#cfdad8;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.ntl *{box-sizing:border-box}
.ntl .band{display:flex;align-items:center;gap:.55rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.ntl .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.9)}
.ntl .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.ntl .kpi{background:var(--surf);padding:1rem .95rem}
.ntl .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.5rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.ntl .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.ntl .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.ntl .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.ntl .sec:first-of-type{border-top:0;margin-top:1.2rem}
.ntl .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.ntl .fids .n{color:var(--mi);font-weight:500}
.ntl .fids .t{color:var(--ink);font-weight:500}
.ntl .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.ntl h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.35rem;line-height:1.22;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.ntl p{margin:0 0 .95rem;color:var(--body)}
.ntl p.lede{font-size:1.05rem;color:var(--ink)}
.ntl p.note{color:var(--mut);font-size:.92rem}
.ntl b,.ntl strong{font-weight:700;color:var(--ink)}
.ntl .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:.7rem .7rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,27,28,.04),0 10px 30px -16px rgba(15,76,92,.16)}
.ntl .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.ntl .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:.7rem 0 .05rem}
.ntl .fig .fc{font-size:.8rem;color:var(--mut);margin-top:.35rem;line-height:1.5}
.ntl table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.76rem;font-variant-numeric:tabular-nums}
.ntl table.ndt th,.ntl table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.ntl table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.64rem}
.ntl table.ndt td.n{text-align:right}
.ntl .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.ntl .edge p{margin:0;font-size:.94rem;color:var(--body)}
.ntl .edge p+p{margin-top:.6rem}
.ntl .edge b{color:var(--mi)}
.ntl .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.ntl .closer p{margin:0;color:var(--ink);font-size:.98rem}
.ntl .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
@media (max-width:560px){.ntl .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="ntl">
<div class="band"><span class="k">Power BI, Nigeria Telecoms</span></div>
<div class="kpis">
<div class="kpi"><div class="v">287-327M</div><div class="l">Real quarterly range</div><div class="s">not the 2bn headline total</div></div>
<div class="kpi"><div class="v">86.4%</div><div class="l">MTN + Airtel combined</div><div class="s">of the whole national market</div></div>
<div class="kpi"><div class="v">37</div><div class="l">States and FCT covered</div><div class="s">across six geopolitical zones</div></div>
<div class="kpi"><div class="v">0.027%</div><div class="l">ntel's own market share</div><div class="s">591,222 subscriptions nationally</div></div>
</div>

<section class="sec"><div class="fids"><span class="n">00</span><span class="t">The brief</span><span class="r"></span></div>
<h3 class="nh">Public regulator data, modelled into five pages</h3>
<p class="lede">Nigeria's telecoms regulator publishes quarterly subscriber counts by operator and by state, across 13 reporting operators. This report models seven quarters of that release, Q2 2024 through Q4 2025, into a star schema with measures for subscriptions, market share, and quarter-on-quarter change, then reads it back one page at a time so no single summary card gets to stand in for the whole picture.</p>
<p>This build has a second purpose. It was made as the data-analysis piece behind a real application to ntel, a small Nigerian ISP, so the fifth page turns the same model around and asks the honest version of the obvious question: against a market this size, where does ntel actually stand.</p>
</section>

<section class="sec"><div class="fids"><span class="n">01</span><span class="t">Market overview</span><span class="r"></span></div>
<h3 class="nh">2 billion subscriptions is seven quarters, not a subscriber count</h3>
<p>The topline card reads 2bn total subscriptions, 1bn voice, 979M internet, across 13 operators. Read that way it looks like Nigeria has two billion active lines. It does not, the underlying Operator Share table sums all seven quarters together: MTN's own row shows 1,130,170,782 "subscriptions," a figure nobody at MTN was ever holding at once. The quarterly trend chart on the same page tells the real story, a line moving between 287M and 327M, not billions.</p>
<figure class="fig">
<img src="/images/telecom-dashboard-1.webp" alt="Power BI page titled Nigeria Telecoms Market Overview, with KPI cards for total subscriptions, voice, internet and operators reporting, a total subscriptions by quarter trend line, a subscriptions by operator bar chart, a voice versus internet by quarter grouped bar chart, and an operator share table." loading="lazy" decoding="async" />
<p class="ft">Nigeria Telecoms Market Overview, page 1 of 5</p>
<p class="fc">MTN holds 52.1% of the summed total, Airtel 34.3%, Glo 11.7%. Because these are shares of a sum rather than of a snapshot, the percentages still read correctly even while the absolute numbers next to them do not.</p>
</figure>
<div class="edge">
<p><b>The quarter axis is sorted by value, not by date.</b> The Total Subscriptions by Quarter chart runs Q4 2025, Q1 2025, Q3 2025, Q2 2025, Q2 2024, Q4 2024, Q3 2024 left to right, which is why the line reads as a clean, steady decline. It is not one. Plotted in calendar order the same seven points show a dip in Q3 2024, a recovery, a small wobble in Q2 2025, and a new high in Q4 2025, the version already published in the <a href="/#work">portfolio case study</a>'s chart.</p>
</div>
</section>

<section class="sec"><div class="fids"><span class="n">02</span><span class="t">Operator landscape</span><span class="r"></span></div>
<h3 class="nh">Two operators, 86% of the market, and internet attach at 82.4%</h3>
<p>1bn GSM subscriptions, 82.4% internet attach across the base, 13 operators reporting. MTN and Airtel between them hold 86.4% of the summed total; Glo adds another 11.7%, leaving under 2% for the remaining ten operators, 9mobile included. The GSM-versus-Fixed/ISP split runs close to even, 52.3% GSM to 47.7% Fixed/ISP, which is a wider fixed-line share than the headline "mobile market" framing usually implies.</p>
<figure class="fig">
<img src="/images/telecom-dashboard-2.webp" alt="Power BI page titled Operator Landscape, with KPI cards for GSM subscriptions, operators reporting, internet attach and total subscriptions, a subscriptions by operator bar chart, a quarter on quarter growth by operator bar chart, a share by operator type donut, and an operator detail table." loading="lazy" decoding="async" />
<p class="ft">Operator Landscape, page 2 of 5</p>
<p class="fc">The QoQ Growth by Operator chart has one bar far above the rest, labelled 21st Century, at over 100,000% growth. That is a small operator's count moving from a handful of lines to a larger base, a genuine percentage change on a tiny denominator, not a data error, but not comparable to MTN or Airtel's much steadier bars next to it.</p>
</figure>
<p>The Operator Detail table breaks voice and internet out separately: MTN carries 609,612,676 voice and 520,558,106 internet (summed across quarters, the same rollup as page one), Airtel 406,919,287 and 337,198,376, Glo 145,510,583 and 108,108,373. The internet share within each operator's own base sits close to 46 to 47% for all three, so the internet-versus-voice mix does not swing the ranking, only the totals do.</p>
</section>

<section class="sec"><div class="fids"><span class="n">03</span><span class="t">Geographic coverage</span><span class="r"></span></div>
<h3 class="nh">Lagos alone outweighs Kano and Ogun combined</h3>
<p>37 states covered (36 plus the FCT), an average of 59M subscriptions per state on the summed basis, spread across six geopolitical zones. Lagos leads the state ranking by a wide margin, its bar roughly double Kano's, the second-largest state. The South West zone carries 28.34% of the national total (614M), ahead of North West at 19.27% (418M) and North Central at 17.28% (374M); South East is the smallest tracked zone at 10.25% (222M), with a residual Unallocated slice near zero.</p>
<figure class="fig">
<img src="/images/telecom-dashboard-3.webp" alt="Power BI page titled Geographic Coverage, with KPI cards for states covered, subscriptions per state, total subscriptions and internet subscriptions, a subscriptions by state bar chart led by Lagos, a subscriptions by zone bar chart, a zone share donut, and a state detail table." loading="lazy" decoding="async" />
<p class="ft">Geographic Coverage, page 3 of 5</p>
<p class="fc">Lagos alone carries 145,986,873 voice subscriptions on the summed basis, well ahead of Kano's 74,886,937 and Ogun's 66,256,398. Lagos, Kano, and Ogun are the three states the site's own case study calls out as the largest concentration outside the South West's overall zone lead.</p>
</figure>
<p>Coverage is not evenly spread even within a leading zone. The South West's 28.34% share is carried almost entirely by Lagos and Ogun; Oyo and the zone's smaller states trail well behind both.</p>
</section>

<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Growth and momentum</span><span class="r"></span></div>
<h3 class="nh">A 6.4% dip, a recovery, and a 589.8% growth card that is really seven quarters at once</h3>
<p>This is the page the main case study's chart comes from. Read one quarter at a time: 307.1M in Q2 2024, a 6.4% drop to 287.5M in Q3 2024 during the NIN-SIM disconnection exercise, recovery through 303.9M and 314.5M, a slight dip to 312.6M in Q2 2025, then 314.2M and a new high of 327.5M in Q4 2025, 13.9% above the Q3 2024 low. The page's own QoQ Growth card reads 589.8%. That number compares the same seven-quarter summed total (2.17bn) against a single Previous Quarter figure (314M), not one quarter against the one before it, so it is not a real 589.8% swing; the Quarterly Summary table directly below it shows the true quarter-on-quarter moves are single digits, a 4.2% rise into Q4 2025 among them.</p>
<figure class="fig">
<img src="/images/telecom-dashboard.webp" alt="Power BI report page titled Growth and Momentum: a subscriptions trend line, quarter-on-quarter growth bars, an internet attach rate trend, and a quarterly summary table, with a note that the Q3 2024 contraction is the NIN-SIM disconnection exercise, not a data error." loading="lazy" decoding="async" />
<p class="ft">Growth and Momentum, page 4 of 5</p>
<p class="fc">The analyst note is written directly into the report: the Q3 2024 dip is a regulatory event, not a data problem. That honesty does not extend to the QoQ Growth KPI card sitting next to it, which still reads a distorted 589.8%.</p>
</figure>
<p class="note">Full case study, with the corrected seven-quarter chart: <a href="/#work">the Nigeria telecoms write-up</a>.</p>
</section>

<section class="sec"><div class="fids"><span class="n">05</span><span class="t">ntel market position</span><span class="r"></span></div>
<h3 class="nh">591,222 subscriptions, 0.027% of the national market, concentrated in Kaduna</h3>
<p>This page exists because the whole build was made for a specific reason: an application to ntel, a small Nigerian fixed and mobile operator. Its own numbers, read against the market this report already sized: 591,222 subscriptions nationally, a 0.027% market share against the 2.17 billion summed total. Kaduna is ntel's largest state at roughly 170,000 subscriptions, ahead of Lagos, Oyo, Kano, and the FCT. By zone, the North West carries the largest ntel base (249,365, a 0.060% share of that zone), ahead of the South West (193,250, 0.031%) and South South (77,046, 0.026%).</p>
<figure class="fig">
<img src="/images/telecom-dashboard-5.webp" alt="Power BI page titled ntel Market Position, with KPI cards for ntel subscriptions, ntel market share, market total and operators reporting, an ntel subscriptions by state bar chart led by Kaduna, an ntel subscriptions by quarter trend, a market context by operator bar chart, and an ntel by zone table." loading="lazy" decoding="async" />
<p class="ft">ntel Market Position, page 5 of 5</p>
<p class="fc">The quarter axis here runs newest to oldest, Q4 2025 on the left back to Q2 2024 on the right, the reverse of a normal reading direction. Read correctly, right to left, ntel's subscriber base grew from close to zero in Q2 2024 up to roughly 200,000 and has held there through the more recent quarters, not the steep decline the chart appears to show at first glance.</p>
</figure>
<div class="edge">
<p><b>The honest angle, on purpose.</b> A 0.027% market share is not a flattering number, and this page does not round it up or bury it under a bigger denominator. It is the employer's own real position in a market this build already spent four pages sizing accurately, presented the same way as every other figure in the report.</p>
</div>
</section>

<section class="sec"><div class="fids"><span class="n">06</span><span class="t">What shipped</span><span class="r"></span></div>
<h3 class="nh">Star schema, 15 measures, five pages, one repository</h3>
<table class="ndt">
<thead><tr><th>Page</th><th>What it answers</th></tr></thead>
<tbody>
<tr><td>Market Overview</td><td>The 2bn headline, unpacked into a real quarterly range</td></tr>
<tr><td>Operator Landscape</td><td>Market share, GSM vs Fixed/ISP, growth by operator</td></tr>
<tr><td>Geographic Coverage</td><td>State and zone concentration</td></tr>
<tr><td>Growth and Momentum</td><td>The corrected seven-quarter trend and the NIN-SIM dip</td></tr>
<tr><td>ntel Market Position</td><td>One small operator's honest share of the market above</td></tr>
</tbody>
</table>
<p class="note">Full PBIP project and the PDF export: <a href="https://github.com/Ghostiemoh/nigeria-telecoms-power-bi">nigeria-telecoms-power-bi</a> on GitHub.</p>
<div class="closer"><div class="q">Two fixes worth making at the source</div><p>The quarter axis sorts by value instead of by calendar order on two of these five pages, Market Overview and ntel Market Position, which flatters or distorts the trend depending on which way it happens to fall. And several KPI cards, the topline total, the operator totals, and the QoQ Growth card on page four, sum across all seven quarters where a latest-quarter or genuine period-over-period figure would be correct. Both are named here rather than quietly worked around.</p></div>
</section>
</div>
