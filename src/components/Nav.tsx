"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { menuCategories } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu", dropdown: true },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b-[1.5px] border-line">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={44} />
          <span className="font-display font-medium text-lg text-ink">
            Mitchell&apos;s
          </span>
        </Link>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-6 font-display font-medium text-[15px] text-body">
          {links.map((l) =>
            l.dropdown ? (
              <div key={l.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  className={`flex items-center gap-1 pb-0.5 cursor-pointer ${
                    pathname === l.href
                      ? "text-pine border-b-2 border-pine"
                      : "hover:text-pine"
                  }`}
                  aria-expanded={menuOpen}
                  aria-haspopup="true"
                >
                  Menu <span className="text-xs">▾</span>
                </button>
                {menuOpen && (
                  <div className="absolute top-9 left-0 w-56 bg-white border-[1.5px] border-[#cfccc2] rounded-lg shadow-[0_6px_18px_rgba(0,0,0,.12)] p-1.5 text-sm">
                    <Link
                      href="/menu"
                      className="block px-3 py-2 border-b border-dashed border-line font-semibold text-pine hover:bg-cream"
                    >
                      Full Menu
                    </Link>
                    {menuCategories.map((c, i) => (
                      <Link
                        key={c.id}
                        href={`/menu#${c.id}`}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 hover:bg-cream ${
                          i < menuCategories.length - 1
                            ? "border-b border-dashed border-line"
                            : ""
                        }`}
                      >
                        {c.label}
                        {c.isNew && (
                          <span className="text-[9px] font-bold bg-terracotta text-white px-1.5 py-px rounded">
                            NEW
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`pb-0.5 ${
                  pathname === l.href
                    ? "text-pine border-b-2 border-pine"
                    : "hover:text-pine"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href={restaurant.orderOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white border-2 border-[#cfccc2] rounded-lg hover:border-olive"
          >
            Order Online
          </a>
          <a
            href={restaurant.phoneHref}
            className="px-4 py-2 bg-olive text-white rounded-lg border-2 border-olive-dark hover:bg-olive-dark"
          >
            Reserve a Table
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden text-2xl text-olive cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          ≡
        </button>
      </nav>

      {/* mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t-[1.5px] border-line bg-cream px-5 pb-5 pt-2 font-display font-medium text-body">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block py-2.5 border-b border-dashed border-line ${
                pathname === l.href ? "text-pine" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href={restaurant.orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 bg-white border-2 border-[#cfccc2] rounded-lg"
            >
              Order Online
            </a>
            <a
              href={restaurant.phoneHref}
              className="flex-1 text-center px-4 py-2.5 bg-olive text-white rounded-lg border-2 border-olive-dark"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
