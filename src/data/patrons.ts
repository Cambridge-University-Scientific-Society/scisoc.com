export interface PatronProfile {
  name: string;
  honors: string;
  summaryParagraphs: string[];
  tribute?: {
    title: string;
    paragraphs: string[];
  };
}

export const patronIntro =
  "The Society has Patrons, who do not have a day-to-day involvement in the Society, but have given talks to the Society and lend support where and when they can. In addition, we have a Royal Honorary Member, HRH The Duke of Kent, who is also the President of the Royal Institution of Great Britain.";

export const honoraryMember = {
  title: "Honorary Member",
  name: "HRH The Duke of Kent",
  honors: "KG GCMG GCVO",
  description:
    "Prince Edward, Duke of Kent KG GCMG GCVO (Edward George Nicholas Paul Patrick; born 9 October 1935), is a member of the British Royal Family, a grandchild of King George V. He has held the title of Duke of Kent since 1942 and is president of the Royal Institution of Great Britain.",
};

export const currentPatrons: PatronProfile[] = [
  {
    name: "Professor Dame Ottoline Leyser",
    honors: "DBE FRS",
    summaryParagraphs: [
      "Professor Dame Ottoline Leyser DBE FRS (born 7 March 1965) is a British plant biologist, Professor of Plant Development at the University of Cambridge and director of the Sainsbury Laboratory, Cambridge.",
      "The focus of her work has been plant hormones, notably auxin, and her identification of the auxin receptor solved a classic problem in biology.",
    ],
  },
  {
    name: "Sir Paul Nurse",
    honors: "FRS FMedSci HonFREng HonFBA MAE",
    summaryParagraphs: [
      "Sir Paul Maxime Nurse FRS FMedSci HonFREng HonFBA MAE (born 25 January 1949) is a British geneticist and cell biologist.",
      "He was awarded the 2001 Nobel Prize in Physiology or Medicine with Leland H. Hartwell and Richard Timothy Hunt for their discoveries of protein molecules that control the division of cells in the cell cycle.",
      "Nurse was the President of the Royal Society from 2010-2015, as well as Chief Executive and Director of the Francis Crick Institute.",
    ],
  },
  {
    name: "Professor Antony Hewish",
    honors: "FRS FInstP",
    summaryParagraphs: [
      "Professor Antony Hewish FRS FInstP (born 11 May 1924) is a British radio astronomer who won the Nobel Prize for Physics in 1974, together with fellow radio-astronomer Martin Ryle, for his work on the development of radio aperture synthesis and its role in the discovery of pulsars.",
      "He was also awarded the Eddington Medal of the Royal Astronomical Society in 1969.",
    ],
  },
  {
    name: "Professor Sir Salvador Moncada",
    honors: "FRS FRCP FMedSci",
    summaryParagraphs: [
      "Professor Sir Salvador Enrique Moncada FRS FRCP FMedSci (born 3 December 1944) is a Honduran-British physician and pharmacologist.",
      "He is the husband of Princess Marie-Esméralda of Belgium, who is a member of the Belgian Royal Family.",
    ],
  },
  {
    name: "Professor Lord Martin Rees",
    honors: "OM FRS FREng HonFMedSci FRAS",
    summaryParagraphs: [
      "Martin John Rees, Baron Rees of Ludlow, OM FRS FREng HonFMedSci FRAS (born 23 June 1942) is a British cosmologist and astrophysicist.",
      "He has been Astronomer Royal since 1995. He was President of the Royal Society from 2005-2010 and Master of Trinity College from 2004-2012.",
    ],
  },
  {
    name: "Sir Gregory Winter",
    honors: "CBE FRS FMedSci",
    summaryParagraphs: [
      "Sir Gregory Winter CBE FRS FMedSci (born 14 April 1951) is a genetic engineer and was the Master of Trinity College from 2012-2019.",
      "He is best known for developing the technology that launched a new set of highly targeted drugs based on therapeutic monoclonal antibodies.",
      "He has also founded three Cambridge-based biotech companies based on his work.",
    ],
  },
];

export const pastPatrons: PatronProfile[] = [
  {
    name: "Sir Michael Atiyah",
    honors: "OM FRS FRSE FMedSci FAA FREng",
    summaryParagraphs: [
      "Sir Michael Francis Atiyah OM FRS FRSE FMedSci FAA FREng was a British mathematician specialising in geometry. He was awarded the Fields Medal in 1966, the Copley Medal in 1988, and the Abel Prize in 2004.",
    ],
    tribute: {
      title: "Tribute to patron Sir Michael Atiyah (1929-2019)",
      paragraphs: [
        "Sir Michael Atiyah passed away in January of last year (2019). Sir Atiyah was born in London in 1929 and later grew up in Sudan and Cairo. Upon returning to England he did his national service with the Royal Electrical and Mechanical Engineers.",
        "He later undertook his studies at Trinity College, Cambridge where he was awarded his doctorate in 1955 for his thesis on 'Some Applications of Topological Methods in Algebraic Geometry'. Following his doctoral studies, Sir Atiyah worked at Princeton, University of Cambridge and University of Oxford where he became a Royal Society Research Professor and professorial fellow of St Catherine's College.",
        "In his later career he was president of the London Mathematical Society and the Pugwash Conferences on Science and World Affairs. He was also part of the Inter-Academy Panel of International Issues and the European Mathematical Society. Among other contributions he was involved in the creation of the Isaac Newton Institute for Mathematical Sciences in Cambridge (1990-1996), president of the Royal Society (1990-1995), Master of Trinity College, Cambridge (1990-1997) and the president of the Royal Society of Edinburgh (2005-2008). Some of Sir Atiyah's greatest achievements include the index theory and his work on gauge theory.",
      ],
    },
  },
  {
    name: "Sir Aaron Klug",
    honors: "OM FRS FMedSci HonFRMS",
    summaryParagraphs: [
      "Sir Aaron Klug OM FRS FMedSci HonFRMS was a Lithuanian-born British chemist and biophysicist, and winner of the 1982 Nobel Prize in Chemistry for his development of crystallographic electron microscopy and his structural elucidation of biologically important nucleic acid-protein complexes.",
    ],
    tribute: {
      title: "Tribute to Sir Aaron Klug (1926-2018)",
      paragraphs: [
        "Sir Aaron Klug was born in Lithuania in 1926. He was educated in South Africa where, at the University of Witwatersrand, he studied physics and maths, having started out in microbiology. He obtained his Master of Science at the University of Cape Town, before moving to Trinity College, Cambridge to complete his PhD in research physics.",
        "During his career, he worked with Rosalind Franklin and John Bernal, developed crystallographic electron microscopy at the MRC-LMB in Cambridge, studied the structure of transfer RNA and discovered zinc fingers and neurofibrils present in Alzheimer's disease. In 1969, he was elected a Fellow of the Royal Society, and would be President from 1995-2000. He was awarded the Nobel Prize in Chemistry in 1982. He was Director of Laboratory of Molecular Biology at Cambridge from 1986-1996 and served on the Advisory Council for the Campaign for Science and Engineering as well as on the Board of Scientific Governors at The Scripps Research Institute. He also played a part in the founding of the Wellcome Sanger Institute, a key player in the Human Genome Project. The impact of his significant contributions to crystallography and molecular and structural biology will be felt for years to come, and he will be sorely missed.",
      ],
    },
  },
  {
    name: "Professor Heinz Wolff",
    honors: "FIEE HonFRCP FRSA",
    summaryParagraphs: [
      "Professor Heinz Wolff FIEE HonFRCP FRSA was a German-British scientist, and television and radio presenter who was born in 1928. He is popularly known for his television and radio work, including the TV series The Great Egg Race.",
    ],
    tribute: {
      title: "Tribute to patron Professor Heinz Wolff (1928-2017)",
      paragraphs: [
        "Professor Heinz Wolff, a longstanding patron of SciSoc, has sadly passed away. With this short obituary, we hope you can join us in celebrating his life and many scientific achievements.",
        "Professor Wolff was a German-born British scientist who completed his undergraduate studies at University College, London. Much of his early career was spent in bioengineering. He was an honorary member of the European Space Agency (ESA) and founded the Brunel Institute for Bioengineering in 1983. His greatest scientific achievements include the invention of the gel pad electrodes used in ECGs and sending Helen Sharman to the Mir space station as scientific director and co-founder of Project Juno.",
        "During his later career, he was an Emeritus Professor at Brunel University and was best known as an inventor and TV presenter. From 1977 to 1986, he presented the Great Egg Race on BBC. He gave a talk on 'Tools for Living' in our founding year (1995-1996) and was a patron of the Society thereafter. We would like to thank Professor Heinz Wolff for his long-lasting support and contributions to the Society.",
      ],
    },
  },
  {
    name: "Sir John Gurdon",
    honors: "FRS FMedSci MAE",
    summaryParagraphs: [
      "Sir John Gurdon FRS FMedSci MAE (1933-2025) was a British developmental biologist. He was awarded the 2012 Nobel Prize in Physiology or Medicine with Shinya Yamanaka for demonstrating that a differentiated cell can orchestrate the development of an entire organism so genetically encoded information is not lost as cells differentiate.",
    ],
  },
];