export interface HighlightItem {
  title: string;
  caption: string;
  date: string;
  category: "academic" | "competition" | "event" | "leadership" | "building";
  image?: string;
  placeholder: boolean;
}

export const highlights: HighlightItem[] = [
  // Academic — strong signal
  {
    title: "Pintos & WACC — Best in Cohort",
    caption:
      "Operating system and compiler from scratch. Top marks out of 230 at Imperial.",
    date: "2024",
    category: "academic",
    placeholder: true,
  },
  {
    title: "Cambridge ENGAA — 9.0/9.0",
    caption:
      "Perfect score. Unconditional offer from Trinity College, Cambridge University.",
    date: "2021",
    category: "academic",
    image: "/photos/trinity-college-cambridge.jpg",
    placeholder: false,
  },
  {
    title: "IIT Delhi",
    caption:
      "Admitted through JEE Advanced, top 0.4% nationally.",
    date: "2021",
    category: "academic",
    image: "/photos/IITD.JPG",
    placeholder: false,
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
    image: "/photos/technothlon.jpg",
    placeholder: false,
  },

  // Building — shipped work
  {
    title: "Built and Programmed a Robot Wall-E from Scratch",
    caption:
      "Designed, built, and programmed a functioning Wall-E robot from the ground up.",
    date: "2023",
    category: "building",
    image: "/photos/robot-photo.jpg",
    placeholder: false,
  },
  {
    title: "Emotional TTS — 1000+ HuggingFace Downloads",
    caption:
      "Fine-tuned Parler-TTS with emotional expressiveness. Published on HuggingFace, over 1000 downloads.",
    date: "2025",
    category: "building",
    placeholder: true,
  },
  {
    title: "UK AI Agent X Openclaw Hackathon Winner",
    caption:
      "Built FetchFund, an automated crypto trading engine on Fetch.ai agents.",
    date: "2024",
    category: "competition",
    image: "/photos/uk-ai-agent-hack.jpeg",
    placeholder: false,
  },
  {
    title: "COVID App for Gurdwara",
    caption:
      "Built a supply chain management app during COVID for a local Gurdwara.",
    date: "2021",
    category: "building",
    placeholder: true,
  },

  // Competition
  {
    title: "Morgan Stanley — 1st Place",
    caption:
      "Arbitrage challenge. Manual trading and quantitative reasoning rounds.",
    date: "2025",
    category: "competition",
    image: "/photos/morgan-stanley.jpg",
    placeholder: false,
  },
  {
    title: "Optiver — 3rd/100",
    caption:
      "Options market-making challenge. Awarded by the head of Optiver's London office.",
    date: "2023",
    category: "competition",
    image: "/photos/optiver.jpg",
    placeholder: false,
  },
  {
    title: "Wintermute Crypto CTF",
    caption:
      "Self-taught Zero Knowledge Proofs and elliptic curve cryptography to compete and win.",
    date: "2024",
    category: "competition",
    image: "/photos/wintermute-ctf.jpeg",
    placeholder: false,
  },

  // Leadership
  {
    title: "Hosting Thomas Wolf & Peter Steinberger",
    caption:
      "Hugging Face CEO and Peter Steinberger at the AI Club at Imperial. Head of Data.",
    date: "2024",
    category: "leadership",
    placeholder: true,
  },
  {
    title: "Imperial Cricket Captain",
    caption:
      "Captained the team in BUCS (British Universities & Colleges Sport).",
    date: "2023 — 2025",
    category: "leadership",
    image: "/photos/cricket.jpg",
    placeholder: false,
  },

  // Events
  {
    title: "YC Startup School India",
    caption:
      "Accepted. Awarded $25k+ in credits. Bengaluru, April 2026.",
    date: "Apr 2026",
    category: "event",
    image: "/photos/yc.png",
    placeholder: false,
  },
  {
    title: "India AI Summit — With Demis Hassabis",
    caption:
      "Sat at the same table as the CEO of Google DeepMind.",
    date: "Feb 2026",
    category: "event",
    image: "/photos/Dario-Nandan.JPG",
    placeholder: false,
  },
  {
    title: "Meeting Vinod Khosla",
    caption:
      "At the India AI Summit.",
    date: "Feb 2026",
    category: "event",
    image: "/photos/vinod-khosla.jpg",
    placeholder: false,
  },
  {
    title: "With Dario Amodei",
    caption: "CEO of Anthropic, at the India AI Summit.",
    date: "Feb 2026",
    category: "event",
    image: "/photos/Dario-Nandan.JPG",
    placeholder: false,
  },
  {
    title: "Alexander Wang — Scale AI",
    caption: "Met at the India AI Summit.",
    date: "Feb 2026",
    category: "event",
    image: "/photos/Alexander-wang.jpg",
    placeholder: false,
  },
  // {
  //   title: "Fetch.ai Presentation",
  //   caption:
  //     "Presenting the AI Data Science Platform at Fetch.ai.",
  //   date: "2025",
  //   category: "event",
  //   image: "/photos/fetch-ai-presentation.PNG",
  //   placeholder: false,
  // },
  {
    title: "With Vivek Raghavan — Sarvam AI",
    caption:
      "Co-founder of Sarvam AI, building India's AI infrastructure.",
    date: "Feb 2026",
    category: "event",
    image: "/photos/Sarvam-vivek-raghavan.jpg",
    placeholder: false,
  },
];
