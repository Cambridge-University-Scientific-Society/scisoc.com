import { EventPageShell } from "@/components/event-page-shell";

export default function ScientificInternshipEventPage() {
  return (
    <EventPageShell
      title="The Scientific Internship Event"
      slides={[
        { src: "/events/termcard-placeholder.svg", alt: "Scientific Internship Event placeholder 1" },
        { src: "/events/ori.jpg", alt: "Scientific Internship Event placeholder 2" },
        { src: "/events/kopitalk.jpg", alt: "Scientific Internship Event placeholder 3" },
      ]}
      intro={
        <p>
          The Scientific Internship Event (SIE), formerly known as the Academic Internship Event (AIE), is usually held in the middle of Michaelmas Term (early November). The SIE sees members of the Society and the University share their valuable insights from their scientific internships and various experiences with their application process. It provides opportunities for networking with fellow students and represented institutions and companies.
        </p>
      }
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-light text-muted-foreground">Past SIE/AIEs</h2>
        <div className="space-y-4">
          <p>
            The 7th AIE was held on 4 Nov 2023, in collaboration with TCSS and CU Physics Society (CUPS), again held at the BMS Lecture Theatre. The event format remained approximately the same, with 11 speakers and 4 categories, sharing about internships within the UK, Europe and across the whole world, ranging from America, China and to New Zealand.
          </p>
          <p>
            The 6th AIE was held on 29 Oct 2022, in collaboration with TCSS, held at the Bristol-Myers-Squibb (BMS) Lecture Theatre in the Chemistry Department. The event was brought forward in the term to give students more time to prepare their application materials earlier. With 12 speakers this year, the event was split into 4 sections again categorised by type of internships with a 20 minute networking session between each section.
          </p>
          <p>
            The 5th AIE was held on 20 Nov 2021, in collaboration with TCSS and BioSoc. The event was held at the Babbage Lecture Theatre, and featured 9 speakers split into 3 sections categorised by locations of internships, with a panel Q&amp;A at the end of each section.
          </p>
          <p>
            The 4th AIE was held on 21 Nov 2020, in collaboration with long-time partners Trinity SciSoc, and new partners Oxford SciSoc. Our speakers have experience in numerous research programmes and labs around the world, as well as in industry and start-ups.
          </p>
          <p>
            The 3rd AIE was held in Michaelmas 2019 (23 Nov 2019) and was attended by nearly 200 people. Although the AIE lasts for a whole afternoon, it is by no means compulsory to stay for all the sessions.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-muted-foreground">Example internship themes</h2>
        <div className="space-y-4">
          <p>Here are various internships that our students speakers have shared about over last sessions:</p>

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Internships in Industry and Startups</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Google</li>
              <li>ANSYS</li>
              <li>UBS</li>
              <li>Perella Weinberg</li>
              <li>Cambridge Cancer Genomics</li>
              <li>Rolls Royce</li>
              <li>Bosch</li>
              <li>AstraZeneca</li>
              <li>Schneider Electric</li>
              <li>Infinitopes</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Academic Internships outside the UK</p>
            <ul className="list-disc list-inside space-y-1">
              <li>MIT, USA</li>
              <li>University of Pennsylvania (UPenn), USA</li>
              <li>The Amgen Scholars' Programme (ETH Zurich, Karolinska Institutet, LMU Munich)</li>
              <li>ISTA, Austria</li>
              <li>EMBL Grenoble, France</li>
              <li>UTRIP, University of Tokyo, Japan</li>
              <li>OIST, Japan</li>
              <li>Peking University, China</li>
              <li>University of Auckland, NZ</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Academic Internships inside the UK</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Laboratory of Molecular Biology, Cambridge (LMB)</li>
              <li>Cambridge Institute for Medical Research (CIMR)</li>
              <li>British Antarctic Survey (BAS)</li>
              <li>Cambridge Department of Chemistry</li>
              <li>Cambridge Department of Pathology</li>
              <li>Cambridge Department of Pharmacology</li>
              <li>Cambridge Department of Physiology, Development and Neuroscience (PDN)</li>
              <li>Cambridge Systems Biology Centre</li>
              <li>The Cavendish Laboratory</li>
              <li>Francis Crick Institute</li>
            </ul>
          </div>
        </div>
      </section>
    </EventPageShell>
  );
}