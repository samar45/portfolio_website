---
title: 'Building Hone: a DSA coach that runs on your own machine'
description: "Why I built a local-first LeetCode alternative with an AI coach that gives hints instead of spoiling the answer, and the engineering that turned out to be the real work."
date: 2026-09-21
tags: ['local-ai', 'llm', 'side-project', 'dsa']
draft: false
---

I've spent most of my career on ML that actually ships, models that make it out of
the notebook and into production. But lately I went back to something simpler and
started grinding data structures and algorithms again. And I kept hitting the same
wall.

LeetCode tells you *whether* you're right. It doesn't tell you *why*. You get a
green check or a wrong answer, with no sense of the idea you missed, no read on your
complexity, and nobody to nudge you when you're stuck. So you either stare at the
screen or peek at the solution and learn nothing.

I wanted the opposite, something that actually coaches you. So I built Hone, a
desktop app that teaches DSA by helping you build the logic yourself, with an AI
mentor that runs entirely on your own machine.

## What it does

- **125 problems** across arrays, strings, hashing, two pointers, sliding window,
  stacks, binary search, DP, greedy, matrix and math.
- **Ada**, an AI coach that walks you through six stages, from decoding the problem
  to sketching an approach, drafting it, weighing the tradeoffs, sharpening the code,
  and locking it in. She gives you hints, not answers, until you get there yourself.
- A **code runner** for Python and JavaScript that checks your solution against real
  test cases.
- **Explain my code** and **complexity analysis** that read *your* code, not some
  canned solution. This is the part LeetCode just doesn't have.
- **Animated visualizations** so you can watch a hash map fill, two pointers
  converge, a binary search halve its space, or a DP table build up.
- It's **local-first**. The AI runs through [Ollama](https://ollama.com) on your own
  hardware. No account, no cloud, nothing leaves your computer.

## The part I got wrong about difficulty

I assumed the AI would be the hard bit and the app around it would be easy. It was
the other way around.

Talking to a local model is almost nothing. Ollama is a single streaming HTTP
endpoint, and the whole six-stage coach is just prompts with different instructions
per stage. No training, no fine-tuning.

The genuinely fiddly parts were the boring ones:

- **Running user code safely** and mapping a person's function to a set of test cases
  across two languages.
- **Getting the test data right.** Instead of hand-typing expected outputs, which is
  exactly how bugs sneak in, I wrote a generator that defines each problem with a
  reference solution, runs it, and uses the real output as the expected answer. Then
  it re-runs every solution through the actual runner to confirm. 125 problems, zero
  hand-typed answers.
- **Packaging it like a real product**, a Windows app you download and run, with a
  first-launch wizard that detects Ollama, recommends a model based on your RAM, and
  downloads it with a progress bar. I wanted a non-developer to be able to set it up.

There's a lesson in there I keep relearning. The model is rarely the hard part. The
engineering around the model, the data, the guardrails, the packaging, the last mile
to a real user, is where the work actually lives.

## Why local

Running the AI locally wasn't just a privacy flex. It means the app is free to use,
works offline, and never sends your half-finished code to someone else's server. For
a learning tool you reach for every day, that felt right.

Hone is my attempt to take that seriously. Less talking about problems, more building
the intuition to actually solve them.
