import Link from "next/link";
import Image from "next/image";
// import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EventsPage() {
  // const events = [
  //   {
  //     id: 1,
  //     title: "Orientation",
  //     description: "CUMSA's annual 3D2N orientation welcoming new undergraduates to the CUMSA family. This year's 'Alice in Wonderland' themed orientation at Civil Service Club @ Changi included icebreakers, telematch, Amazing Race, and seniors' sharing sessions.",
  //     category: "Academic",
  //     timing: "September",
  //     image: "/events/ori.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "KopiTalks",
  //     description: "Our trademark speakers' event jointly organised with Oxford (OUMSSA), featuring productive dialogue on critical issues. This year's focus on social cohesion included Minister Chan Chun Sing and expert panelists discussing Singapore's social compact.",
  //     category: "Professional",
  //     timing: "September",
  //     image: "/events/kopitalk.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Annual Formal Dinner",
  //     description: "Our signature event bringing together members of the vibrant CUMSA community. Held at one of Cambridge's historic college halls, the dinner strengthens bonds between CUMSA families—a longstanding tradition that pairs freshers with seniors to help them navigate Cambridge life.",
  //     category: "Social",
  //     timing: "October",
  //     image: "/events/formal.JPG",
  //   },
  //   {
  //     id: 4,
  //     title: "Bridgemas Carnival",
  //     description: "Our end-of-year festive celebration featuring carnival games, food stalls, Christmas carol performances, and a charity fundraiser. This year raised £1,889.26 for Beyond Social Services, with 140 attendees enjoying tiramisu, mulled wine, and festive activities.",
  //     category: "Cultural",
  //     timing: "November",
  //     image: "/events/bridgemas.JPG",
  //   },
  //   {
  //     id: 5,
  //     title: "Ski Trip",
  //     description: "Our largest ski trip to date with 100 participants taking a week-long adventure to La Plagne, France. Offering slopes for all skill levels, stunning Alpine views, and après-ski experiences including poker and werewolf games.",
  //     category: "Sports",
  //     timing: "Winter Break",
  //     image: "/events/ski.png",
  //   },
  //   {
  //     id: 6,
  //     title: "Garden Party",
  //     description: "Annual farewell celebration for our graduating class held at Churchill College. This year's event featured light food, desserts, milk tea, card games, polaroid photobooth, and special enamel pin graduation gifts for the Class of 2024.",
  //     category: "Social",
  //     timing: "June",
  //     image: "/events/garden-party.jpg",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-center text-4xl font-bold mb-4 text-foreground">Events</h1>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Society organises numerous events during Michaelmas and Lent Term. Apart
                from our weekly talks, we also organise socials and career support events like
                the annual Academic Internship Event. Here are some of the events that we have
                run in the past (some with other Science Societies!):
              </p>

              <div className="overflow-hidden rounded-2xl border border-border bg-muted/20 shadow-sm">
                <Image
                  src="/termcard.png"
                  alt="Termcard placeholder"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
              </div>

              <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2 mb-0">
                <li>Formals &amp; Swap</li>
                <li>Movie Night + Pizza</li>
                <li>Freshers Squash</li>
                <li>Blind Dating</li>
                <li>Pub Quiz</li>
                <li>Pecha Kucha</li>
                <li>Punting</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-4 mb-0">
                Look out for our termcards through our social media platforms (
                <Link href="https://www.instagram.com/cambridgescisoc/" className="color-link">
                  Instagram
                </Link>
                {" "}&amp;{" "}
                <Link href="https://www.facebook.com/camscisoc/" className="color-link">
                  Facebook
                </Link>
                ) or subscribe to the SciSoc{" "}
                <Link href="https://lists.cam.ac.uk/sympa/info/soc-scisoc" className="color-link">
                  mailing list
                </Link>
                ! You may also subscribe to our{" "}
                <Link href="https://calendar.google.com/calendar/u/0?cid=150875ca1b1c76449b743628f@group.calendar.google.com" className="color-link">
                  Google Calendar
                </Link>
                {" "}and{" "}
                <Link href="/scisoc-google-calender-subscription-instructions.pdf" className="color-link">
                  list on talks.cam
                </Link>
                {" "}to have all our talks and events on your personal calendars. The Google
                Calendar will automatically update as we add, remove or alter events - no effort
                needed on your part! Here’s a{" "}
                <Link href="/scisoc-google-calendar-subscription-instructions.pdf" className="color-link">
                  short guide
                </Link>
                {" "}to help you should you need it.
              </p>
            </div>
          </div>

          {/* <h3 className="text-center text-4xl font-bold mb-4 text-foreground">Featured Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span className="font-medium">{event.timing}</span>
                  </div>
                  <CardDescription className="text-sm">
                    {event.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div> */}

          <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Join Us at Our Next Event</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay connected with SciSoc to receive updates about upcoming events, registration details, and exclusive member benefits.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="px-4 py-2">
                <Link href="/membership">
                  Sign up for membership
                </Link>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
