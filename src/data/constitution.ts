export interface ConstitutionSection {
  title: string;
  body: string[];
}

export const constitutionLink =
  "/constitution/scisoc_constitution.pdf";

export const constitutionSections: ConstitutionSection[] = [
  {
    title: "1. The Society",
    body: [
      "The Society shall be known as the Cambridge University Scientific Society and its aim is to promote science within the University and make it more accessible to members and the public.",
    ],
  },
  {
    title: "2. Activities of the Society",
    body: [
      "The Society shall organize regular talks, visits to places of scientific interest, social events, an Annual Founders' Dinner, and other events such as scientific symposia or internship/career events.",
    ],
  },
  {
    title: "3. Membership and subscriptions",
    body: [
      "Membership is open to all and is divided into Life Membership and Honorary Membership. Life Membership is acquired for a non-refundable fee and Honorary Membership is granted by the Executive Committee.",
    ],
  },
  {
    title: "4. Governing and advising bodies",
    body: [
      "The Society is governed by the Executive Committee (EC), supported by the General Committee and advised by the Academic Advisory Board. The EC is split into a core EC and an extended EC, with the core EC consisting of the President(s), Secretary and Junior Treasurer, and the extended EC consisting of directors for Sponsorship, Publicity, Events, Logistics, Technical Affairs, and Speaker Affairs. The responsibilities of the core EC and extended EC are outlined in detail in the Constitution.",
    ],
  },
];