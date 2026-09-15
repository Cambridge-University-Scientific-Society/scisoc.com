import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { spotlightArticles } from "@/data/spotlight";

interface SpotlightPageProps {
  params: Promise<{ issue: string }>;
}

export function generateStaticParams() {
  return spotlightArticles.map((article) => ({
    issue: article.title.replace("SciSoc Spotlight Issue ", ""),
  }));
}

export default async function SpotlightPage({ params }: SpotlightPageProps) {
  const { issue } = await params;
  const article = spotlightArticles.find(
    (item) => item.title === `SciSoc Spotlight Issue ${issue}`,
  );

  if (!article) {
    notFound();
  }

  const sections = [
    {
      title: `Research focus: ${article.description.focus}`,
      body: article.description.description,
    },
    {
      title: "What made you decide to pursue research?",
      body: article.description.reasons,
    },
    {
      title: "What would be your advice to aspiring researchers?",
      body: article.description.advice,
    },
  ];
  const publishedYear = /\d{4}/.exec(article.date)?.[0] ?? article.date;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-muted/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 overflow-hidden text-sm text-muted-foreground">
            <Link href="/" className="shrink-0 transition-colors hover:text-foreground">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0" />
            <Link href="/resources/articles" className="shrink-0 transition-colors hover:text-foreground">
              Articles
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0" />
            <span className="truncate text-foreground">Spotlight {issue}</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-10 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-16">
          <article>
            <header className="mb-12 max-w-3xl border-b border-border pb-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#00827e]">
                SciSoc Spotlight · Issue {issue}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                {article.author}
              </h1>
              <p className="mt-5 text-sm text-muted-foreground">Published: {publishedYear}</p>
            </header>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <section key={section.title} className="max-w-3xl">
                  <div className="mb-4 flex items-baseline gap-4">
                    <span className="font-mono text-sm text-[#ef476f]">0{index + 1}</span>
                    <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-base leading-7 text-muted-foreground">{section.body}</p>
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="space-y-5 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00827e]">
                    Scientist spotlight
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-card-foreground">{article.author}</h2>
                </div>

                {article.pictures?.[0] ? (
                  <figure className="overflow-hidden rounded-lg bg-white">
                    <Image
                      src={article.pictures[0]}
                      alt={`${article.author}, Spotlight Issue ${issue}`}
                      width={900}
                      height={700}
                      className="h-auto max-h-[420px] w-full object-contain"
                    />
                  </figure>
                ) : null}

                <dl className="space-y-3 border-t border-border pt-4 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Issue</dt>
                    <dd className="text-right font-medium text-card-foreground">{issue}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Focus</dt>
                    <dd className="max-w-[170px] text-right font-medium text-card-foreground">
                      {article.description.focus}
                    </dd>
                  </div>
                </dl>
              </div>

              {article.pictures && article.pictures.length > 1 ? (
                <div className="grid gap-3 border-t border-border bg-muted/30 p-3">
                  {article.pictures.slice(1).map((picture, index) => (
                    <figure key={picture} className="overflow-hidden rounded-lg bg-white">
                      <Image
                        src={picture}
                        alt={`${article.author}, Spotlight Issue ${issue}, image ${index + 2}`}
                        width={900}
                        height={700}
                        className="h-auto max-h-[420px] w-full object-contain"
                      />
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
