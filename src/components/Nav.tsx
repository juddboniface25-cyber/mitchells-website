"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
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
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menuOpen]);

  // Escape closes whichever surface is open and returns focus to its trigger,
  // so a keyboard user is never stranded inside a panel they can't dismiss.
  useEffect(() => {
    if (!menuOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (menuOpen) {
        setMenuOpen(false);
        dropdownTriggerRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        mobileTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b-[1.5px] border-line">
      <nav
        aria-label="Main"
        className="mx-auto max-w-6xl h-[var(--nav-h)] flex items-center justify-between px-5"
      >
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
                  ref={dropdownTriggerRef}
                  onClick={() => setMenuOpen((v) => !v)}
                  className={`flex items-center gap-1 pb-0.5 cursor-pointer ${
                    pathname === l.href
                      ? "text-pine border-b-2 border-pine"
                      : "hover:text-pine"
                  }`}
                  aria-expanded={menuOpen}
                  aria-haspopup="menu"
                >
                  Menu{" "}
                  <span aria-hidden="true" className="text-xs">
                    ▾
                  </span>
                </button>
                {menuOpen && (
                  <div
                    role="menu"
                    aria-label="Menu categories"
                    className="absolute top-9 left-0 w-56 bg-white border-[1.5px] border-control rounded-lg shadow-[0_6px_18px_rgba(0,0,0,.12)] p-1.5 text-sm"
                  >
                    <Link
                      href="/menu"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 border-b border-dashed border-line font-semibold text-pine hover:bg-cream"
                    >
                      Full Menu
                    </Link>
                    {menuCategories.map((c, i) => (
                      <Link
                        key={c.id}
                        href={`/menu#${c.id}`}
                        role="menuitem"
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
                aria-current={pathname === l.href ? "page" : undefined}
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
          <Button href={restaurant.orderOnlineUrl} variant="secondary" external>
            Order Online
          </Button>
          <Button href={restaurant.phoneHref}>Call to Reserve</Button>
        </div>

        {/* mobile toggle */}
        <button
          ref={mobileTriggerRef}
          className="md:hidden text-olive cursor-pointer p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3.5" y1="7" x2="20.5" y2="7" />
                <line x1="3.5" y1="12" x2="20.5" y2="12" />
                <line x1="3.5" y1="17" x2="20.5" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* mobile panel */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t-[1.5px] border-line bg-cream px-5 pb-5 pt-2 font-display font-medium text-body"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`block py-2.5 border-b border-dashed border-line ${
                pathname === l.href ? "text-pine" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          {/* Desktop gets the category dropdown; on mobile there was no path
              to a specific section without scrolling the whole menu page. */}
          <div className="flex flex-wrap gap-2 mt-4">
            {menuCategories.map((c) => (
              <Link
                key={c.id}
                href={`/menu#${c.id}`}
                className="text-[13px] px-3 py-1 rounded-full border border-control text-body"
              >
                {c.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 mt-5">
            <Button
              href={restaurant.orderOnlineUrl}
              variant="secondary"
              external
              className="flex-1"
            >
              Order Online
            </Button>
            <Button href={restaurant.phoneHref} className="flex-1">
              Call to Reserve
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
