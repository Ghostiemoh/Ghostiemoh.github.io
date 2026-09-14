---
title: Solana's transaction failure rate has climbed every month this year
date: 2026-09-14
description: 5.1 billion user transactions in the last 30 days at a 57% success rate. The failure rate rose from 24% in April to 43% in August even as throughput nearly doubled, the signature of bots spraying transactions to land memecoin and arbitrage fills.
thumbnail: /images/writing-dune-network-health-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.snh{--m:#ca8a04;--mi:#946400;--md:#5f4000;--wash:#f7f1e4;--ink:#17151a;--body:#3a3640;--mut:#6b6672;--faint:#9a95a0;--ln:#e9e5dd;--lns:#dfd9ce;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.snh *{box-sizing:border-box}
.snh .band{display:flex;align-items:center;gap:.6rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.snh .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.88)}
.snh .band .k2{margin-left:auto;font-family:"Roboto Mono",ui-monospace,monospace;font-size:.62rem;letter-spacing:.08em;color:rgba(255,255,255,.72)}
.snh .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.snh .kpi{background:var(--surf);padding:1rem .95rem}
.snh .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.55rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.snh .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.snh .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.snh .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.snh .sec:first-of-type{border-top:0;margin-top:1.2rem}
.snh .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.snh .fids .n{color:var(--mi);font-weight:500}
.snh .fids .t{color:var(--ink);font-weight:500}
.snh .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.snh h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.4rem;line-height:1.2;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.snh p{margin:0 0 .95rem;color:var(--body)}
.snh p.lede{font-size:1.06rem;color:var(--ink)}
.snh p.note{color:var(--mut);font-size:.92rem}
.snh b,.snh strong{font-weight:700;color:var(--ink)}
.snh .flag{color:var(--warn);font-weight:700}
.snh .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:1.05rem 1rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,16,25,.04),0 10px 30px -16px rgba(20,16,25,.14)}
.snh .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:0 0 .05rem}
.snh .fig .fs{font-size:.8rem;color:var(--faint);margin:0 0 .55rem}
.snh .fig .fw{width:100%;overflow-x:auto}
.snh .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.snh-chart{display:block;width:100%;height:auto;font-family:"Roboto Mono",monospace}
.snh .fig .fc{font-size:.78rem;color:var(--mut);margin-top:.6rem;line-height:1.5}
.snh .fig .fc .sr{color:var(--faint)}
.snh details.nd{margin-top:.6rem;border-top:1px dashed var(--lns);padding-top:.45rem}
.snh details.nd summary{font-family:"Roboto Mono",monospace;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);cursor:pointer}
.snh table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.78rem;font-variant-numeric:tabular-nums}
.snh table.ndt th,.snh table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.snh table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.66rem}
.snh table.ndt td.n{text-align:right}
.snh .chan{display:grid;grid-template-columns:1fr;gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:12px;overflow:hidden;margin:1.3rem 0}
.snh .chan>div{background:var(--surf);padding:.9rem 1rem}
.snh .chan .ct{font-family:"Roboto Mono",monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mi);margin-bottom:.22rem}
.snh .chan .cd{font-size:.9rem;color:var(--body)}
.snh .chan .cd b{font-weight:700}
.snh .chan .p2{border-left:3px solid var(--m);background:var(--wash)}
.snh .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.snh .edge p{margin:0;font-size:.94rem;color:var(--body)}
.snh .edge p+p{margin-top:.6rem}
.snh .edge b{color:var(--mi)}
.snh .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.snh .closer p{margin:0;color:var(--ink);font-size:.98rem}
.snh .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
.snh .srcs{font-family:"Roboto Mono",monospace;font-size:.78rem;color:var(--mut);line-height:1.7}
.snh .srcs b{color:var(--ink);font-weight:500}
.snh .tag{display:inline-block;font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;padding:.1rem .42rem;border-radius:4px;background:var(--warnw);color:var(--warn);border:1px solid rgba(176,116,26,.3)}
@media (max-width:560px){.snh .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="snh">
<div class="band"><span class="k">On-chain report &middot; Dune analytics</span><span class="k2">solana.blocks, trailing 30 days</span></div>
<div class="kpis">
<div class="kpi"><div class="v">5.1B</div><div class="l">User transactions, 30d</div><div class="s">non-vote</div></div>
<div class="kpi"><div class="v">57%</div><div class="l">Success rate</div><div class="s">30-day average</div></div>
<div class="kpi"><div class="v">24%<span style="font-size:.6em;color:var(--faint)"> to </span>43%</div><div class="l">Failure rate, Apr to Aug</div><div class="s">up every month</div></div>
<div class="kpi"><div class="v">2.9B<span style="font-size:.6em;color:var(--faint)"> to </span>5.2B</div><div class="l">Monthly throughput, Apr to Aug</div><div class="s">nearly doubled</div></div>
</div>
<section class="sec"><div class="fids"><span class="n">01</span><span class="t">The headline is the failure rate</span><span class="r"></span></div>
<h3 class="nh">Not the volume. The failure rate climbed every month this year</h3>
<p class="lede">Throughput and reliability of the Solana network, from <code>solana.blocks</code>, per-block transaction counts. The full <code>solana.transactions</code> table exceeds this plan's query engine limits, so there is no wallet-level or fee detail here, only network-wide counts.</p>
<p>Solana processed about 5.1 billion user (non-vote) transactions in the last 30 days at a 57% success rate. The failure rate has climbed every single month this year: 24% in April, up to 43% in August, even as monthly throughput grew from 2.9 billion to 5.2 billion user transactions over the same window.</p>
<figure class="fig"><p class="ft">Failure rate, April vs August</p><p class="fs">The two data points behind the headline</p><div class="fw"><svg class="snh-chart" viewBox="0 0 640 220" role="img" aria-label="Bar chart comparing a 24 percent transaction failure rate in April to 43 percent in August" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="174.0" x2="620" y2="174.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="177.0" fill="var(--mut)" font-size="10" text-anchor="end">0%</text><line x1="40" y1="143.2" x2="620" y2="143.2" stroke="var(--ln)" stroke-width="1"/><text x="32" y="146.2" fill="var(--mut)" font-size="10" text-anchor="end">10%</text><line x1="40" y1="112.4" x2="620" y2="112.4" stroke="var(--ln)" stroke-width="1"/><text x="32" y="115.4" fill="var(--mut)" font-size="10" text-anchor="end">20%</text><line x1="40" y1="81.6" x2="620" y2="81.6" stroke="var(--ln)" stroke-width="1"/><text x="32" y="84.6" fill="var(--mut)" font-size="10" text-anchor="end">30%</text><line x1="40" y1="50.8" x2="620" y2="50.8" stroke="var(--ln)" stroke-width="1"/><text x="32" y="53.8" fill="var(--mut)" font-size="10" text-anchor="end">40%</text><line x1="40" y1="20.0" x2="620" y2="20.0" stroke="var(--ln)" stroke-width="1"/><text x="32" y="23.0" fill="var(--mut)" font-size="10" text-anchor="end">50%</text><rect x="124.1" y="100.1" width="121.8" height="73.9" rx="3" fill="var(--m)" fill-opacity="1"/><text x="185.0" y="92.1" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">24%</text><text x="185.0" y="190.0" fill="var(--mut)" font-size="11" text-anchor="middle">April</text><rect x="414.1" y="41.6" width="121.8" height="132.4" rx="3" fill="var(--m)" fill-opacity="1"/><text x="475.0" y="33.6" fill="var(--ink)" font-size="11.5" font-weight="700" text-anchor="middle">43%</text><text x="475.0" y="190.0" fill="var(--mut)" font-size="11" text-anchor="middle">August</text></svg></div><figcaption class="fc">Six straight months of a rising failure rate sit between these two points. <span class="sr">Source: Dune, solana.blocks.</span></figcaption></figure>
<figure class="fig"><p class="ft">As captured on Dune, full six-month series</p><div class="fw"><img src="/images/dune-network-health.webp" alt="Column chart titled Monthly user transaction failure rate 6mo, climbing steadily from about 24 percent in April to a peak above 40 percent in August" loading="lazy" decoding="async"/></div><figcaption class="fc">Six straight months of a rising failure rate, tracking almost exactly with the throughput growth over the same period.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">02</span><span class="t">More throughput and more failure, together</span><span class="r"></span></div>
<h3 class="nh">User transactions overtook vote transactions by June</h3>
<p>Vote transactions, the messages validators send for consensus, run at a steady pace of roughly 4.6 billion a month and are excluded from both the success-rate and per-block figures here. User transactions have grown from about a third of all transactions on the network earlier in the year to roughly 53% now.</p>
<figure class="fig"><p class="ft">As captured on Dune</p><div class="fw"><img src="/images/dune-network-health-2.webp" alt="Column chart titled Monthly transactions, user versus vote 6mo, showing user non-vote transactions growing from below vote transactions in April to well above them by August" loading="lazy" decoding="async"/></div><figcaption class="fc">User transactions overtake vote transactions by June and keep growing from there. <span class="sr">The near-zero September bars are a partial month, not a network event.</span></figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">03</span><span class="t">Why failures rise alongside throughput</span><span class="r"></span></div>
<div class="edge"><p>The pattern is the familiar one on Solana: bots spray transactions to try to land memecoin launches and arbitrage fills, most of those attempts miss, and the network records each miss as a failed transaction rather than the sender simply not sending it. Rising throughput and a rising failure rate together are what that contention pattern actually looks like on-chain, not two separate stories.</p></div></section>
<section class="sec"><div class="fids"><span class="n">04</span><span class="t">What this dashboard cannot show</span><span class="r"></span></div>
<p class="note">No fee or priority-fee data, no per-program or per-wallet breakdown, that all requires <code>solana.transactions</code>, which is outside this plan's query engine limits. For fee and priority-fee dynamics specifically, a source like Blockworks or Helius is the better fit than this dashboard.</p>
<p class="note">Full dashboard, every query public and built to be forked: <a href="https://dune.com/ghostiemoh/solana-network-health" target="_blank" rel="noopener">Solana Network Health</a> on Dune.</p></section>
</div>
