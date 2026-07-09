import { EventPageShell } from "@/components/event-page-shell";

export default function GardenPartyPage() {
  return (
    <EventPageShell
      title="Garden Party"
      slides={[
        { src: "/events/garden/1.jpg", alt: "Garden Party photo 1" },
        { src: "/events/garden/2.jpg", alt: "Garden Party photo 2" },
        { src: "/events/garden/3.jpg", alt: "Garden Party photo 3" },
        { src: "/events/garden/4.jpg", alt: "Garden Party photo 4" },
        { src: "/events/garden/5.jpg", alt: "Garden Party photo 5" },
        { src: "/events/garden/6.jpg", alt: "Garden Party photo 6" },
      ]}
      intro={
        <>
          <p>
            The SciSoc Garden Party is a celebration of the past academic year traditionally held jointly in the past by the Cambridge University Scientific Society (CUSS) and Trinity College Science Society (TCSS) during May Week, the week after the end of exams in Easter Term. As of recent years, SciSoc has been partnering with other societies as well, working together to provide all our members with the best experience they can have to relax after their examinations.
          </p>
          <p>
            The first Garden Party after the Pandemic was held in 2023 at Darwin College, where SciSoc collaborated with Cambridge University Physics Society (CUPS), Cambridge University Engineering and Women’s Engineering Societies (CUES, CUWES), and Cambridge University Astronomy Society (CUAS). The party had close to 125 participants, and featured Aromi’s Gelato, a barbecue, and numerous garden games.
          </p>
          <p>
            In past years, the Party has been held on Trinity’s Fellows’ Bowling Green, just off the Great Court. There is often a theme: ‘The Future of the Periodic Table’ in 2019 and ‘Science of the Ancient World’ in 2018. Everyone is welcome, regardless of membership or degree, to enjoy a June afternoon on the grass, with themed food, Pimm’s, bubbly and Trinity’s famed Brown Bread Gelato.
          </p>
        </>
      }
    />
  );
}