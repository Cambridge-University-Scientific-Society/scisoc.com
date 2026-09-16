import { ChevronRight } from "lucide-react";
import { currentPatrons, honoraryMember, pastPatrons, patronIntro } from "@/data/patrons";

export default function PatronsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-muted-foreground mb-10">
            Patrons
          </h1>

          <section className="space-y-6 text-lg leading-8 text-muted-foreground">
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-muted-foreground">
                Patrons of the Society
              </h2>

              <p>{patronIntro}</p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00827e]">
                    Honorary Member
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                <div className="rounded-xl border border-[#00827e]/25 bg-[#00827e]/5 px-5 py-4">
                  <PatronDisclosure
                      label={honoraryMember.name}
                      honors={honoraryMember.honors}
                    description={[honoraryMember.description]}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Current Patrons
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>

              {currentPatrons.map((patron) => (
                <PatronDisclosure
                  key={patron.name}
                  label={patron.name}
                  honors={patron.honors}
                  description={patron.summaryParagraphs}
                />
              ))}
            </div>

            <div className="space-y-6 pt-8">
              <h2 className="text-3xl font-light text-muted-foreground">
                Past Patrons
              </h2>

              <div className="space-y-4">
                {pastPatrons.map((patron) => (
                  <div key={patron.name} className="space-y-4">
                    <PatronDisclosure
                      label={patron.name}
                      honors={patron.honors}
                      description={patron.summaryParagraphs}
                      tributeTitle={patron.tribute?.title}
                      tributeParagraphs={patron.tribute?.paragraphs}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

function PatronDisclosure({
  label,
  honors,
  description,
  tributeTitle,
  tributeParagraphs,
}: {
  label: string;
  honors: string;
  description: string[];
  tributeTitle?: string;
  tributeParagraphs?: string[];
}) {
  return (
    <details className="group border-b border-border/60 pb-4">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-2 text-base md:text-lg font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden [&::-webkit-details-marker]:hidden [&_svg]:transition-transform [&_svg]:duration-200 group-open:[&_svg]:rotate-90">
        <span className="flex min-w-0 items-start gap-2">
          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#00827e]" />
          <span className="font-semibold text-[#00827e]">{label}</span>
        </span>
        {honors ? (
          <span className="shrink-0 text-right text-sm md:text-base font-normal text-muted-foreground">
            {honors}
          </span>
        ) : null}
      </summary>
      <div className="space-y-4 pl-0 pr-0 pb-2 pt-2 text-base leading-7 text-muted-foreground">
        {description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {tributeTitle && tributeParagraphs ? (
          <div className="mt-6 space-y-4 border-t border-border/60 pt-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00827e]">
              {tributeTitle}
            </h3>
            {tributeParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
    </details>
  );
}