import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
        <div className="absolute inset-0">
          <Image
            src="/banner.jpg"
            alt="CUMSA Group Photo"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            Cambridge University 
            <br />
            <span className="text-blue-600">Scientific Society</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Welcome to the Cambridge University Scientific Society (SciSoc).
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Link href="/membership">
                Join Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-6">
              Welcome to the Cambridge University Scientific Society (SciSoc).
            </p>
            <p className="text-muted-foreground mb-8">
              The Cambridge University Scientific Society (SciSoc) exists “to promote all branches of science and to make science accessible to all members of the University”. We do this mainly via weekly talks, on a wide range of subjects, by the UK’s and world’s most distinguished scientists, giving our members the opportunity to engage with great minds and explore ground-breaking scientific methods. Additionally, we organise garden parties, dinners and other social events.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Find out more</h2>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about">
              <Card className="cursor-pointer transition-transform hover:scale-105 hover:shadow-lg h-[26rem] flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="w-full h-64 bg-orange-100 rounded-lg mb-4 relative overflow-hidden">
                    <Image
                      src="/event.jpg" // Replace with actual image
                      alt="About us"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>About us</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4">
                    Find out more about the society and the events we run.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/resources/guides">
              <Card className="cursor-pointer transition-transform hover:scale-105 hover:shadow-lg h-[26rem] flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="w-full h-64 bg-amber-100 rounded-lg mb-4 relative overflow-hidden">
                    <Image
                      src="/resources.jpg" // Replace with actual image
                      alt="Resources"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4">
                    Resources for both incoming freshers and prospective applicants.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/sponsors">
              <Card className="cursor-pointer transition-transform hover:scale-105 hover:shadow-lg h-[26rem] flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="w-full h-64 bg-yellow-100 rounded-lg mb-4 relative overflow-hidden">
                    <Image
                      src="/sponsor.jpg" // Replace with actual image
                      alt="Sponsors"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Sponsors</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4">
                    Find out about our sponsors which make our events possible.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
