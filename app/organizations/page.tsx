import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "For Organizations",
  description: "איך הגישה של הבילדרים משנה ארגונים. מה למדתי מעבודה עם 50+ חברות.",
};

export default function OrganizationsPage() {
  return (
    <>
      <PageHero title="For Organizations" subtitle="איך הגישה של הבילדרים משנה ארגונים" />

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">The Problem</h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9] mb-10 text-right">
              רוב פרויקטי ה-AI בארגונים נתקעים. לא כי הטכנולוגיה לא מוכנה -כי הגישה לא נכונה. מה שאני רואה שוב ושוב אצל יותר מחמישים חברות שעבדתי איתן:
            </p>
          </ScrollReveal>
          <div className="space-y-5 text-right">
            {[
              { title: "תכנון יתר", desc: "חודשים של אסטרטגיה, סקרי שוק, והשוואת כלים -לפני שמישהו בנה שורה אחת. בזמן הזה, המתחרים כבר בפרודקשן." },
              { title: "Pilot Purgatory", desc: "POCs שנשארים POCs. דמואים שמרשימים את ההנהלה אבל אף פעם לא מגיעים למשתמשים אמיתיים." },
              { title: "״נעשה את זה לבד״", desc: "צוותים שיכולים לבנות -אבל לוקח להם שישה חודשים במקום שישה שבועות. לא כי הם לא מוכשרים, כי אין להם את הניסיון של מי שכבר עשה את זה עשרות פעמים." },
              { title: "פחד להתחיל קטן", desc: "ארגונים רוצים פתרון מושלם מהיום הראשון. אז הם לא מתחילים בכלל." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl">
                  <h4 className="text-[16px] font-bold text-[rgba(255,255,255,0.8)] mb-2">{item.title}</h4>
                  <p className="text-[15px] text-[rgba(255,255,255,0.55)] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">The Builder Approach</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9] mb-8">מה משתנה כשארגון מאמץ גישת build-first:</p>
          </ScrollReveal>
          <div className="space-y-5 text-right">
            {[
              "תתחילו מבעיה אמיתית, לא מטכנולוגיה. לא ״בואו נשתמש ב-AI״ אלא ״מה הדבר שהכי מאט אותנו?״",
              "תבנו משהו קטן שעובד תוך שבועיים. לא demo -מערכת אמיתית עם משתמשים אמיתיים.",
              "תנו למערכת שעובדת ללמד את הארגון. ברגע שיש משהו בפרודקשן, כולם מבינים מה אפשרי.",
              "תאפשרו לצוותים לבנות בעצמם. Enablement, לא תלות. המטרה היא שאחרי שלושה חודשים, הצוות בונה בלעדיכם.",
              "תבנו על סמך data מפרודקשן, לא על סמך דרישות תיאורטיות.",
            ].map((text, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <p className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9] p-5 bg-[rgba(255,255,255,0.015)] rounded-lg">{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-10" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">What It Looks Like</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5 text-right">
            {[
              { title: "Hackathons", desc: "יום-יומיים אינטנסיביים שיוצרים רגע של ׳לפני ואחרי׳ בארגון. הצוות בונה agent או אוטומציה אמיתית -ורואה שזה אפשרי." },
              { title: "Co-Building", desc: "בנייה צד לצד עם מומחה. הצוות לומד תוך כדי עבודה על בעיה אמיתית שלהם, לא על תרגילים." },
              { title: "AI Enablement", desc: "תוכנית שהופכת צוותים לעצמאיים. מהבנת הכלים ועד בנייה של מערכות פרודקשן בלי עזרה חיצונית." },
              { title: "Voice AI", desc: "voice agents שמוכיחים ROI תוך שבועות. הדרך הכי מהירה להראות ערך עסקי אמיתי." },
              { title: "End-to-End Solutions", desc: "בניית מערכות AI מקצה לקצה שהצוות לומד מהן ומקבל קדימה. לא תלות -ידע שנשאר בארגון." },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="p-7 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl h-full">
                  <h4 className="text-[16px] font-bold mb-2 text-[rgba(255,255,255,0.85)]" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">{card.title}</h4>
                  <p className="text-[15px] text-[rgba(255,255,255,0.55)] leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[18px] text-[rgba(255,255,255,0.68)] leading-[1.9] mb-6">
              אם אתם רוצים להביא את הגישה הזאת לארגון שלכם -זה מה שאנחנו עושים ב-Lab17.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://lab17.ai" target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold text-[#0066FF] hover:text-[#00B4D8] transition-colors" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
                lab17.ai →
              </a>
              <a href="mailto:shay@builderslab.ai" className="text-[15px] font-bold text-[rgba(255,255,255,0.55)] hover:text-[#0066FF] transition-colors">
                shay@builderslab.ai ←
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
