import Link from "next/link";
import { PDFViewer } from "@/components/pdf-viewer";
import { ChevronRight, Home } from "lucide-react";

export default function GuidesPage() {
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
            <span className="text-foreground font-medium">Guides</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Guides</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              These resources shed more light on life in Cambridge, including key information you should know before arriving, and everything there is to know about Cambridge as a city.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="h-fit">
                <PDFViewer
                  src="/resources/2026_NST_1A_Guide.pdf"
                  title="2026 Part IA Guide"
                  height="500px"
                />
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-300 pl-6">
                  <h3 className="text-2xl font-bold mb-4">The SciSoc Guide to NST 1A</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                        We hope this helps incoming students with their subject choices and with their courses through the year and gives prospective applicants an insight into their future course. If you found the guide helpful, please do share it with anyone else you think might benefit from it.
                    </p>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Note</h4>
                  <div className="space-y-2">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Due to structural changes to the Natural Sciences Part IA course starting from AY 2026/27, the biological subjects available to the incoming year group will differ from those mentioned in this guide.
                    </p>

                    <p>Subjects Removed:</p>
                    <ul className="list-disc pl-5">
                      <li>Biology of Cells</li>
                      <li>Evolution and Behaviour</li>
                      <li>Physiology of Organisms</li>
                    </ul>

                    <p>New Subjects:</p>
                    <ul className="list-disc pl-5">
                      <li>Biodiversity, Evolution and Ecology</li>
                      <li>Biomedical Sciences</li>
                      <li>Biomolecules and Cells</li>
                    </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-300 pl-6">
                  <h3 className="text-2xl font-bold mb-4">The SciSoc Guide to NST 1B</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                        We hope this helps incoming students with their subject choices and with their courses through the year and gives prospective applicants an insight into their future course. If you found the guide helpful, please do share it with anyone else you think might benefit from it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-fit">
                <PDFViewer
                  src="/resources/2026_NST_IB_Guide.pdf"
                  title="2026 Part IB Guide"
                  height="500px"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}