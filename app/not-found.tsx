import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-[120px] md:text-[180px] font-black text-[rgba(255,255,255,0.04)] leading-none" style={{ fontFamily: "var(--font-outfit)" }}>
          404
        </h1>
        <p className="text-xl font-bold text-[rgba(255,255,255,0.6)] -mt-8 mb-8">העמוד לא נמצא</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white text-[14px] font-bold rounded-lg transition-all hover:-translate-y-0.5"
          style={{ fontFamily: "var(--font-outfit)" }}
          dir="ltr"
        >
          Back Home →
        </Link>
      </div>
    </div>
  );
}
