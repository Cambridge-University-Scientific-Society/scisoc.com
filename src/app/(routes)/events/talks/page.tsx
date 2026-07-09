import Link from "next/link";
import { EventPageShell } from "@/components/event-page-shell";

export default function TalksPage() {
  return (
    <EventPageShell
      title="Talks"
      slides={[
        { src: "/events/talks/1.jpg", alt: "Talks event photo 1" },
        { src: "/events/talks/2.jpg", alt: "Talks event photo 2" },
        { src: "/events/talks/3.jpg", alt: "Talks event photo 3" },
      ]}
      intro={
        <>
          <p>
            During full term, we organise <Link href="https://talks.cam.ac.uk/show/index/6581" className="font-semibold text-[#00827e] hover:underline">weekly talks</Link>, usually Tuesdays 6pm - 7pm, at the Pfizer / Wolfson Lecture Theatre (Department of Chemistry, CB2 1EW). All our talks are free to our members who also receive a number of other benefits that you can read about on our <Link href="/membership" className="font-semibold text-[#00827e] hover:underline">membership page</Link>. You can become a member at our talks, normally for £15, or pay £4 on the door for a single talk. It is a great opportunity to interact with other SciSoc members and the visiting speaker.
          </p>
          <p>
            Lecture recordings can be found on our <Link href="http://www.youtube.com/@CambridgeSciSoc" className="font-semibold text-[#00827e] hover:underline">YouTube channel</Link>. We look forward to seeing you at our talks!
          </p>
        </>
      }
    />
  );
}