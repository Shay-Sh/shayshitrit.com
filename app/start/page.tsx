import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Start Building",
  description: "המדריך המעשי לבילדרים שרוצים להתחיל. סביבה, workflows ראשונים, ורעיונות לפרויקטים.",
};

const setupSteps = [
  {
    num: "01",
    name: "Claude Code",
    what: "שותף חשיבה שמריץ קוד, קורא קבצים, ובונה איתך.",
    how: "התקנה דרך הטרמינל, חיבור לחשבון Anthropic.",
    tip: "תתחילו עם שיחה פשוטה - \"תבנה לי סקריפט שמוריד נתונים מ-API\".",
  },
  {
    num: "02",
    name: "n8n",
    what: "פלטפורמת אוטומציה ויזואלית. כל workflow עובר דרך פה.",
    how: "n8n cloud (הכי מהיר להתחלה) או self-hosted.",
    tip: "תבנו workflow פשוט - trigger שמקבל webhook ושולח הודעה לטלגרם.",
  },
  {
    num: "03",
    name: "Supabase",
    what: "Database, auth, ו-storage בענן. הבסיס של כל אפליקציה.",
    how: "פתיחת פרויקט חינמי ב-supabase.com.",
    tip: "תצרו טבלה ראשונה ותחברו אותה ל-n8n.",
  },
];

const workflows = [
  {
    name: "Daily Digest",
    desc: "workflow שאוסף מידע מכמה מקורות (RSS, API, אימייל) ושולח סיכום יומי לטלגרם או למייל.",
    learns: "מלמד webhooks, HTTP requests, ועיבוד טקסט.",
    level: "מתחילים",
  },
  {
    name: "AI Email Classifier",
    desc: "workflow שמסווג מיילים נכנסים לפי קטגוריות (דחוף, ניוזלטר, מכירות, אישי) ומתייג אותם אוטומטית.",
    learns: "מלמד חיבור ל-Gmail API, שימוש ב-LLM לסיווג, ולוגיקת branching.",
    level: "מתחילים-בינוני",
  },
  {
    name: "Simple AI Agent",
    desc: "agent שמקבל שאלה בטלגרם, מחפש תשובה במסמכים שלכם (RAG בסיסי), ומחזיר תשובה.",
    learns: "מלמד את הבסיס של agents - קלט, עיבוד, פלט, ושימוש ב-vector search.",
    level: "בינוני",
  },
];

const ideas = [
  { name: "Telegram Bot אישי", desc: "בוט שעונה על שאלות בסיסיות ושולח תזכורות.", time: "שעתיים" },
  { name: "Content Saver", desc: "שומר קישורים מוואטסאפ/טלגרם ומסדר אותם לפי נושא.", time: "חצי יום" },
  { name: "Meeting Summarizer", desc: "מקבל הקלטת פגישה, מתמלל, ושולח סיכום עם action items.", time: "יום" },
  { name: "Lead Qualifier", desc: "מקבל פנייה מטופס ומעריך את איכות הליד אוטומטית.", time: "יום" },
  { name: "Social Listener", desc: "עוקב אחרי מילות מפתח ברשתות ושולח התראות.", time: "יום-יומיים" },
  { name: "Customer Support Agent", desc: "agent שעונה על שאלות נפוצות מתוך מסמכי החברה.", time: "יומיים" },
  { name: "Invoice Processor", desc: "מקבל חשבוניות, מחלץ נתונים, ומכניס ל-spreadsheet.", time: "יומיים" },
  { name: "Personal CRM", desc: "מנהל קשרים, מזכיר follow-ups, ומסכם אינטראקציות.", time: "שבוע" },
  { name: "Voice Agent", desc: "agent קולי שעונה לטלפון, מבין את השואל, ומבצע פעולות.", time: "שבוע-שבועיים" },
  { name: "Full AI Dashboard", desc: "דשבורד שמציג נתונים, insights, ומאפשר שאילתות בשפה טבעית.", time: "שבועיים+" },
];

const comingSoon = [
  { title: "People to Follow", desc: "אנשים שכדאי לעקוב אחריהם אם אתם רוצים לבנות. בילדרים, יוצרי תוכן, ומובילי דעה בעולם ה-AI." },
  { title: "Recommended Links", desc: "קורסים, ערוצי יוטיוב, בלוגים, וכלים שימושיים. הכל מסודר לפי נושא ורמה." },
  { title: "Community & Events", desc: "קהילות של בילדרים, מיטאפים, ואירועים. המקום למצוא אנשים שבונים כמוכם." },
  { title: "Advanced Builder Patterns", desc: "דפוסים מתקדמים - multi-agent architectures, RAG pipelines, voice AI patterns, ועוד." },
];

export default function StartPage() {
  return (
    <>
      <PageHero title="Start Building" subtitle="המדריך המעשי לבילדרים שרוצים להתחיל" />

      {/* ═══ WORKFLOWS LINK ═══ */}
      <section className="pb-12 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <Link href="/workflows" className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[15px] font-bold hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.06)] transition-all" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              Download Real Workflows →
            </Link>
            <p className="text-[13px] text-[rgba(255,255,255,0.35)] mt-3">7 n8n workflows אמיתיים להורדה</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SET UP YOUR ENVIRONMENT ═══ */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              Set Up Your Environment
            </h2>
            <p className="text-[rgba(255,255,255,0.5)] text-center mb-12 text-[15px]">
              שלושה כלים שצריך להתקין לפני שמתחילים לבנות
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {setupSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-7 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl text-right">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[13px] font-bold text-[rgba(255,255,255,0.15)] shrink-0" style={{ fontFamily: "var(--font-outfit)" }}>{step.num}</span>
                    <h3 className="text-xl font-black text-[rgba(255,255,255,0.9)]" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">{step.name}</h3>
                  </div>
                  <div className="space-y-2 text-[15px] text-[rgba(255,255,255,0.55)] leading-relaxed">
                    <p><span className="text-[rgba(255,255,255,0.7)] font-bold">מה זה:</span> {step.what}</p>
                    <p><span className="text-[rgba(255,255,255,0.7)] font-bold">איך מתחילים:</span> {step.how}</p>
                    <p><span className="text-[rgba(255,255,255,0.7)] font-bold">טיפ ראשון:</span> {step.tip}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FIRST 3 WORKFLOWS ═══ */}
      <section className="py-24 px-6 md:px-12 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-center" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              Your First 3 Workflows
            </h2>
            <p className="text-[rgba(255,255,255,0.5)] text-center mb-12 text-[15px]">
              שלושה workflows שאפשר לבנות ביום הראשון
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {workflows.map((wf, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-7 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl text-right">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-extrabold text-[rgba(255,255,255,0.9)]" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">{wf.name}</h3>
                    <span className="text-[12px] font-bold text-[#0066FF] bg-[rgba(0,102,255,0.1)] px-3 py-1 rounded-full shrink-0">{wf.level}</span>
                  </div>
                  <p className="text-[15px] text-[rgba(255,255,255,0.55)] leading-relaxed mb-2">{wf.desc}</p>
                  <p className="text-[14px] text-[rgba(255,255,255,0.4)]">{wf.learns}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IDEAS TO BUILD ═══ */}
      <section className="py-24 px-6 md:px-12 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-center" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              Ideas to Build
            </h2>
            <p className="text-[rgba(255,255,255,0.5)] text-center mb-12 text-[15px]">
              עשרה פרויקטים מהקל לקשה. תבחרו אחד ותתחילו
            </p>
          </ScrollReveal>

          <div className="space-y-3">
            {ideas.map((idea, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 p-5 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl text-right">
                  <span className="text-[13px] font-bold text-[rgba(255,255,255,0.15)] mt-0.5 shrink-0 w-6" style={{ fontFamily: "var(--font-outfit)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="text-[15px] font-bold text-[rgba(255,255,255,0.8)]" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">{idea.name}</h4>
                      <span className="text-[12px] text-[rgba(255,255,255,0.3)] shrink-0">{idea.time}</span>
                    </div>
                    <p className="text-[14px] text-[rgba(255,255,255,0.45)] mt-1">{idea.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMING SOON SECTIONS ═══ */}
      <section className="py-24 px-6 md:px-12 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-12 text-center" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              Coming Soon
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {comingSoon.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="p-6 bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.04)] rounded-xl opacity-60 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[15px] font-extrabold text-[rgba(255,255,255,0.6)]" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">{item.title}</h3>
                    <span className="text-[11px] font-bold bg-gradient-to-r from-[#0066FF]/20 to-[#00B4D8]/20 border border-[#0066FF]/30 text-[#00B4D8] px-2.5 py-0.5 rounded-full shrink-0">
                      בקרוב
                    </span>
                  </div>
                  <p className="text-[14px] text-[rgba(255,255,255,0.35)] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <section className="py-20 px-6 md:px-12 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.9] mb-6">
              רוצים ללמוד לבנות עם מומחה? ב-Builders Lab אנחנו בונים agents ופתרונות end-to-end, מלמדים בקורסים, ומנהלים קהילה של בילדרים.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <a href="https://builderslab.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[15px] font-bold text-[#0066FF] hover:text-[#00B4D8] transition-colors" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              builderslab.ai →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
