export interface HighlightItem {
  title: string;
  caption: string;
  date: string;
  category: "academic" | "competition" | "event" | "leadership" | "building";
  image?: string;
  placeholder: boolean;
}

export const highlights: HighlightItem[] = [
  // Academic
  {
    title: "JEE Advanced — 99th Percentile",
    caption:
      "All India Rank 723 out of ~200,000. The exam that decides everything in India.",
    date: "2021",
    category: "academic",
    placeholder: true,
  },
  {
    title: "Cambridge ENGAA — 9.0/9.0",
    caption:
      "Perfect score on the Cambridge Engineering Aptitude Assessment. Led to an unconditional offer from Trinity College.",
    date: "2021",
    category: "academic",
    placeholder: true,
  },
  {
    title: "KVPY Scholar",
    caption:
      "Kishore Vaigyanik Protsahan Yojana — India's premier science fellowship for young researchers.",
    date: "2020",
    category: "academic",
    placeholder: true,
  },
  {
    title: "Logic Olympiad — AIR 10",
    caption:
      "Indian Olympiad of Logic & Mathematical Reasoning. All India Rank 10 out of 50,000. Made friends I reconnected with at IIT.",
    date: "2020",
    category: "academic",
    placeholder: true,
  },
  {
    title: "Pintos & WACC — Best in Cohort",
    caption:
      "Built an operating system and compiler from scratch. Top marks out of 230 students at Imperial.",
    date: "2024",
    category: "academic",
    placeholder: true,
  },

  // Competition
  {
    title: "UK AI Agent Hackathon — Winner",
    caption:
      "Won IC Hack with FetchFund, an automated crypto trading engine built on Fetch.ai agents.",
    date: "2024",
    category: "competition",
    placeholder: true,
  },
  {
    title: "Wintermute Crypto CTF — Winner",
    caption:
      "Self-taught Zero Knowledge Proofs and elliptic curve cryptography to compete and win.",
    date: "2024",
    category: "competition",
    placeholder: true,
  },
  {
    title: "Morgan Stanley — 1st Place",
    caption:
      "Won the arbitrage challenge across manual trading and quantitative reasoning rounds.",
    date: "2025",
    category: "competition",
    placeholder: true,
  },
  {
    title: "Optiver — 3rd/100",
    caption:
      "Options market-making challenge. Awarded by the head of Optiver's London office.",
    date: "2023",
    category: "competition",
    placeholder: true,
  },

  // Event
  {
    title: "India AI Summit — With Demis Hassabis",
    caption:
      "Got myself a seat. Sat at the same table as the CEO of Google DeepMind.",
    date: "Feb 2026",
    category: "event",
    placeholder: true,
  },
  {
    title: "Meeting Vinod Khosla",
    caption:
      "At the India AI Summit. The conversation that shaped how I think about conviction.",
    date: "Feb 2026",
    category: "event",
    placeholder: true,
  },
  {
    title: "With Dario Amodei",
    caption: "CEO of Anthropic, at the India AI Summit.",
    date: "Feb 2026",
    category: "event",
    placeholder: true,
  },
  {
    title: "Alexander Wang — Scale AI",
    caption: "Met at the India AI Summit.",
    date: "Feb 2026",
    category: "event",
    placeholder: true,
  },

  // Leadership
  {
    title: "Imperial Cricket — Promotion",
    caption:
      "Captained the team from second division to top division in the UK.",
    date: "2024",
    category: "leadership",
    placeholder: true,
  },
  {
    title: "Hosting Thomas Wolf",
    caption:
      "Hugging Face CEO at the AI Club I co-founded at Imperial.",
    date: "2024",
    category: "leadership",
    placeholder: true,
  },
  {
    title: "Hosting Peter Steinberger",
    caption:
      "At the Imperial AI Club. Led to the hackathon collaboration.",
    date: "2024",
    category: "leadership",
    placeholder: true,
  },

  // Building
  {
    title: "Poshan Tracker Contribution",
    caption:
      "Contributed to India's national nutrition tracking system, deployed across all villages and Anganwadi centres.",
    date: "2025",
    category: "building",
    placeholder: true,
  },
  {
    title: "COVID App for Gurdwara",
    caption:
      "Built a supply chain management app during COVID. Caught the eye of a senior government official.",
    date: "2021",
    category: "building",
    placeholder: true,
  },
  {
    title: "AdCraft — 1000+ HuggingFace Downloads",
    caption:
      "Fine-tuned emotional TTS model. Over 1000 downloads on HuggingFace.",
    date: "2025",
    category: "building",
    placeholder: true,
  },
];
