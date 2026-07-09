import Link from "next/link";
import { constitutionLink, constitutionSections } from "@/data/constitution";
import { PDFViewer } from "@/components/pdf-viewer";

export default function ConstitutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-muted-foreground mb-10">
            Constitution
          </h1>

          <section className="space-y-10 text-lg leading-8 text-muted-foreground">
            <div className="space-y-4 max-w-4xl">
              <p>
                The Society is run according to the Constitution, which can be found{" "}
                <Link
                  href={constitutionLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#00827e] hover:underline"
                >
                  here
                </Link>
                . This document outlines the society&apos;s purpose, activities, membership,
                governing bodies and responsibilities.
              </p>
            </div>

            <PDFViewer
              src={constitutionLink}
              title="Cambridge University Scientific Society Constitution"
              height="780px"
            />

            <div className="space-y-6">
              {constitutionSections.map((section) => (
                <section key={section.title} className="space-y-3">
                  <h2 className="text-2xl font-light text-muted-foreground">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}