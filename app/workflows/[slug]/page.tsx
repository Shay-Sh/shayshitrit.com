import { notFound } from "next/navigation";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WorkflowDownload } from "@/components/WorkflowDownload";
import { workflows, getWorkflow } from "../data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return workflows.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wf = getWorkflow(slug);
  if (!wf) return { title: "Not Found" };
  return {
    title: wf.name,
    description: wf.desc,
  };
}

export default async function WorkflowPage({ params }: Props) {
  const { slug } = await params;
  const wf = getWorkflow(slug);
  if (!wf) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              {wf.isFree && (
                <span className="text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                  Free
                </span>
              )}
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                wf.complexity === "intermediate"
                  ? "bg-[rgba(0,102,255,0.12)] text-[#4d9fff] border border-[rgba(0,102,255,0.25)]"
                  : "bg-gradient-to-r from-[rgba(0,102,255,0.12)] to-[rgba(0,180,216,0.12)] text-[#00B4D8] border border-[rgba(0,180,216,0.25)]"
              }`}>
                {wf.complexity} / {wf.nodes} nodes
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
              dir="ltr"
            >
              {wf.name}
            </h1>
            <p className="text-[rgba(255,255,255,0.55)] text-lg leading-relaxed">{wf.desc}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* What It Does */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4 text-center" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              What It Does
            </h2>
            <p className="text-[17px] text-[rgba(255,255,255,0.6)] leading-[1.9] text-right">{wf.fullDesc}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Flow */}
      <section className="py-20 px-6 md:px-12 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-10 text-center" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              The Flow
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute top-0 bottom-0 right-[23px] md:right-[27px] w-px bg-[rgba(255,255,255,0.06)]" />

            <div className="space-y-6">
              {wf.steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex gap-5 items-start relative">
                    {/* Step number dot */}
                    <div className="w-[48px] md:w-[56px] shrink-0 flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        step.name.startsWith("---") ? "bg-[rgba(255,255,255,0.1)]" : "bg-[#0066FF]"
                      } shadow-[0_0_8px_rgba(0,102,255,0.3)] z-10`} />
                    </div>
                    {/* Step content */}
                    <div className="flex-1 pb-2 text-right">
                      <h4
                        className="text-[15px] font-bold text-[rgba(255,255,255,0.8)] mb-1"
                        style={{ fontFamily: "var(--font-outfit)" }}
                        dir="ltr"
                      >
                        {step.name.startsWith("---") ? step.name.replace(/---/g, "").trim() : step.name}
                      </h4>
                      <p className="text-[14px] text-[rgba(255,255,255,0.5)] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-6 md:px-12 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-center" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              What You&apos;ll Learn
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {wf.learns.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-3 text-right">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 shrink-0" />
                  <p className="text-[16px] text-[rgba(255,255,255,0.6)]">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="py-16 px-6 md:px-12 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-6" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              Tools Used
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {wf.tools.map((tool) => (
                <span key={tool} className="text-[14px] text-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] px-4 py-2 rounded-lg" dir="ltr">
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Download */}
      <section className="py-20 px-6 md:px-12 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-2" style={{ fontFamily: "var(--font-outfit)" }} dir="ltr">
              Download
            </h2>
            <p className="text-[rgba(255,255,255,0.5)] text-[15px] mb-2">
              {wf.isFree ? "הורידו את ה-workflow בחינם ותתחילו לבנות." : "הכניסו אימייל והורידו את ה-workflow."}
            </p>
            <WorkflowDownload slug={wf.slug} isFree={wf.isFree} />
          </ScrollReveal>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <Link href="/workflows" className="text-[14px] font-bold text-[rgba(255,255,255,0.35)] hover:text-[#0066FF] transition-colors">
            כל ה-workflows ←
          </Link>
        </div>
      </section>
    </>
  );
}
