import Link from "next/link";
import { EventPageShell } from "@/components/event-page-shell";

export default function FoundersDinnerPage() {
  return (
    <EventPageShell
      title="Annual Founders' Dinner"
      slides={[
        { src: "/events/dinner/2.jpg", alt: "Founders' Dinner photo 2" },
        { src: "/events/dinner/3.jpg", alt: "Founders' Dinner photo 3" },
        { src: "/events/dinner/4.jpg", alt: "Founders' Dinner photo 4" },
        { src: "/events/dinner/5.jpg", alt: "Founders' Dinner photo 5" },
        { src: "/events/dinner/1.jpg", alt: "Founders' Dinner photo 1" },
      ]}
      intro={
        <p>
          Held in Lent Term (January - March), the Annual Founders' Dinner celebrates the work of the outgoing <Link href="/about/committee" className="font-semibold text-[#00827e] hover:underline">Committee</Link> and the achievements of the Society over the past year. The Committee, past Presidents, Members of the Society, sponsors and members of the Academic Advisory Board come together for a formal dinner in a Cambridge College, joined by a Guest-of-Honour, who gives a short speech during the event.
        </p>
      }
    />
  );
}