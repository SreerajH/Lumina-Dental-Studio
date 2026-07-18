export const clinic = {
  name: "Lumina Dental",
  fullName: "Lumina Dental Studio",
  tagline: "Dentistry that feels nothing like the dentist.",
  url: "https://lumina-dental.vercel.app",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "919876543210",
  address: {
    line: "2nd Floor, Orchid Plaza, 100 Feet Road, Indiranagar, Bengaluru 560038",
    street: "2nd Floor, Orchid Plaza, 100 Feet Road, Indiranagar",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560038",
  },
  geo: { lat: 12.9784, lng: 77.6408 },
  hours: { label: "Mon – Sun, 9:00 AM to 9:00 PM", opens: "09:00", closes: "21:00" },
  rating: { score: 4.9, count: 350 },
  mapsEmbed:
    "https://www.google.com/maps?q=100+Feet+Road,+Indiranagar,+Bengaluru+560038&output=embed",
  mapsLink: "https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru",
};

export function waLink(message?: string) {
  const text = message ?? "Hi, I'd like to book an appointment at Lumina Dental";
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;
}

export type Treatment = {
  name: string;
  blurb: string;
  icon: "implant" | "aligner" | "rootcanal" | "makeover" | "kids" | "whitening";
};

export const featuredTreatments: Treatment[] = [
  {
    name: "Dental Implants",
    blurb: "Permanent, natural-looking replacements planned on 3D scans.",
    icon: "implant",
  },
  {
    name: "Invisible Aligners",
    blurb: "Straighten teeth quietly, no metal, no brackets.",
    icon: "aligner",
  },
  {
    name: "Root Canal (Painless)",
    blurb: "Single-sitting, microscope-guided, genuinely comfortable.",
    icon: "rootcanal",
  },
  {
    name: "Smile Makeover",
    blurb: "Veneers, whitening and contouring, designed to your face.",
    icon: "makeover",
  },
  {
    name: "Kids Dentistry",
    blurb: "Gentle first visits that build lifelong habits, not fear.",
    icon: "kids",
  },
];

export const allTreatments: Treatment[] = [
  ...featuredTreatments,
  {
    name: "Teeth Whitening",
    blurb: "In-clinic brightening, safe on enamel, visible in one visit.",
    icon: "whitening",
  },
];

export const doctors = [
  {
    name: "Dr. Ananya Rao",
    credentials: "MDS Prosthodontics",
    philosophy: "Every restoration should be invisible. If you can spot it, I redo it.",
  },
  {
    name: "Dr. Vikram Shetty",
    credentials: "MDS Endodontics",
    philosophy: "Pain-free is not a luxury. It is the minimum standard of care.",
  },
];

export const reviews = [
  {
    name: "Meera S.",
    text: "I put off my root canal for two years out of fear. It was over in 40 minutes and I felt nothing. I keep telling everyone this.",
  },
  {
    name: "Arjun K.",
    text: "They showed me the X-ray, explained three options with exact prices, and never pushed the expensive one. That honesty is why my whole family goes here now.",
  },
  {
    name: "Divya N.",
    text: "My 6-year-old asks when she can go back to the dentist. I did not think that sentence was possible.",
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "years of practice" },
  { value: 12000, suffix: "+", label: "smiles treated" },
  { value: 0, suffix: "", label: "pain, by protocol", display: "Zero" },
];
