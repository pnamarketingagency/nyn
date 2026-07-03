import { GoogleLogo, StarIcon } from "./ui/Icons";
import { Logo } from "./ui/Logo";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Detailing & Paint Correction", href: "#services" },
      { label: "Ceramic Coatings", href: "#services" },
      { label: "Paint Protection Film (PPF)", href: "#services" },
      { label: "Vehicle Wrapping", href: "#services" },
      { label: "Window Tinting", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
      { label: "Visit the bay", href: "#location" },
      { label: "Get a Quote", href: "#quote" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative">
      <div className="divider-etched absolute inset-x-0 top-0" />
      <div className="container-pad mx-auto max-w-7xl pt-16 pb-10 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo height={76} />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-chrome-300">
              Brisbane&apos;s premium detailing, paint correction, ceramic
              coating, PPF and vehicle wrapping specialists. Hand-finished by
              Sam in our Slacks Creek bay.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <GoogleLogo className="h-4 w-4" />
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3 w-3 text-amber-300" />
                ))}
              </div>
              <span className="text-[12.5px] font-semibold text-white">
                5.0 Google
              </span>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-chrome-400">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-chrome-200 transition-colors hover:text-white cursor-pointer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-chrome-400">
              Visit
            </div>
            <address className="mt-5 not-italic text-[14px] leading-relaxed text-chrome-200">
              2/10 Judds Ct<br />
              Slacks Creek QLD 4127<br />
              Australia
            </address>
            <a
              href="mailto:hello@nyn-detailing.com.au"
              className="mt-4 inline-block text-[14px] text-chrome-200 underline-offset-4 transition-colors hover:text-white hover:underline cursor-pointer"
            >
              hello@nyn-detailing.com.au
            </a>
          </div>
        </div>

        <div className="divider-etched mt-12" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div className="text-[12px] text-chrome-500">
            © {new Date().getFullYear()} NYN Detailing. All rights reserved.
          </div>
          <div className="text-[12px] text-chrome-500">
            Hand-built in Brisbane. Premium-only films &amp; coatings.
          </div>
        </div>
      </div>
    </footer>
  );
}
