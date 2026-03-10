export interface ReadingItem {
  title: string;
  author: string;
  type: "article" | "paper" | "book";
  note: string;
  href?: string;
}

export const reading: ReadingItem[] = [
  {
    title: "Attention Is All You Need",
    author: "Vaswani et al.",
    type: "paper",
    note: "The paper that started the transformer revolution. Still worth re-reading every few months.",
    href: "https://arxiv.org/abs/1706.03762",
  },
  {
    title: "The Bitter Lesson",
    author: "Rich Sutton",
    type: "article",
    note: "A short essay arguing that general methods leveraging computation are ultimately the most effective in AI research.",
    href: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    type: "book",
    note: "The best reference for understanding distributed systems, databases, and the infrastructure behind modern applications.",
  },
  {
    title: "Scaling Laws for Neural Language Models",
    author: "Kaplan et al.",
    type: "paper",
    note: "Empirical scaling laws that shaped how we think about training large language models. Foundational reading for anyone in LLM research.",
    href: "https://arxiv.org/abs/2001.08361",
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    type: "book",
    note: "A collection of Naval's wisdom on wealth creation and finding happiness. Short, dense, and endlessly re-readable.",
  },
];
