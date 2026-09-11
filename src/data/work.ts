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
      "Solo-built platform with nine AI agents that coordinate across the full data science pipeline. Humans in the loop at every decision point. Live with data scientists at Fetch.ai.",
  },
  {
    title: "SemEval: 1st of 340",
    tier: "flagship",
    featured: true,
    date: "Jan – Mar 2026",
    tags: ["NLP", "DeBERTa", "Agents"],
    description:
      "Detecting condescending language at a 9.5:1 class imbalance. Context-enriched DeBERTa, focal loss, F1 0.61 against a 0.48 baseline. The number I keep is the ablation on the 340-student leaderboard: me alone 10th, my agent system unsupervised 22nd, the two together 1st.",
    href: "/blog/nlp-harness-engineering",
  },
  {
    title: "A Context Layer With Provenance",
    tier: "flagship",
    featured: true,
    date: "Oct 2025 – now",
    tags: ["Knowledge Graphs", "Retrieval", "MCP", "pgvector"],
    description:
      "About 10,000 pages of everything I read, write and build, indexed as a knowledge graph with provenance on every item rather than a flat vector index. Hybrid retrieval over BM25, on-device embeddings and a pgvector HNSW backend, with roughly 30 MCP tools on top so agents read and write the same memory I do.",
  },
  {
    title: "AI for Fetal Heart Ultrasound",
    tier: "flagship",
    featured: true,
    date: "Oct 2025 – Jun 2026",
    tags: ["Foundation Models", "Medical Imaging", "PyTorch"],
    description:
      "MEng thesis. Does a vision model that has never seen a medical image already encode the fetal heart well enough to detect disease? It does. Light heads on frozen DINOv2 embeddings reach 0.911 AUROC on four auditable lesions, training no new model at all.",
    href: "/papers/fetal-chd-thesis.pdf",
  },
  {
    title: "Pintos OS & WACC Compiler",
    slug: "pintos-wacc",
    tier: "flagship",
    featured: true,
    date: "2023–2024",
    tags: ["C", "Scala", "Systems Programming"],
    description:
      "An operating system in C and a compiler in Scala, both from scratch, in second year. Top 5 of 240 on the OS. 91.19 across the 15-credit module. The year after, I was paid to teach it: three two-hour labs a week, twenty students.",
  },
  {
    title: "Emotional Text-to-Speech",
    slug: "adcraft",
    tier: "flagship",
    featured: true,
    date: "Winter 2024/25",
    tags: ["TTS", "CrewAI", "Parler-TTS", "SpeechBrain"],
    description:
      "Fine-tuned open-source TTS to express emotion. Compiled an emotional audio dataset with 7,000+ HuggingFace downloads.",
    href: "https://github.com/abhivir-42/marketing-app-ad-gen",
  },
  {
    title: "GPT from Scratch",
    tier: "flagship",
    featured: true,
    date: "Oct – Dec 2024",
    tags: ["Transformers", "PyTorch", "LLMs"],
    description:
      "Transformer language model built from scratch, following Karpathy's NanoGPT. Multi-head self-attention, BPE tokenizer, training and inference.",
  },
  {
    title: "MEGA: Multilingual LLM Evaluation",
    tier: "flagship",
    featured: true,
    date: "Oct – Dec 2024",
    tags: ["NLP", "Multilingual", "Research"],
    description:
      "Evaluating LLMs across 70 languages and 21 families. Found that Tamil and Malayalam cost 10 to 12 tokens where English costs 2 to 3, so a per-token price is a tax on the languages it is hardest to serve.",
    href: "/papers/mega-paper.pdf",
  },

  // Notable
  {
    title: "Anganwadi Supply Chain, Govt. of Uttarakhand",
    tier: "notable",
    date: "Jul – Sep 2024",
    tags: ["Backend", "Public Systems", "India"],
    description:
      "Inventory and supply chain systems for anganwadi workers in the Department of Rural Development. Rural India runs on these, and the people using it are not engineers.",
  },
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
    date: "Nov – Dec 2023",
    tags: ["Options", "Market-Making", "Trading"],
    description:
      "Options market-making engine in Python: delta hedging, order management, position tracking, risk controls. 3rd of 100 on profitability. Received a graduate offer and turned it down.",
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
    title: "CUDA Kernel Optimization",
    tier: "notable",
    date: "Autumn 2025",
    tags: ["CUDA", "GPU", "Performance"],
    description:
      "5th fastest CUDA kernel in the cohort at Imperial.",
  },
  {
    title: "Winner: Wintermute Crypto CTF",
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
      "Co-founder and Head of Data. Hosted Thomas Wolf, co-founder of Hugging Face, and Peter Steinberger. Now run by juniors.",
  },
  {
    title: "Secretary, DoCSoc",
    tier: "other",
    date: "2023–2024",
    tags: ["Leadership", "Hackathon"],
    description:
      "Secretary of Imperial's Department of Computing Society, on the seven-person team that ran IC Hack, Europe's largest student-run hackathon. 650 hackers, about 15 sponsors, a budget over \u00a3100,000. I owned sponsor onboarding and negotiation.",
  },
];
