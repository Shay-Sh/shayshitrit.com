"use client";

import { useState, FormEvent } from "react";

const WEBHOOK_URL = "https://lab17.app.n8n.cloud/webhook/75b26059-bd7d-4263-a47a-4900f35f7c2e";

interface Props {
  slug: string;
  isFree: boolean;
}

export function WorkflowDownload({ slug, isFree }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const hp = form.querySelector<HTMLInputElement>('[name="website"]');
    if (hp?.value) return;

    const email = form.querySelector<HTMLInputElement>('[type="email"]')?.value;
    if (!email) return;

    setLoading(true);
    setError(false);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "workflow-download", workflow: slug }),
      });
      setUnlocked(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const downloadLink = (
    <a
      href={`/workflows/${slug}.json`}
      download
      className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0066FF] hover:bg-[#0052CC] text-white text-[15px] font-bold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,102,255,0.3)]"
      style={{ fontFamily: "var(--font-outfit)" }}
      dir="ltr"
    >
      Download Workflow →
    </a>
  );

  if (isFree) {
    return <div className="mt-8">{downloadLink}</div>;
  }

  if (unlocked) {
    return (
      <div className="mt-8">
        <p className="text-[15px] text-[rgba(255,255,255,0.55)] mb-4">תודה! הנה הקובץ:</p>
        {downloadLink}
      </div>
    );
  }

  return (
    <div className="mt-8">
      <p className="text-[15px] text-[rgba(255,255,255,0.55)] mb-4">הכניסו אימייל כדי להוריד את ה-workflow</p>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap justify-center">
        <input type="text" name="website" className="absolute -left-[9999px] opacity-0 h-0 w-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input
          type="email"
          required
          dir="ltr"
          placeholder="הכניסו אימייל"
          className="flex-1 min-w-[200px] px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#F0F0F5] text-[14px] placeholder:text-[rgba(255,255,255,0.25)] outline-none focus:border-[#0066FF] focus:shadow-[0_0_16px_rgba(0,102,255,0.12)] transition-all text-right"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-7 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-[14px] rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "..." : "הורידו"}
        </button>
      </form>
      {error && <p className="text-center text-[13px] text-red-400 mt-2">משהו השתבש, נסו שוב</p>}
    </div>
  );
}
