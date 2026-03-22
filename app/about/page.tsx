import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "About",
  description: "שי שטרית. מייסד Lab17, שותף מייסד Builders Lab. בונה מערכות AI שעובדות בפרודקשן.",
};

const builds = [
  { name: "JESSICA", desc: "voice agent שקובעת פגישות ומייצרת הכנסה לעסקים בפרודקשן" },
  { name: "GUARDIAN", desc: "מערכת ניטור חכמה לוואטסאפ עם הבנת הקשר ושמירה על פרטיות" },
  { name: "OWLAI", desc: "knowledge base אישי - שומר הכל, מוצא הכל, זוכר הכל" },
  { name: "OTTO", desc: "עוזר אישי עם גישה למייל, יומן, CRM, ומשימות" },
  { name: "INBOXNINJA", desc: "מנהל מיילים אוטומטי - מתייג, מסנן, ומעדיף" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "שי שטרית",
  alternateName: "Shay Shitrit",
  url: "https://shayshitrit.com",
  jobTitle: "AI Builder",
  worksFor: [
    { "@type": "Organization", name: "Lab17", url: "https://lab17.ai" },
    { "@type": "Organization", name: "Builders Lab", url: "https://builderslab.ai" },
  ],
  sameAs: ["https://www.linkedin.com/in/shayshitrit/"],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="pt-36 pb-20 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <div className="w-44 h-44 mx-auto mb-8">
              <Image src="/shay_nobackground.png" alt="שי שטרית - בילדר AI ומייסד Lab17" width={176} height={176} className="w-full h-full object-contain" priority />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-3xl md:text-4xl font-black mb-6">שי שטרית</h1>
          </ScrollReveal>
          <div className="text-right space-y-5">
            <ScrollReveal delay={150}>
              <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9]">
                נשוי, אבא ל-4. בונה מערכות AI שעובדות בפרודקשן. לא מתכנת - בילדר. בונה עם AI כלים שרצים אצל חברות אמיתיות, עם משתמשים אמיתיים, עם תוצאות שאפשר למדוד.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9]">
                עבדתי עם יותר מחמישים חברות - מסטארטאפים קטנים ועד ארגוני enterprise. hackathons, enablement, co-building, voice agents. כל פעם מחדש, אותה תובנה: מי שבונה - מתקדם. מי שמתכנן - נתקע.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9]">
                מלמד, בונה, ומשתף הכל בחינם. כי ככה הקהילה גדלה, וככה אני לומד הכי מהר.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-10" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">What I Built</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {builds.map((build, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="flex items-baseline gap-4 p-5 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl text-right">
                  <span className="text-[16px] font-black shrink-0 text-[rgba(255,255,255,0.8)]" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">{build.name}</span>
                  <span className="text-[15px] text-[rgba(255,255,255,0.5)]">{build.desc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-10" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">Ventures</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5">
            <ScrollReveal>
              <div className="p-8 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all text-right h-full">
                <h3 className="text-2xl font-black mb-1" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">Lab17</h3>
                <div className="text-[13px] font-bold text-[#0066FF] tracking-wide mb-4" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">AI IMPLEMENTATION STUDIO</div>
                <p className="text-[15px] text-[rgba(255,255,255,0.55)] leading-relaxed mb-5">
                  בונים מערכות AI שרצות בפרודקשן. Voice agents, אוטומציות, ו-AI enablement.
                </p>
                <a href="https://lab17.ai" target="_blank" rel="noopener noreferrer" className="text-[14px] font-bold text-[#0066FF] hover:text-[#00B4D8] transition-colors" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
                  lab17.ai →
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="p-8 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all text-right h-full">
                <h3 className="text-2xl font-black mb-1" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">Builders Lab</h3>
                <div className="text-[13px] font-bold text-[#0066FF] tracking-wide mb-4" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">BUILD. LEARN. SHIP.</div>
                <p className="text-[15px] text-[rgba(255,255,255,0.55)] leading-relaxed mb-5">
                  יחד עם עמיתי בונה. בנייה של agents ופתרונות end-to-end ללקוחות, enablement, קורסים, וקהילה של בילדרים.
                </p>
                <a href="https://builderslab.ai" target="_blank" rel="noopener noreferrer" className="text-[14px] font-bold text-[#0066FF] hover:text-[#00B4D8] transition-colors" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
                  builderslab.ai →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact + Social */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[15px] text-[rgba(255,255,255,0.5)] mb-4">רוצים לדבר?</p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="mailto:shay@builderslab.ai"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-[rgba(255,255,255,0.55)] hover:text-[#0066FF] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                shay@builderslab.ai
              </a>
              <a
                href="https://www.linkedin.com/in/shayshitrit/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-[rgba(255,255,255,0.55)] hover:text-[#0066FF] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
