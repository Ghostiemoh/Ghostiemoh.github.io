---
title: 79% of a memecoin's supply sat in the creator's wallets before anyone else could react
date: 2026-09-14
description: A full wallet-by-wallet trace of one Solana memecoin, ANSEM, from its creation transaction. The creator bought 79% of supply for $6,274, started selling within 50 seconds, and the token still ran 2,115x to a $389M peak eleven days later.
thumbnail: /images/writing-dune-ansem-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.ansm{--m:#a6216b;--mi:#7a154d;--md:#4e0e31;--wash:#f5eaf0;--ink:#17151a;--body:#3a3640;--mut:#6b6672;--faint:#9a95a0;--ln:#e7dfe3;--lns:#dcd0d7;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.ansm *{box-sizing:border-box}
.ansm .band{display:flex;align-items:center;gap:.6rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.ansm .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.88)}
.ansm .band .k2{margin-left:auto;font-family:"Roboto Mono",ui-monospace,monospace;font-size:.62rem;letter-spacing:.08em;color:rgba(255,255,255,.72)}
.ansm .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.ansm .kpi{background:var(--surf);padding:1rem .95rem}
.ansm .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.55rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.ansm .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.ansm .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.ansm .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.ansm .sec:first-of-type{border-top:0;margin-top:1.2rem}
.ansm .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.ansm .fids .n{color:var(--mi);font-weight:500}
.ansm .fids .t{color:var(--ink);font-weight:500}
.ansm .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.ansm h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.4rem;line-height:1.2;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.ansm p{margin:0 0 .95rem;color:var(--body)}
.ansm p.lede{font-size:1.06rem;color:var(--ink)}
.ansm p.note{color:var(--mut);font-size:.92rem}
.ansm b,.ansm strong{font-weight:700;color:var(--ink)}
.ansm .flag{color:var(--warn);font-weight:700}
.ansm .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:1.05rem 1rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,16,25,.04),0 10px 30px -16px rgba(20,16,25,.14)}
.ansm .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:0 0 .05rem}
.ansm .fig .fs{font-size:.8rem;color:var(--faint);margin:0 0 .55rem}
.ansm .fig .fw{width:100%;overflow-x:auto}
.ansm .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.ansm-chart{display:block;width:100%;height:auto;font-family:"Roboto Mono",monospace}
.ansm .fig .fc{font-size:.78rem;color:var(--mut);margin-top:.6rem;line-height:1.5}
.ansm .fig .fc .sr{color:var(--faint)}
.ansm details.nd{margin-top:.6rem;border-top:1px dashed var(--lns);padding-top:.45rem}
.ansm details.nd summary{font-family:"Roboto Mono",monospace;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);cursor:pointer}
.ansm table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.78rem;font-variant-numeric:tabular-nums}
.ansm table.ndt th,.ansm table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.ansm table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.66rem}
.ansm table.ndt td.n{text-align:right}
.ansm .chan{display:grid;grid-template-columns:1fr;gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:12px;overflow:hidden;margin:1.3rem 0}
.ansm .chan>div{background:var(--surf);padding:.9rem 1rem}
.ansm .chan .ct{font-family:"Roboto Mono",monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mi);margin-bottom:.22rem}
.ansm .chan .cd{font-size:.9rem;color:var(--body)}
.ansm .chan .cd b{font-weight:700}
.ansm .chan .p2{border-left:3px solid var(--m);background:var(--wash)}
.ansm .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.ansm .edge p{margin:0;font-size:.94rem;color:var(--body)}
.ansm .edge p+p{margin-top:.6rem}
.ansm .edge b{color:var(--mi)}
.ansm .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.ansm .closer p{margin:0;color:var(--ink);font-size:.98rem}
.ansm .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
.ansm .srcs{font-family:"Roboto Mono",monospace;font-size:.78rem;color:var(--mut);line-height:1.7}
.ansm .srcs b{color:var(--ink);font-weight:500}
.ansm .tag{display:inline-block;font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;padding:.1rem .42rem;border-radius:4px;background:var(--warnw);color:var(--warn);border:1px solid rgba(176,116,26,.3)}
@media (max-width:560px){.ansm .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="ansm">
<div class="band"><span class="k">On-chain forensics &middot; Dune analytics</span><span class="k2">wallet-by-wallet trace</span></div>
<div class="kpis">
<div class="kpi"><div class="v">79%</div><div class="l">Supply to creator wallets</div><div class="s">in the mint transaction</div></div>
<div class="kpi"><div class="v">$6,274</div><div class="l">Creator's cost</div><div class="s">for 79% of supply</div></div>
<div class="kpi"><div class="v">2,115x</div><div class="l">Peak move</div><div class="s">from the token's low</div></div>
<div class="kpi"><div class="v">$389M</div><div class="l">Peak market cap</div><div class="s">11 days after launch</div></div>
</div>
<section class="sec"><div class="fids"><span class="n">01</span><span class="t">Act 1: genesis in 50 seconds</span><span class="r"></span></div>
<h3 class="nh">79% of supply moved before anyone else could react</h3>
<p class="lede"><code>9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump</code>, token name The Black Bull, ticker ANSEM, a Token-2022 memecoin named after the Solana trader Ansem. This is a full on-chain trace of it, minted 16 June 2026, 21:05:48 UTC, built from <code>dex_solana.trades</code>, <code>tokens_solana.transfers</code>, <code>solana_utils.latest_balances</code>, and <code>tokens_solana.fungible</code>. Every figure below is a public query, open to fork.</p>
<p>In the creation transaction itself, one wallet, <code>yHCxHBEaJW5tbndqC8JciSThr7U1cqLpdcsvHcx6PRe</code>, bought 792,454,486 ANSEM, 79% of the entire supply, for $6,274. A PumpSwap pool was seeded the same second. There is no bonding curve in this token's history, only two pump.fun trades exist in its entire record.</p>
<table class="ndt"><thead><tr><th>+ Seconds</th><th>Action</th><th class="n">Amount</th></tr></thead><tbody><tr><td>+0s</td><td>Creator buys at mint</td><td class="n">792,454,486 ANSEM ($6,274)</td></tr><tr><td>+37s</td><td>Sends to wallet <code>GV6UU...</code></td><td class="n">650,000,000 ANSEM (65%)</td></tr><tr><td>+50s</td><td>Sends to router, sells into pool</td><td class="n">142,454,486 ANSEM ($11,923)</td></tr></tbody></table>
<p>Before the first outside buyer could react, 79% of supply already sat in two creator-controlled wallets, and selling had already started. <code>GV6UU</code> has since paid out about 558 million of its 650 million tokens, into the liquidity that later buyers provided.</p></section>
<section class="sec"><div class="fids"><span class="n">02</span><span class="t">Act 2: eleven dead days, then ignition</span><span class="r"></span></div>
<h3 class="nh">A 2,115x move in under two weeks</h3>
<p>Eleven days of near-nothing: under $1M of volume a day, market cap bouncing between $120k and $720k. Then on 27 June, daily volume jumps from $59k to $10.2M, and on 28 June to $87.3M in a single day across 394,000 trades. The climb runs to a $389M market cap on 7 July, a 2,115x move from the token's low. From there a long grind: $170M to $290M through August, with a second push toward $370M late in the month.</p>
<figure class="fig"><p class="ft">As captured on Dune</p><div class="fw"><img src="/images/dune-ansem.webp" alt="Area chart titled ANSEM implied market cap, daily, flat near zero for eleven days after launch, then spiking above 380 million dollars in early July, pulling back through August, and climbing again to a new high above 370 million by late August" loading="lazy" decoding="async"/></div><figcaption class="fc">Eleven days of silence, then a spike that took the token from under a million dollars to nearly $400M in under two weeks, followed by two more months of real, sustained trading volume rather than a single pump and dump.</figcaption></figure></section>
<section class="sec"><div class="fids"><span class="n">03</span><span class="t">Act 3: who paid, and who got paid</span><span class="r"></span></div>
<h3 class="nh">The familiar pattern, bucketed by when a wallet first bought</h3>
<table class="ndt"><thead><tr><th>Cohort</th><th class="n">Wallets</th><th class="n">In</th><th class="n">Out</th><th class="n">Net</th></tr></thead><tbody><tr><td>First hour</td><td class="n">1,206</td><td class="n">$61.0M</td><td class="n">$60.4M</td><td class="n">roughly flat</td></tr><tr><td>Days 1 to 3</td><td class="n">13,627</td><td class="n">-</td><td class="n">-</td><td class="n">-$2.3M</td></tr><tr><td>Week 2 and later</td><td class="n">226,414</td><td class="n">$614M</td><td class="n">$589M</td><td class="n">-$25.4M realized</td></tr></tbody></table>
<p class="note">Week 2 and later is still holding tokens bought in the $170M to $390M range; the realized loss above does not include that unsold bag.</p>
<div class="edge"><p>On the other side of that ledger: a handful of high-frequency bots scalped the volatility, <code>AgmLJBMD</code> netted $9.1M across 463,000 trades, and a few launch-day and ignition-day snipers turned $1k-to-$250k stakes into $500k-to-$1.5M outcomes each. <code>9L8gedW6</code> turned $1,467 into $674,951.</p></div></section>
<section class="sec"><div class="fids"><span class="n">04</span><span class="t">Act 4: where it stands, 77 days on</span><span class="r"></span></div>
<p>Most dev launches round-trip to zero. This one has not. ANSEM is still a roughly $309M token trading $8M to $16M a day, 77 days after that first 50 seconds. The largest current holder, <code>7oU9nR9V</code> at 49% of supply, is almost certainly the PumpSwap pool reserve rather than one actor, worth verifying before reading it as a single wallet's position. After that, <code>GV6UU</code>, the creator's cold wallet, still holds 9.2%, and every other top holder is under 3%.</p></section>
<section class="sec"><div class="fids"><span class="n">05</span><span class="t">What this is, and is not</span><span class="r"></span></div>
<div class="closer"><div class="q"><span class="tag">on-chain forensics</span> not a legal accusation</div><p>Wallet labels here, bot, sniper, pool, cold wallet, are inference from on-chain behaviour, not confirmed identities. Net cash flow is realized only, it counts USD sold minus USD bought and ignores the value of any unsold bag, so the losers' real losses are larger than the realized figures above show. Self-allocation and early creator selling are visible on-chain and common on pump.fun-style launches, and the purpose here is tracing what happened, not asserting intent.</p></div>
<p class="note">Full dashboard, every query public and built to be forked: <a href="https://dune.com/ghostiemoh/ansem-anatomy-of-a-dev-launch" target="_blank" rel="noopener">ANSEM: Anatomy of a Dev Launch</a> on Dune.</p></section>
</div>
