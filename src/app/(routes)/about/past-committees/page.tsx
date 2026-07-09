import { pastCommittees } from "@/data/past-committees";

export default function PastCommitteesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-muted-foreground mb-10">
            Past Committees
          </h1>

          <div className="space-y-8">
            {pastCommittees.map((committee) => (
              <section key={committee.year} className="space-y-5">
                <h2 className="text-3xl font-light text-muted-foreground">
                  {committee.year}
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {committee.roles.map((entry) => (
                    <div key={`${committee.year}-${entry.role}`} className="rounded-lg border border-border/60 bg-card p-5 shadow-sm">
                      <h3 className="text-base font-semibold text-[#00827e]">
                        {entry.role}:
                      </h3>
                      <p className="mt-2 text-base leading-7 text-muted-foreground">
                        {entry.members}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}