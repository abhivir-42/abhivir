export interface WorkItem {
  title: string;
  description: string;
  tags: string[];
  period: string;
  link?: string;
  featured?: boolean;
}

export const work: WorkItem[] = [
  {
    title: "AI for Fetal Heart Ultrasound",
    description:
      "Ongoing MEng thesis at Imperial College London. Developing MobileUNet for real-time fetal heart segmentation, AutoFHR for automated heart rate estimation, and L-FUSION for landmark-guided probe navigation. Targeting deployment on portable ultrasound devices for low-resource settings.",
    tags: ["Deep Learning", "Medical Imaging", "PyTorch", "Ultrasound"],
    period: "2024 — Present",
    featured: true,
  },
  {
    title: "Automated ML Platform",
    description:
      "Built an end-to-end automated machine learning platform at Fetch.ai using LangChain agents for intelligent pipeline orchestration. Implemented stacked ensemble methods with automated hyperparameter tuning, feature engineering, and model selection.",
    tags: ["LangChain", "AutoML", "Python", "Ensembles"],
    period: "Summer 2025",
    link: "https://fetch.ai",
    featured: true,
  },
  {
    title: "AI-Powered Text-to-Speech for Ads",
    description:
      "Developed production voice synthesis at DeepSearch Labs using MaskCycleGAN-TTS for voice conversion and VITS for end-to-end speech synthesis. Enabled personalised ad audio generation at scale.",
    tags: ["TTS", "GANs", "VITS", "Speech Synthesis"],
    period: "Winter 2024/25",
    featured: true,
  },
  {
    title: "GPT-2 from Scratch",
    description:
      "Implemented GPT-2 (124M parameters) from scratch as part of Eureka Labs. Built the full transformer decoder architecture including multi-head self-attention, positional encoding, and byte-pair encoding tokenizer. Trained on OpenWebText.",
    tags: ["Transformers", "NLP", "PyTorch", "LLMs"],
    period: "Summer 2024",
    featured: true,
  },
  {
    title: "MEGA: Multilingual LLM Evaluation",
    description:
      "Research project benchmarking large language models across 70+ languages on diverse NLP tasks. Evaluated multilingual performance gaps and contributed to understanding of cross-lingual transfer in generative AI.",
    tags: ["NLP", "Benchmarking", "Multilingual", "Research"],
    period: "Winter 2024",
  },
  {
    title: "Statistical Arbitrage Framework",
    description:
      "Built a cryptocurrency pairs trading system using cointegration analysis, Kalman filters for dynamic hedge ratios, and mean-reversion signals. Backtested across multiple exchange pairs with transaction cost modelling.",
    tags: ["Quant", "Python", "Statistics", "Crypto"],
    period: "2024",
  },
  {
    title: "Options Market-Making",
    description:
      "Competed in Optiver's trading academy, developing options market-making strategies with risk-adjusted position management. Achieved 3rd place out of 100 participants through dynamic delta hedging and volatility modelling.",
    tags: ["Options", "Market-Making", "Trading", "Risk Management"],
    period: "Winter 2023/24",
  },
  {
    title: "Pintos Operating System",
    description:
      "Built a teaching operating system in C at Imperial, implementing thread scheduling, user programs, virtual memory, and a file system. Scored 95%, placing in the top 5 out of 200 students.",
    tags: ["C", "Operating Systems", "Systems Programming"],
    period: "Fall2023",
  },
  {
    title: "UK AI Agent Hackathon Winner",
    description:
      "Won a national AI hackathon by building an automated trading system using AI agents. Designed multi-agent coordination for market analysis, signal generation, and trade execution.",
    tags: ["AI Agents", "Hackathon", "Trading", "Winner"],
    period: "Spring 2024",
  },
  {
    title: "Morgan Stanley Arbitrage Challenge",
    description:
      "Secured 1st position in Morgan Stanley's arbitrage challenge, competing across manual trading and quantitative reasoning rounds. Demonstrated strong market intuition and analytical problem-solving under pressure.",
    tags: ["Trading", "Arbitrage", "Competition", "1st Place"],
    period: "Winter 2025",
  },
];
