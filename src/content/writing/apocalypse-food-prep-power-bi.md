---
title: Four pages, one flat export, and a product that outearned its own unit count
date: 2026-09-14
description: A full walkthrough of the Apocalypse Food Prep Power BI rebuild, page by page. Revenue fell every month while margin held flat, the best-margin product was not the best seller, and two of the report's own KPI cards turned up blank for a reason worth explaining rather than hiding.
thumbnail: /images/writing-apocalypse-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.apf{--m:#52606d;--mi:#3e4a54;--md:#2b333a;--wash:#eef0f2;--ink:#1c2126;--body:#3c454c;--mut:#6b747c;--faint:#9aa2a9;--ln:#dde2e6;--lns:#ccd3d9;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.apf *{box-sizing:border-box}
.apf .band{display:flex;align-items:center;gap:.55rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.apf .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.9)}
.apf .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.apf .kpi{background:var(--surf);padding:1rem .95rem}
.apf .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.5rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.apf .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.apf .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.apf .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.apf .sec:first-of-type{border-top:0;margin-top:1.2rem}
.apf .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.apf .fids .n{color:var(--mi);font-weight:500}
.apf .fids .t{color:var(--ink);font-weight:500}
.apf .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.apf h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.35rem;line-height:1.22;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.apf p{margin:0 0 .95rem;color:var(--body)}
.apf p.lede{font-size:1.05rem;color:var(--ink)}
.apf p.note{color:var(--mut);font-size:.92rem}
.apf b,.apf strong{font-weight:700;color:var(--ink)}
.apf .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:.7rem .7rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(28,33,38,.04),0 10px 30px -16px rgba(43,51,58,.16)}
.apf .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.apf .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:.7rem 0 .05rem}
.apf .fig .fc{font-size:.8rem;color:var(--mut);margin-top:.35rem;line-height:1.5}
.apf table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.76rem;font-variant-numeric:tabular-nums}
.apf table.ndt th,.apf table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.apf table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.64rem}
.apf table.ndt td.n{text-align:right}
.apf .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.apf .edge p{margin:0;font-size:.94rem;color:var(--body)}
.apf .edge p+p{margin-top:.6rem}
.apf .edge b{color:var(--mi)}
.apf .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.apf .closer p{margin:0;color:var(--ink);font-size:.98rem}
.apf .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
@media (max-width:560px){.apf .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="apf">
<div class="band"><span class="k">Power BI, Apocalypse Food Prep</span></div>
<div class="kpis">
<div class="kpi"><div class="v">$87.95K</div><div class="l">Total revenue</div><div class="s">3,001 units, 74 orders</div></div>
<div class="kpi"><div class="v">49.1%</div><div class="l">Overall profit margin</div><div class="s">barely moves, month to month</div></div>
<div class="kpi"><div class="v">265</div><div class="l">Units of the top earner</div><div class="s">fewest of the top six products</div></div>
<div class="kpi"><div class="v">61.8%</div><div class="l">Its margin</div><div class="s">vs 28.7% for the next-biggest revenue line</div></div>
</div>

<section class="sec"><div class="fids"><span class="n">00</span><span class="t">The brief</span><span class="r"></span></div>
<h3 class="nh">One flat export, rebuilt into a star schema and four pages</h3>
<p class="lede">Apocalypse Food Prep is a training dataset, the well-known "Alex The Analyst" coursework export, and this report says so rather than dressing it up as client work. What changed is the modelling: the original was a single flat table with no relationships, no calculated Date table, and zero DAX measures. This rebuild is a proper star schema on ID joins, a real Date table, a 17-measure Key Measures table, and four pages instead of one.</p>
<p>3,001 units sold to 4 customers across January to March 2022, with cost, price, order date, and buyer age group on each underlying record. The point of this write-up is not to pretend the numbers are bigger than they are, it is to show what a flat export looks like once it is actually modelled, and what that modelling turns up.</p>
</section>

<section class="sec"><div class="fids"><span class="n">01</span><span class="t">Executive overview</span><span class="r"></span></div>
<h3 class="nh">Revenue fell every month. Margin barely moved.</h3>
<p>$87,945.09 in total revenue, $43,212.43 in profit, a 49.1% overall margin, across 74 orders. Broken out by month the revenue line only goes one way: $39,426.89 in January, $30,938.89 in February, $17,579.31 in March, a fall of 55% start to end. Margin over the same three months moves from 49.3% to 49.4% to 48.2%, a swing of little more than a point. Whatever is driving the revenue drop, it is not price or cost discipline slipping.</p>
<figure class="fig">
<img src="/images/powerbi-apocalypse.webp" alt="Power BI page titled Apocalypse Food Prep Executive Overview, with KPI cards for total revenue, profit, margin and orders, a declining revenue trend line, a revenue by product bar chart led by the Weatherproof Jacket, a revenue share donut by customer, and a product performance table." loading="lazy" decoding="async" />
<p class="ft">Executive Overview, page 1 of 4</p>
<p class="fc">The Weatherproof Jacket leads revenue by a wide margin, $21,197.35, ahead of the Stainless Steel Axe at $15,925.00 and the Multitool Survival Knife at $13,828.23. The four-customer donut is close to even, Apocolypse Preppers United the largest at 36.3% of revenue, Prep4Anything Prepping Store the smallest at 16.0%.</p>
</figure>
<p>The revenue drop is a volume problem, not a pricing one. That distinction is the reason the next page exists.</p>
</section>

<section class="sec"><div class="fids"><span class="n">02</span><span class="t">Product profitability</span><span class="r"></span></div>
<h3 class="nh">The best-margin product was not the best seller</h3>
<p>$44.73K total cost against $43.21K profit, a $29.31 average selling price, and a $1.19K average order value. The Product Profitability Detail table, sorted by units sold rather than revenue, changes the story: the Multitool Survival Knife leads on units at 477, followed by Nylon Rope at 390, Duct Tape at 365, the Stainless Steel Axe at 350, an N95 Mask at 343, and the Weatherproof Jacket at only 265, dead last of the six shown despite being the clear revenue leader on page one.</p>
<figure class="fig">
<img src="/images/powerbi-apocalypse-2.webp" alt="Power BI page titled Product Profitability, with KPI cards for total cost, total profit, average selling price and average order value, a profit-by-product bar chart, a selling price versus margin scatter sized by units sold, and a product profitability detail table sorted by units sold." loading="lazy" decoding="async" />
<p class="ft">Product Profitability, page 2 of 4</p>
<p class="fc">On the scatter, the Weatherproof Jacket sits high on margin and low on unit volume, exactly the quadrant worth protecting rather than discounting.</p>
</figure>
<p>The margin gap is the real finding. The Weatherproof Jacket earns 61.8%, the Multitool Survival Knife 63.5%, but the Stainless Steel Axe, despite $15,925.00 of revenue, second only to the Jacket, converts that into just 28.7% margin. Two products can carry almost the same revenue and land in completely different places on profit. Ranking by revenue alone would have missed that the Axe is the weak link, not the Jacket's low unit count.</p>
<div class="edge">
<p><b>A cheap line worth noticing.</b> The N95 Mask sold 343 units for only $943.25 of revenue, trivial next to the Jacket, but at a 63.3% margin, the second-highest of any product on the sheet. It will never move the topline, but it is close to free money per unit, the kind of line a revenue-only report buries at the bottom of the table and a margin-aware one does not.</p>
</div>
</section>

<section class="sec"><div class="fids"><span class="n">03</span><span class="t">Customer and buyer insights</span><span class="r"></span></div>
<h3 class="nh">Four customers, fifty buyers, and a second table at a different grain</h3>
<p>Four wholesale customers account for the full $87,945.09: Apocolypse Preppers United in Benson, Minnesota ($31,947.11, 20 orders), Uncle Joe's Prep Shop in Dallas ($24,651.52, 22 orders), Alex The Analyst Apocolype Preppers in New York ($17,255.87, 16 orders), and Prep4Anything Prepping Store in Jefferson City ($14,090.59, 16 orders). Order count and revenue do not track cleanly, Uncle Joe's places the most orders but is not the top customer by revenue, so its average order size runs smaller than Apocolypse Preppers United's.</p>
<figure class="fig">
<img src="/images/powerbi-apocalypse-3.webp" alt="Power BI page titled Customer and Buyer Insights, with KPI cards for total customers, total buyers, average buyer age and units by buyers, a revenue by customer bar chart, a buyers by age group column chart, a buyers by state bar chart led by Minnesota, and a customer detail table." loading="lazy" decoding="async" />
<p class="ft">Customer and Buyer Insights, page 3 of 4</p>
<p class="fc">A separate 50-row buyer demographics table sits behind this page, average age 47, skewed toward Senior and Young Adult buyers over Adult, and concentrated in Minnesota.</p>
</figure>
<div class="edge">
<p><b>Two tables, two grains, on purpose.</b> The "Units by Buyers" card reads 22K, far above the 3,001 units on the sales table, because it comes from a second fact table, buyer demographics, at a different grain (50 buyer rows, not 74 orders). Its relationship to the product table is deliberately left inactive: activating it would let a single order's units get counted once per buyer touchpoint and inflate the sales total. The model keeps the two questions, what sold and who the buyers are, answerable separately rather than merging them into one number that means neither thing cleanly.</p>
</div>
</section>

<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Sales trend and momentum</span><span class="r"></span></div>
<h3 class="nh">Three of four KPI cards on this page read (Blank), and that is honest, not broken</h3>
<p>Revenue MTD, Previous Month, and MoM Change all show <code>(Blank)</code> on this page. That is not a bug I patched over: those three measures are time-intelligence calculations built around <code>TODAY()</code>, and the dataset's real dates stop in March 2022. There is no "this month" or "last month" relative to a calendar date that has no data anywhere near it, so the measures correctly return nothing rather than a fabricated number. A report that quietly substituted a made-up figure there would be worse than one that shows a blank and lets a reader ask why.</p>
<figure class="fig">
<img src="/images/powerbi-apocalypse-4.webp" alt="Power BI page titled Sales Trend and Momentum, with KPI cards for total revenue, revenue month to date, previous month and month over month change (three reading Blank), a revenue by month line chart, a cumulative revenue chart, units sold by month, and a monthly summary table." loading="lazy" decoding="async" />
<p class="ft">Sales Trend and Momentum, page 4 of 4</p>
<p class="fc">The cumulative revenue chart's month axis is sorted March through December, then February, then January, so the visible plateau-then-plunge shape is an artifact of that ordering, not a real December crash.</p>
</figure>
<div class="edge">
<p><b>A second axis-order bug, the same family as the other two dashboards.</b> The Cumulative Revenue chart's x-axis runs Mar, Apr, May, ..., Dec, Feb, Jan, alphabetically close to right but not chronologically. Because the calculated Date table spans a full year while the real data only covers three months, the running total holds flat through the empty months and only moves on the two months that got sorted to the end. Read literally the chart looks like a steady total that collapses in early 2022; read correctly, January and February are the only two points where the total is still climbing from zero. The fix is a explicit sort-by-column on the month field, the same fix the telecoms and Umrah reports need on their own trend pages.</p>
</div>
</section>

<section class="sec"><div class="fids"><span class="n">05</span><span class="t">What shipped</span><span class="r"></span></div>
<h3 class="nh">Star schema, 17 measures, four pages, one repository</h3>
<table class="ndt">
<thead><tr><th>Page</th><th>What it answers</th></tr></thead>
<tbody>
<tr><td>Executive Overview</td><td>Revenue, profit, margin, and the monthly trend</td></tr>
<tr><td>Product Profitability</td><td>Which products earn on margin, not just revenue</td></tr>
<tr><td>Customer and Buyer Insights</td><td>Who buys, and the separate buyer-demographics table</td></tr>
<tr><td>Sales Trend and Momentum</td><td>Cumulative trend, with two KPI cards left honestly blank</td></tr>
</tbody>
</table>
<p class="note">Full PBIP project, the PDF export, and this same walkthrough in README form: <a href="https://github.com/Ghostiemoh/apocalypse-food-prep-power-bi">apocalypse-food-prep-power-bi</a> on GitHub.</p>
<div class="closer"><div class="q">The standing rule</div><p>Every figure above comes straight from the report's own cards and tables. Where a card reads Blank or a chart's axis order is misleading, that is stated here rather than cropped out of the screenshot.</p></div>
</section>
</div>
