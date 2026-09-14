---
title: Retiring the tutorial dashboard, one real dataset at a time
date: 2026-09-14
description: Two Power BI reports built end to end on public regulator data, Nigeria's telecoms subscriptions and Saudi Arabia's Umrah statistics, plus an honestly labelled training set rebuild. Each one now ships with its own repository, and each one caught something the raw numbers alone would have missed.
thumbnail: /images/writing-power-bi-rebuilt.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.dbw{--m:#0f4c5c;--mi:#0c3c48;--md:#082a33;--wash:#e8f0f1;--ink:#141b1c;--body:#38403f;--mut:#68706f;--faint:#98a09e;--ln:#dde6e5;--lns:#cfdad8;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.dbw *{box-sizing:border-box}
.dbw .band{display:flex;align-items:center;gap:.55rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.dbw .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.88)}
.dbw .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.dbw .kpi{background:var(--surf);padding:1rem .95rem}
.dbw .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.6rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.dbw .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.dbw .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.dbw .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.dbw .sec:first-of-type{border-top:0;margin-top:1.2rem}
.dbw .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.dbw .fids .n{color:var(--mi);font-weight:500}
.dbw .fids .t{color:var(--ink);font-weight:500}
.dbw .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.dbw h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.4rem;line-height:1.2;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.dbw p{margin:0 0 .95rem;color:var(--body)}
.dbw p.lede{font-size:1.06rem;color:var(--ink)}
.dbw p.note{color:var(--mut);font-size:.92rem}
.dbw b,.dbw strong{font-weight:700;color:var(--ink)}
.dbw .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:.7rem .7rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,27,28,.04),0 10px 30px -16px rgba(15,76,92,.16)}
.dbw .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.dbw .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:.7rem 0 .05rem}
.dbw .fig .fc{font-size:.8rem;color:var(--mut);margin-top:.35rem;line-height:1.5}
.dbw .fig .fc .sr{color:var(--faint)}
.dbw details.nd{margin-top:.6rem;border-top:1px dashed var(--lns);padding-top:.45rem}
.dbw details.nd summary{font-family:"Roboto Mono",monospace;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);cursor:pointer}
.dbw table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.76rem;font-variant-numeric:tabular-nums}
.dbw table.ndt th,.dbw table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.dbw table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.64rem}
.dbw table.ndt td.n{text-align:right}
.dbw table.ndt a{color:var(--mi)}
.dbw .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.dbw .edge p{margin:0;font-size:.94rem;color:var(--body)}
.dbw .edge p+p{margin-top:.6rem}
.dbw .edge b{color:var(--mi)}
.dbw .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.dbw .closer p{margin:0;color:var(--ink);font-size:.98rem}
.dbw .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
.dbw .tag{display:inline-block;font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;padding:.1rem .42rem;border-radius:4px;background:var(--warnw);color:var(--warn);border:1px solid rgba(176,116,26,.3)}
.dbw .taglist{display:flex;flex-wrap:wrap;gap:.4rem;margin:0 0 .95rem}
.dbw .chip{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.04em;padding:.22rem .55rem;border-radius:20px;background:var(--wash);color:var(--mi);border:1px solid var(--lns)}
@media (max-width:560px){.dbw .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="dbw">
<div class="band"><span class="k">Power BI, three rebuilds</span></div>
<div class="kpis">
<div class="kpi"><div class="v">15.2M</div><div class="l">Umrah performers modelled</div><div class="s">GASTAT, Q1 2026</div></div>
<div class="kpi"><div class="v">327.5M</div><div class="l">Peak quarterly subscriptions</div><div class="s">NBS, Nigeria, Q4 2025</div></div>
<div class="kpi"><div class="v">55</div><div class="l">DAX measures written</div><div class="s">across the three models</div></div>
<div class="kpi"><div class="v">3</div><div class="l">Public repositories</div><div class="s">one PBIP project each</div></div>
</div>

<section class="sec"><div class="fids"><span class="n">01</span><span class="t">Why rebuild</span><span class="r"></span></div>
<h3 class="nh">The old dashboards on this site were tutorials. That was the problem.</h3>
<p class="lede">A Power BI section that leans on the same handful of practice datasets everyone learns on is easy to build and hard to stand out with.</p>
<p>This round replaces two case studies that traced back to common training data with reports built end to end on public regulator releases nobody else has modelled this way, and rebuilds a third from a single flat export into a proper star schema. The aim going forward is the same for every dashboard on this portfolio: fewer shared tutorial datasets, more original builds on data with a real source behind it, and where a training set is kept, say so plainly instead of dressing it up as client work.</p>
<p>All three now ship the same way: a modern PBIP project (not a locked single-file pbix), a public repository, and a written case study with the numbers checked against the report before anything went live.</p>
</section>

<section class="sec"><div class="fids"><span class="n">02</span><span class="t">Nigeria telecoms</span><span class="r"></span></div>
<h3 class="nh">The 2 billion subscriptions headline is seven quarters, added together</h3>
<p>Nigeria's Bureau of Statistics publishes quarterly telecoms subscriber counts by operator and by state. Loaded straight into a report, the total card reads 2 billion subscriptions. That number is real, and it is also seven separate quarters summed into one card, not a subscriber count anyone was ever holding at once.</p>
<figure class="fig">
<img src="/images/telecom-dashboard.webp" alt="Power BI report page titled Growth and Momentum, showing a subscriptions trend, quarter on quarter growth bars, an internet attach rate trend, and a quarterly summary table, with a note that the Q3 2024 contraction is the NIN-SIM disconnection exercise, not a data error." loading="lazy" decoding="async" />
<p class="ft">Growth and Momentum, page 4 of 5</p>
<p class="fc">Read one quarter at a time, the market runs 287 to 327 million subscriptions. It dropped 6.4% in Q3 2024 during Nigeria's NIN-SIM disconnection exercise, the report's own note on the page, then recovered to a new high of 327.5 million in Q4 2025.</p>
</figure>
<p>MTN holds 52.1% of the market, Airtel 34.3%, and Lagos state alone carries more subscriptions than Kano and Ogun combined. None of that is visible from the summed total. It only shows up once the seven quarters are looked at one at a time, in the order they actually happened.</p>
<p class="note">Full case study: <a href="/#work">the Nigeria telecoms write-up</a>. Project: <a href="https://github.com/Ghostiemoh/nigeria-telecoms-power-bi">nigeria-telecoms-power-bi</a> on GitHub.</p>
</section>

<section class="sec"><div class="fids"><span class="n">03</span><span class="t">Umrah, Q1 2026</span><span class="r"></span></div>
<h3 class="nh">Two totals moving in opposite directions inside the same quarter</h3>
<p>Saudi Arabia's statistics authority splits Umrah performers into two groups: people already inside the country, and people arriving from abroad. Folded into one combined total, that split disappears, and with it the fact that Ramadan pulls the two groups in opposite directions.</p>
<figure class="fig">
<img src="/images/umrah-dashboard.webp" alt="Power BI report page titled The Ramadan Effect, showing KPI cards for internal and external performers, a divergence line chart with internal performers rising while external arrivals fall, a trip type breakdown by month, and a monthly summary table." loading="lazy" decoding="async" />
<p class="ft">The Ramadan Effect, page 4 of 5</p>
<p class="fc">Ramadan 2026 began 17 February. Internal performers more than tripled, from 1.30 million in January to a 4.56 million peak in February. Arrivals from abroad fell every month of the same quarter, from 2.24 million to 1.39 million, a 37.9% drop.</p>
</figure>
<p>The report's fifth page is the part I would point to first. GASTAT does not publish a country of origin split, so there is no honest way to say how many of the 5.77 million external arrivals were Nigerian. Rather than force a number the data cannot support, that page states the gap directly and gives a planning range instead, 80,000 to 150,000 a year, with the two estimation methods behind it named in the open. A dashboard that admits what it cannot answer is more useful than one that quietly guesses.</p>
<p class="note">Full case study: <a href="/#work">the Umrah write-up</a>. Project: <a href="https://github.com/Ghostiemoh/umrah-dashboard-power-bi">umrah-dashboard-power-bi</a> on GitHub.</p>
</section>

<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Apocalypse food prep</span><span class="r"></span></div>
<h3 class="nh">Keeping a training set honest instead of dressing it up</h3>
<p>This one is a coursework dataset, the "Apocalypse Food Prep" exercise, and the case study says so. What changed is the build: a flat single-page model became a star schema with a proper Date table and a 17-measure Key Measures table, rebuilt across four pages instead of one.</p>
<figure class="fig">
<img src="/images/powerbi-apocalypse.webp" alt="Power BI executive overview for Apocalypse Food Prep, showing KPI cards for revenue, profit, and margin, a declining monthly revenue trend, revenue by product, and a customer revenue share donut." loading="lazy" decoding="async" />
<p class="ft">Executive Overview, page 1 of 4</p>
<p class="fc">Revenue fell every month, from $39,426.89 in January to $17,579.31 in March, while margin barely moved, 49.3% to 48.2%. The Weatherproof Jacket sold the fewest units of the top six products and still earned the most profit, on a 61.8% margin against 28.7% for the next best seller.</p>
</figure>
<p>The finding is a real workflow proof, revenue and margin can move independently, and rank by margin as well as by volume. It is labelled a training exercise because that is what it is, not because the modelling work behind it is any less real.</p>
<p class="note">Full case study: <a href="/#work">the Apocalypse Food Prep write-up</a>. Project: <a href="https://github.com/Ghostiemoh/apocalypse-food-prep-power-bi">apocalypse-food-prep-power-bi</a> on GitHub.</p>
</section>

<section class="sec"><div class="fids"><span class="n">05</span><span class="t">What ships with each one</span><span class="r"></span></div>
<h3 class="nh">Same structure, three times over</h3>
<p>Every project is a PBIP, Power BI's modern, text-based project format, not a single locked pbix file. That means the model, the measures, and the report layout are all readable in a plain diff, not hidden inside a binary.</p>
<table class="ndt">
<thead><tr><th>Project</th><th class="n">Pages</th><th class="n">DAX measures</th><th>Data source</th><th>Repository</th></tr></thead>
<tbody>
<tr><td>Nigeria telecoms</td><td class="n">5</td><td class="n">15</td><td>NBS, public</td><td><a href="https://github.com/Ghostiemoh/nigeria-telecoms-power-bi">nigeria-telecoms-power-bi</a></td></tr>
<tr><td>Umrah, Q1 2026</td><td class="n">5</td><td class="n">23</td><td>GASTAT, public</td><td><a href="https://github.com/Ghostiemoh/umrah-dashboard-power-bi">umrah-dashboard-power-bi</a></td></tr>
<tr><td>Apocalypse food prep</td><td class="n">4</td><td class="n">17</td><td>Training dataset, disclosed</td><td><a href="https://github.com/Ghostiemoh/apocalypse-food-prep-power-bi">apocalypse-food-prep-power-bi</a></td></tr>
</tbody>
</table>
<div class="edge">
<p><b>Two things I would still fix.</b> Building these end to end also means being honest about what is not finished. The quarter axis on two of the telecoms report's pages sorts by value instead of by calendar order, which flatters a "decline" reading that is not really there once the axis is fixed. And a few of the telecoms Growth page's KPI cards sum across all seven quarters where they should show the latest one, which is exactly how a report ends up claiming 589.8% quarter on quarter growth from a total that was never a single quarter to begin with.</p>
<p>Neither error made it into the portfolio write-up. Both are named here, and in the case study itself, as the next fix to the source report rather than something quietly worked around.</p>
</div>
</section>

<section class="sec"><div class="fids"><span class="n">06</span><span class="t">What this replaces</span><span class="r"></span></div>
<h3 class="nh">Where this goes next</h3>
<p class="note">This is one pass, not the last one. The Power BI section of this portfolio will keep moving in this direction: public or first-party data over shared tutorial sets, a real repository behind every claim, and an explicit label whenever a dataset is practice rather than a client's own numbers.</p>
<div class="closer"><div class="q">The standing rule</div><p>Every figure in this write-up, and in the three case studies it points to, traces back to a workbook in a repository above or a PDF export linked from the case study. Nothing here is rounded up, invented, or quietly softened to read better.</p></div>
</section>
</div>
