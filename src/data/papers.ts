export interface Paper {
  title: string;
  authors: string;
  venue: string;
  type: "Thesis" | "Publication" | "Reference";
  note: string;
  href?: string;
}

export const papers: Paper[] = [
  {
    title: "AI for Fetal Heart Ultrasound: MobileUNet, AutoFHR, and L-FUSION",
    authors: "Abhivir Singh",
    venue: "MEng Thesis, Imperial College London",
    type: "Thesis",
    note: "Developing lightweight deep learning models for automated fetal heart analysis in ultrasound. Targeting deployment on portable devices for low-resource clinical settings.",
  },
  {
    title: "MEGA: Multilingual Evaluation of Generative AI",
    authors: "Abhivir Singh et al.",
    venue: "2024",
    type: "Publication",
    note: "Comprehensive benchmarking study evaluating large language models across 70+ languages on diverse NLP tasks.",
  },
  {
    title: "Attention Is All You Need",
    authors: "Vaswani et al.",
    venue: "NeurIPS 2017",
    type: "Reference",
    note: "The paper that started the transformer revolution. Still worth re-reading every few months.",
    href: "https://arxiv.org/abs/1706.03762",
  },
  {
    title: "U-Net: Convolutional Networks for Biomedical Image Segmentation",
    authors: "Ronneberger, Fischer, Brox",
    venue: "MICCAI 2015",
    type: "Reference",
    note: "Foundational architecture for medical image segmentation. Directly relevant to my thesis work on fetal ultrasound.",
    href: "https://arxiv.org/abs/1505.04597",
  },
  {
    title: "MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications",
    authors: "Howard et al.",
    venue: "arXiv 2017",
    type: "Reference",
    note: "Depthwise separable convolutions for efficient inference. Key to deploying models on portable ultrasound devices.",
    href: "https://arxiv.org/abs/1704.04861",
  },
];
