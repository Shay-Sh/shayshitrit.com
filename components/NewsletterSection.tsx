import { Newsletter } from "./Newsletter";
import { ScrollReveal } from "./ScrollReveal";

export function NewsletterSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-[560px] mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-black mb-3">ניוזלטר לבילדרים</h2>
          <p className="text-[rgba(255,255,255,0.55)] text-[15px] mb-8 leading-relaxed">
            תובנות על AI, כלים, ובנייה — בעברית.<br />רק דברים שעובדים.
          </p>
          <Newsletter />
        </ScrollReveal>
      </div>
    </section>
  );
}
