import Link from "next/link";

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <article className="mx-auto max-w-5xl space-y-8 text-muted-foreground">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-muted-foreground">
            Membership
          </h1>

          <section className="space-y-6 text-lg leading-8">
            <p>
              <strong>SciSoc membership is open to anyone</strong>, even non-members of the university, regardless of your discipline, academic path or degree. As a SciSoc life member you will benefit from:
            </p>

            <ul className="list-disc space-y-2 pl-8">
              <li><strong>Free entry to all SciSoc talks</strong> for the rest of your life <em>(£4 for non-members)</em></li>
              <li><strong>Reciprocal free life membership</strong> to the <Link href="https://www.oxscisoc.org/" className="font-semibold text-[#00827e] hover:underline">Oxford University Scientific Society</Link>, thanks to a special membership agreement</li>
              <li><strong>Member&apos;s discounted prices</strong> for the <Link href="/events/garden-party" className="font-semibold text-[#00827e] hover:underline">Garden Party</Link>, the <Link href="/events/founders-dinner" className="font-semibold text-[#00827e] hover:underline">Annual Founders&apos; Dinner</Link>, and many other social events</li>
              <li><strong>Priority entry</strong> to oversubscribed talks and events</li>
              <li>Participate in our <strong>Member&apos;s Quiz</strong> to win special prizes at the end of every term <em>(more information to be announced on the first talk of each term)</em></li>
              <li><strong>Voting and campaigning rights</strong> in the <Link href="/about/committee" className="font-semibold text-[#00827e] hover:underline">Executive Committee</Link> elections</li>
            </ul>

            <p>
              The fee for a life membership is <strong>£15</strong>. We are currently only accepting bank transfers to the following account:
            </p>

            <div className="rounded-2xl border border-border bg-muted/30 p-6 text-base leading-7 text-foreground">
              <p className="font-semibold">Name: CU Scientific Society Sort Code: 40-16-08 Acc No.: 72888130</p>
            </div>

            <p>
              <strong>Kindly fill up this <Link href="#" className="font-semibold text-[#00827e] hover:underline">form</Link></strong> so we can process your application. You can collect your official SciSoc membership card at any of our talks or events. To stay up-to-date with our talks and events, sign up for our mailing list below! (Note that you have to sign up for membership and mailing list separately.)
            </p>

            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-start">
              <Link
                href="#"
                className="inline-flex min-h-[128px] min-w-[320px] items-center justify-center rounded-full border-2 border-[#1c8f94] bg-[#d7e7e2] px-10 py-6 text-center text-2xl font-semibold text-[#1c8f94] transition-transform hover:scale-[1.02]"
              >
                Sign up membership
              </Link>
              <Link
                href="#"
                className="inline-flex min-h-[128px] min-w-[320px] items-center justify-center rounded-full border-2 border-[#1c8f94] bg-[#d7e7e2] px-10 py-6 text-center text-2xl font-semibold text-[#1c8f94] transition-transform hover:scale-[1.02]"
              >
                Sign up mailing list
                <br />
                (Cambridge)
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}