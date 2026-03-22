import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Builder Mindset",
  description: "הפילוסופיה שמשנה את הדרך שבה אנחנו עובדים עם AI. חמישה עקרונות של בילדרים.",
};

const principles = [
  {
    num: "01", title: "Just Do It", heb: "פשוט תתחילו",
    body: [
      "האויב הגדול ביותר של התקדמות הוא תכנון יתר. אני רואה את זה שוב ושוב -חברות שמבלות חודשים בבניית אסטרטגיית AI, בסקרי שוק, בהשוואת כלים, בבניית roadmaps מפורטים. ובסוף? אף אחד לא בנה כלום.",
      "הגישה של הבילדרים הפוכה: תבנו משהו קטן. לא משנה מה. agent פשוט שעונה על שאלות. אוטומציה שחוסכת שעה ביום. workflow שמחליף תהליך ידני. תגיעו לפרודקשן תוך שבועות, לא חודשים.",
      "למה? כי מערכת שעובדת מלמדת אתכם יותר מכל תוכנית. אתם לומדים מה באמת עובד, מה לא, מה המשתמשים צריכים, ואיפה הערך האמיתי. אי אפשר ללמוד את זה ממצגת.",
    ],
  },
  {
    num: "02", title: "Production > Slides", heb: "",
    body: [
      "מצגות מתארות עתיד שאף פעם לא מגיע. מערכת שעובדת בפרודקשן מלמדת את כולם -את הצוות, את הלקוחות, את ההנהלה. היא מראה מה אפשרי ומה לא.",
      "הדרך הכי מהירה לבנות שריר ארגוני של AI היא לשים משהו אמיתי מול משתמשים. לא demo. לא POC שנשמר בתיקייה. מערכת אמיתית שאנשים אמיתיים משתמשים בה.",
      "הגרסה הראשונה לא תהיה מושלמת. זה בדיוק הפוינט. המושלמות מגיעה דרך איטרציות, לא דרך תכנון.",
    ],
  },
  {
    num: "03", title: "The Tools Changed, The Thinking Stays", heb: "הכלים משנים, החשיבה נשארת",
    body: [
      "AI דמוקרטיזציה של בנייה. היום לא חייבים להיות מפתחים כדי לבנות מערכות פרודקשן. כלים כמו Claude Code, n8n, Lovable -הם הופכים כל מי שמוכן ללמוד לבילדר.",
      "אבל הכלים הם רק הכלים. החשיבה -ארכיטקטורה, פירוק בעיות, אמפתיה למשתמש, חשיבה על edge cases -זה נשאר. AI לא מחליף חשיבה. הוא מעצים אותה.",
      "לכן אני אומר ״הכלים משנים, החשיבה נשארת״. תלמדו את הכלים, אבל תשקיעו יותר בחשיבה. הכלים ישתנו. היכולת לחשוב נכון -תישאר.",
    ],
  },
  {
    num: "04", title: "Share Everything", heb: "",
    body: [
      "כל workflow שבניתי, כל תובנה שגיליתי, כל טעות שעשיתי -אני משתף בחינם. לא כי אני נדיב במיוחד. כי זו האסטרטגיה הכי אפקטיבית שיש.",
      "כשאתה נותן, אתה מקבל חזרה פי עשר. אנשים שולחים לך בעיות מעניינות. חברות פונות אליך עם פרויקטים. קהילה שלמה גדלה סביבך. ובנתיים -אתה מחדד את החשיבה שלך כי אתה מנסח אותה בשביל אחרים.",
      "בעולם שבו ידע נגיש לכולם, היתרון התחרותי הוא לא מה שאתה יודע. זה כמה מהר אתה בונה, כמה מהר אתה לומד, וכמה אנשים סומכים עליך.",
    ],
  },
  {
    num: "05", title: "Real Numbers, Not Hype", heb: "",
    body: [
      "עולם ה-AI מלא ב-hype. כל יום יש tool חדש, demo מרשים, והבטחות שישנו הכל. בילדרים עובדים אחרת -הם מראים תוצאות אמיתיות.",
      "מה זה אומר בפועל? לספר מה עבד ומה לא. לשתף מספרים אמיתיים מפרודקשן. להיות כנים לגבי מגבלות. לא לעגל פינות ולא להפריז.",
      "אמינות נבנית משקיפות, לא מהצגת מושלמות. ככל שאתם יותר כנים לגבי האתגרים, כך אנשים יותר סומכים על ההצלחות.",
    ],
  },
];

export default function MindsetPage() {
  return (
    <>
      <PageHero title="The Builder Mindset" subtitle="הפילוסופיה שמשנה את הדרך שבה אנחנו עובדים עם AI" />

      <section className="pb-12 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-[18px] text-[rgba(255,255,255,0.68)] leading-[1.9]">
              ה-builder mindset זה לא על כלים או קוד. זה על דרך חשיבה -להתחיל קטן, לשלוח מהר, ללמוד מהמציאות, ולשתף בפתיחות. הגישה הזו הייתה קיימת לפני AI, אבל AI הפך אותה לחזקה פי מאה -כי עכשיו כל אחד יכול לבנות.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto space-y-28 md:space-y-36">
          {principles.map((p, i) => (
            <ScrollReveal key={i}>
              <article className="text-center">
                <div className="mb-6">
                  <span className="text-[14px] font-bold text-[rgba(255,255,255,0.12)] block mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    {p.num}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
                    {p.title}
                  </h2>
                  {p.heb && <div className="text-[15px] text-[rgba(255,255,255,0.35)] font-bold mt-1">{p.heb}</div>}
                </div>
                <div className="space-y-5 text-right">
                  {p.body.map((para, j) => (
                    <p key={j} className="text-[17px] text-[rgba(255,255,255,0.68)] leading-[1.9]">{para}</p>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-xl md:text-2xl font-bold text-[rgba(255,255,255,0.75)] leading-relaxed mb-12">
              הפילוסופיה הזאת עובדת. בין אם אתם מובילים ארגון שרוצה לאמץ AI, או בילדרים שרוצים להתחיל לבנות -הדרך אותו דבר. פשוט תתחילו.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/organizations" className="px-6 py-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[14px] font-bold hover:border-[rgba(255,255,255,0.15)] transition-all" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              For Organizations →
            </Link>
            <Link href="/stack" className="px-6 py-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[14px] font-bold hover:border-[rgba(255,255,255,0.15)] transition-all" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              For Builders →
            </Link>
            <Link href="/start" className="px-6 py-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[14px] font-bold hover:border-[rgba(255,255,255,0.15)] transition-all" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              Start Building →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
