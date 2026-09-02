---
title: The call centre was not slow, it was late
date: 2026-08-20
description: A support line was hitting its answer rate and missing its speed target. The two numbers were measuring different problems, and only one of them was about the agents.
---

A 20-agent support line came with a simple brief: are we keeping our promise to
answer calls within 20 seconds, and if not, which agents are dragging the average
down?

The data was one row per agent per day, 1,251 rows in all, about 62 to 63 working
days for each of the 20 agents. Every row had the same four fields: calls that came
in, calls the agent answered, calls the caller gave up on, and the share of that
day's answered calls that were picked up inside the 20-second target.

## Two numbers that sound the same

The first pass gave two headline figures for the whole line:

- **92.7%** of incoming calls were answered.
- **70.9%** of answered calls were picked up within 20 seconds.

It is tempting to read those as one story, "we are about 90% of the way there."
They are not one story. The first number is about whether a call gets handled at
all. The second is about how long the caller waits first. A line can answer almost
every call and still make most callers wait too long, and that is exactly what was
happening here. The distance between the two, **21.8 points**, was the thing worth
explaining.

## Splitting it by agent

If slow agents were the cause, the 20-second number should be spread out across the
team while the answer rate stayed tight. So I ranked all 20 agents on both.

The answer rate barely moved from person to person: **91.7% to 94.0%**, a spread of
about 2.3 points. The speed-to-answer number was looser, **68.4% to 73.2%**, roughly
4.8 points, but still a narrow band. Nobody on the team was an outlier. The slowest
agent on the 20-second metric was still answering nearly seven in ten calls on time.

Abandoned calls told the same story. They ran from 968 to 1,730 per agent against a
line total of 27,139. High, but not concentrated on a few names.

## What actually moved the number

The one field that tracked the slow answers was call volume. Incoming calls
averaged 198.5 per agent-day, and the days and agents with the worst 20-second
figures were the ones taking the most calls. When the queue was deep, everyone's
speed slipped together. When it was not, everyone recovered together. That is the
signature of a staffing and routing problem, not a skill problem.

## What I recommended

Treat the 21.8-point gap as a scheduling question first. Staff or overflow-route the
busiest intervals so the queue never gets deep enough to blow the 20-second target.
Only look at individual coaching after that, because the answer rate is already even
across the team and there is very little individual variation left to fix.

## The general point

When two metrics look like they are measuring the same thing, check what each one
actually counts before you average them in your head. "Answered" and "answered in
time" share a word and not much else. Here, one was fine and the other was a
capacity problem wearing the first one's clothes.

The workbook, with the PivotTable model and the per-agent breakdown, is linked from
the [case study](/#work).
