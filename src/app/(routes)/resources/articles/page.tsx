import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Home } from "lucide-react";
import { articles } from "@/data/articles";
import { spotlightArticles } from "@/data/spotlight";

export default function ArticlesPage() {
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
              SciSoc publications, including research articles and scientist spotlights from Cambridge.
            </p>
          </section>

          <div className="space-y-16">
            <section className="space-y-6">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <h2 className="text-3xl font-bold text-foreground">Articles</h2>
                <span className="text-sm font-medium text-muted-foreground">
                  {articles.length} article{articles.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {articles.map((article, index) => (
                  <Card key={`${article.title}-${article.date}`} className="h-full transition-shadow duration-300 hover:shadow-lg">
                    <CardHeader className="space-y-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">
                          <Link href={`/resources/articles/papers/${index}`} className="hover:underline">
                            {article.title}
                          </Link>
                        </CardTitle>
                        <p className="text-sm font-medium text-muted-foreground">
                          {article.author} · {article.date}
                        </p>
                      </div>
                      <Link
                        href={`/resources/articles/papers/${index}`}
                        className="font-semibold text-[#00827e] hover:underline"
                      >
                        Read article
                      </Link>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <h2 className="text-3xl font-bold text-foreground">Spotlights</h2>
                <span className="text-sm font-medium text-muted-foreground">
                  {spotlightArticles.length} issue{spotlightArticles.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {spotlightArticles.map((spotlight) => {
                  const issue = spotlight.title.replace("SciSoc Spotlight Issue ", "");
                  const focus = spotlight.description.focus;
                  const publishedYear = /\d{4}/.exec(spotlight.date)?.[0] ?? spotlight.date;

                  return (
                    <Card key={spotlight.title} className="h-full transition-shadow duration-300 hover:shadow-lg">
                      <CardHeader className="space-y-4">
                        <div className="space-y-2">
                          <CardTitle className="text-2xl">
                            <Link href={`/resources/articles/spotlights/${issue}`} className="hover:underline">
                              {spotlight.title}
                            </Link>
                          </CardTitle>
                          <p className="text-sm font-medium text-muted-foreground">
                            {spotlight.author} · Published: {publishedYear}
                          </p>
                        </div>
                        <CardDescription className="line-clamp-3 text-base leading-relaxed">
                          {focus}
                        </CardDescription>
                        <div>
                          <Link
                            href={`/resources/articles/spotlights/${issue}`}
                            className="font-semibold text-[#00827e] hover:underline"
                          >
                            Read spotlight
                          </Link>
                        </div>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}