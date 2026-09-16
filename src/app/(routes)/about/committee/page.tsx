import { CommitteeCard } from "@/components/committee-card";
import { getCommitteeMembers } from "@/data/committee";

export default function CommitteePage() {
  const members = getCommitteeMembers();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">SciSoc Committee 2026-2027</h1>
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-6">
              {members.map((member) => (
                <div key={member.id} className="w-full max-w-xs">
                  <CommitteeCard member={member} />
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-4xl border-t border-border/60 pt-10 text-muted-foreground">
            <div className="space-y-6 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="space-y-2">
                <p className="text-base leading-7">
                  Senior Treasurer: Dr David Norman (Christ&apos;s)
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Academic Advisory Board</h3>
                <p className="text-base leading-7">
                  Our Academic Advisory Board consists of academics and professionals within Cambridge who advise the Committee and provide day-to-day suggestions. The members of the Board are:
                </p>
                <ul className="space-y-2 text-base leading-7">
                  <li>Dr Peter Stern — Senior editor of the journal <em>Science</em></li>
                  <li>Dr Rend Platings — CEO and Founder Sugarwise</li>
                  <li>Dr Kourosh Saeb-Parsy — University Lecturer, Fellow of Fitzwilliam College</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div> 
  );
}
