export interface HighlightItem {
  title: string;
  caption: string;
  date: string;
  category: "academic" | "competition" | "event" | "leadership" | "building";
  image?: string;
  imagePosition?: string;
  placeholder: boolean;
  href?: string;
}

export const highlights: HighlightItem[] = [
  // 1. Imperial College London
  {
    title: "Imperial College London",
    caption:
      "MEng Computing (AI and Machine Learning). First Class Honours, and four rising years: 63.7, 67.7, 71.9, 73.3.",
    date: "2022–2026",
    category: "academic",
    image: "/photos/imperial.jpg",
    placeholder: false,
    href: "/blog/imperial",
  },
  // 2. IIT Delhi
  {
    title: "IIT Delhi",
    caption:
      "JEE Advanced, All India Rank 723. A year of Biochemical Engineering and Biotechnology, then I left to start again at Imperial and study AI.",
    date: "2021–2022",
    category: "academic",
    image: "/photos/IITD.JPG",
    placeholder: false,
  },
  // 3. Cambridge ENGAA
  {
    title: "Cambridge ENGAA: 9.0/9.0",
    caption:
      "Perfect score. Unconditional offer from Trinity College, Cambridge University.",
    date: "2021",
    category: "academic",
    image: "/photos/trinity-college-cambridge.jpg",
    placeholder: false,
  },
  // 4. Morgan Stanley
  {
    title: "Morgan Stanley: 1st Place",
    caption:
      "Arbitrage challenge. Manual trading and quantitative reasoning rounds.",
    date: "2025",
    category: "competition",
    image: "/photos/morgan-stanley.jpg",
    placeholder: false,
  },
  // 8. YC Startup School India
  {
    title: "YC Top 25: Dinner with YC Partners",
    caption:
      "YC Startup School in Bengaluru. Top 25 of 25,000 builders picked for the dinner with YC partners Jared Friedman, Jon Xu, Ankit Gupta, and Arnav Sahu (Peak XV).",
    date: "Apr 2026",
    category: "event",
    image: "/photos/yc.png",
    placeholder: false,
  },
  // 5. Wintermute
  {
    title: "Winner: Wintermute Crypto CTF",
    caption:
      "Self-taught Zero Knowledge Proofs and elliptic curve cryptography to compete and win.",
    date: "2026",
    category: "competition",
    image: "/photos/wintermute-ctf.jpeg",
    placeholder: false,
    href: "https://www.linkedin.com/posts/matt-styles-b69a33108_crypto-internship-digitalassets-activity-7399061077201670144-PxiO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADM8CZ8BYxi0Ev43GbKeYYVdrJkTHLraUPA",
  },
  // 6. Wall-E Robot
  {
    title: "Built and Programmed a Robot Wall-E from Scratch",
    caption:
      "Designed, built, and programmed a functioning Wall-E robot from the ground up.",
    date: "2025",
    category: "building",
    image: "/photos/robot-photo.jpg",
    placeholder: false,
  },
  // 9. Optiver
  {
    title: "Optiver: 3rd/100",
    caption:
      "Options market-making challenge. Awarded by the head of Optiver's London office.",
    date: "2023",
    category: "competition",
    image: "/photos/optiver.jpg",
    imagePosition: "top",
    placeholder: false,
  },
  // 10. UK AI Agent Hackathon
  {
    title: "UK AI Agent X Openclaw Hackathon Winner",
    caption:
      "Built FetchFund, an automated crypto trading engine on Fetch.ai agents.",
    date: "2025",
    category: "competition",
    image: "/photos/uk-ai-agent-hack.jpeg",
    placeholder: false,
  },
  // 11. Cricket
  {
    title: "Imperial Cricket Captain",
    caption:
      "Led the team in BUCS. Scored a 100, earned the baggy blue cap. Batting avg: 81.",
    date: "2023–2025",
    category: "leadership",
    image: "/photos/cricket.jpg",
    placeholder: false,
    href: "/blog/cricket",
  },
  // 12. Hosting Thomas Wolf & Peter Steinberger
  {
    title: "Hosting Thomas Wolf & Peter Steinberger",
    caption:
      "Thomas Wolf, co-founder of Hugging Face, and Peter Steinberger at the AI and Blockchain Club at Imperial. Co-founder and Head of Data.",
    date: "2026",
    category: "leadership",
    image: "/photos/peter-steinberger.jpeg",
    imagePosition: "right",
    placeholder: false,
  },
  // 13. Technothlon
  {
    title: "Technothlon: All India Rank 14",
    caption:
      "Organised by IIT Guwahati. All India Rank (AIR) 14 out of 50,000. Made friends I reconnected with at IIT.",
    date: "2020",
    category: "academic",
    image: "/photos/technothlon.jpg",
    placeholder: false,
  },
  // Events: photos but lower priority
  {
    title: "Fetch.ai Presentation",
    caption:
      "Presenting the AI Data Science Platform at Fetch.ai.",
    date: "2025",
    category: "event",
    image: "/photos/fetch-ai-presentation.jpg",
    placeholder: false,
  },
  {
    title: "India AI Summit: With Demis Hassabis & Dario Amodei",
    caption:
      "Sat at the same table as the CEOs of Google DeepMind and Anthropic.",
    date: "Feb 2026",
    category: "event",
    image: "/photos/Dario-Nandan.JPG",
    placeholder: false,
  },
  {
    title: "Vinod Khosla",
    caption:
      "At the India AI Summit.",
    date: "Feb 2026",
    category: "event",
    image: "/photos/vinod-khosla.jpg",
    placeholder: false,
  },
  {
    title: "Alexander Wang, Scale AI",
    caption: "Met at the India AI Summit.",
    date: "Feb 2026",
    category: "event",
    image: "/photos/Alexander-wang.jpg",
    placeholder: false,
  },
  {
    title: "Vivek Raghavan, Sarvam AI",
    caption:
      "Co-founder of Sarvam AI, building India's AI infrastructure.",
    date: "Feb 2026",
    category: "event",
    image: "/photos/Sarvam-vivek-raghavan.jpg",
    placeholder: false,
  },
];
