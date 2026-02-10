export interface ReadingItem {
  title: string;
  author: string;
  type: "article" | "paper" | "book";
  description: string;
  link?: string;
}

export const reading: ReadingItem[] = [
  {
    title: "Attention Is All You Need",
    author: "Vaswani et al.",
    type: "paper",
    description:
      "The paper that started the transformer revolution. Still worth re-reading every few months.",
    link: "https://arxiv.org/abs/1706.03762",
  },
  {
    title: "The Bitter Lesson",
    author: "Rich Sutton",
    type: "article",
    description:
      "A short essay arguing that general methods leveraging computation are ultimately the most effective in AI research.",
    link: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    type: "book",
    description:
      "The best reference for understanding distributed systems, databases, and the infrastructure behind modern applications.",
  },
  {
    title: "Scaling Laws for Neural Language Models",
    author: "Kaplan et al.",
    type: "paper",
    description:
      "Empirical scaling laws that shaped how we think about training large language models. Foundational reading for anyone in LLM research.",
    link: "https://arxiv.org/abs/2001.08361",
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    type: "book",
    description:
      "A collection of Naval's wisdom on wealth creation and finding happiness. Short, dense, and endlessly re-readable.",
  },
];
