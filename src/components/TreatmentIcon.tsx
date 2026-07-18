import type { Treatment } from "@/lib/clinic";

// Inline SVG line icons, 1.5px stroke, glacier-deep.
const paths: Record<Treatment["icon"], React.ReactNode> = {
  implant: (
    <>
      <path d="M9 3.5h6c1.1 0 2 .9 2 2 0 2.6-1 4-1.6 6.4l-.9 3.6c-.2.9-1.5.9-1.7 0l-.6-2.8a1.2 1.2 0 0 0-2.4 0l-.6 2.8c-.2.9-1.5.9-1.7 0l-.9-3.6C6 9.5 5 8.1 5 5.5c0-1.1.9-2 2-2h2z" />
      <path d="M9.5 18.5h5M10 21h4" />
    </>
  ),
  aligner: (
    <>
      <path d="M4 12c0-4 3.6-7.5 8-7.5s8 3.5 8 7.5" />
      <path d="M4 12c0 2 1.2 3.5 2.8 3.5S9.4 14 12 14s3.6 1.5 5.2 1.5S20 14 20 12" />
      <path d="M4 12h16" strokeDasharray="2 3" />
    </>
  ),
  rootcanal: (
    <>
      <path d="M9 3.5h6c1.1 0 2 .9 2 2 0 2.6-1 4-1.6 6.4l-.9 3.6c-.2.9-1.5.9-1.7 0l-.9-4.2a.9.9 0 0 0-1.8 0l-.9 4.2c-.2.9-1.5.9-1.7 0l-.9-3.6C6 9.5 5 8.1 5 5.5c0-1.1.9-2 2-2h2z" />
      <path d="M12 7v4" />
    </>
  ),
  makeover: (
    <>
      <path d="M6 14c0 3 2.7 5.5 6 5.5s6-2.5 6-5.5" />
      <path d="M6 14c1.5 1 3.7 1.6 6 1.6s4.5-.6 6-1.6" />
      <path d="M17.5 5.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
      <path d="M6.5 4.5l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3z" />
    </>
  ),
  kids: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9 10.5v.5M15 10.5v.5" strokeLinecap="round" />
      <path d="M8.5 14c1 1.3 2.1 2 3.5 2s2.5-.7 3.5-2" />
    </>
  ),
  whitening: (
    <>
      <path d="M9 4.5h6c1.1 0 2 .9 2 2 0 2.6-1 4-1.6 6.4l-.9 3.6c-.2.9-1.5.9-1.7 0l-.6-2.8a1.2 1.2 0 0 0-2.4 0l-.6 2.8c-.2.9-1.5.9-1.7 0l-.9-3.6C6 10.5 5 9.1 5 6.5c0-1.1.9-2 2-2h2z" />
      <path d="M18.5 3l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4z" />
    </>
  ),
};

export default function TreatmentIcon({ icon, size = 28 }: { icon: Treatment["icon"]; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2E6E80"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
