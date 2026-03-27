export interface ReadingItem {
  title: string;
  author: string;
  type: "article" | "paper" | "book";
  note: string;
  href?: string;
}

export const reading: ReadingItem[] = [
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
    note: "Empirical scaling laws that shaped how we think about training large language models.",
    href: "https://arxiv.org/abs/2001.08361",
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    type: "book",
    note: "Naval's wisdom on wealth creation and happiness. Short, dense, endlessly re-readable.",
  },
];
