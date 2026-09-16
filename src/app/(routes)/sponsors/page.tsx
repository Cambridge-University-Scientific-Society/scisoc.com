import Image from "next/image";
import { getPlatinumSponsors, getGoldSponsors, getSilverSponsors } from "@/data/sponsors";

function SponsorLogoTile({
  sponsor,
}: {
  sponsor: { id: string; name: string; picture: string };
}) {
  return (
    <div id={sponsor.id} className="flex h-44 items-center justify-center rounded-none border border-border/60 bg-card p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md bg-white">
        <Image
          src={sponsor.picture}
          alt={sponsor.name}
          width={220}
          height={120}
          className="max-h-full max-w-full object-contain"
        />
      </div>
  );
}

const sponsorIntroText =
  "Being the largest and most active scientific society in Cambridge, we put a lot of effort into gathering high-quality companies around us. If you would like to get in touch, please contact our director for sponsorship at sponsorship@scisoc.com.";

const sponsorValueText =
  "With over 1,000 registered life members in Cambridge and abroad, and more than 3,000 subscribers on our mailing list, SciSoc represents a unique pool of enthusiasm, knowledge, and potential at the University of Cambridge. Hosting talks from renowned researchers about current research and innovation across the sciences, SciSoc regularly serves an audience of interested undergraduates, graduate students, and fellows at every weekly talk and social event.";

export default function SponsorsPage() {
  const platinumSponsors = getPlatinumSponsors();
  const goldSponsors = getGoldSponsors();
  const silverSponsors = getSilverSponsors();
  const allSponsors = [...platinumSponsors, ...goldSponsors, ...silverSponsors];
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <article className="mx-auto max-w-6xl space-y-14">
          <header className="space-y-8">
            <h1 className="text-5xl font-light tracking-tight text-foreground sm:text-6xl">
              Sponsorship
            </h1>

            <section className="space-y-4 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-[2.25rem]">
                How to sponsor?
              </h2>
              <p className="max-w-5xl">{sponsorIntroText}</p>
            </section>

            <section className="space-y-4 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-[2.25rem]">
                Why Sponsor?
              </h2>
              <p className="max-w-5xl">{sponsorValueText}</p>
            </section>
          </header>

          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-[#00827e] sm:text-3xl">
              Our Sponsors
            </h2>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {allSponsors.map((sponsor) => (
                <SponsorLogoTile key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </section>

        </article>
      </div>
    </div>
  );
}
