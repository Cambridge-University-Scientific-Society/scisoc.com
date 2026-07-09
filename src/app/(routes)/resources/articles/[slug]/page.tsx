import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home, ArrowUpRight } from "lucide-react";
import { getResourceArticle, resourceArticles } from "@/data/resource-articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getResourceArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="flex items-center hover:text-foreground transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/resources" className="hover:text-foreground transition-colors">
              Resources
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/resources/articles" className="hover:text-foreground transition-colors">
              Articles
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <article className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4 border-b border-border pb-8">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-muted-foreground">
              {article.title}
            </h1>
            <p className="text-sm italic text-[#ef476f]">
              {article.author}. {article.date}.
            </p>
            <p className="text-lg leading-8 text-muted-foreground">
              {article.description}
            </p>
          </header>

          <section className="space-y-4 text-lg leading-8 text-muted-foreground">
            <p>
              This article page is structured to hold a short summary and the supporting papers used in the piece. Replace the placeholder links with the final references when you are ready.
            </p>

            <div className="space-y-3 rounded-2xl border border-border bg-muted/20 p-6">
              <h2 className="text-2xl font-light text-muted-foreground">Papers</h2>
              <ul className="space-y-3">
                {article.papers.map((paper) => (
                  <li key={paper.title}>
                    <a
                      href={paper.href}
                      className="inline-flex items-center gap-2 font-medium text-[#00827e] hover:underline"
                    >
                      {paper.title}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}