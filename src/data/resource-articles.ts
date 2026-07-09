export interface ResourcePaperLink {
  title: string;
  href: string;
}

export interface ResourceArticle {
  slug: string;
  title: string;
  author: string;
  description: string;
  date: string;
  section: string;
  papers: ResourcePaperLink[];
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "predicting-organic-syntheses",
    title: "Predicting Organic Syntheses",
    author: "Krishna Amin (St Catharine's)",
    date: "September 10, 2019",
    section: "Paper Summaries",
    description:
      "An overview of model-driven synthesis prediction and the growing role of machine learning in chemical discovery.",
    papers: [
      {
        title: "Molecular Transformer Unifies Reaction Prediction and Retrosynthesis across Pharma Chemical Space",
        href: "#",
      },
      {
        title: "Molecular Transformer: A Model for Uncertainty-Calibrated Chemical Reaction Prediction",
        href: "#",
      },
    ],
  },
  {
    slug: "science-of-materials-discovery",
    title: "The Science of Materials Discovery",
    author: "Ari Shah (Trinity)",
    date: "October 18, 2021",
    section: "Scientist Spotlights",
    description:
      "A short piece on how data, simulation, and synthesis are reshaping the search for new materials.",
    papers: [
      { title: "Materials discovery with machine learning", href: "#" },
      { title: "High-throughput screening for functional materials", href: "#" },
    ],
  },
  {
    slug: "questions-in-climate-modelling",
    title: "Questions in Climate Modelling",
    author: "Maya Tan (Pembroke)",
    date: "March 2, 2024",
    section: "Committee Pieces",
    description:
      "A readable introduction to uncertainty, calibration, and interpretation in contemporary climate models.",
    papers: [
      { title: "Climate model uncertainty and interpretation", href: "#" },
      { title: "Ensemble approaches to long-term forecasting", href: "#" },
    ],
  },
];

export function getResourceArticle(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}