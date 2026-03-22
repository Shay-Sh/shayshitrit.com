import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { workflows } from "./data";

export const metadata: Metadata = {
  title: "Workflows",
  description: "n8n workflows אמיתיים שאפשר להוריד ולהתחיל לעבוד איתם. בחינם או עם הרשמה.",
};

export default function WorkflowsPage() {
  return (
    <>
      <PageHero title="Workflows" subtitle="n8n workflows אמיתיים שאפשר להוריד ולהתחיל לעבוד איתם" />

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <div className="space-y-5">
            {workflows.map((wf, i) => (
              <ScrollReveal key={wf.slug} delay={i * 70}>
                <Link
                  href={`/workflows/${wf.slug}`}
                  className="block p-7 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)] transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <h3
                        className="text-xl font-black text-[rgba(255,255,255,0.9)] group-hover:text-[#0066FF] transition-colors"
                        style={{ fontFamily: "var(--font-outfit)" }}
                        dir="ltr"
                      >
                        {wf.name}
                      </h3>
                      {wf.isFree && (
                        <span className="text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                          Free
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        wf.complexity === "intermediate"
                          ? "bg-[rgba(0,102,255,0.12)] text-[#4d9fff] border border-[rgba(0,102,255,0.25)]"
                          : "bg-gradient-to-r from-[rgba(0,102,255,0.12)] to-[rgba(0,180,216,0.12)] text-[#00B4D8] border border-[rgba(0,180,216,0.25)]"
                      }`}>
                        {wf.complexity}
                      </span>
                      <span className="text-[12px] text-[rgba(255,255,255,0.25)]">{wf.nodes} nodes</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-[rgba(255,255,255,0.55)] leading-relaxed text-right mb-3">{wf.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {wf.tools.map((tool) => (
                      <span key={tool} className="text-[11px] text-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.04)] px-2 py-0.5 rounded" dir="ltr">
                        {tool}
                      </span>
                    ))}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
