import { ScrollReveal } from "./ScrollReveal";

interface Props {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: Props) {
  return (
    <section className="pt-36 pb-20 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto text-center">
        <ScrollReveal>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
            dir="ltr"
          >
            {title}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-lg md:text-xl text-[rgba(255,255,255,0.55)] leading-relaxed max-w-[600px] mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
