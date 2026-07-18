"use client";

import { useEffect, useState } from "react";
import StarBorder from "@/components/reactbits/StarBorder";
import { waLink } from "@/lib/clinic";

const links = [
  { href: "#treatments", label: "Treatments" },
  { href: "#doctors", label: "Doctors" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-porcelain/80 backdrop-blur-md shadow-nav"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="font-display text-xl font-medium tracking-tight text-ink">
          Lumina Dental
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-soft transition-colors hover:text-glacier-deep"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <StarBorder
          as="a"
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          color="#7FB8C9"
          speed="5s"
          thickness={2}
          innerClassName="!py-[9px] !px-5 !text-[13px] font-semibold"
        >
          Book on WhatsApp
        </StarBorder>
      </nav>
    </header>
  );
}
