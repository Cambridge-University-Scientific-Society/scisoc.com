export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <article className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-muted-foreground mb-10">
            About Us
          </h1>

          <section className="space-y-8 text-lg leading-8 text-muted-foreground">
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-muted-foreground">
                The Society
              </h2>

              <p>
                The Cambridge Scientific Society was founded in 1995, with the goal of promoting all branches of science at a level both stimulating to those studying science and accessible to those coming from other backgrounds. Today, SciSoc is the largest and most active science society at Cambridge, and with more than 2000 lifetime members connected via our expansive email database.
              </p>

              <p>
                The Society acts as a platform for public exposure of new research and findings. Past speakers include Nobel Laureates Sir Peter Ratcliffe, Sir Paul Nurse and Sir John Walker, eminent scientists Sir Roger Penrose, Sir Richard Friend, Sir John Beddington and Peter Atkins, popular author Matt Ridley, and former Universities and Sciences minister David Willetts among many others across various disciplines of science.
              </p>

              <p>
                The Society is managed by the <a href="/about/committee" className="font-semibold text-[#00827e] hover:underline">Executive Committee</a>, with help from the Academic Advisory Board. Our illustrious <a href="/about/patrons" className="font-semibold text-[#00827e] hover:underline">Patrons</a> play a less involved role in the Society, but lend their support whenever they can. The Society is run according to the <a href="/about/constitution" className="font-semibold text-[#00827e] hover:underline">Constitution</a>, and is further aided by a number of generous <a href="/sponsors" className="font-semibold text-[#00827e] hover:underline">sponsors</a>, who provide some of the financial backing for the Society to enact its goal in the best way it can.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-3xl font-light text-muted-foreground">
                The Activities
              </h2>

              <p>
                Our main activity is the organisation of weekly talks that cover all scientific branches, from physics to medicine, from biology to engineering, from chemistry to palaeontology. There is usually time before and after our talks, offering a great opportunity to interact with fellow SciSoc members and the speaker. For more information on talks see <a href="/events" className="font-semibold text-[#00827e] hover:underline">here</a>. Join our mailing list to be updated for all our events.
              </p>

              <p>
                We strive to build a scientific community through various other social events held throughout the Michaelmas and Lent Terms, including movie nights, formals, and pub quizzes. Special events include our glamorous <span className="font-semibold text-[#00827e]">Annual Founders&apos; Dinner</span>, the <span className="font-semibold text-[#00827e]">Science Societies&apos; Garden Party</span>, and our <span className="font-semibold text-[#00827e]">Academic Internships Event</span>.
              </p>

              <p>
                In the past, we also organised trips to science facilities of world class importance, such as to the Diamond Light Source, the National Synchrotron Facility, where we were given a tour by the CEO Professor Gerhard Materlik CBE, and to the Large Hadron Collider in Geneva.
              </p>
            </div>
          </section>
        </article>
        </div>
      </div>
  );
}
