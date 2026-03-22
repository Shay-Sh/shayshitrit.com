import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Builder Stack",
  description: "הכלים, הגישה, ואיך להתחיל לבנות. הסטאק שמשנה הכל.",
};

const tools = [
  {
    name: "Claude Code",
    heb: "שותף החשיבה שלי",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    desc: "לא כלי שכותב קוד. שותף חשיבה. אני משתמש ב-Claude Code לתכנון ארכיטקטורה, brainstorming, בנייה, ודיבאגינג. הוא לא מחליף את החשיבה שלי -הוא מעצים אותה. כשאני רוצה לבנות משהו חדש, השיחה הראשונה היא עם Claude.",
  },
  {
    name: "n8n",
    heb: "מרכז השליטה",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" />
        <path d="M9 6h6M6 9v6M18 9v6M9 18h6" />
      </svg>
    ),
    desc: "שכבת ה-orchestration. כל workflow, כל אוטומציה, כל agent -עובר דרך n8n. זה המרכז של הכל. מה שהופך אותו לחזק במיוחד: הוא מחבר בין כל הכלים האחרים. API, database, AI -הכל זורם דרך n8n.",
  },
  {
    name: "Lovable",
    heb: "בניית UI במהירות",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    desc: "כשאני צריך frontend -מאפס לממשק עובד תוך שעות, לא שבועות. Lovable מאפשר לי לבנות UI מתוחכם בלי להיות מפתח frontend. מהרעיון לממשק עובד ביום אחד.",
  },
  {
    name: "VAPI",
    heb: "שכבת הקול",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    desc: "Voice AI runtime. ככה voice agents עובדים בפרודקשן -לא רק demos. VAPI מטפל בטלפוניה, ב-speech-to-text, וב-text-to-speech. אני מתמקד בלוגיקה ובחוויה.",
  },
  {
    name: "Supabase",
    heb: "ה-Database",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    desc: "Database, auth, vectors, storage -הכל במקום אחד. Supabase נותן לבילדר את כל מה שצריך בצד ה-data, בלי לנהל infrastructure. פרודקשן ready מהיום הראשון.",
  },
];

export default function StackPage() {
  return (
    <>
      <PageHero title="The Builder Stack" subtitle="הכלים, הגישה, ואיך להתחיל לבנות" />

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">How I Think About Tools</h2>
          </ScrollReveal>
          <div className="space-y-5 text-right">
            {[
              "לא ״מה הכלי הכי טוב״ -אלא ״מה הכלי הנכון לבעיה הזו.״ הסטאק צריך להיות גמיש, לא דוגמטי.",
              "תבנו מהר, תשפרו אחרי. אל תעשו over-engineering. הגרסה הראשונה צריכה לעבוד, לא להיות מושלמת.",
              "ה-framework להחלטות: מהירות הגעה לפרודקשן vs. customizability vs. תחזוקה. תמיד תבחרו במהירות -תמיד אפשר לשנות אחרי.",
            ].map((text, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9]">{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-12" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">The Stack</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {tools.map((tool, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="p-7 md:p-8 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all text-right">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#0066FF] shrink-0">{tool.icon}</div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl md:text-2xl font-black" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">{tool.name}</h3>
                      <span className="text-[14px] text-[rgba(255,255,255,0.35)] font-bold">— {tool.heb}</span>
                    </div>
                  </div>
                  <p className="text-[16px] text-[rgba(255,255,255,0.55)] leading-[1.85]">{tool.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">How They Work Together</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="text-right space-y-5">
              <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9]">
                ה-workflow שלי: מתחיל עם <strong className="text-[rgba(255,255,255,0.85)]">Claude Code</strong> לתכנון ואפיון. משם ל-<strong className="text-[rgba(255,255,255,0.85)]">n8n</strong> לבניית ה-orchestration וה-workflows. <strong className="text-[rgba(255,255,255,0.85)]">Lovable</strong> בונה את הממשק. <strong className="text-[rgba(255,255,255,0.85)]">VAPI</strong> מוסיף שכבת קול אם צריך. <strong className="text-[rgba(255,255,255,0.85)]">Supabase</strong> מנהל את כל ה-data. הכל מתחבר ורץ על Vercel.
              </p>
              <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9]">
                דוגמה: voice agent מרעיון לפרודקשן -Claude Code עוזר לתכנן את הארכיטקטורה. n8n מנהל את ה-call flow וה-post-call processing. VAPI מטפל בטלפוניה. Supabase שומר את ה-data והתמלולים. Lovable בונה את הדשבורד. הכל מחובר, הכל בפרודקשן.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[18px] text-[rgba(255,255,255,0.68)] leading-[1.9] mb-6">
              רוצים ללמוד לבנות? ב-Builders Lab אנחנו בונים agents ופתרונות end-to-end ללקוחות, מלמדים בקורסים, ומנהלים קהילה של בילדרים.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://builderslab.ai" target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold text-[#0066FF] hover:text-[#00B4D8] transition-colors" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
                builderslab.ai →
              </a>
              <a href="/start" className="text-[15px] font-bold text-[rgba(255,255,255,0.4)] hover:text-[#0066FF] transition-colors">
                המדריך למתחילים ←
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
