export interface WorkItem {
  title: string;
  description: string;
  tags: string[];
  date: string;
  href?: string;
  featured?: boolean;
  slug?: string;
  tier: "flagship" | "notable" | "other";
}

export const work: WorkItem[] = [
  // Flagship
  {
    title: "AI Data Science Platform",
    slug: "data-pilot",
    tier: "flagship",
    featured: true,
    date: "2024 — 2025",
    tags: ["AI Agents", "LangChain", "FastAPI", "AutoML"],
    description:
      "Solo-built platform with 8+ specialised AI agents coordinating across the full data science pipeline — cleaning, visualisation, feature engineering, training, prediction. Humans in the loop at every decision point. Live with data scientists at Bosch and Fetch.ai. Won the UK AI Agent Hackathon.",
    href: "https://github.com/abhivir-42/fetchfund",
  },
  {
    title: "AI for Fetal Heart Ultrasound",
    tier: "flagship",
    featured: true,
    date: "2025 — Present",
    tags: ["Deep Learning", "Medical Imaging", "PyTorch"],
    description:
      "MEng thesis at Imperial. Developing MobileUNet for real-time fetal heart segmentation, AutoFHR for automated heart rate estimation, and L-FUSION for landmark-guided probe navigation. Targeting deployment on portable ultrasound devices for low-resource settings.",
  },
  {
    title: "Pintos OS & WACC Compiler",
    slug: "pintos-wacc",
    tier: "flagship",
    featured: true,
    date: "2023 — 2024",
    tags: ["C", "ARM Assembly", "Systems Programming"],
    description:
      "Built an operating system and a compiler from scratch. Best in cohort of 230 students at Imperial. Led the team, took ownership, and built deep friendships with potential co-founders along the way.",
  },

  // Notable
  {
    title: "FetchFund — Hackathon Winner",
    tier: "notable",
    date: "Spring 2024",
    tags: ["Fetch.ai", "DeFi", "AI Agents", "Winner"],
    description:
      "Won IC Hack / UK AI Agent Hackathon. Built an automated crypto trading engine on Fetch.ai's uAgents framework — multi-agent coordination for market analysis, signal generation, and trade execution.",
    href: "https://dorahacks.io/buidl/25727",
  },
  {
    title: "AdCraft — AI Radio Ad Generation",
    tier: "notable",
    date: "Winter 2024/25",
    tags: ["TTS", "CrewAI", "Parler-TTS", "Next.js"],
    description:
      "AI-powered radio ad platform at DeepSearch Labs. Fine-tuned Parler-TTS for emotional expressiveness, built voice consistency via SpeechBrain classifier, orchestrated with CrewAI agents. 1000+ HuggingFace downloads.",
    href: "https://github.com/abhivir-42/marketing-app-ad-gen",
  },
  {
    title: "MEGA — Multilingual LLM Evaluation",
    tier: "notable",
    date: "Winter 2024",
    tags: ["NLP", "Multilingual", "Research"],
    description:
      "Research paper benchmarking LLMs across 70+ languages. Evaluated compression parity metrics, identified data contamination issues in existing benchmarks, and proposed directions for fairer multilingual evaluation.",
  },
  {
    title: "GPT-2 from Scratch",
    tier: "notable",
    featured: true,
    date: "Summer 2024",
    tags: ["Transformers", "PyTorch", "LLMs"],
    description:
      "Implemented GPT-2 (124M parameters) from scratch — full transformer decoder, multi-head self-attention, BPE tokenizer. Trained on OpenWebText.",
  },
  {
    title: "Statistical Arbitrage Framework",
    tier: "notable",
    date: "2024",
    tags: ["Quant", "Python", "Crypto"],
    description:
      "Cryptocurrency pairs trading system using cointegration analysis, Kalman filters for dynamic hedge ratios, and mean-reversion signals.",
  },
  {
    title: "Optiver Trading Academy",
    tier: "notable",
    date: "Sep — Nov 2023",
    tags: ["Options", "Market-Making", "Trading"],
    description:
      "Built a high-performance options market-making algorithm. 3rd out of 100 in the trading challenge, awarded by the head of Optiver's London office.",
  },
  {
    title: "Morgan Stanley Arbitrage Challenge",
    tier: "notable",
    date: "Winter 2025",
    tags: ["Trading", "Arbitrage", "1st Place"],
    description:
      "1st place in Morgan Stanley's arbitrage challenge across manual trading and quantitative reasoning rounds.",
  },
  {
    title: "NLP — Top Submission at Imperial",
    tier: "notable",
    date: "2024",
    tags: ["NLP", "ML", "Python"],
    description:
      "Top submission in Imperial's NLP coursework. Key insight: AI platform + human beat all students, but platform alone didn't beat careful manual work. Harness engineering matters.",
  },
  {
    title: "CUDA Kernel Optimization",
    tier: "notable",
    date: "2024",
    tags: ["CUDA", "GPU", "Performance"],
    description:
      "5th fastest CUDA kernel in the cohort at Imperial.",
  },
  {
    title: "Wintermute Crypto CTF — Winner",
    tier: "notable",
    date: "2024",
    tags: ["Cryptography", "ZKP", "CTF"],
    description:
      "Self-taught Zero Knowledge Proofs and elliptic curve cryptography to compete and win the UK Crypto Capture The Flag.",
  },

  // Other
  {
    title: "Imperial Cricket Captain",
    tier: "other",
    date: "2023 — 2025",
    tags: ["Cricket", "Leadership"],
    description:
      "Captained Imperial College London cricket team. Led the side from second division to top division in the UK.",
  },
  {
    title: "AI Club at Imperial",
    tier: "other",
    date: "2023 — Present",
    tags: ["AI", "Leadership", "Community"],
    description:
      "Co-founded and led as Head of Data. Hosted Hugging Face CEO Thomas Wolf and Peter Steinberger. Now run by juniors.",
  },
];
