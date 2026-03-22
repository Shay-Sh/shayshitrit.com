"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/mindset", label: "Mindset" },
    { href: "/organizations", label: "Organizations" },
    { href: "/stack", label: "Builders" },
    { href: "/workflows", label: "Workflows" },
    { href: "/about", label: "About" },
    { href: "/", label: "Home" },
  ];

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-[#0A0A14]/85 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]" : ""
      }`}
    >
      <Link
        href="/"
        className="text-[15px] font-extrabold text-[rgba(255,255,255,0.55)] hover:text-[#F0F0F5] transition-colors"
      >
        שי שטרית
      </Link>

      <ul className="hidden md:flex items-center gap-7">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`text-[13px] font-semibold transition-colors relative ${
                isActive(l.href)
                  ? "text-[#0066FF]"
                  : "text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.7)]"
              }`}
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute -bottom-1 inset-x-0 h-[1.5px] bg-[#0066FF] rounded-full" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden w-10 h-10 flex items-center justify-center text-[rgba(255,255,255,0.4)]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="תפריט"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {menuOpen ? (
            <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
          ) : (
            <><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></>
          )}
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0A0A14]/95 backdrop-blur-lg border-t border-[rgba(255,255,255,0.06)] md:hidden">
          <ul className="flex flex-col p-6 gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-[15px] font-semibold transition-colors ${
                    isActive(l.href)
                      ? "text-[#0066FF]"
                      : "text-[rgba(255,255,255,0.5)] hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
