import Navbar from "./Navbar";
import SiteFooter from "./footer";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Navbar forceWhite />
      <main className="bg-[#f7f1e8] pt-32 text-[#22160f]">
        <section className="border-b border-black/10 px-6 pb-12 pt-10">
          <div className="mx-auto max-w-4xl">
            <div className="text-xs font-semibold tracking-[0.28em] text-black/45">
              {eyebrow}
            </div>
            <h1 className="mt-5 font-marcellus text-4xl leading-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/70 md:text-lg">
              {intro}
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-black/40">
              Last updated {lastUpdated}
            </p>
          </div>
        </section>

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-4xl space-y-10">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[28px] border border-black/10 bg-white/70 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.04)] md:p-10"
              >
                <h2 className="font-marcellus text-2xl text-[#22160f] md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-black/70 md:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
