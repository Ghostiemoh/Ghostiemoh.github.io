---
title: Fifteen million Umrah performers, five pages deep, and the page that admits what it cannot answer
date: 2026-09-14
description: A full walkthrough of the Umrah Q1 2026 Power BI build across all five pages. Internal and external performers move in opposite directions through Ramadan, 86% of external arrivals come by air, and a dedicated page states an honest planning range instead of a fabricated Nigeria figure.
thumbnail: /images/writing-umrah-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.umr{--m:#1b5e4a;--mi:#154a3a;--md:#0f342a;--wash:#e9f2ee;--ink:#141d1a;--body:#38423e;--mut:#68726d;--faint:#98a29c;--ln:#dde7e2;--lns:#cfdcd5;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.umr *{box-sizing:border-box}
.umr .band{display:flex;align-items:center;gap:.55rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.umr .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.9)}
.umr .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.umr .kpi{background:var(--surf);padding:1rem .95rem}
.umr .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.5rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.umr .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.umr .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.umr .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.umr .sec:first-of-type{border-top:0;margin-top:1.2rem}
.umr .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.umr .fids .n{color:var(--mi);font-weight:500}
.umr .fids .t{color:var(--ink);font-weight:500}
.umr .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.umr h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.35rem;line-height:1.22;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.umr p{margin:0 0 .95rem;color:var(--body)}
.umr p.lede{font-size:1.05rem;color:var(--ink)}
.umr p.note{color:var(--mut);font-size:.92rem}
.umr b,.umr strong{font-weight:700;color:var(--ink)}
.umr .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:.7rem .7rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,29,26,.04),0 10px 30px -16px rgba(27,94,74,.16)}
.umr .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.umr .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:.7rem 0 .05rem}
.umr .fig .fc{font-size:.8rem;color:var(--mut);margin-top:.35rem;line-height:1.5}
.umr table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.76rem;font-variant-numeric:tabular-nums}
.umr table.ndt th,.umr table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.umr table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.64rem}
.umr table.ndt td.n{text-align:right}
.umr .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.umr .edge p{margin:0;font-size:.94rem;color:var(--body)}
.umr .edge p+p{margin-top:.6rem}
.umr .edge b{color:var(--mi)}
.umr .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.umr .closer p{margin:0;color:var(--ink);font-size:.98rem}
.umr .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
@media (max-width:560px){.umr .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="umr">
<div class="band"><span class="k">Power BI, Umrah Q1 2026</span></div>
<div class="kpis">
<div class="kpi"><div class="v">15.2M</div><div class="l">Total Umrah performers</div><div class="s">9.46M internal, 5.77M external</div></div>
<div class="kpi"><div class="v">86.0%</div><div class="l">External arrivals by air</div><div class="s">13.6% land, 0.4% sea</div></div>
<div class="kpi"><div class="v">3.5x</div><div class="l">Internal performer surge</div><div class="s">1.30M Jan to 4.56M peak in Feb</div></div>
<div class="kpi"><div class="v">80K-150K</div><div class="l">Nigeria estimate, stated as a range</div><div class="s">not a fabricated point figure</div></div>
</div>

<section class="sec"><div class="fids"><span class="n">00</span><span class="t">The brief</span><span class="r"></span></div>
<h3 class="nh">GASTAT's own numbers, modelled to keep two questions separate</h3>
<p class="lede">Saudi Arabia's statistics authority (GASTAT) publishes Umrah performer counts for Q1 2026 split only into two groups: people already inside the country (internal) and people arriving from abroad (external). This report models that release, 30 raw cross-tab sheets plus 30 duplicate print-area tables in the original import, all replaced, into a clean star schema across five pages.</p>
<p>Like the Nigeria Telecoms build, this one was made for the WakaGo eSIM case study, and it carries the same discipline through to its last page: where the data cannot answer a question, the report says so directly instead of quietly filling the gap with a number that looks more precise than it is.</p>
</section>

<section class="sec"><div class="fids"><span class="n">01</span><span class="t">The scale</span><span class="r"></span></div>
<h3 class="nh">15 million performers, 62% of them already inside Saudi Arabia</h3>
<p>15,233,767 total performers: 9,464,496 internal (62.13%), 5,769,271 external (37.87%). Internal performers concentrate heavily by region, Makkah Al Mukarramah alone accounts for 4,066,669 of the 9.46M internal total, 43%, ahead of Ar Riyadh (2,026,029), Al Madinah Al Munawwarah (948,687), and smaller totals in Jazan and the Eastern Region.</p>
<figure class="fig">
<img src="/images/umrah-dashboard-1.webp" alt="Power BI page titled Umrah in Q1 2026 The Scale, with KPI cards for total Umrah performers, internal, external and share arriving from abroad, an internal versus external donut, a performers by month grouped bar chart, an internal performers by Saudi region bar chart led by Makkah, and a region detail table." loading="lazy" decoding="async" />
<p class="ft">The Scale, page 1 of 5</p>
<p class="fc">The Performers by Month chart already hints at the report's central finding: external performers (orange) lead internal (green) in January, then internal overtakes external by a wide margin in February.</p>
</figure>
</section>

<section class="sec"><div class="fids"><span class="n">02</span><span class="t">Who comes from abroad</span><span class="r"></span></div>
<h3 class="nh">Slightly more female than male, and skewed toward 55 to 64</h3>
<p>The 5.77 million external performers split 51.8% female to 48.2% male, and 86.0% of them arrived by air. By age band, 55 to 64 is the largest single group at 18.6%, ahead of 35 to 44 (17.8%) and 45 to 54 (17.5%); the youngest band, 15 to 24, is the smallest at 9.2%. Madinah drew roughly 4 million of the external arrivals, a large share of the group's total movement inside the country.</p>
<figure class="fig">
<img src="/images/umrah-dashboard-2.webp" alt="Power BI page titled Who Comes From Abroad, with KPI cards for external performers, female share of arrivals, Madinah external visitors and arriving by air, an external arrivals by month and gender grouped bar chart, an age mix of external performers bar chart led by the 55 to 64 band, an age mix by month chart, and an age group detail table." loading="lazy" decoding="async" />
<p class="ft">Who Comes From Abroad, page 2 of 5</p>
<p class="fc">January is the only month where male arrivals edge ahead of female; February and March both skew more female, which is part of why the quarter-wide split lands close to even at 51.8/48.2.</p>
</figure>
</section>

<section class="sec"><div class="fids"><span class="n">03</span><span class="t">How they arrive</span><span class="r"></span></div>
<h3 class="nh">86% by air, the connectivity moment a travel eSIM is built for</h3>
<p>Of the 5.77M external performers, 86.0% arrived by air (about 4.96M people), 13.6% by land, and 0.4% by sea. The monthly split shows air arrivals highest in January (a little over 2M) and falling through February and March as the quarter's overall external volume declines. This page is the direct link to the WakaGo case study behind the build: a traveller who lands by air needs data before they leave the terminal, and that is the majority path into the country by a wide margin over land or sea.</p>
<figure class="fig">
<img src="/images/umrah-dashboard-3.webp" alt="Power BI page titled How They Arrive, with KPI cards for external arrivals by air, air share, land share and total external performers, a port of entry mix donut dominated by air, an external arrivals by month bar chart, a share by port type bar chart, and a port of entry detail table." loading="lazy" decoding="async" />
<p class="ft">How They Arrive, page 3 of 5</p>
<p class="fc">Sea arrivals round to 0.4% of the total and barely register on the chart, land carries a real but secondary 13.6%, air is not close.</p>
</figure>
</section>

<section class="sec"><div class="fids"><span class="n">04</span><span class="t">The Ramadan effect</span><span class="r"></span></div>
<h3 class="nh">Internal performers surge into Ramadan while arrivals from abroad fall</h3>
<p>Ramadan 2026 began 17 February. Internal performers rose from 1,301,343 in January to 4,558,570 in February, more than tripling, before easing to 3,604,583 in March, still well above the January level. Arrivals from abroad moved the opposite way in every one of the same three months: 2,237,418 in January, 2,141,723 in February, 1,390,130 in March, a 37.9% fall from the start of the quarter to the end. The two series are not just uncorrelated, they run in genuinely opposite directions across the same three months.</p>
<figure class="fig">
<img src="/images/umrah-dashboard.webp" alt="Power BI report page titled The Ramadan Effect: KPI cards for internal and external performers and their month-on-month growth, a divergence line chart showing internal performers rising while external arrivals fall, a trip-type breakdown by month, and a monthly summary table." loading="lazy" decoding="async" />
<p class="ft">The Ramadan Effect, page 4 of 5</p>
<p class="fc">The report's own line chart shows the divergence directly, though its Monthly Summary table below lists the months as February, March, January rather than calendar order, worth reading against the chart rather than top to bottom.</p>
</figure>
<p>Trip type shifts with the season too: "With family" trips jump from a small January base to the largest single category in both February and March, while individual and with-friends trips stay a minor share throughout. Payment source shows the same seasonal concentration, "Personal account or family" funds the overwhelming majority of trips in February and March, well above its already-large January share.</p>
</section>

<section class="sec"><div class="fids"><span class="n">05</span><span class="t">The Nigeria gap</span><span class="r"></span></div>
<h3 class="nh">No public source answers this, so the page says exactly that</h3>
<p>GASTAT publishes external Umrah performers by gender, age, and port of entry, not by country of origin. NAHCON, Nigeria's regulator, licenses about 239 Umrah operators but does not publish pilgrim volume. The closest hard anchor is 2023 IATA route data, 92,100 Nigeria-to-Jeddah air trips and 45,500 Nigeria-to-Madinah, for all trip purposes, not Umrah specifically. None of the three sources can be combined into a real Nigeria-specific Umrah count.</p>
<figure class="fig">
<img src="/images/umrah-dashboard-5.webp" alt="Power BI page titled The Nigeria Gap, stating that no public source answers how many Nigerians perform Umrah each year, with three source cards for GASTAT, NAHCON and IATA, a recommended planning range of 80,000 to 150,000 Nigerian Umrah air travellers per year with a central figure of about 110,000, and three suggested ways to close the gap for real." loading="lazy" decoding="async" />
<p class="ft">The Nigeria Gap, page 5 of 5</p>
<p class="fc">The page states its method in the open: two independent estimates that happen to agree, an air-route residual and an operator-base scaling across the 239 licensed companies, both labelled an assumption, never measured data.</p>
</figure>
<div class="edge">
<p><b>Why this page matters more than a chart would.</b> The easy version of this page invents a single number, "roughly 120,000 Nigerians perform Umrah a year," and moves on. This one shows the recommended range, 80,000 to 150,000, with a central planning figure near 110,000, names both estimation methods, and lists three concrete ways to actually close the gap: a NAHCON freedom-of-information request, a stratified survey of the 239 licensed operators, or purchased airline seat-capacity data for the Lagos, Kano, and Abuja to Jeddah and Madinah routes. A band with a method attached is more useful to plan against than a false point figure, and it is the more defensible thing to publish.</p>
</div>
</section>

<section class="sec"><div class="fids"><span class="n">06</span><span class="t">What shipped</span><span class="r"></span></div>
<h3 class="nh">Star schema, 23 measures, five pages, one repository</h3>
<table class="ndt">
<thead><tr><th>Page</th><th>What it answers</th></tr></thead>
<tbody>
<tr><td>The Scale</td><td>Internal versus external totals, by month and region</td></tr>
<tr><td>Who Comes From Abroad</td><td>Gender and age mix of the 5.77M external arrivals</td></tr>
<tr><td>How They Arrive</td><td>Port of entry, the connectivity-moment argument for an eSIM</td></tr>
<tr><td>The Ramadan Effect</td><td>Internal and external performers moving in opposite directions</td></tr>
<tr><td>The Nigeria Gap</td><td>An honest range where GASTAT publishes no answer</td></tr>
</tbody>
</table>
<p class="note">Full PBIP project and the PDF export: <a href="https://github.com/Ghostiemoh/umrah-dashboard-power-bi">umrah-dashboard-power-bi</a> on GitHub.</p>
<div class="closer"><div class="q">The standing rule</div><p>Every figure above traces back to the report's own cards, tables, or the ground-truth totals GASTAT publishes. Where a chart's axis order does not match calendar order, that is named here rather than quietly cropped out.</p></div>
</section>
</div>
