import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"
import type { Sponsor } from "@/data/sponsors";

interface SponsorCardProps {
  sponsor: Sponsor;
}

export function SponsorCard({ sponsor }: SponsorCardProps) {
  const getTierStyles = (tier: string) => {
    switch (tier) {
      case "platinum":
        return {
          border: "border-gray-300 dark:border-gray-600",
          cardBackground: "bg-white dark:bg-white",
          textColor: "text-muted-foreground",
          label: "PLATINUM"
        };
      case "gold":
        return {
          border: "border-yellow-300 dark:border-yellow-600",
          cardBackground: "bg-white dark:bg-white",
          textColor: "text-yellow-600 dark:text-yellow-400",
          label: "GOLD"
        };
      case "silver":
        return {
          border: "border-gray-200 dark:border-gray-700",
          cardBackground: "bg-white dark:bg-white",
          textColor: "text-muted-foreground",
          label: "SILVER"
        };
      default:
        return {
          border: "border-gray-200 dark:border-gray-700",
          cardBackground: "bg-white dark:bg-white",
          textColor: "text-muted-foreground",
          label: "SPONSOR"
        };
    }
  };

  const styles = getTierStyles(sponsor.tier);

  return (
    <Card className={`border-2 ${styles.border} ${styles.cardBackground} hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full`}>
      <CardHeader className="text-center">
        <div className={`w-full h-32 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden shadow-sm border border-gray-100`}>
            <Image
              src={sponsor.picture}
              alt={`${sponsor.name} logo`}
              width={120}
              height={80}
              className="object-contain max-h-full max-w-full"
            />
        </div>
        <CardTitle className="text-xl">{sponsor.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {sponsor.name}
        </p>
        <Link href={`/sponsors#${sponsor.id}`} className="mt-auto">
          <Button variant="outline" className="w-full">View on Sponsors Page</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
