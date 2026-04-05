export interface BookItem {
  title: string;
  author: string;
  href?: string;
}

export interface TechnicalReadingItem {
  title: string;
  author: string;
  takeaway: string;
  href?: string;
  blogHref?: string;
}

export const books: BookItem[] = [
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    href: "https://www.navalmanack.com/almanack-of-naval-ravikant/table-of-contents",
  },
  {
    title: "The Anthology of Balaji",
    author: "Balaji Srinivasan",
    href: "https://balajianthology.com/",
  },
  {
    title: "The Network State",
    author: "Balaji Srinivasan",
    href: "https://thenetworkstate.com/",
  },
  {
    title: "Indistractable",
    author: "Nir Eyal",
    href: "https://www.youtube.com/watch?v=WtLIJwObk2M",
  },
  {
    title: "The Sovereign Individual",
    author: "James Dale Davidson & Lord William Rees-Mogg",
    href: "https://www.lopp.net/pdf/The%20Sovereign%20Individual.pdf",
  },
  {
    title: "Skin in the Game",
    author: "Nassim Nicholas Taleb",
    href: "https://philosophiatopics.wordpress.com/wp-content/uploads/2018/10/skin-in-the-game-nassim-nicholas-taleb.pdf",
  },
  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
  },
  {
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio & Aaron Courville",
  },
  {
    title: "Life Force",
    author: "Tony Robbins",
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferriss",
  },
  {
    title: "Elon Musk",
    author: "Ashlee Vance",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
  },
];

export const technicalReading: TechnicalReadingItem[] = [
  {
    title: "Scaling Laws for Neural Language Models",
    author: "Kaplan et al.",
    takeaway:
      "Empirical scaling laws that shaped how we think about training large language models. Performance scales predictably with compute, data, and parameters.",
    href: "https://arxiv.org/abs/2001.08361",
  },
  {
    title: "Meta-Harness: End-to-End Optimization of Model Harnesses",
    author: "Research paper",
    takeaway:
      "Formalises harness engineering — the scaffolding around models matters as much as the models themselves.",
  },
];
