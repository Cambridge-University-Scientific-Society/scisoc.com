import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Home } from "lucide-react";
import { resourceArticles } from "@/data/resource-articles";

const articleSections = [
  {
    title: "Paper Summaries",
    slug: "Paper Summaries",
  },
  {
    title: "Scientist Spotlights",
    slug: "Scientist Spotlights",
  },
  {
    title: "Committee Pieces",
    slug: "Committee Pieces",
  },
];

export default function ArticlesPage() {
  const groupedArticles = articleSections.map((section) => ({
    ...section,
    articles: resourceArticles.filter((article) => article.section === section.title),
  }));

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
            <span className="text-foreground font-medium">Articles</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <section className="space-y-4 text-center">
            <h1 className="text-4xl font-bold text-foreground">Articles</h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                SciSoc's publications, including summaries of new papers, spotlights on scientist in Cambridge, and also some pieces written by our committee. 
            </p>
          </section>

          <div className="space-y-12">
            {groupedArticles.map((section) => (
              <section key={section.title} className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
                  <span className="text-sm font-medium text-muted-foreground">
                    {section.articles.length} article{section.articles.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {section.articles.map((article) => (
                    <Card key={article.slug} className="h-full transition-shadow duration-300 hover:shadow-lg">
                      <CardHeader className="space-y-4">
                        <div className="space-y-2">
                          <CardTitle className="text-2xl">
                            <Link href={`/resources/articles/${article.slug}`} className="hover:underline">
                              {article.title}
                            </Link>
                          </CardTitle>
                          <p className="text-sm font-medium text-muted-foreground">
                            {article.author} · {article.date}
                          </p>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {article.description}
                        </CardDescription>
                        <div>
                          <Link href={`/resources/articles/${article.slug}`} className="font-semibold text-[#00827e] hover:underline">
                            Read article
                          </Link>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}