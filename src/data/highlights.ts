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
      "All India Rank 723 out of ~200,000. Got admitted to IIT Delhi.",
    date: "2021",
    category: "academic",
    placeholder: true,
  },
  {
    title: "Cambridge ENGAA — 9.0/9.0",
    caption:
      "Perfect score. Unconditional offer from Trinity College, Cambridge University.",
    date: "2021",
    category: "academic",
    placeholder: true,
  },
  {
    title: "KVPY Scholar",
    caption:
      "Kishore Vaigyanik Protsahan Yojana — national fellowship for excellence in math and science.",
    date: "2020",
    category: "academic",
    placeholder: true,
  },
  {
    title: "Technothlon — AIR 10",
    caption:
      "Organised by IIT Guwahati. All India Rank 10 out of 50,000. Made friends I reconnected with at IIT.",
    date: "2020",
    category: "academic",
    placeholder: true,
  },
  {
    title: "Pintos & WACC — Best in Cohort",
    caption:
      "Operating system and compiler from scratch. Top marks out of 230 at Imperial.",
    date: "2024",
    category: "academic",
    placeholder: true,
  },

  // Competition
  {
    title: "IC Hack Winner",
    caption:
      "Built FetchFund, an automated crypto trading engine on Fetch.ai agents.",
    date: "2024",
    category: "competition",
    placeholder: true,
  },
  {
    title: "Wintermute Crypto CTF",
    caption:
      "Self-taught Zero Knowledge Proofs and elliptic curve cryptography to compete and win.",
    date: "2024",
    category: "competition",
    placeholder: true,
    image: undefined,
  },
  {
    title: "Morgan Stanley — 1st Place",
    caption:
      "Arbitrage challenge. Manual trading and quantitative reasoning rounds.",
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
      "Sat at the same table as the CEO of Google DeepMind.",
    date: "Feb 2026",
    category: "event",
    placeholder: true,
  },
  {
    title: "Meeting Vinod Khosla",
    caption:
      "At the India AI Summit.",
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
    title: "Imperial Cricket Captain",
    caption:
      "Captained the team in BUCS (British Universities & Colleges Sport).",
    date: "2023 — 2025",
    category: "leadership",
    placeholder: true,
  },
  {
    title: "Hosting Thomas Wolf & Peter Steinberger",
    caption:
      "Hugging Face CEO and Peter Steinberger at the AI Club at Imperial. Head of Data.",
    date: "2024",
    category: "leadership",
    placeholder: true,
  },

  // Building
  {
    title: "COVID App for Gurdwara",
    caption:
      "Built a supply chain management app during COVID for a local Gurdwara.",
    date: "2021",
    category: "building",
    placeholder: true,
  },
  {
    title: "Emotional TTS — 1000+ HuggingFace Downloads",
    caption:
      "Fine-tuned Parler-TTS with emotional expressiveness. Published on HuggingFace, over 1000 downloads.",
    date: "2025",
    category: "building",
    placeholder: true,
  },
];
