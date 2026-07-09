export interface PastCommitteeRole {
  role: string;
  members: string;
}

export interface PastCommittee {
  year: string;
  roles: PastCommitteeRole[];
}

export const pastCommittees: PastCommittee[] = [
  {
    year: "2025-2026",
    roles: [
      { role: "Co-presidents", members: "Nestor Novakovic (St Catharine's), Jeffrey Zhang (Christ's)" },
      { role: "Secretary", members: "Yu Heng Hew (St Edmund's)" },
      { role: "Treasurer", members: "Jiayi Li (Emmanuel)" },
      { role: "Publicity", members: "Samud Shetty (Lucy Cavendish), Xiang Yang (Wolfson)" },
      { role: "Events", members: "Danyaal Sattar (King's), Alexander Gillan (Trinity Hall)" },
      { role: "Logistics", members: "Nicholas Law (Trinity), Zhilin Pan (Robinson)" },
      { role: "Sponsorship", members: "Jason Aik (St Edmund's)" },
      { role: "Technical Affairs", members: "Samuel Li (St John's)" },
      { role: "Speakers Affairs", members: "Abi Falkous (Newnham)" },
    ],
  },
  {
    year: "2024-2025",
    roles: [
      { role: "Co-presidents", members: "Cameron Goh (Emmanuel), Drishtant Chakraborty (Downing)" },
      { role: "Secretary", members: "Jeremy Lee (St Edmund's)" },
      { role: "Treasurer", members: "Jiayi Li (Emmanuel)" },
      { role: "Publicity", members: "Nathan Ng (Downing), Sasha Poh (Pembroke)" },
      { role: "Events", members: "Yu Heng Hew (St Edmund's), Landy Zhou (St John's)" },
      { role: "Logistics", members: "Nestor Novakovic (St Catharine's), Dewey Lin (St John's)" },
      { role: "Sponsorship", members: "Aaron Chen (Robinson)" },
      { role: "Technical Affairs", members: "Xiang Yang (Wolfson)" },
      { role: "Speakers Affairs", members: "Jeffrey Zhang (Christ's)" },
    ],
  },
  {
    year: "2023-2024",
    roles: [
      { role: "Co-presidents", members: "Shaik Asaaduddin Khwaja (St Edmund's), Malcolm Lim (Hughes Hall)" },
      { role: "Secretary", members: "Etienne McElfresh (Jesus)" },
      { role: "Treasurer", members: "Cameron Goh (Emmanuel)" },
      { role: "Publicity", members: "Isaac Howell (St Catharine's), Yuri Phaisamran (Trinity)" },
      { role: "Events", members: "Shams Ullah (Jesus), Kei Fung Chan (St Catharine's)" },
      { role: "Logistics", members: "Alden Cheng (Robinson), Yvswenne Liew (Wolfson)" },
      { role: "Sponsorship", members: "Eric He (Trinity)" },
      { role: "Technical Affairs", members: "Zoe Shu (Pembroke)" },
      { role: "Speakers Affairs", members: "Drishtant Chakraborty (Downing)" },
    ],
  },
  {
    year: "2022-2023",
    roles: [
      { role: "Co-presidents", members: "Chunran Xu (Murray Edwards), Aaron Koh (Hughes Hall)" },
      { role: "Secretary", members: "William Guo (St Edmund's)" },
      { role: "Treasurer", members: "Malcolm Lim (Hughes Hall)" },
      { role: "Publicity", members: "Anna Leow (Lucy Cavendish), Jiaming Bi (Christ's)" },
      { role: "Events", members: "Shaik Asaaduddin Khwaja (St Edmund's), Etienne McElfresh (Churchill)" },
      { role: "Logistics", members: "Jia Ming Lee (Hughes Hall), Matthew Shi (St John's)" },
      { role: "Sponsorship", members: "Wenjing Tan (St Edmund's)" },
      { role: "Technical Affairs", members: "Lester Goh (Wolfson)" },
      { role: "Speakers Affairs", members: "Daniel Lim (St Catharine's)" },
    ],
  },
  {
    year: "2021-2022",
    roles: [
      { role: "Co-presidents", members: "Ragavi Vijayakumar (Downing), Keene Lee (St Catharine's)" },
      { role: "Secretary", members: "Victor Lu (Christ's)" },
      { role: "Treasurer", members: "Laura Simpson (Trinity)" },
      { role: "Publicity", members: "Chunran Xu (Murray Edwards), Daniel Lim (St Catharine's)" },
      { role: "Events", members: "William Guo (St Edmund's), Brendan Ng (Wolfson)" },
      { role: "Logistics", members: "Aaron Koh (Hughes), Xingjian Hou (Trinity)" },
      { role: "Sponsorship", members: "Rachel Tan (Newnham)" },
      { role: "IT/Webmaster", members: "Sharon Ho (Gonville & Caius)" },
    ],
  },
  {
    year: "2020-2021",
    roles: [
      { role: "Co-presidents", members: "Bram Lim (Peterhouse) and Krishna Amin (St Catharine's)" },
      { role: "Secretary", members: "Sze Lynn Yuen (Girton)" },
      { role: "Treasurer", members: "Chia Yi Ong (Trinity)" },
      { role: "Publicity", members: "Najung Lee (Pembroke), Ragavi Vijayakumar (Downing)" },
      { role: "Events", members: "Tokino Takahashi (Emmanuel), Keene Lee (St Catharine's)" },
      { role: "Logistics", members: "Sharon Ho (Gonville & Caius), Laura Simpson (Magdalene)" },
      { role: "Sponsorship", members: "Tommy Tai (Hughes Hall)" },
      { role: "IT/Webmaster", members: "Christos Kyprianou" },
    ],
  },
  {
    year: "2019-2020",
    roles: [
      { role: "Co-presidents", members: "Jiaqi Li (Newnham) and Filip Wronowski (Trinity)" },
      { role: "Secretary", members: "Najung Lee (Pembroke)" },
      { role: "Treasurer", members: "Bram Lim (Peterhouse)" },
      { role: "Publicity", members: "Krishna Amin (St Catharine's) and Henry Fong (Magdalene)" },
      { role: "Events", members: "Mingran Cao (Pembroke) and Selina Summers (Selwyn)" },
      { role: "Logistics", members: "Tokino Takahashi (Emmanuel) and Yuan Yin (Clare)" },
      { role: "Sponsorship", members: "Chia Yi Ong (Trinity)" },
      { role: "IT/Webmaster", members: "Zuzanna Witkowska (Homerton)" },
    ],
  },
  {
    year: "2018-2019",
    roles: [
      { role: "Co-presidents", members: "Salvadore Buse (Trinity) and Charlene Tang (Trinity)" },
      { role: "Secretary", members: "Stefan Stanko (Pembroke)" },
      { role: "Treasurer", members: "Kate Zator (St Catharine's)" },
      { role: "Publicity", members: "Maia Ben-Yami (St John's)" },
      { role: "Events", members: "Rose Ng (Trinity Hall) and Jiaqi Li (Newnham)" },
      { role: "Logistics", members: "Henry Fong (Magdalene) and Tomas Deingruber (Girton)" },
      { role: "Sponsorship", members: "Annika Esch (Murray Edwards)" },
      { role: "IT/Webmaster", members: "Filip Wronowski (Trinity)" },
      { role: "Outreach", members: "Jess Sharpe (Newnham)" },
      { role: "Speakers", members: "Mingran Cao (Pembroke)" },
      { role: "Membership", members: "Johanna Friege (Girton)" },
    ],
  },
];