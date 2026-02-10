export interface Paper {
  title: string;
  description: string;
  authors: string;
  status: string;
  link?: string;
}

export const papers: Paper[] = [
  {
    title: "AI for Fetal Heart Ultrasound: MobileUNet, AutoFHR, and L-FUSION",
    description:
      "MEng thesis developing lightweight deep learning models for automated fetal heart analysis in ultrasound. MobileUNet performs real-time cardiac segmentation, AutoFHR estimates fetal heart rate from M-mode images, and L-FUSION provides landmark-guided navigation for sonographers. Targeting deployment on portable devices for low-resource clinical settings.",
    authors: "Abhivir Singh",
    status: "Ongoing — MEng Thesis, Imperial College London",
  },
  {
    title: "MEGA: Multilingual Evaluation of Generative AI",
    description:
      "Comprehensive benchmarking study evaluating large language models across 70+ languages on diverse NLP tasks including question answering, summarisation, and natural language inference. Reveals significant performance disparities across language families and highlights challenges in multilingual generative AI.",
    authors: "Abhivir Singh et al.",
    status: "2024",
    link: "#",
  },
];
