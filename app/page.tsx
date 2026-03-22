import Link from "next/link";
import Image from "next/image";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { ScrollReveal } from "@/components/ScrollReveal";
import { NewsletterSection } from "@/components/NewsletterSection";

const principles = [
  { num: "01", title: "Just Do It", heb: "פשוט תתחילו", desc: "אל תחכו לאסטרטגיה מושלמת. תבנו משהו קטן. תלמדו. תשפרו." },
  { num: "02", title: "Production > Slides", heb: "", desc: "מערכת שעובדת מלמדת יותר מכל מצגת. תגיעו למציאות." },
  { num: "03", title: "The Tools Changed, The Thinking Stays", heb: "הכלים משנים, החשיבה נשארת", desc: "AI הפך בנייה לנגישה לכולם. תשתמשו בזה." },
  { num: "04", title: "Share Everything", heb: "", desc: "תנו בחינם. הקהילה מחזירה פי עשר." },
  { num: "05", title: "Real Numbers, Not Hype", heb: "", desc: "תראו תוצאות. תהיו כנים לגבי מה עובד ומה לא." },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleCanvas />
        <div className="absolute -top-48 -right-64 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,102,255,0.06)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute -bottom-36 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,180,216,0.04)_0%,transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 py-32 w-full text-center">
          <h1 dir="ltr" style={{ fontFamily: "var(--font-outfit)" }}>
            {["The world doesn't need", "more AI strategy."].map((line, i) => (
              <span
                key={i}
                className="block text-[clamp(36px,7vw,72px)] font-black leading-[1.08] tracking-[-0.03em] opacity-0 animate-[slideUp_0.65s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ animationDelay: `${0.15 + i * 0.2}s` }}
              >
                {line}
              </span>
            ))}
            <span
              className="block text-[clamp(36px,7vw,72px)] font-black leading-[1.08] tracking-[-0.03em] opacity-0 animate-[slideUp_0.65s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{ animationDelay: "0.55s" }}
            >
              It needs more <span style={{ fontFamily: "var(--font-heebo)" }}>בילדרס</span>.
            </span>
          </h1>

          <p
            className="mt-8 text-[clamp(16px,2.5vw,20px)] text-[rgba(255,255,255,0.65)] leading-relaxed max-w-[560px] mx-auto opacity-0 animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ animationDelay: "0.9s" }}
          >
            העולם מלא באסטרטגיות, מצגות, ותוכניות חמש-שנתיות.
            <br />
            מה שחסר הוא אנשים שבונים. שמתחילים. שמגיעים לפרודקשן.
          </p>

          <div
            className="mt-10 opacity-0 animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ animationDelay: "1.2s" }}
          >
            <Link
              href="/mindset"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0066FF] hover:bg-[#0052CC] text-white text-[15px] font-bold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,102,255,0.3)]"
              style={{ fontFamily: "var(--font-outfit)" }}
              dir="ltr"
            >
              The Builder Mindset →
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-[slideUp_0.5s_1.8s_forwards]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" className="animate-bounce">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* ═══ WHO AM I ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <div className="w-44 h-44 md:w-52 md:h-52 mx-auto mb-8">
              <Image src="/shay_nobackground.png" alt="שי שטרית - בילדר AI ומייסד Lab17" width={208} height={208} className="w-full h-full object-contain" priority />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-3xl md:text-4xl font-black mb-6">שי שטרית</h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-[18px] md:text-[20px] leading-[1.8] text-[rgba(255,255,255,0.72)] max-w-[600px] mx-auto mb-6">
              נשוי ליוליה ואבא ל-4. מהנדס תעשייה וניהול, מנהל מוצר, וחי AI.
              <br />
              מייסד <strong className="text-[#F0F0F5]">Lab17</strong> ושותף מייסד <strong className="text-[#F0F0F5]">Builders Lab</strong>.
              <br />
              בונה מערכות ו-AI Agents שעובדים בפרודקשן.
            </p>
            <Link href="/about" className="inline-block text-[14px] font-bold text-[#0066FF] hover:text-[#00B4D8] transition-colors">
              עוד עליי ←
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF - LOGO WALL ═══ */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-[960px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[18px] md:text-[20px] text-[rgba(255,255,255,0.5)] mb-12">
              בניתי agents, אוטומציות, והכשרתי צוותים בחברות כמו
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-8 md:gap-10 items-center justify-items-center" dir="ltr">
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((n) => (
                <div key={n} className="flex items-center justify-center h-12 md:h-16">
                  <img src={`/logos/${n}.svg`} alt="" className="h-full w-auto brightness-0 invert opacity-50 hover:opacity-80 transition-opacity" loading="lazy" />
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-[13px] text-[rgba(255,255,255,0.3)] mt-8">ועוד עשרות חברות נוספות</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ THE SHIFT ═══ */}
      <section className="py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto space-y-20 md:space-y-28 text-center">
          {[
            {
              en: "Strategy Without Building is Just Talking",
              he: "90% מפרויקטי ה-AI שמתחילים באסטרטגיה לא מגיעים לפרודקשן. לא כי הטכנולוגיה לא עובדת. כי אף אחד לא התחיל לבנות.",
            },
            {
              en: "The Tools Changed Everything",
              he: "AI שינה את מי שיכול לבנות. היום, כל מי שמוכן ללמוד יכול לקחת רעיון ולהפוך אותו למערכת שעובדת בפרודקשן. בלי צוות פיתוח. בלי תקציב ענק.",
            },
            {
              en: "Builders Learn by Doing",
              he: "הלקח שלמדתי מעבודה עם יותר מחמישים חברות: הצוותים שבונים משהו קטן ומגיעים לפרודקשן תוך שבועות מנצחים את הצוותים שמתכננים חודשים.",
            },
          ].map((block, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div>
                <h2
                  className="text-xl md:text-2xl font-extrabold mb-4 text-[rgba(255,255,255,0.9)]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                  dir="ltr"
                >
                  {block.en}
                </h2>
                <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.85]">
                  {block.he}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ PRINCIPLES PREVIEW ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-black mb-16"
              style={{ fontFamily: "var(--font-outfit)" }}
              dir="ltr"
            >
              The Builder&apos;s Principles
            </h2>
          </ScrollReveal>

          <div className="space-y-10">
            {principles.map((p, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group">
                  <div className="flex items-baseline justify-center gap-4 mb-2">
                    <span className="text-[13px] font-bold text-[rgba(255,255,255,0.15)]" style={{ fontFamily: "var(--font-outfit)" }}>
                      {p.num}
                    </span>
                    <h3 className="text-lg md:text-xl font-extrabold group-hover:text-[#0066FF] transition-colors" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
                      {p.title}
                    </h3>
                  </div>
                  {p.heb && <div className="text-[14px] text-[rgba(255,255,255,0.4)] font-bold mb-1">{p.heb}</div>}
                  <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="mt-14">
              <Link href="/mindset" className="text-[15px] font-bold text-[#0066FF] hover:text-[#00B4D8] transition-colors">
                קראו את הפילוסופיה המלאה ←
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ TWO PATHS ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[16px] text-[rgba(255,255,255,0.5)] mb-12 max-w-[560px] mx-auto leading-relaxed">
              הפילוסופיה הזאת רלוונטית לכל מי שעובד עם AI, בין אם אתם מובילים ארגון או בונים לבד.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { en: "For Organizations", he: "איך הגישה של הבילדרים משנה ארגונים. מה למדתי מעבודה עם 50+ חברות.", href: "/organizations" },
              { en: "For Builders", he: "הכלים, הגישה, ואיך להתחיל לבנות. הסטאק שמשנה הכל.", href: "/stack" },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <Link
                  href={card.href}
                  className="flex flex-col h-full p-8 md:p-10 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)] transition-all group text-center"
                >
                  <h3
                    className="text-xl md:text-2xl font-extrabold mb-3 group-hover:text-[#0066FF] transition-colors"
                    style={{ fontFamily: "var(--font-outfit)" }}
                    dir="ltr"
                  >
                    {card.en}
                  </h3>
                  <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-relaxed mb-5 flex-1">{card.he}</p>
                  <span className="text-[14px] font-bold text-[#0066FF]">קראו עוד ←</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-8">
              <Link href="/start" className="text-[14px] text-[rgba(255,255,255,0.4)] hover:text-[#0066FF] transition-colors">
                חדשים בבנייה? התחילו מפה ←
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <NewsletterSection />
    </>
  );
}
