export interface Sponsor {
  id: string;
  name: string;
  tier: "platinum" | "gold" | "silver";
  picture: string;
}

export const sponsorsData: Sponsor[] = [
  {
    id: "jane-street",
    name: "Jane Street",
    tier: "platinum",
    picture: "/sponsors/jane-street-logo.png",
  },
  {
    id: "agile-ip",
    name: "Agile IP",
    tier: "gold",
    picture: "/sponsors/agile-ip.logo.png",
  },
  {
    id: "gvi",
    name: "GVI",
    tier: "gold",
    picture: "/sponsors/gvi-logo.jpg",
  },
  {
    id: "twist",
    name: "Twist",
    tier: "gold",
    picture: "/sponsors/twist-logo.png",
  },
];

export const getPlatinumSponsors = () => sponsorsData.filter((sponsor) => sponsor.tier === "platinum");
export const getGoldSponsors = () => sponsorsData.filter((sponsor) => sponsor.tier === "gold");
export const getSilverSponsors = () => sponsorsData.filter((sponsor) => sponsor.tier === "silver");

export const getSponsorAnchor = (sponsor: Sponsor) => sponsor.id;
export const getSponsorById = (id: string) => sponsorsData.find((sponsor) => sponsor.id === id);
