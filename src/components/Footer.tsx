import { clinic } from "@/lib/clinic";

const links = [
  { href: "#treatments", label: "Treatments" },
  { href: "#doctors", label: "Doctors" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-porcelain">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-medium tracking-tight">Lumina Dental</p>
          <p className="mt-2 max-w-xs text-sm text-porcelain/60">
            Gentle, modern dentistry in Indiranagar. Open 7 days.
          </p>
        </div>
        <nav>
          <ul className="flex flex-wrap gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-porcelain/70 transition-colors hover:text-porcelain">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-porcelain/10 px-5 pt-6 md:px-8">
        <p className="text-xs text-slate-soft">
          © {new Date().getFullYear()} {clinic.fullName}. Website by Sreeraj H.
        </p>
      </div>
    </footer>
  );
}
