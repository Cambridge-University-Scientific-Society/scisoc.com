import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { articles } from "@/data/articles";

interface PaperPageProps {
  params: Promise<{ index: string }>;
}

export function generateStaticParams() {
  return articles.map((_, index) => ({ index: String(index) }));
}

export default async function PaperPage({ params }: PaperPageProps) {
  const { index } = await params;
  const article = articles[Number(index)];

  if (!article || !Number.isInteger(Number(index))) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-muted/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/resources/articles" className="transition-colors hover:text-foreground">
              Articles
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="truncate text-foreground">{article.title}</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-10 md:py-16">
        <article className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4 border-b border-border pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00827e]">
              SciSoc article
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {article.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              {article.author} · {article.date}
            </p>
          </header>

          <p className="text-base leading-8 text-muted-foreground">{article.description}</p>

          {article.references.length > 0 ? (
            <section className="space-y-4 border-t border-border pt-8">
              <h2 className="text-2xl font-semibold text-foreground">References</h2>
              <ol className="list-decimal space-y-4 pl-6 text-sm leading-6 text-muted-foreground">
                {article.references.map(([citation, href]) => (
                  <li key={citation}>
                    <a href={href} className="text-[#00827e] hover:underline">
                      {citation}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
        </article>
      </main>
    </div>
  );
}