"use client";

import { useState, FormEvent } from "react";

const WEBHOOK_URL = "https://lab17.app.n8n.cloud/webhook/75b26059-bd7d-4263-a47a-4900f35f7c2e";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
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
        body: JSON.stringify({ email, source: "newsletter" }),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-[16px] font-bold animate-[fadeUp_0.5s_ease_forwards]">
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00B4D8] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        תודה! נשמע ממך בקרוב 🙏
      </div>
    );
  }

  return (
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
        {loading ? "..." : "הרשמה"}
      </button>
      {error && <p className="w-full text-center text-[13px] text-red-400 mt-2">משהו השתבש, נסו שוב</p>}
    </form>
  );
}
