---
title: USDC alone outweighs Solana's other four largest stablecoins combined
date: 2026-09-14
description: $7.3B of USDC sits on-chain across 8.2 million accounts, more than USDT, USD1, PYUSD and USDG added together. USD1 is the outlier worth watching, $1.2B held by only 37,000 accounts, one of the most concentrated stablecoins on any chain.
thumbnail: /images/writing-dune-stablecoin-thumb.webp
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.ssm{--m:#0d9488;--mi:#076d64;--md:#044640;--wash:#e7f6f5;--ink:#17151a;--body:#3a3640;--mut:#6b6672;--faint:#9a95a0;--ln:#dee8e7;--lns:#cfdedc;--warn:#b0741a;--warnw:#f6ecdc;--surf:#fff;font-family:"Nunito","Segoe UI",Corbel,system-ui,sans-serif;color:var(--body);line-height:1.62;margin:2.2rem 0 0}
.ssm *{box-sizing:border-box}
.ssm .band{display:flex;align-items:center;gap:.6rem;background:var(--m);color:#fff;padding:.55rem .9rem;border-radius:8px}
.ssm .band .k{font-family:"Roboto Mono",ui-monospace,monospace;font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.88)}
.ssm .band .k2{margin-left:auto;font-family:"Roboto Mono",ui-monospace,monospace;font-size:.62rem;letter-spacing:.08em;color:rgba(255,255,255,.72)}
.ssm .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:10px;overflow:hidden;margin:1.4rem 0 .4rem}
.ssm .kpi{background:var(--surf);padding:1rem .95rem}
.ssm .kpi .v{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.55rem;line-height:1;color:var(--mi);font-variant-numeric:tabular-nums}
.ssm .kpi .l{font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-top:.5rem;line-height:1.35}
.ssm .kpi .s{font-size:.72rem;color:var(--faint);margin-top:.2rem}
.ssm .sec{padding:1.9rem 0 .3rem;border-top:1px solid var(--ln);margin-top:1.6rem}
.ssm .sec:first-of-type{border-top:0;margin-top:1.2rem}
.ssm .fids{display:flex;align-items:center;gap:.75rem;margin:0 0 1rem;font-family:"Roboto Mono",monospace;font-size:.7rem;letter-spacing:.11em;text-transform:uppercase}
.ssm .fids .n{color:var(--mi);font-weight:500}
.ssm .fids .t{color:var(--ink);font-weight:500}
.ssm .fids .r{flex:1;height:2px;background:var(--m);opacity:.25}
.ssm h3.nh{font-family:"Nunito",sans-serif;font-weight:800;font-size:1.4rem;line-height:1.2;color:var(--ink);margin:0 0 .7rem;letter-spacing:-.01em}
.ssm p{margin:0 0 .95rem;color:var(--body)}
.ssm p.lede{font-size:1.06rem;color:var(--ink)}
.ssm p.note{color:var(--mut);font-size:.92rem}
.ssm b,.ssm strong{font-weight:700;color:var(--ink)}
.ssm .flag{color:var(--warn);font-weight:700}
.ssm .fig{background:var(--surf);border:1px solid var(--ln);border-radius:12px;padding:1.05rem 1rem .8rem;margin:1.3rem 0;box-shadow:0 1px 2px rgba(20,16,25,.04),0 10px 30px -16px rgba(20,16,25,.14)}
.ssm .fig .ft{font-family:"Roboto Mono",monospace;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--mut);margin:0 0 .05rem}
.ssm .fig .fs{font-size:.8rem;color:var(--faint);margin:0 0 .55rem}
.ssm .fig .fw{width:100%;overflow-x:auto}
.ssm .fig img{display:block;width:100%;height:auto;border-radius:7px;border:1px solid var(--ln)}
.ssm-chart{display:block;width:100%;height:auto;font-family:"Roboto Mono",monospace}
.ssm .fig .fc{font-size:.78rem;color:var(--mut);margin-top:.6rem;line-height:1.5}
.ssm .fig .fc .sr{color:var(--faint)}
.ssm details.nd{margin-top:.6rem;border-top:1px dashed var(--lns);padding-top:.45rem}
.ssm details.nd summary{font-family:"Roboto Mono",monospace;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);cursor:pointer}
.ssm table.ndt{border-collapse:collapse;width:100%;margin:.5rem 0 0;font-family:"Roboto Mono",monospace;font-size:.78rem;font-variant-numeric:tabular-nums}
.ssm table.ndt th,.ssm table.ndt td{text-align:left;padding:.32rem .55rem;border-bottom:1px solid var(--ln)}
.ssm table.ndt th{color:var(--mut);font-weight:500;letter-spacing:.03em;text-transform:uppercase;font-size:.66rem}
.ssm table.ndt td.n{text-align:right}
.ssm .chan{display:grid;grid-template-columns:1fr;gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:12px;overflow:hidden;margin:1.3rem 0}
.ssm .chan>div{background:var(--surf);padding:.9rem 1rem}
.ssm .chan .ct{font-family:"Roboto Mono",monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mi);margin-bottom:.22rem}
.ssm .chan .cd{font-size:.9rem;color:var(--body)}
.ssm .chan .cd b{font-weight:700}
.ssm .chan .p2{border-left:3px solid var(--m);background:var(--wash)}
.ssm .edge{margin:1.3rem 0;padding:1rem 1.1rem;background:var(--wash);border:1px solid var(--lns);border-radius:12px}
.ssm .edge p{margin:0;font-size:.94rem;color:var(--body)}
.ssm .edge p+p{margin-top:.6rem}
.ssm .edge b{color:var(--mi)}
.ssm .closer{margin:1.5rem 0 .3rem;padding:1.1rem 1.15rem;border:1px solid var(--m);border-radius:12px;background:var(--surf)}
.ssm .closer p{margin:0;color:var(--ink);font-size:.98rem}
.ssm .closer .q{font-family:"Roboto Mono",monospace;font-size:.66rem;letter-spacing:.11em;text-transform:uppercase;color:var(--mi);margin-bottom:.4rem}
.ssm .srcs{font-family:"Roboto Mono",monospace;font-size:.78rem;color:var(--mut);line-height:1.7}
.ssm .srcs b{color:var(--ink);font-weight:500}
.ssm .tag{display:inline-block;font-family:"Roboto Mono",monospace;font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;padding:.1rem .42rem;border-radius:4px;background:var(--warnw);color:var(--warn);border:1px solid rgba(176,116,26,.3)}
@media (max-width:560px){.ssm .kpis{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="ssm">
<div class="band"><span class="k">On-chain report &middot; Dune analytics</span><span class="k2">tokens_solana.transfers &middot; solana_utils.latest_balances</span></div>
<div class="kpis">
<div class="kpi"><div class="v">$7.3B</div><div class="l">USDC on-chain</div><div class="s">8.2M accounts</div></div>
<div class="kpi"><div class="v">$1.2B</div><div class="l">USD1 on-chain</div><div class="s">only ~37K accounts</div></div>
<div class="kpi"><div class="v">$280B</div><div class="l">USDC transfers / 30d</div><div class="s">~38x its own supply</div></div>
<div class="kpi"><div class="v">80%</div><div class="l">Of tracked transfer volume</div><div class="s">USDC's share</div></div>
</div>
<section class="sec"><div class="fids"><span class="n">01</span><span class="t">The stock side</span><span class="r"></span></div>
<h3 class="nh">USDC outweighs the other four largest stablecoins combined</h3>
<p class="lede">Stock and flow for the five largest Solana stablecoins, from <code>tokens_solana.transfers</code> for movement and <code>solana_utils.latest_balances</code> for supply and holders.</p>
<p>USDC holds about $7.3B on-chain across 8.2 million accounts (3.0 million of them with a meaningful balance), more than USDT ($3.8B), USD1 ($1.2B), PYUSD ($0.8B), and USDG ($0.6B) combined.</p>
<figure class="fig"><p class="ft">On-chain circulating supply by stablecoin</p><div class="fw"><img src="/images/dune-stablecoin.webp" alt="Bar chart titled On-chain circulating supply by stablecoin, showing USDC well ahead of USDT, USD1, PYUSD and USDG on Solana" loading="lazy" decoding="async"/></div><figcaption class="fc">USDC alone is roughly double USDT's supply, and larger than the other four stablecoins added together.</figcaption><details class="nd"><summary>Data</summary><table class="ndt"><thead><tr><th>Stablecoin</th><th class="n">On-chain supply</th></tr></thead><tbody><tr><td>USDC</td><td class="n">$7.3B</td></tr><tr><td>USDT</td><td class="n">$3.8B</td></tr><tr><td>USD1</td><td class="n">$1.2B</td></tr><tr><td>PYUSD</td><td class="n">$0.8B</td></tr><tr><td>USDG</td><td class="n">$0.6B</td></tr></tbody></table></details></figure>
<div class="edge"><p><b>USD1 is the number worth a second look.</b> $1.2B held by only about 37,000 accounts, an average balance far above any of the other four stablecoins here. That level of concentration in this few wallets is unusual for a stablecoin at this supply size, and worth watching for how that balance moves if a handful of large holders ever unwind a position at once.</p></div></section>
<section class="sec"><div class="fids"><span class="n">02</span><span class="t">The flow side</span><span class="r"></span></div>
<h3 class="nh">USDC moves 38 times its own supply every month</h3>
<p>USDC settles roughly $280B of transfers every 30 days, about 80% of all tracked stablecoin transfer volume on Solana, a monthly velocity near 38 times its own on-chain supply. PYUSD is the other flow story here: it moves about $12B a month at a very high value per transfer, the signature of treasury and institutional movement rather than everyday retail spending.</p></section>
<section class="sec"><div class="fids"><span class="n">03</span><span class="t">Supply is flat while usage stays high</span><span class="r"></span></div>
<p>Net issuance, mint minus burn, has run mildly negative for both USDC and USDG over the tracked window. On-chain supply for those two is flat to slightly contracting at the same time transfer volume stays high, a reminder that usage and net issuance answer two different questions and can move in opposite directions.</p></section>
<section class="sec"><div class="fids"><span class="n">04</span><span class="t">What the numbers can and cannot say</span><span class="r"></span></div>
<p class="note">On-chain supply here counts tokens actually sitting in Solana accounts, and can differ from an issuer's own reported circulating supply, bridged balances, frozen accounts, and treasury holdings all complicate a direct comparison. Cross-checking against DefiLlama Stablecoins or Artemis is the right move before treating either number as the final word.</p>
<p class="note">Full dashboard, every query public and built to be forked: <a href="https://dune.com/ghostiemoh/solana-stablecoin-monitor" target="_blank" rel="noopener">Solana Stablecoin Monitor</a> on Dune.</p></section>
</div>
