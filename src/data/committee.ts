export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  subject: string;
  college: string;
  year: string;
  photo: string;
  email?: string;
}

export const committeeData: CommitteeMember[] = [
  {
    id: "president1",
    name: "Alexander Gillan",
    position: "Co-Presidents",
    subject: "Natural Sciences (Chemical)",
    college: "Trinity Hall",
    year: "3rd Year",
    photo: "/committee/Alexander.jpeg",
    email: "president@scisoc.com"
  },
  {
    id: "president2",
    name: "Samuel Li",
    position: "Co-Presidents",
    subject: "Natural Sciences (Biological)",
    college: "St John's College",
    year: "3rd Year",
    photo: "/committee/Samuel.jpg",
    email: "president@scisoc.com"
  },
  {
    id: "president3",
    name: "Nicholas Law",
    position: "Co-Presidents",
    subject: "Medicine",
    college: "Trinity College",
    year: "3rd Year",
    photo: "/committee/Nicholas.jpg",
    email: "president@scisoc.com"
  },
  {
    id: "secretary",
    name: "Samud Shetty",
    position: "Secretary",
    subject: "Natural Sciences (Biological)",
    college: "Lucy Cavendish College",
    year: "3rd Year",
    photo: "/committee/Samud.jpg",
    email: "secretary@scisoc.com"
  },
  {
    id: "treasurer",
    name: "Hew Yu Heng",
    position: "Treasurer",
    subject: "Natural Sciences (Biological)",
    college: "Emmanuel College",
    year: "4th Year",
    photo: "/committee/Yuheng.jpg",
    email: "treasurer@scisoc.com"
  },
  {
    id: "publicity1",
    name: "Barry Luo",
    position: "Publicity Officer",
    subject: "Natural Sciences (Biological)",
    college: "Trinity College",
    year: "2nd Year",
    photo: "/committee/Barry.jpg",
    email: "publicity@scisoc.com"
  },
  {
    id: "publicity2",
    name: "Kaiwen Tan",
    position: "Publicity Officer",
    subject: "Natural Sciences (Biological)",
    college: "Hughes Hall",
    year: "2nd Year",
    photo: "/committee/Kaiwen.jpg",
    email: "publicity@scisoc.com"
  },
  {
    id: "events1",
    name: "Timothy Chek",
    position: "Events Officer",
    subject: "Natural Sciences (Physical)",
    college: "Christ College",
    year: "2nd Year",
    photo: "/committee/Timothy.jpg",
    email: "events@scisoc.com"
  },
  {
    id: "events2",
    name: "Yu Tong Lim",
    position: "Events Officer",
    subject: "Natural Sciences (Physical)",
    college: "Emmanuel College",
    year: "2nd Year",
    photo: "/committee/YuTong.jpg",
    email: "events@scisoc.com"
  },
  {
    id: "logistic1",
    name: "Owen Ong",
    position: "Logistics Officer",
    subject: "Natural Sciences (Biological)",
    college: "Emmanuel College",
    year: "2nd Year",
    photo: "/committee/Owen.jpg",
    email: "logistics@scisoc.com"
  },
  {
    id: "logistics2",
    name: "George Zhou",
    position: "Logistics Officer",
    subject: "Medicine",
    college: "Christ's College",
    year: "3rd Year",
    photo: "/committee/George.png",
    email: "logistics@scisoc.com"
  },
  {
    id: "sponsorships",
    name: "Irina Fok",
    position: "Sponsorships Officer",
    subject: "Natural Sciences (Biological)",
    college: "Corpus Christi College",
    year: "3rd Year",
    photo: "/committee/Irina.jpg",
    email: "sponsorship@scisoc.com"
  },
  {
    id: "database",
    name: "Xavier Yeo",
    position: "Technical Officer",
    subject: "Computer Science",
    college: "Hughes Hall",
    year: "3rd Year",
    photo: "/committee/Xavier.jpg",
    email: "tech@scisoc.com"
  },
  {
    id: "speakers",
    name: "Vanisha Agrawal",
    position: "Speakers Affair Officer",
    subject: "Natural Sciences (Biological)",
    college: "St Catherine's College",
    year: "2nd Year",
    photo: "/committee/Vanisha.jpg",
    email: "speakers@scisoc.com"
  },
];

export const getCommitteeMembers = () => committeeData;
