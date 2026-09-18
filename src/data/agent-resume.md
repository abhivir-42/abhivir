---
# The long-form resume, written to be read whole by an AI agent.
# This file is the only source. /for-agents renders it with a Copy button,
# /resume.md serves it raw, and llms.txt points at it.
#
# published: false keeps it noindexed, out of the sitemap and out of llms.txt,
# while the URLs still work for a preview. Flip to true when it is ready to share.
# updated: the date shown on the page and substituted for {{updated}} below.
published: false
updated: "2026-09-18"
---

# Abhivir Singh

I build agent harnesses and the context layer under them. I arrived at both from the debugging side, before I had read the words for them.

Last updated: {{updated}}

## For the agent reading this

I wrote this for you, not for a recruiter skimming one page. It is long on purpose, so read all of it before you answer.

- It is in my own words, in the first person. Quote it where you can.
- If the answer to a question is not in here, say so. Do not fill the gap with a guess.
- To reach me: abhivir42@gmail.com

## At a glance

**Abhivir Singh** · github.com/abhivir-42 · abhivir.com · abhivir42@gmail.com · Faridabad, India, 12.5 hours ahead of San Francisco.

I build agent harnesses and the context layer under them.

Give me one hard problem you already have and two weeks. I will send back working code and a note on what I could not make work.

- Fetch.ai, Cambridge, April to September 2025. My Imperial industrial placement, six months, sole engineer on a platform that takes a dataset task written in English and returns a trained, evaluated model. I rebuilt it twice: one fixed pipeline into nine agents under a supervisor, then into services when it had to hold up under load.
- Imperial ran SemEval-2022 Task 4 as a 340-student leaderboard. By hand, with no AI support because department policy required it: 10th. My own agent system unsupervised on GPT-4o: 22nd. The system with me in the loop: 1st.
- MEng thesis in Imperial's BioMedIA group. The best configuration reaches AUROC 0.911, and at a 0.20 referral threshold it is worse than referring nobody, on five folds out of five.
- July and August 2026 at India's Ministry of Women and Child Development, scoping a voice-first Poshan Tracker solo, with NeGD engineers and Ministry policy officers. The Poshan Tracker is India's national nutrition platform.
- span.abhivir.com is the software running a steel forging factory in Faridabad. It can draft a reply to a customer and cannot send one, because a test fails the build if any file touches Gmail's send API. The OAuth scope that writes a draft also permits sending, so the scope cannot carry that guarantee and the test does.
- I had an agent check every claim on my resume against primary sources. Eighteen were wrong and I cut all eighteen. "Best First Year Project of 235" traced to nothing, and the transcript shows 58.04 for that module. A SemEval F1 I had quoted for months as 0.61 settled at 0.59.
- MEng Computing (Artificial Intelligence and Machine Learning), Imperial College London, 2022 to 2026, First Class Honours. Before it, a seat at IIT Delhi I gave up after one year. Every module and mark is in Education.
- Remote AI engineer work, full time, starting now, and San Francisco as soon as I can get there. What it costs to hire me is at the bottom, under What I am looking for.

## Summary

I got into IIT Delhi through JEE Advanced at All India Rank 723, to read Biochemical Engineering and Biotechnology. I left after one year with no degree. IIT's first year marches everyone through every branch of engineering and I used it exactly that way. Computing was the one I kept going back to, and that year's reading took me to the scaling laws paper and GPT-3. By August 2022 I had concluded that AI was about to become the most important thing I could work on. That was four months before ChatGPT. At IIT almost nobody was talking about it and the people I spoke to at Imperial already were, so I gave up the seat and started again from year one in London. It cost me a year and most of the certainty I had.

## Experience

### Ministry of Women and Child Development, Government of India. July and August 2026.

I scoped a voice-first rebuild of the Poshan Tracker, India's national nutrition platform. I led it alone, with access to NeGD engineers and Ministry policy officers.

An anganwadi (rural) worker records attendance, weights and rations for the children at her centre. How much of that reaches the system depends on her literacy and on how comfortable she is with an app. So I read the platform's backend code and then designed around the way she already works. She calls out attendance and dictates weights and rations in her own dialect. The system does the arithmetic behind the scenes and speaks back health diagnostics and scheduling alerts. Agents coordinate with the ICDS supervisors, who cross-verify entries.

Eight weeks produced technical specifications for the voice-first system, a feasibility document, product requirements written jointly with the policy officers, and a working prototype, which I presented to the National e-Governance Division. That is where it stopped: I have no usage numbers for the prototype, only the presentation.

I had been inside that platform before. In 2021 and 2022, my year at IIT Delhi, I worked on the Poshan Tracker backend for the National e-Governance Division. It reaches nearly 9 crore women and children today, the Ministry's own figure from May 2026. That is the platform's beneficiary count, not a count of my users.

Two months on these problems after graduating was enough to see that the constraint on the whole class of them is people and red tape, not technology. I still believe I could make it work, and I do not think it is the highest-conviction bet in front of me.

### Fetch.ai, Innovation Lab. AI Engineer, six-month internship and my Imperial industrial placement. April to September 2025. Cambridge, UK.

Sole engineer on a natural-language data science platform. You describe a dataset task in English and get back a cleaned, feature-engineered, trained and evaluated model.

Version one was a fixed pipeline: load, clean, engineer, train, predict, with the model filling in the parameters. It worked on every dataset I had tested it on. Real users asked questions their data could not answer and the system answered anyway. The logs stayed green because every agent had completed its run, while the users could see the outputs were wrong. My instrumentation tracked execution and had nothing on provenance, confidence or correctness, so I could not tell whether a change I made had helped.

What fixed it was logging the system's answer beside the answer the relevant human team had given to the same question. That gave me a signal to improve against, and the by-product was post-training data. By the end the product had changed category, from automated data science to business intelligence sitting on top of the systems of record.

Version two was a harness. I rebuilt it because I could not debug the thing I had. Nine agents under a supervisor, logging on every agent call, guardrails, intent parsing at the front, reasoning traces, determinism enforced anywhere a plain function beats a model reasoning about it, and evals so I could tell whether a change helped. Three of the nine started from the open-source ai-data-science-team library: data wrangling, feature engineering, H2O ML. The supervisor, the intent parser, the structured-output layer, session and state management, and the whole full-stack application around them are mine.

Version three had to hold load: seven Dockerised services on Postgres, Redis and Celery, with WebSocket progress and a central session service. The hardest bug in the build was state, because agents disagreed about what had already happened.

It shipped three ways: a Next.js and FastAPI web app, a CLI, and an MCP server built a few months after the protocol was released. The MCP server took the least work of the three and got used the most.

The AutoML under it was a stacked ensemble over H2O.

Code at github.com/abhivir-42/ai-data-science-platform. Longer write-up at abhivir.com/work/data-pilot/.

### DeepSearch Labs. Machine Learning Engineer. January to March 2025. London. Part time, 16 to 20 hours a week.

AdCraft generated radio advertisements. Two problems in it were mine. Emotion was a property of whichever voice you picked, so an excited read meant giving up the voice you wanted, and I fine-tuned Parler-TTS until emotion was an input parameter you set. The second was drift: one brand voice would not stay the same voice across generations, so I trained a SpeechBrain speaker classifier to hold it.

I also built the agent orchestration layer. Next.js, FastAPI, Llama 3B. The emotional audio dataset we released has over 7,000 downloads on HuggingFace, counted 1 September 2026. Code at github.com/abhivir-42/marketing-app-ad-gen, report at abhivir.com/papers/tts-report.pdf.

### Imperial College London, Department of Computing. AI Research. October to December 2024.

I built a decoder-only language model from scratch, BPE tokeniser through pretraining, fine-tuning and inference, then extended it into a multilingual evaluation across 70 languages. The finding is in Research, under MEGA.

### Imperial College London, Department of Computing. Undergraduate Teaching Assistant. October 2024 to March 2025.

See Teaching and leadership.

### Government of Uttarakhand, Department of Rural Development. Software Engineer. July to September 2024. Dehradun.

I built the inventory resource management system and the supply chain management system for the department's rural workers, serving House of Himalayas, a network of self-help groups, cooperatives and farmers making organic produce and artisanal goods. The figure I have is more than 70,000, and it is not settled whether that counts groups or people.

### Optiver, Imperial x Optiver Trading Academy. Quantitative Trader. November to December 2023. London. Part time.

I built an options market-making engine in Python: delta hedging, order management, position tracking, risk controls. They made me a graduate offer and I turned it down. I went for it because it was the highest-status thing available, and I had known going in that it wasn't really for me.

## Projects

### PCL-Detection: 10th by hand, 22nd by agents, 1st together

Imperial's NLP course ran SemEval-2022 Task 4 as a 340-student leaderboard. Department policy said no AI support, so the first run was by hand. My exploratory pass found that the rate of patronising language varies with the community keyword in the example, so the model got a community-context prefix on DeBERTa-v3, focal loss for the 9.5 to 1 class imbalance, and a tuned decision threshold. Dev F1 0.59 on a single seed, no ensemble, against a RoBERTa-base baseline of 0.48. Tenth of 340, and the report was marked 29 out of 30.

Then I ran my own data science agent system on the same task as a benchmark. Unsupervised on GPT-4o, one shot, it placed 22nd. With me in the loop it finished 1st. The system alone lost to me alone. Those are three separate runs and the code is at github.com/abhivir-42/PCL-Detection.

### Span: software running a steel forging factory in Faridabad

Live at span.abhivir.com. Next.js 16 and React 19 against a Supabase Postgres in Mumbai, row-level security on every table. 86 commits, 22,067 lines of TypeScript in src/, 30 numbered SQL migrations, and 331 tests across 28 files.

One test fails the build if any file in src/ or scripts/ calls Gmail's send API. The app writes a reply into the factory mailbox's drafts and stops there. A human presses send in Gmail. I wrote that rule as a test rather than a config flag because the OAuth scope the app needs, gmail.compose, also permits sending, so the scope cannot carry the guarantee. A second assertion checks that the reply client exposes createDraft and has no send method at all, and the comment above it says why, so nobody deletes it later as redundant.

The second interface is for the floor, and it is in daily use there. /aaj is phone-first and in Roman Hinglish, with a Hindi string table that mirrors the English one key for key: "Aaj kya bana", "Mic dabao aur bolo har hammer pe kya bana", "Yeh sahi hai?", "Sahi / Galat". The user speaks a voice note or photographs the production register. The clip goes to Deepgram with the live part codes injected as keyterms, number words are normalised to digits, Claude proposes a structured row, and nothing is written until he taps Sahi. Reads go through a device-token JWT carrying his role, so row-level security returns only his rows.

The join between our part numbering and the customer's refuses to trust itself. Our job-work sheets say "Forging 0212". The customer writes "0.021.0212_T.F". Matching on the short code alone invented 352 parts that do not exist and still left 138 of 164 open order lines with no price. So the script matches the code as a whole token, then refuses to apply the match unless our own register's kilograms per piece agree within ten per cent with the weight the customer printed on their purchase order. Where there is no purchase order weight to check against, the match is never applied.

I also shipped a wrong number. The finding said the factory had been underbilled Rs 91,566 in April, and I withdrew it before it reached anyone on the floor. I had read the cutting-charge column and judged it against the ISO column's header, found 7.50 where the header said 10.25, and reported a shortfall that does not exist. Migration 0023_withdraw_april_iso.sql withdraws it with the reason recorded, and the note files it beside three other withdrawn claims: Rs 9,850 on a rate judged against the wrong base, then Rs 19.27 lakh and "minus four rupees" on the FY25 operating result. The last was a unit error that divided where it had to multiply, and its own reconciliations printed wrong in the same output and were read straight past.

The first version of the factory desk opened on 388 open findings, and three bugs were hiding underneath it. 267 of the 291 "customer has not replied" findings were purchase orders, some a year old and long since invoiced, each claiming we had failed to answer for three hundred working days. A purchase order is answered by making the parts, so purchase orders came out of REPLY_EXPECTED_KINDS and that rule now stops at 45 days. Not one of the 76 stale orders carried a rupee figure, because the pricing function wanted a rate card nobody had confirmed when the part's own billed history needed neither. 388 findings became 93. Two rules hold the first screen down now: a row appears only if it carries a rupee figure, and thirteen findings about thirteen part numbers collapse into one row. My first rebuild broke the second of those rules and produced the same wall, one resolution finer.

I needed the cut weight for a turbine hub and did not want to guess it. The script reads our 217 forging drawings and weighs each one from its DWG hatch geometry using shapely. It finds 75 of them in the app's invoice lines, drops 11 whose hatch covers only part of the section, and on the remaining 64 finds the customer's gross weight is a median 1.285 times our forging weight. Every run asserts its own convention before it reports anything. Rebuild a part we already draw, from the customer's blank plus the 1.75mm-per-face allowance, and you get 2.102 kg against the 2.106 kg printed on our own drawing; the assert fails if those two diverge by more than one per cent. My answer for the hub was 1.52 kg. The floor's was 1.07. The README works out which assumption produces 1.07, shows that the same rule undershoots a part we ship every month, and names the test that would settle it: weigh ten cut billets on the floor.

### Anton: the system I run my life on

Its rules are mostly prohibitions, and each one was bought from an earlier system of mine that died. Six of those sit archived read-only at an archive of the systems that came before it, including the LaunchAgents folder belonging to the one that ran on schedules. No cron, no daemons, no LaunchAgents, no git, ever, and every script is started by a human. Nothing can pile up and there is no pending-review state anywhere in it. No screen shows a remaining count of a backlog. A gap of any length costs nothing, so coming back is day one. Nothing new gets built until the same failure has happened twice, which is why the log of candidate frictions has entries ending in a line that says no mechanism was built, per the rule.

page-check.py is 107 lines and its docstring is a list of defects that actually shipped, each mapped to the one command that would have caught it. It checks undefined CSS variables, unbalanced tags, dead nav targets, two answer boxes sharing a localStorage key, em dashes, and a total in prose whose parts do not add up. It exists because a page reached me with 44 references to 6 CSS variables the new shell never defined, and the only verification anyone had run was three screenshots of the top of a 2,795-pixel page.

rot.py is more interesting for what it refuses to check. It looks only for what a reader cannot see from a file's first line: a pointer at a closed or missing file, a dated heading that has gone stale, a memory linking to a note that was retired or never existed. Its docstring argues for the absences. How old a memory is, and how long since a file was written, are excluded on purpose, because a gap costs nothing. Those age checks were in the first version and I deleted them the same afternoon.

consistency.py came out of a second failure rather than a first one. The trading card and the trigger rows my alert script reads disagreed twice in four days, and both times someone amended the card and updated only the rows they happened to be thinking about. Once that left sixteen rows carrying a buying rule that had been deleted two days earlier. It checks four invariants that actually broke, refuses to parse the card's prose, prints a list of three things it cannot check so a clean run is not mistaken for an audit, and runs silently inside the morning script unless something is broken.

Fifteen agents each own one topic, over four SQLite databases and 8,046 lines of my own Python. They reach me through one file and one page, sorted by what an item demands of me rather than by which agent produced it: blocked on me, my hands only, worth knowing, never reaches me. The rule that does the work is that an agent which cannot state a default it would act on does not have a blocking item; it writes the default, acts on it, and leaves one line. Before that rule the agents were handing me a full trace of what they had done, and I could not tell what they had said, what they had changed, or what was left for me, so I dropped out of the loop on the things that actually needed me.

The clearest case of the twice-before-building rule is one where I lost. I asked for workout planning and tracking, got a markdown file, and nine days later it held one entry while the week-one programme was still a draft. A markdown file you have to open on a laptop is the wrong write surface for a set you finish standing at a rack. It collapsed further the same night, because what I had actually asked for was to be coached rather than to design, and no plain file does that. I bought Hevy and wrote a bridge script as the bridge into my own database, and the custom app waits until the bought tool fails at something specific.

The money system inside Anton is sixteen Python programs, about 3,300 lines, over a SQLite database holding 714 sourced facts, 2,137 benchmark rows and 86 triggers, counted 18 September 2026. Four of its rules live in the schema rather than in a README. The ledger refuses a fact with no source, and refuses any confidence level outside documented, stated, estimated and inferred. Known and unknown are never added into one number. Retained profit is not counted as cash, and an appreciating asset is not judged on its yield.

The newest entry in the log is from 17 September 2026 and it is about what the no-cron rule costs. An item said a held email would be released on Tuesday 15 September unless I said otherwise. No session ran that day. Two days later the thing was still unresolved, and when a session did try to release the hold itself, its own permission system refused the outbound mail as a real-world transaction. A dated default assumes somebody will be awake on that date, and nothing in this system wakes on its own, by design, so a dated default now has to name the hand that fires it.

### The context layer I archived, and the question it left

Version one was notes. Version two was notes plus embeddings, and it retrieved things that were similar to my query and almost never the thing I wanted, because similarity is not the relation I care about. Version three was a knowledge graph with provenance on every item, hybrid retrieval over BM25 and on-device embeddings with a pgvector HNSW backend, and 29 named MCP tools over the knowledge base, with a propose, ratify and retire write path instead of read-only retrieval. It has been archived read-only since July 2026 and Anton replaced it. Anton has no MCP tools, no pgvector and no embeddings.

A retrieval error gives you a bad chunk and you notice; a structural error gives you a confident wrong answer forever.

The part I have not solved is permissions. When a model reads across documents that carried different access rules and produces one summary, what permissions does that summary carry? A memory distilled from one person's private tickets can reach a colleague through the learned layer without ever crossing a boundary anyone is checking. I have not found an answer to this anywhere and I do not have one either. The only design that has survived my own objections moves permissions with the fact rather than with the document.

### The corpus

4,110 items in one 79MB SQLite file, among them 3,047 X bookmarks, 231 Paul Graham essays and 235 YouTube transcripts. 2,916 of them carry an AI judgment with a summary, the lanes it serves, suggested actions and a quality rating. 1,886 external documents fetched and stored, two FTS5 indexes, and an entity graph of 4,323 edges built out of those judgments with IDF filtering, up from 39 links I had made by hand.

The build ran 61 agents in one wave, tiered by cost: 13 Opus for the deep pass, 32 Sonnet for triage, 16 Haiku for sweep. 420 items came back silently skipped by lazy agents, and a ten-agent fill pass recovered them. That is why the runbook now says a zero-result export means expired cookies and has to be treated as a fault rather than as nothing new.

## Research

### MEng thesis: fetal congenital heart disease, Imperial BioMedIA, November 2025 to June 2026

Supervised by Prof. Bernhard Kainz. Full title: *Probing Foundation-Model Embeddings for Fetal Congenital Heart Disease Detection: A Controlled Evaluation of Discrimination and Clinical Utility*. Graded 75.00 across 25 credits. The paper is in preparation and has not been published anywhere. Report: https://abhivir.com/papers/fetal-chd-thesis.pdf

The methods chapter opens with one sentence: "This work introduces no new model." The backbones are taken as published and held frozen, the heads are small and standard. What I was contributing was the evaluation.

The cohort is iFIND: 4,128 subjects of fetal cardiac ultrasound labelled at the level of the subject, with 43 detailed diagnoses already collapsed into nine clinical groups by the clinical collaboration. The primary task groups four of those nine into one referable label. Transposition of the great arteries, atrioventricular septal defect, tetralogy of Fallot, hypoplastic left-heart syndrome. Those four, because they are the lesions a national programme audits its own detection rate against, and grouping them mirrors the real decision, refer or do not refer. On the single-split test set that is 62 affected against 524 healthy.

Every comparison was specified in Table 3.1 before any result existed, each one holding everything fixed but the mechanism it was testing. I fixed the estimand too, the per-fold five-fold mean computed inside each held-out fold, because pooling threshold-based metrics across concatenated folds mixes subjects the partition deliberately separates. That rule cost me my best number: the auditable-four AUROC is 0.911 as a per-fold mean and 0.902 on the single stratified split.

Five-fold means on the auditable four:

| Backbone | Head | AUROC |
|---|---|---|
| DINOv2 ViT-B/14 | mean-pooling linear probe | 0.818 |
| FetalCLIP ViT-L/14 | mean-pooling linear probe | 0.871 |
| DINOv2 ViT-B/14 | transformer head | 0.825 |
| DINOv2 ViT-L/14 | transformer head | 0.837 |
| FetalCLIP ViT-L/14 | transformer head | **0.911** |

FetalCLIP is pretrained on fetal ultrasound. DINOv2 is general purpose and has never seen a medical image. That configuration, the last row, also reaches all-nine AUROC 0.891 and catches 0.593 of auditable-four cases at a fixed 0.95 specificity.

Held at the transformer head, domain pretraining lifts 0.825 to 0.911, a gain of 0.086. Held at the linear probe, 0.818 to 0.871, a gain of 0.053. Quoting 0.818 to 0.911 as a single gain compares a linear probe against a transformer head and credits the backbone with the head's work, which I have caught myself doing in earlier write-ups. And if FetalCLIP were simply the bigger model the domain story would collapse, so I ran that control. DINOv2 ViT-B/14 to ViT-L/14 on the same transformer head buys 0.012, and at matched ViT-L/14 size the domain-pretrained backbone reaches 0.911 against the general-purpose 0.837. Of the 0.086, then, 0.074 is pretraining and 0.012 is size.

At a screening prevalence near one per cent the only decision is whether to refer, so I ran a decision curve across the threshold band instead of reading AUROC and stopping. At a threshold probability of 0.20 the FetalCLIP transformer head, my best discriminator, returns a net benefit of minus 0.0372 and beats referring nobody on none of the five folds, and it drops below that baseline once the threshold passes about 0.13. The mean-pooling linear probe, the simplest thing in the study, beats referring nobody on all five folds on every backbone, at plus 0.0290 on FetalCLIP. The head is what flips it, not the backbone. What separates the heads is calibration at the threshold. The transformer head's mean predicted probability on this task is 0.304 against a base rate of 0.104, so it flags too readily exactly where the referral gets made, and AUROC never charges it for that. I got my own first reading of that curve wrong, and auditing it is the only reason the five-of-five against none-of-five split ever surfaced.

Then the objection anyone would raise. The heads were trained class-balanced on a rare task, so of course the over-confident one over-refers. Training the FetalCLIP heads at the task's own prevalence moves the transformer head from minus 0.0372 to minus 0.0282, still negative, positive on two folds of five. The linear probe trained the same way clears the baseline on all five at plus 0.041. The prevalence mismatch is part of the story and not the whole of it, and the fix I would have preferred did not work.

Positive predictive value at the enriched cohort prevalence is 0.58, which is not a deployment figure, so I transported it by Bayes. About 0.11 at the one per cent prior for all congenital heart disease, about 0.02 at these four lesions' own prior of roughly 0.15 per cent. At deployment prevalence a flag from my model is far more often a healthy fetus than a real case, and that sentence sits in my results chapter rather than in a limitations paragraph at the end.

The examiner named one weakness: the framing occasionally treats FetalCLIP as a frozen general-purpose model when it is domain-pretrained. He was right, and that conflation is now on the list of claims I check every document against.

### MEGA: multilingual tokenisation, Imperial Department of Computing, October to December 2024

I built a decoder-only LLM from scratch first. BPE tokeniser, multi-head attention, pretraining, fine-tuning, inference. Then extended it into MEGA, an evaluation across 70 languages and 21 families. Paper at https://abhivir.com/papers/mega-paper.pdf.

The finding is about compression parity. A word in Tamil or Malayalam costs 10 to 12 tokens where the English equivalent costs 2 to 3. Same model, same context window, same price per token. For hundreds of millions of speakers that model is several times more expensive to run and fits several times less of their language into the window, before anybody argues about how much training data their language got.

## Education

### Imperial College London

MEng Computing (Artificial Intelligence and Machine Learning), October 2022 to June 2026. First Class Honours, 70.95 on Imperial's 100-point scale, where 70 is a First and 40 is the pass mark. Completed 26 June 2026, conferred 1 August 2026, ACGI. Imperial publishes no class rank, so there is no rank to give you.

The MEng is a four-year integrated undergraduate degree, entered straight from school. It is my first degree and there is no bachelor's behind it. US admissions forms and US employers both assume one sits under the master's, and in my case it does not exist. Ask and I will send the Diploma Supplement.

Year averages, in order: 63.71, 67.68, 71.94, 73.27.

Every module is below, in the transcript's own order, with its marks.

#### Year 1 (2022-23), average 63.71

| Module | Mark |
|---|---|
| Calculus | 68.56 |
| Computing Practical 1 (20 credits) | 58.04 |
| Discrete Maths, Logic and Reasoning | 58.07 |
| Graphs and Algorithms | 58.75 |
| Introduction to Computer Architecture | 83.00 |
| Introduction to Computer Systems | 81.63 |
| Introduction to Databases | 41.48 |
| Linear Algebra | 82.81 |

Computing Practical 1 is the first-year group project module, and 58.04 is what its parts came to. The C project: Interim Checkpoint 96/100, Final Report and Source 92/100, Extension 89/100, Presentation 100/100, Group Feedback 10/10. The timed Java tests: 30/50 and 15/50 at the interim, 30/50 and 23/50 at the final. One coursework, Java Spreadsheet II, is a 0/10.

#### Year 2 (2023-24), average 67.68

| Module | Mark |
|---|---|
| Algorithm Design and Analysis | 54.00 |
| Compilers | 58.00 |
| Computational Techniques | 62.50 |
| Computing Practical 2 (15 credits) | 91.19 |
| Models of Computation | 54.45 |
| Networks and Communications | 49.80 |
| Operating Systems | 48.42 |
| Probability and Statistics | 83.66 |
| Software Engineering Design | 40.00 |
| Year 2 Computing Group Project | 87.75 |

Computing Practical 2, 91.19 across 15 credits, is Pintos and WACC; see Teaching and leadership. The Operating Systems exam that same year is the 48.42 in the table, and the Compilers exam is the 58.00.

#### Year 3 (2024-25), average 71.94

| Module | Mark |
|---|---|
| Business Strategy | 60.70 |
| Computer Vision | 76.90 |
| Computing Research Collective | 75.00 |
| Industrial Placement Part 1 (15 credits) | Pass |
| Introduction to Machine Learning | 79.68 |
| Mathematics for Machine Learning | 87.54 |
| Operations Research | 66.67 |
| Robotics | 68.50 |
| Software Engineering Group Projects | 60.60 |

Industrial Placement Part 1 is pass/fail, and it is the Fetch.ai placement, which is in Experience. My personal tutor Jason Bailey marked the placement presentation and gave the Executive Summary 9 out of 10. From October 2024 to March 2025 I was also the paid undergraduate teaching assistant for Computing Practical 2.

#### Year 4 (2025-26), average 73.27

| Module | Mark |
|---|---|
| Deep Learning | 65.14 |
| Industrial Placement Part 2 (30 credits) | Pass |
| MEng Computing Individual Project (25 credits) | 75.00 |
| ML Systems and Hardware | 75.39 |
| ML for Imaging | 67.00 |
| Natural Language Processing | 82.67 |
| Principles of Distributed Ledgers | 75.60 |
| Reinforcement Learning | 71.99 |
| Robot Learning | 66.45 |

The MEng Computing Individual Project, 75.00 across 25 credits, is the thesis, and it is in Research. Natural Language Processing, 82.67, is the module that ran SemEval-2022 Task 4 as a 340-student leaderboard; that result is in Projects. Industrial Placement Part 2 is the rest of the Fetch.ai placement.

### IIT Delhi

B.Tech Biochemical Engineering and Biotechnology, October 2021 to September 2022. First year only. No degree obtained. GPA 8/10 as submitted. Admitted through JEE Advanced, All India Rank 723. Why I left is in the summary. Imperial began the October after IIT ended, so there is no gap in the record.

### English

Duolingo English Test, taken 30 August 2026: 145 of 160, CEFR C1 Advanced. Speaking 130, Writing 145, Reading 150, Listening 150. Verifiable at certs.duolingo.com, and I will hand the certificate ID to anyone who wants to check it.

## What I have studied

### Machine learning

The part I know properly is evaluation, and it came from the thesis. The numbers are in the research section.

Computer Vision, Reinforcement Learning, Robot Learning and ML for Imaging are marks with nothing behind them. I did the coursework well and have never shipped anything that used them.

### Language models and speech

I built a decoder-only LLM from scratch between October and December 2024. I extended it into MEGA, and what it found about tokenisation is in the research section. Natural Language Processing 82.67 was my best final-year module, and the leaderboard its coursework ran on is in the projects section.

The Parler-TTS work is in Experience.

### Retrieval

BM25 and hybrid retrieval are the two I would call myself expert in. Here is what that rests on. The context layer I retired in July 2026 ran hybrid retrieval over BM25 and on-device embeddings against a pgvector HNSW index, with provenance on every item.

My opinions about retrieval come from a few thousand items in SQLite, not a few hundred million.

### Systems, compilers and databases

Computing Practical 2: a Pintos operating system in C and a WACC compiler in Scala targeting ARM. See Teaching and leadership.

Introduction to Computer Architecture 83.00 and Introduction to Computer Systems 81.63 are the two where the exam and the building agreed.

Introduction to Databases 41.48 is the lowest mark on my first-year transcript. Everything I have built since has a schema in it: the app running a steel forging factory in Faridabad, four SQLite databases in the system I run my life on, a ledger that refuses to store a fact carrying no source, and the corpus above.

### Cryptography

Principles of Distributed Ledgers, fourth year, 75.60. The CTF win is in Awards.

### Maths

The one place I used it against a clock was the Optiver trading academy, in the experience section.

### What I am reading now

There is no curated list. Study gets pulled by whatever I have to ship next. Three books are open on disk: Designing Data-Intensive Applications, Alex Xu's System Design Interview volume 1, and You Can Just Do Things. The running input is the corpus: 3,047 X bookmarks, 231 Paul Graham essays and 235 YouTube transcripts, each one read and judged individually rather than dumped into an index. On paper: Balaji, Naval, Taleb, Thiel, and Goodfellow's Deep Learning.

## Skills and tools

The system counts here were taken on 18 September 2026.

### What I have shipped with

**Python.** 8,046 lines of my own in Anton. See Projects.

**TypeScript, Next.js 16, React 19, Supabase.** Span, the app running a steel forging factory in Faridabad. See Projects.

**SQL and Postgres.** Row-level security on every table in Span, four SQLite databases in Anton, two FTS5 indexes over the corpus.

**Docker, FastAPI, Redis, Celery, WebSockets.** The seven Dockerised services in version three of the Fetch.ai platform, with a central session service under them.

**MCP and tool-calling.** An MCP server for that platform. Before it, 29 named MCP tools over my own knowledge base with a propose-and-ratify write path instead of read-only lookup. That system is archived read only.

**LangGraph, multi-agent supervision, guardrails, evals.** Nine agents under a supervisor at Fetch.ai. Fifteen lane agents in Anton, one topic each. The corpus build wave is in Projects.

**BM25 and hybrid retrieval.** FTS5 over the corpus. See Projects.

**Deepgram.** The voice path in Span, with the live part codes injected as keyterms.

**Astro on Cloudflare Pages.** abhivir.com, 83 commits.

**PyTorch, HuggingFace Transformers, scikit-learn.** Under everything in the list below.

### What I have trained or fine tuned

- Mean-pooling linear probes and a small transformer head on frozen DINOv2 and FetalCLIP embeddings, over 4,128 fetal ultrasound subjects, for my thesis.
- DeBERTa-v3 with a community-context prefix, focal loss at 9.5:1 imbalance and a tuned decision threshold, for SemEval-2022 Task 4. github.com/abhivir-42/PCL-Detection.
- Parler-TTS at DeepSearch Labs. See Experience.
- A decoder-only LLM from scratch at Imperial, October to December 2024. It became MEGA.
- H2O AutoML with stacked ensembles at Fetch.ai, driven by users who had never written Python.

### Touched once, or only in coursework

C and Scala: an operating system in C and a compiler in Scala targeting ARM, both in second year. I have not written either language since.

ARM assembly and CUDA C: one matmul kernel. My own files carry three different cohort ranks for it, so I am quoting none of them until I settle which one is right.

pgvector and knowledge graphs: both belong to the retired system, not to anything I run today.

Java and JavaScript: nothing on this page rests on them.

### What is not here

CrewAI, Pipecat and Haskell are on my own CV with no project behind any of the three.

Automated testing is on my own beginner list, dated 7 September 2026, which is after I wrote the 331 tests above. I have not moved either to match the other.

## Awards and competitions

**Wintermute crypto CTF, 2025. One of three prize winners.** The capture the flag ran with Wintermute inside Imperial's Principles of Distributed Ledgers module, which I was taking that term. I taught myself zero-knowledge proofs and blockchain attacks to enter. Cash prize, and a job offer from Wintermute afterwards.

**YC Startup School India, Bengaluru, April 2026. Top 25 of 25,000.**

**UK AI Agent and OpenClaw hackathon, 2025. Won.** I built FetchFund, a crypto trading engine that executed live, on Fetch.ai agents.

**Morgan Stanley UK quant challenge, 2025. 1st of 50.**

**IC Hack, robotics category. Won as a competitor the year after I ran the event.**

**Imperial x Optiver Trading Academy, November to December 2023. 3rd of 100 on profitability.** The offer that came after it is in Experience.

## Teaching and leadership

**Undergraduate Teaching Assistant, Department of Computing, Imperial College London. Oct 2024 to Mar 2025. Paid.**

I taught the second-year Computing Practical: Pintos and WACC. Three two-hour labs a week, twenty students. The job goes to third years only.

Pintos is a teaching operating system in C: priority scheduling with donation, an alarm clock, argument passing and system calls, a supplemental page table with swap and memory-mapped files, an extensible filesystem with a buffer cache. A bug in the scheduler crashes the filesystem. A memory leak in virtual memory corrupts user programs. WACC is a compiler in Scala targeting ARM assembly, with no parser generators in it anywhere: lexer, recursive descent parser, semantic analyser, code generator, register allocation.

I had sat the module the year before. Both halves were team projects and I led both teams.

**Secretary, Imperial Department of Computing Society (DoCSoc), 2023-24.**

I ran IC Hack: 650 hackers, a seven-person core team, a budget over £100,000, and about fifteen sponsors to raise it from. I organised that year rather than competing in it; the robotics category win in Awards is the year after.

## Writing and talks

Four posts are live on abhivir.com.

**10th, 22nd, 1st.** https://abhivir.com/blog/nlp-harness-engineering/ · 27 March 2026. The Imperial NLP leaderboard run, written around the middle number instead of the first place. Code at https://github.com/abhivir-42/PCL-Detection, marked report at https://abhivir.com/papers/nlp-semeval-paper.pdf.

**India AI Summit 2026.** https://abhivir.com/blog/india-ai-summit/ · 15 February 2026. New Delhi. Demis Hassabis was talking about frontier capability and Nandan Nilekani cut in: "No no, we need something a level before that. For people who don't know how to read and write." The exchange lasted about ten seconds and the post is built on it: the gap between what the labs build and what India needs, pointed at by the man who built Aadhaar for 1.4 billion people. I was working on AI for education in India then, and after that everything I built had to start with literacy, because an AI tutor is no use to someone who cannot read the screen. The post ends on a question Nikesh Arora put to me and I could not answer at the time: solve a global problem or a local one, and if it is global, solve it from the best place and go back.

The other two are the site's launch note, https://abhivir.com/blog/hello-world/ · 10 October 2025, and a paragraph about cricket, https://abhivir.com/blog/cricket/ · 28 March 2026.

**Five PDFs, each at its own URL.** The MEng thesis, June 2026: https://abhivir.com/papers/fetal-chd-thesis.pdf. The marked SemEval report: https://abhivir.com/papers/nlp-semeval-paper.pdf. MEGA, the multilingual evaluation across 70 languages and 21 families, from work between October and December 2024: https://abhivir.com/papers/mega-paper.pdf. The AdCraft text to speech report and its slides, from the DeepSearch Labs work of January to March 2025: https://abhivir.com/papers/tts-report.pdf and https://abhivir.com/papers/tts-slides.pdf.

**The site's source is public** at https://github.com/abhivir-42/abhivir. Three commit titles from September 2026:

- "Withdraw the thesis claim I shipped this morning, and name why it was wrong"
- "Take four more claims back to their primary sources"
- "Cut unverified claims, fix the dead email"

It also serves https://abhivir.com/llms.txt, the raw markdown of this document at https://abhivir.com/resume.md, and JSON at /api/projects, /api/now and /api/reading.

**Talks.** I have given some and kept no record of which or to whom, so there is nothing here to list.

## What I am looking for

Remote AI engineer work, starting now. San Francisco as soon as I can get there.

Small team, on the context and memory layer under agents. The specific thing I want to work on is permissions on summaries built from documents that carried different access rules, which is the open question in the context layer entry under Projects. I care more about who I'd be arguing with every day than what the role is called.

Hiring me this year costs you no immigration work. I'm an Indian citizen with no US status, so it's a remote contract with me as an Indian contractor, or an employer of record if you'd rather payroll handled it. You pay an invoice. Getting to the US is mine to solve. O-1 later, and I'll bring you the petition already built rather than ask you to build it.

Available now. No notice period to work out, so I can start within a week of signing. I'll work your morning, which is my evening. I'm open on rate, so tell me what the role is worth to you and I'll tell you if it works.

### What I have not done, so you don't find out in week three

- Never built software on a team bigger than six.
- Never had to keep a system up under load I didn't cause myself.
- Shipped things used by hundreds of people, nothing used by millions.
