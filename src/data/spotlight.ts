export interface ArticleDescription {
    focus: string;
    description: string;
    reasons: string;
    advice: string;
}

export interface Article {
    title: string; 
    author: string; 
    date: string; 
    references: string[][];
    description: ArticleDescription; 
    pictures?: string[];
}

export const spotlightArticles: Article[] = [
  {
    title: "SciSoc Spotlight Issue 1",
    author: "Dr Gareth Steed",
    date: "31 August 2020",
    references: [],
    description: {
      focus: "Circadian signal transduction in plants.",
      description: "I am currently working as a post-doctoral research associate looking at the role of the bZIP transcription factors in transducing sugar signals to the Arabidopsis circadian clock. In plants, the circadian clock is important for synchronising biochemical and physiological processes with the external light-dark cycle. This is important because the correct synchronisation of internal and external rhythms leads to an increase in yield traits. We know that the major product of photosynthesis, sucrose, relays metabolic timing information to the central circadian oscillator but we are unsure of the precise mechanism. The aim of my project is to fully elucidate this signalling pathway and to understand the role of the bZIPs. Our hope is that a better understanding of this pathway will allow us to identify potential breeding targets in crops and thus contribute towards an increase in yields which is desperately needed.", 
      reasons: "Prior to starting my PhD, I spent 4 years working as a secondary school science teacher. Whilst I thoroughly enjoyed being in a classroom, I missed the intellectual stimulation that comes from doing lab-based research. As an undergraduate studying at the University of Surrey, I was fortunate to have lectures specifically on the circadian clock which I found fascinating and when the opportunity came up to complete a PhD investigating the wheat circadian clock at Cambridge I jumped at the chance. I have continued onto a post-doc because I enjoy being in the lab and the problem solving that comes with research, things often don’t work!",
      advice: "I learnt that I enjoyed being in the lab during my undergraduate degree by spending my third year on industrial placement with a large pharmaceutical company. I think for any student thinking of a career in research if you get the opportunity to spend time doing a work placement do it because you will learn what you like and (almost more importantly) what you don’t like. When it comes to research it is important to follow your interests; when things aren’t working it’s the intrinsic interest in what you’re doing that keeps you going. Finally, don’t be afraid to get things wrong. Research can be super frustrating at times, you are doing something where you don’t know the answer and often you don’t even know how to get to the answer but that makes it all the more satisfying when you do get things right.", 
    },
    pictures: [
      "/spotlight/1-1.jpg",
      "/spotlight/1-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 2",
    author: "Professor Rachel Oliver",
    date: "2020",
    references: [],
    description: {
      focus: "Light-emitting semiconductor materials",
      description: "My research interests focus on the characterization and exploitation of nanoscale (very small!) structures in semiconductor materials, particularly gallium nitride (GaN). The broad aim of my work is to achieve improved performance in GaN-based electronic and optoelectronic devices and to develop and implement novel device concepts.", 
      reasons: "I’ve always been really interested in the properties of the materials around me, and what causes them. As a child, I used to drive my Mum mad with questions like “Why isn’t milk transparent?” and “Why does metal feel colder than stone on a snowy day?”. Doing a degree in Materials Science in Engineering, answered some of my questions, but also opened up loads of others, so carrying on to research Materials Science further struck me as an exciting prospect.", 
      advice: "It’s important to focus on the questions that really interest you! Research can be tough and frustrating at times, but if you really care about the questions you’re trying to answer it will help you stay the course. ",
    },
    pictures: [
      "/spotlight/2-1.png",
      "/spotlight/2-2.png",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 3",
    author: "Dr Matthew J Mason",
    date: "28 September 2020",
    references: [],
    description: {
      focus: "Comparative physiology: structure, function and evolution of ear in vertebrates.", 
      description: "I am engaged in a number of different research areas at the present time. One of them is looking at the otoconial masses within the inner ears of frogs, a study which evolved from a part 2 PDN project, worked on by one of my third-year undergraduates. The otoconial masses are dense aggregates of crystals which, in humans, help to detect the motion of the body and contribute to balance. In frogs, the relatively much larger otoconial masses may be used in the detection of low-frequency ground vibrations. If so, they would be analogous to the enormous middle ear ossicles found in the golden moles of southern Africa, which I have also worked on. This is because a large, dense structure in the ear can in effect act as an inertial seismometer, like we would use to detect earthquakes. The research I’m currently undertaking on this involves looking at the morphology of the otoliths in a wide range of frogs from around the world, based on 3D reconstructions from micro-CT scans. We are testing several hypotheses, including the notion that the otoconial masses would be larger in burrowing frog species than in others.", 
      reasons: "I was a veterinary student as an undergraduate, but the anatomical and physiological adaptations of unusual animals always fascinated me. This fascination grew in my years at university; I began to relish the idea of exploring this further and becoming an expert in some small area, finding out new things and being the one to tell the world about them. Diverting into a PhD was the way to achieve this, and having left my veterinary career path I never looked back. My PhD in Cambridge and later my postdoctoral years in California were spent almost exclusively on research, but having returned to Cambridge in 2001 I began to do much more teaching. Now, I very much enjoy the mixture of teaching and research which forms the two sides of the academic coin. Teaching gives you a wider context in which to place your inevitably narrow research area: it’s too easy to lose sight of that bigger picture! Conversely, it is very important to be able to tell science students about how research is actually conducted, in practice as well as in principle, illustrating this with examples from your own career and thus being better able to guide them. What I love about my job now is that I can start the morning giving a lecture on action potentials, immerse myself in some 3D reconstructions of armadillo ears, run a practical class on respiration, review a research paper on naked mole-rats and end the day discussing sap ascent in plants with my supervisees. And the next day will be completely different!", 
      advice: "The most important thing is to choose your research area very carefully. Especially in academic research, carving out a career is difficult. The bottleneck is after the postdoctoral stage, when you are looking for an independent academic lectureship position. What I did not realise until I entered that world is how dominated it is by what kind of scientific research is currently trendy. If you’re not on the right bandwagon you will find it much more difficult to get research grants, and being able to access the big-money grants is effectively essential now for research careers since the universities desperately need the associated income. People outside the system still think it’s all about ‘publish or perish’. It isn’t – it’s about bringing in research funding, or perish. Very often that means that you need to be doing something with an immediate and demonstrable impact on society. Think very carefully before you take that PhD in an interesting but esoteric area of science which might not be attractive to funding bodies later in your career! This is terribly wrong and terribly short-sighted of course, but sadly this is where we are. My second piece of advice is to try to get as much teaching experience as you can: in your early years this may mean supervising or demonstrating in practical classes. You learn so much more from teaching a subject than you did when you took those undergraduate exams yourself. You’ll find that you become better at communicating (vital for writing papers and giving lectures – including job interviews), you’ll retain a better grasp on your subject as a whole and where your research fits into that, and you’ll gain ideas from cognate disciplines that you can then productively apply back into your own work. A single-minded focus on your own narrow research area can sometimes lead to tremendous discoveries, but more often it leads to intellectual sterility. Teaching keeps your mind open.",
    },
    pictures: [
      "/spotlight/3-1.jpg",
      "/spotlight/3-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 4",
    author: "Dr Marta Correia",
    date: "12 October 2020",
    references: [],
    description: {
      focus: "Neuroimaging images.", 
      description: "My research work falls broadly in the field of Magnetic Resonance Imaging (MRI) and its applications to Neuroscience. MRI is a non-invasive medical imaging technique which allows us to study both brain anatomy and function in-vivo. So we can for example study how the brain changes as a particular pathology progresses, or how different areas of the brain engage as we perform a particular motor or cognitive task. My work mainly focuses on the development of data analysis methods for quantification of MRI images. For example, one of my recent projects used two different MRI modalities and machine learning methods to develop diagnostic models for differentiating Parkinson’s disease from atypical forms of Parkinsonism. There is a pressing need for reliable biomarkers to differentiate these disorders, not only to aid diagnosis in early cases, but to monitor progression in trials and to support ante mortem studies of pathogenesis.", 
      reasons: "My brother started his PhD in Astrophysics when I was 14, and seeing how much joy he got out of his work was what first made me think about the possibility of a career in research. Later on, while at University, I had the opportunity to work on two different research projects, applying my skills in Physics and Engineering to problems in Medicine. I was fascinated by the interdisciplinary nature of the work, and thoroughly enjoyed learning about a new topic in a practical context, outside the formality of lecture halls. After graduation, I decided to do a PhD in Medical Physics to continue exploring the aspects of research I had so enjoyed as an undergraduate, and I have never looked back. I love the flexibility of the work, and the fact that I am continuously learning about new things.",
      advice: "Get as much research experience as you can as an undergraduate by doing research placements over the summer and a research project in your final year at University. Not only will it look good on your PhD applications, it will also increase your chances of finding the right research topic for you. Depending on your topic of study, there are also some PhD programs which offer a rotation year, where you undertake 2 or 3 research projects in different topics (sometimes even different departments) before you finally settle on a PhD project.",
    },
    pictures: [
      "/spotlight/4-1.jpg",
      "/spotlight/4-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 5",
    author: "Georgeos Hardo",
    date: "21 October 2020",
    references: [],
    description: {
      focus: "Systems biology",
      description: "I’m interested in the effects of ageing, toxin anti-toxin (TA) systems and persistence in bacterial systems such as B. subtilis. Ageing is of interest because for a long time we thought that organisms which divide (supposedly) symmetrically were immortal. We now know that this is not the case. There is evidence to suggest that persistence, also known as multi-drug tolerance, has some role to play in the ageing process. My research focuses specifically on TA systems and their role in these phenomena. I mainly use a combination of modelling and numerical simulation techniques, synthetic biology tools, and high-throughput time-lapse microscopy in microfluidic devices such as mother machines to study these systems. I mainly use modelling and numerical simulation techniques, synthetic biology tools, and high-throughput time-lapse microscopy in microfluidic devices to study ageing, toxin-antitoxin systems and persistence in bacterial systems.",
      reasons: "As long as I can remember, I have always wanted to be a scientist. I fell in love with the act of doing science when I started doing undergraduate research. I liked having the freedom to learn whatever I wanted without the pressure of exams. Because my interests still span a broad range of disciplines, I decided to pursue this further in the form of a PhD. I have been really fortunate to end up in a lab which supports and encourages learning across both the applied and theoretical aspects of the research which I am interested in.",
      advice: "Do not think that you are restricted to a specific scientific domain purely because of your previous undergraduate studies. As someone who came from a chemical engineering background, but was still interested in biological sciences, I was able to find and carve out a niche where I can usefully apply what knowledge I already had while being in an environment allowing me to learn and fill in the gaps required to do the research I’m interested in. One book which I would thoroughly recommend to any aspiring researcher is Letters to a Young Scientist by E. O. Wilson."
    },
    pictures: [
      "/spotlight/5-1.jpg",
      "/spotlight/5-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 6",
    author: "Dr Martin Welch",
    date: "26 October 2020",
    references: [],
    description: {
      focus: "Microbial physiology and metabolism.",
      description: "Our main aim is to understand better the physiology and metabolism of a nasty opportunistic human pathogen called Pseudomonas aeruginosa. Most people have never heard of it, but it has the dubious accolade of having recently been designated by the WHO as a critical priority pathogen against which new antimicrobial interventions are urgently needed. We try to identify weak points in the biology of the organism that can be targeted by antimicrobial agents. A particular focus of the lab is to look into how cells within a population communicate with one another using chemical signals, and what they eat. It turns out that by blocking these areas of the bug’s physiology, it either dies or becomes much less harmful. We try to identify weak points in the physiology and metabolism of Pseudomonas aeruginosa that can be targeted by antimicrobial agents, including how cells communicate and what they eat.",
      reasons: "So what drew me into this area of research? I’d like to claim a childhood passion or suchlike, but the reality is that like any young boy, I preferred tree climbing at an early age, and later, as a teenager, the opposite sex. In fact, it was largely the latter that determined my career path. One cannot underestimate the impact that domestic considerations have on career trajectories, and if you want a nice, balanced life, this is perfectly reasonable. Anyway, from my PhD onwards I became fascinated by how bugs sense and respond to the world around them. My career path has allowed me to live in other countries for extended periods, while, at the same time, also engaging in some really interesting Science.",
      advice: "If you never want another dull moment again, get your brain in gear and get thinking. If your main goal in life is to see how United do in the match this weekend, you’re not cut out for a life in Science. A 9-5 job it is not: you have to be genuinely enthused by the world around you, and have genuine curiosity, ideally with a well-stocked bookshelf. However, if you go to bed thinking about how things work, this may be the job for you. For me, the journey is as rewarding as the destination, and I never get up on a morning dreading the day ahead; quite the opposite, every day is an amazing day. What a privilege!"
    },
    pictures: [
      "/spotlight/6-1.png",
      "/spotlight/6-2.png",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 7",
    author: "Dr Jerome Neufeld",
    date: "2 November 2020",
    references: [],
    description: {
      focus: "Fluid dynamics of the Earth and other planetary bodies.",
      description: "I’ve always liked working on a diverse range of topics that use the skills I’ve developed. Currently, with my group I’m working in three broad areas: the dynamics of ice sheets and sea ice in the polar regions, the geological storage of CO2, and the early evolution of planetary bodies including how magma oceans freeze and how planetesimals generate their magnetic fields. The global climate crisis presents an immediate scientific challenge. An outstanding current question is how ice sheets connect to the porous sediments on which they often rest, and how changing that subglacial environment might lead to the loss of ice. I’m using ideas developed for flow in porous rocks to understand how water moves around beneath glaciers and lubricates their flow. We are also studying how the structure of porous rocks influences where CO2 flows when it is injected and whether it will be stably trapped, how ice forms in polar oceans, and how magma crystallises within the Earth. On a larger planetary scale, we think many bodies began with a hot surface magma ocean and only later cooled and crystallised to make the planetary surfaces we observe today. On the Moon, we’re exploring whether this process may have led to the difference in crustal thickness between the near and far sides. I study ice sheets and sea ice, geological CO2 storage, and the early evolution of planetary bodies using fluid dynamics.",
      reasons: "I’ve always wanted to be an explorer of one kind or another. I enjoy travelling to new places to see and measure new and interesting puzzles in the field, and I find there’s a great allure to being able to explore the new and exciting research questions I find most compelling.",
      advice: "Ask lots of questions. When we all start out in our first degrees we’re still very much being trained in techniques and approaches. Those skills are invaluable, but as a research scientist, the ability to ask insightful questions to which those skills can be applied is what really sets excellent scientists apart. The only way to get better at asking questions is to be curious about everything you study, see and do."
    },
    pictures: [
      "/spotlight/7-1.jpeg",
      "/spotlight/7-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 8",
    author: "Alexander P. Fellows",
    date: "9 November 2020",
    references: [],
    description: {
      focus: "Vibrational nanospectroscopy and microscopy of biosubstrate surfaces and molecular films.",
      description: "I utilise spectroscopic techniques to selectively probe surfaces of biological or biologically relevant substrates. The two main techniques I use are Atomic Force Microscopy Nano-IR Spectroscopy, which can correlate spectroscopic measurements to physical properties of the surface, and Sum-Frequency Generation spectroscopy, a non-linear optical process that achieves sub-monolayer resolution and is entirely surface specific. A recent project used these techniques to analyse human red blood cells from patients with sickle cell disease. The aim is to elucidate the causes of increased cell adhesion, with the ultimate goal of leading to potential treatments that can prevent vaso-occlusion crises. I use AFM Nano-IR and Sum-Frequency Generation spectroscopy to study biological surfaces, including red blood cells from patients with sickle cell disease.",
      reasons: "Science is a history lesson. Each year, we study more topics covering content that takes us closer and closer to the present day, but never quite reaching it. What fascinates me, however, is not learning about the past discoveries and breakthroughs of our academic forebears but surpassing this inspirational work and exploring the unknown. Some of the greatest achievements of our species have come from breaking perceived boundaries and asking the plain and simple question of Why? My decision to pursue research was due to this fascination of exploring the unknown and continuing along the path of mental stimulation that is impossible to replicate elsewhere.",
      advice: "The fundamental question that you should ask yourself if you are considering doing a PhD is not Am I cut out for it? or Will this help me with…?, but rather Why am I considering this? In order for the relationship between you and your research to be fruitful, you need to be both patient and invested. Interest and excitement are the key. Ask yourself why you would be continuing into research and if the answer is not related to satisfying or arousing your interest, you may find yourself spending years of your life only to find out that this path is not for you."
    },
    pictures: [
      "/spotlight/8-1.jpg",
      "/spotlight/8-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 9",
    author: "Dr Oliver Shorttle",
    date: "2020",
    references: [],
    description: {
      focus: "Being non-specialist.",
      description: "With the help and collaboration of students and colleagues across the University and beyond, we are studying the processes that lead to habitable and inhabited planets. From the assembly of planets around young stars, to their evolution into temperate rocky worlds, we employ astrophysical and geochemical tools to understand planetary evolution.",
      reasons: "I love attempting, and in many cases failing, to solve the innumerable puzzles presented by the natural world. The process of discovery is its own reward and I have always felt this about learning.",
      advice: "Try and remember that research is a creative discipline."
    },
    pictures: [
      "/spotlight/9-1.jpg",
      "/spotlight/9-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 10",
    author: "Dr Chris Smith",
    date: "2020",
    references: [],
    description: {
      focus: "RNA molecular biology.",
      description: "My lab focuses on the molecular mechanisms and consequences of alternative pre-mRNA splicing. Alternative splicing allows individual genes to produce more than one mRNA, often encoding functionally distinct protein isoforms. We investigate its regulation in vascular smooth muscle cells and the molecular mechanisms that drive this programme, involving various RNA binding proteins.",
      reasons: "I just carried on doing what interested me. At the end of my BSc in Biochemistry, it seemed clear that a career close to the molecular biosciences would involve a PhD first. I enjoyed undergraduate lectures on the biochemistry of muscle contraction, carried out PhD research on proteins that confer calcium regulation to the actomyosin interaction, and then decided to learn molecular biology. Postdoctoral research in the USA led to six years at Harvard Medical School before a job brought me back to Cambridge.",
      advice: "Experiments don’t always work out how you expected the first time, so you need to be resilient and tenacious. Be open-minded about research questions and career possibilities. Go to research seminars unrelated to your own interests, and remember that there are many rewarding research and research-related careers outside academia."
    },
    pictures: ["/spotlight/10-1.png"]
  },
  {
    title: "SciSoc Spotlight Issue 11",
    author: "Dr Chris Truscott",
    date: "2020",
    references: [],
    description: {
      focus: "Powder X-ray diffraction and chemical crystallography.",
      description: "As part of Chemical Crystallography, we are interested in developing new insights and tools to study the structure of crystalline materials. At the moment, I particularly focus on two-dimensional layers of molecules on graphite. I use X-ray and neutron scattering techniques to study the structure and dynamics of these systems. Hopefully, this will allow us to design better two-dimensional molecular materials.",
      reasons: "I have always been interested in discovering new things and this was a major driving force behind my choice of science at university. This prompted me to pursue a PhD in Chemistry. In my current position, I have a great mix of lab work and desk work as well as different challenges every day.",
      advice: "I will pass on the advice a potential PhD supervisor gave me: have patience. Research is full of dead-ends and false starts and whilst that can be pretty demoralising sometimes, with a bit of patience and hard work it will be very satisfying."
    },
    pictures: [
      "/spotlight/11-1.png",
      "/spotlight/11-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 12",
    author: "Nick Taylor",
    date: "2020",
    references: [],
    description: {
      focus: "Mathematical epidemiology, studying crop disease.",
      description: "I’m currently working on a project about the evolution of pathogen resistance to disease treatments. Generally, we control crop disease using disease-resistant cultivars and fungicide treatments. I use modelling to try to understand how the choice of disease control affects the rate at which pathogens evolve resistance to that choice of control.",
      reasons: "I wasn’t really expecting to go into research when I was starting my undergraduate degree. However, once I got into third and fourth years I elected to do research projects in place of yet more exams. I really enjoyed the projects and it made me realise how interesting and rewarding research can be. I really enjoy being able to apply the skills I developed in my undergraduate degree to new problems.",
      advice: "If you get the chance to do a research project in your degree or as a summer project, go for it. It will be the best way to establish whether you might enjoy that style of work. It doesn’t necessarily commit you to a life of academia, so if you enjoy your subject then definitely consider it."
    },
    pictures: [
      "/spotlight/12-1.jpg",
      "/spotlight/12-2.png",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 13",
    author: "Dr Emma Cahill",
    date: "2020",
    references: [],
    description: {
      focus: "Neuroscience.",
      description: "In my research, I address the brain mechanisms underlying experience of drugs of abuse, appetitive rewards and memories of fear. More recently, I have become interested in the relationship of fear and anxiety, and how the two may be supported by neurochemically and anatomically distinct mechanisms.",
      reasons: "I really enjoyed my first experience of working in a lab as an undergraduate Natural Sciences student. It opened my eyes to how actually doing the science was more interesting and engaging than just being told about it in lectures. I had thought I wanted to be a science teacher, but at University I saw that lecturers could teach about things they were specifically interested in and that changed as research developed.",
      advice: "Be flexible and realistic. Don’t go into research for respect or money, or because you don’t know what to do next. It is an extremely competitive line of work, so become an opportunist, develop a thick skin for rejection, learn how to motivate yourself and keep a balanced life. Explore what interests you, read often and don’t be afraid to ask questions."
    },
    pictures: [
      "/spotlight/13-1.png",
      "/spotlight/13-2.png",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 14",
    author: "Alice McDowell",
    date: "2020",
    references: [],
    description: {
      focus: "Molecular biology and parasitology.",
      description: "I work on African trypanosomes, single-celled eukaryotic parasites that cause sleeping sickness in humans and diseases of livestock. The parasites constantly switch the proteins expressed on their surfaces, making it difficult to design drugs to target them. I am studying a family of invariant surface proteins to discover their role, whether they are essential for parasite survival, and whether they are found consistently across trypanosomes from different places.",
      reasons: "Before my PhD, I did Natural Sciences in Cambridge, and my favourite part of the degree was my third-year research project on tobacco plants and their interactions with parasites and symbionts. I also did a summer project in the Biochemistry department, so I knew that I enjoyed being in the lab and having the freedom to schedule my experiments. I was keen to work on a project that seemed worthwhile scientifically and could lead to real-life benefits for people.",
      advice: "Dive in and try to find out what a particular field is like. Go to local conferences or seminars, even if you do not understand everything, and contact academics who might host you for a project. Research skills are different from what you are examined on at undergraduate level. There are lots of routes into research, including a research master’s or research assistant job, so don’t be discouraged if you don’t get a PhD offer straight away."
    },
    pictures: [
      "/spotlight/14-1.jpg",
      "/spotlight/14-2.png",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 15",
    author: "Dr Jingwei Zeng",
    date: "2020",
    references: [],
    description: {
      focus: "Intracellular antibody receptor TRIM21: role and function.",
      description: "My PhD topic focused on the role of the intracellular antibody receptor TRIM21 in antiviral immunity and its molecular mechanisms. Antibodies can be carried into cells during infection by viruses and intracellular bacteria. My projects investigated naturally occurring missense mutations in TRIM21 and the molecular mechanisms by which TRIM21 is regulated and activated upon detection of virus-antibody complexes.",
      reasons: "I have long had an interest in viruses and how they interact with their host. The Cambridge pre-clinical medicine course gave me the necessary theoretical knowledge, and a successful Part II project made me decide that I wanted to pursue further research. I enjoyed formulating research questions, designing and performing experiments and getting first-hand results. I joined Leo James’s group at the MRC Laboratory of Molecular Biology because of its interesting project, friendly group dynamic, modern facilities and strong support services.",
      advice: "Make sure research is something you truly enjoy before embarking on a lengthy PhD. Get involved in shorter-term research such as a summer, Part II or master’s project. Don’t be afraid to step outside your comfort zone, but plan ahead and research funding options. Who you work with is as important as what you do, so meet potential supervisors if possible."
    },
    pictures: [
      "/spotlight/15-1.jpg",
      "/spotlight/15-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 16",
    author: "Emily Staricoff",
    date: "2021",
    references: [],
    description: {
      focus: "Clinical biochemistry and functional neuroscience.",
      description: "I am doing a PhD researching the neurocircuitry surrounding hypoglycaemia. People using insulin to treat diabetes have an increased risk of experiencing hypoglycaemia. Over time, they can gradually stop realising that their blood sugar is falling, until it becomes dangerously low. This is termed hypoglycaemia-associated autonomic failure, and I hope my research will help solve some of this puzzle.",
      reasons: "I decided to do a PhD because it represents a unique opportunity to delve deeply into a topic of interest. Being able to pursue your own research ideas is very rewarding. I was also keen to pursue research in an area where I could see the direct real-world clinical impact. It is a privilege to be part of such an influential department, surrounded by inspiring scientists, and I enjoy the variety that practical lab work brings to the day.",
      advice: "Science is not an easy route, but it is certainly rewarding. Find a broad area of research that you are passionate about, read the websites of related departments, and say yes to experiences you are offered. Don’t be afraid to try different types of research before choosing one. Perseverance is key, and honesty and openness will get you far."
    },
    pictures: [
      "/spotlight/16-1.jpeg",
      "/spotlight/16-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 17",
    author: "Dr Stephanie Smith",
    date: "2021",
    references: [],
    description: {
      focus: "Molecular modelling of organic molecules and teaching.",
      description: "As a departmental teaching fellow, my efforts are devoted to undergraduate teaching. I lecture on Aromatic and Enolate Chemistry, Aromatic Heterocycles and Medicinal Chemistry, and demonstrate in organic and physical chemistry laboratories. I am also a bye-fellow and Director of Studies for Chemistry, and supervise several chemistry courses.",
      reasons: "I love teaching and helping students to understand and enjoy their studies and reach their full academic potential. This is especially rewarding at Cambridge, where students are friendly, enthusiastic and keen to learn. I also enjoy learning and am always excited to learn about new areas of chemistry or see familiar areas from new perspectives.",
      advice: "Follow your dreams, they know the way. Don’t be put off by challenges, setbacks, or not being able to see how to reach a particular role. Take one step at a time, seek advice and support from others, play to your own strengths, and you may end up surprising yourself."
    },
    pictures: [
      "/spotlight/17-1.jpg",
      "/spotlight/17-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 18",
    author: "Dr Tina Potter",
    date: "8 February 2021",
    references: [],
    description: {
      focus: "High-energy physics.",
      description: "I am searching for signs of new particles that may briefly form in the high energy proton-proton collisions at the Large Hadron Collider. My research focuses on the design of novel and sensitive searches for new physics, such as Supersymmetry, using the ATLAS detector. I am searching for signs of new particles in high-energy proton-proton collisions at the Large Hadron Collider using the ATLAS detector.",
      reasons: "For me, it's simply my personal drive to understand the as-yet unexplained Dark Matter in our universe. Ever since I learned the huge number of open questions we still have about fundamental aspects of our universe, I felt a strong need to contribute and help find the missing pieces of the puzzle.",
      advice: "Research can all too often have a narrow focus as we try to solve the day-to-day problems to reach our final goals. My advice would be to keep an eye on what is happening in your wider field to understand the bigger picture and put time aside every week to simply think."
    },
    pictures: [
      "/spotlight/18-1.jpg",
      "/spotlight/18-2.png",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 19",
    author: "Dr Alex Copley",
    date: "15 February 2021",
    references: [],
    description: {
      focus: "Earthquakes, and the geological evolution of the continents.",
      description: "I study what happens during earthquakes, and what controls their locations and characteristics. This work forms the backbone of a larger enterprise to understand what controls how the Earth's continents evolve through time. I study what happens during earthquakes and what controls their locations and characteristics, as part of understanding how continents evolve.",
      reasons: "I was attracted to this topic because the big unsolved questions all revolve around things we can see, touch, and visit (for example mountain ranges, basins, and the fault-lines that produce earthquakes). I also enjoy the mixture of observational and modeling work that the topic involves.",
      advice: "Keep your knowledge broad, as many breakthroughs happen on the interface between disciplines."
    },
    pictures: [
      "/spotlight/19-1.jpg",
      "/spotlight/19-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 20",
    author: "Dr Alexi Crosby",
    date: "22 February 2021",
    references: [],
    description: {
      focus: "Making platelets from induced pluripotent stem cells.",
      description: "My current research is focused on making platelets from induced pluripotent stem cells. The aim is to improve the supply and effectiveness of transfused platelets by loading them with proteins involved in blood clotting.",
      reasons: "I decided to pursue research as I found my degree in human biology fascinating and wanted to carry on learning more. I also wanted a varied career and research is definitely that. I wanted to make a difference, and any finding, no matter how small, does just that.",
      advice: "Go for it, and try to get some experience in a research lab if you can. Four-year PhD rotation programmes are also useful because they expose you to different projects, people and ways of working before you choose a lab."
    },
    pictures: [
      "/spotlight/20-1.png",
      "/spotlight/20-2.png",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 21",
    author: "Dr Mairi Kilkenny",
    date: "1 March 2021",
    references: [],
    description: {
      focus: "Structural biology of human DNA replication.",
      description: "My research is focused on understanding, at the molecular level, how DNA replication works in human cells. We are also investigating whether DNA replication proteins could be effective anti-cancer targets and how their interactions with SARS-CoV-2 proteins may relate to COVID disease progression.",
      reasons: "I didn’t have a eureka moment. I enjoyed my undergraduate degree enough to know I wanted to give a PhD a go. I have moved between research fields and locations, and enjoy taking on new projects, working collaboratively to put the pieces together and arrive at the bigger biological picture. I now balance research with teaching and student support roles.",
      advice: "Be persistent about seeking extra-curricular research experience. Use your network, apply for internships, contact group leaders, and follow up if you do not hear back. Don’t be afraid to change field, and remember that fascinating work happens at the interface between disciplines. Join societies and use the Careers Service if you are unsure what you want to do."
    },
    pictures: [
      "/spotlight/21-1.jpg",
      "/spotlight/21-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 22",
    author: "Dr Chiara Giorio",
    date: "8 May 2021",
    references: [],
    description: {
      focus: "Atmospheric chemistry.",
      description: "Air pollution causes millions of deaths worldwide. We study the atmospheric processes that modify the composition of particulate matter during its lifetime and aim to understand the link between composition and toxicity, including how particulate matter can cause lung inflammation or diseases such as Alzheimer’s.",
      reasons: "I have always been interested in understanding the natural environment, promoting good practices to preserve it, and solving environmental issues for the benefit of society. Academia gives you the freedom to follow your inner passion in ways that no other environment can.",
      advice: "Persistence is more important than talent. Work hard, look for opportunities to grow and be open to the chances that come your way. Follow your passion and never give up when you face adversity."
    },
    pictures: [
      "/spotlight/22-1.jpeg",
      "/spotlight/22-2.jpeg",
      "/spotlight/22-3.jpeg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 23",
    author: "Prof. Marian Holness",
    date: "13 May 2021",
    references: [],
    description: {
      focus: "Igneous petrology.",
      description: "My research is concentrated on understanding the processes which occur during the melting and solidification of rocks. These include the formation and segregation of crustal melts, and the evolution of the crystal mush forming at the margins of cooling magma chambers. I approach these problems by starting with detailed field observation and sample collection, with careful microstructural observations using optical and electron microscopes coupled with geochemical analysis to decode rock history.",
      reasons: "I have always been interested in pattern-finding, and understanding why things are the way they are. I decided I wanted to be a scientist when I was 14 and have stuck with it ever since. A scientist is essentially who I am. Even if I weren’t doing research in a university, I would be puzzling things out and trying to work out why things are the way they are. I am lucky to have found my niche, with engaging problems to work on and the opportunity to get outside and visit interesting places.",
      advice: "The main thing is to find out what you’re good at. It took me a while to realise that my skills lie in observation, rather than numerical descriptions. Find your superpower and then work out how best to use it."
    },
    pictures: [
      "/spotlight/23-1.jpg",
      "/spotlight/23-2.jpg",
      "/spotlight/23-3.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 24",
    author: "Dr Sam Troughton",
    date: "20 May 2021",
    references: [],
    description: {
      focus: "Plasma Electrolytic Oxidation (PEO) coatings.",
      description: "PEO coatings are produced on lightweight metals in an aqueous bath of eco-friendly chemicals under applied potentials of hundreds of volts. This generates extremely hot, but small and short-lived plasma discharges on the surface which creates a super hard protective oxide coating. Working in an industrial R&D environment means you are usually working on multiple projects simultaneously, so it is hard to summarise everything, but I’m mostly focused on optimising the process to achieve ultra wear or corrosion resistant coatings.",
      reasons: "Having a variety of projects and being able to see the results of your research put directly into use is one of the main reasons I decided to move into industry after completing my PhD in Materials Science at Cambridge. I really enjoy having several different projects to work on, and having various time scales for them to run. Some can be very short turnaround times of just a few weeks, whereas others require years of careful research. Another big draw was interacting with different companies and seeing ideas worked on at the cutting edge of space, aerospace, automotive and manufacturing industries.",
      advice: "Do something you enjoy and talk to lots of people about it, both in your own department and other departments. Other people can give you great ideas or help you solve a problem from a different perspective, and they may suggest things to try that you haven’t heard about yet."
    },
    pictures: ["/spotlight/24-1.jpeg"]
  },
  {
    title: "SciSoc Spotlight Issue 25",
    author: "Dr Jenny Zhang",
    date: "27 May 2021",
    references: [],
    description: {
      focus: "Photosynthesis, electrochemistry and bioenergy.",
      description: "We are fascinated by the chemistry occurring within photosynthesis, an important process that sustains life on Earth as we know it. In particular, we analyse how solar energy is harvested by photosynthetic machineries to move electrons around for the breaking and making of bonds. We wish to better understand the nature of the electrode movements so that we can eventually re-wire photosynthesis using chemical approaches for bespoke purposes, such as the generation of renewable bioenergy or the creation of novel biosensors.",
      reasons: "I loved how research challenges me to be my most curious, rational and creative self. Being at the forefront of discovery is also pretty addictive!",
      advice: "Don’t go for the easy wins, challenge yourself to master something difficult and turn it into your superpower."
    },
    pictures: [
      "/spotlight/25-1.jpg",
      "/spotlight/25-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 26",
    author: "Professor Eric Miska",
    date: "20 October 2021",
    references: [],
    description: {
      focus: "Molecular genetics and RNA biology.",
      description: "I am a molecular geneticist who has done pioneering work on RNA biology. I developed new technologies that led to genome-wide analyses of microRNAs, now a diagnostic tool. I discovered the piRNA pathway in C. elegans, which controls fertility and transposons in germlines of animals. I demonstrated that RNA pathways can lead to a multigenerational, truly epigenetic memory in C. elegans, and developed C. elegans into a host-pathogen model identifying RNA-modifying enzymes that restrict RNA viruses in animals. Finally, I developed tools to determine RNA structure in living cells.",
      reasons: "I have always enjoyed figuring out how things work. I remember being fascinated with structural colour and have never really recovered from discovering romanesco cauliflower. I like maths. I don’t like having a boss.",
      advice: "Be sceptical of flashy research buildings. Truly ground-breaking research is more likely done in a shed."
    },
    pictures: ["/spotlight/26-1.jpg"]
  },
  {
    title: "SciSoc Spotlight Issue 27",
    author: "Professor Chiara Marletto",
    date: "25 October 2021",
    references: [],
    description: {
      focus: "Quantum theory and quantum information.",
      description: "I am working, together with a team of brave collaborators, on developing a generalisation of the quantum theory of computation, which will help us understand quantum theory better and will also deliver the theory of the next generation of programmable machines, also called constructors, superseding universal computers.",
      reasons: "It is at the foundations of physics. It touches the deeper part of the fabric of reality.",
      advice: "Seek intellectual delight in an uncompromising way. Look for problems that you find interesting; cultivate the joy of understanding and solving them."
    },
    pictures: [
      "/spotlight/27-1.jpg",
      "/spotlight/27-2.jpg",
    ]
  },
  {
    title: "SciSoc Spotlight Issue 28",
    author: "Professor Hasok Chang",
    date: "28 October 2021",
    references: [],
    description: {
      focus: "History and philosophy of the physical sciences.",
      description: "Currently I have two major projects. One is the early history of batteries, going back to Volta’s invention published in 1800. It was easy to build batteries, but difficult to understand how they worked because early scientists did not have the concepts of electrons or ions as we know them. My other project is philosophical, introducing pragmatism seriously into the philosophy of science. The general goal is to make sense of how scientific knowledge grows without pretending that we are approaching some absolute truth.",
      reasons: "I have always wanted to study science because I loved learning about nature and wanted to understand everything. I started out wanting to become a theoretical physicist, but during my undergraduate study I realised that scientific training did not excite me. I found that most of the questions I wanted to pursue were considered philosophical, and luckily discovered the philosophy of science.",
      advice: "Research is a wonderful privilege. Go into it only if you can find an area of work that you truly love, and enjoy every moment of it. Don’t become a researcher just because you are cleverer than others. Another reason to devote yourself to research is to solve urgent practical problems facing humanity, but the problems must fascinate you."
    },
    pictures: ["/spotlight/28-1.jpg"]
  },
  {
    title: "SciSoc Spotlight Issue 29",
    author: "Dr Amy Milton",
    date: "5 November 2021",
    references: [],
    description: {
      focus: "Behavioural neuroscience, memory reconsolidation and mental health disorders.",
      description: "My research aims to understand memory reconsolidation, the hypothesised process by which memories become updated under certain conditions. I am interested in reconsolidation from basic, theoretical and translational perspectives. As maladaptive memories contribute to mental health disorders including PTSD and drug addiction, disrupting reconsolidation may improve patient outcomes with a relatively short treatment.",
      reasons: "I became fascinated by psychology and neuroscience as an undergraduate, particularly learning, memory and compulsive behaviours. As I read more, it became clear that there is so much left to learn about these psychological processes, and I wanted to be part of the research community finding those answers.",
      advice: "Cultivate your willingness to learn from every situation. Research often produces unexpected data, but this doesn’t mean it is bad data; you need to figure out why what you see is not what you expected. You can also learn a lot from people in other disciplines, and there is always something new to learn."
    },
    pictures: ["/spotlight/29-1.jpg"]
  },
  {
    title: "SciSoc Spotlight Issue 30",
    author: "Dr Daniel Field",
    date: "3 Dec 2021",
    references: [],
    description: {
      focus: "The evolutionary origins of birds from non-avian dinosaurs and their subsequent diversification.",
      description: "I am interested in the earliest evidence of modern birds in the fossil record, and how these fossils can help us understand how, where and when modern birds originated, as well as what they can tell us about how the biosphere persisted through the end-Cretaceous mass extinction.",
      reasons: "I have been fascinated with wildlife since I was a young child, and gradually became curious about the evolutionary origins of present-day biodiversity. Birds and dinosaurs have always been a passion of mine, and the opportunity to link those interests by studying evolutionary biology and palaeontology made a career in research inevitable.",
      advice: "Learning to think creatively in order to identify and pursue key outstanding scientific questions is the most important thing an aspiring researcher can do. What are the fundamental but untested assumptions underpinning your area of research? Are there different ways those assumptions can be tested? And if they fail to be substantiated, what are the implications for the field?"
    },
    pictures: ["/spotlight/30-1.jpg"]
  }
];