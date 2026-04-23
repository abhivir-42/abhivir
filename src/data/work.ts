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
    date: "2024–2025",
    tags: ["AI Agents", "LangChain", "FastAPI", "AutoML"],
    description:
      "Solo-built platform with 8+ AI agents that coordinate across the full data science pipeline. Humans in the loop at every decision point. Live with data scientists at Bosch and Fetch.ai.",
  },
  {
    title: "AI for Fetal Heart Ultrasound",
    tier: "flagship",
    featured: true,
    date: "Oct 2025 – Jun 2026",
    tags: ["Deep Learning", "Medical Imaging", "PyTorch"],
    description:
      "MEng thesis. MobileUNet for real-time fetal heart segmentation, AutoFHR for heart rate estimation, L-FUSION for probe navigation. Targeting portable devices for low-resource settings.",
    href: "/ai-congenital-heart-detection.pdf",
  },
  {
    title: "Pintos OS & WACC Compiler",
    slug: "pintos-wacc",
    tier: "flagship",
    featured: true,
    date: "2023–2024",
    tags: ["C", "ARM Assembly", "Systems Programming"],
    description:
      "Operating system and compiler, both from scratch. Best in cohort of 230 at Imperial. 95% mark.",
  },
  {
    title: "Emotional Text-to-Speech",
    slug: "adcraft",
    tier: "flagship",
    featured: true,
    date: "Winter 2024/25",
    tags: ["TTS", "CrewAI", "Parler-TTS", "SpeechBrain"],
    description:
      "Fine-tuned open-source TTS to express emotion. Compiled an emotional audio dataset with 2,000+ HuggingFace downloads.",
    href: "https://github.com/abhivir-42/marketing-app-ad-gen",
  },
  {
    title: "GPT from Scratch",
    tier: "flagship",
    featured: true,
    date: "Summer 2024",
    tags: ["Transformers", "PyTorch", "LLMs"],
    description:
      "Transformer language model built from scratch, following Karpathy's NanoGPT. Multi-head self-attention, BPE tokenizer, training and inference.",
  },
  {
    title: "MEGA: Multilingual LLM Evaluation",
    tier: "flagship",
    featured: true,
    date: "Autumn 2024",
    tags: ["NLP", "Multilingual", "Research"],
    description:
      "Research paper evaluating LLMs across 70+ languages. Identified data contamination issues in benchmarks and evaluated compression parity as a fairer metric.",
    href: "/papers/mega-paper.pdf",
  },

  // Notable
  {
    title: "FetchFund",
    tier: "notable",
    date: "Spring 2025",
    tags: ["Fetch.ai", "DeFi", "AI Agents"],
    description:
      "Automated crypto trading engine on Fetch.ai's uAgents framework. Multi-agent system for market analysis, signal generation, and trade execution.",
    href: "https://dorahacks.io/buidl/25727",
  },
  {
    title: "Statistical Arbitrage Framework",
    tier: "notable",
    date: "Fall 2024",
    tags: ["Quant", "Python", "Crypto"],
    description:
      "Pairs trading system. Cointegration, Kalman filters, mean-reversion signals.",
  },
  {
    title: "Optiver Trading Academy",
    tier: "notable",
    date: "Sep – Nov 2023",
    tags: ["Options", "Market-Making", "Trading"],
    description:
      "Options market-making algorithm. 3rd out of 100, awarded by the head of Optiver's London office.",
  },
  {
    title: "Morgan Stanley Arbitrage Challenge",
    tier: "notable",
    date: "Winter 2025",
    tags: ["Trading", "Arbitrage", "1st Place"],
    description:
      "1st place across manual trading and quantitative reasoning rounds.",
  },
  {
    title: "NLP: Top Submission at Imperial",
    tier: "notable",
    date: "Winter 2026",
    tags: ["NLP", "ML", "Python"],
    description:
      "Top submission in Imperial's NLP coursework. AI platform + human beat all students; platform alone didn't beat careful manual work.",
  },
  {
    title: "CUDA Kernel Optimization",
    tier: "notable",
    date: "Autumn 2025",
    tags: ["CUDA", "GPU", "Performance"],
    description:
      "5th fastest CUDA kernel in the cohort at Imperial.",
  },
  {
    title: "Wintermute Crypto CTF",
    tier: "notable",
    date: "2026",
    tags: ["Cryptography", "ZKP", "CTF"],
    description:
      "Self-taught Zero Knowledge Proofs and elliptic curve cryptography to compete and win.",
    href: "https://www.linkedin.com/posts/matt-styles-b69a33108_crypto-internship-digitalassets-activity-7399061077201670144-PxiO",
  },

  // Other
  {
    title: "Imperial Cricket Captain",
    tier: "other",
    date: "2023–2025",
    tags: ["Cricket", "BUCS", "Leadership"],
    description:
      "Captained Imperial College London cricket team in BUCS.",
    href: "/blog/cricket",
  },
  {
    title: "AI, Blockchain Club at Imperial",
    tier: "other",
    date: "2024–2025",
    tags: ["AI", "Leadership", "Community"],
    description:
      "Head of Data. Hosted Hugging Face CEO Thomas Wolf and Peter Steinberger. Now run by juniors.",
  },
  {
    title: "Secretary, DoCSoc",
    tier: "other",
    date: "2023–2024",
    tags: ["Leadership", "Hackathon"],
    description:
      "Department of Computing Society at Imperial. Organised IC Hack, the UK's largest student-run hackathon.",
  },
];
