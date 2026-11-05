import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { clinic } from "@/lib/clinic";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(clinic.url),
  title: "Nacre Dental Studio — Indiranagar, Bengaluru",
  description:
    "Modern, gentle, judgement-free dental care in Indiranagar, Bengaluru. Digital X-rays, painless procedures, transparent pricing. 4.9 rating across 350+ Google reviews. Open 7 days.",
  keywords: [
    "Nacre Dental Studio",
    "dentist Indiranagar",
    "dental clinic Bengaluru",
    "painless root canal Bengaluru",
    "invisible aligners Bengaluru",
    "dental implants Indiranagar",
    "kids dentist Bengaluru",
  ],
  openGraph: {
    title: "Nacre Dental Studio — Dentistry that feels nothing like the dentist.",
    description:
      "Modern, gentle, judgement-free dental care for the whole family. Digital X-rays, painless procedures, transparent pricing. 4.9 stars, 350+ reviews.",
    url: clinic.url,
    siteName: clinic.fullName,
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: clinic.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.fullName,
  telephone: clinic.phone,
  url: clinic.url,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address.street,
    addressLocality: clinic.address.locality,
    addressRegion: clinic.address.region,
    postalCode: clinic.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: clinic.geo.lat,
    longitude: clinic.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: clinic.hours.opens,
    closes: clinic.hours.closes,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinic.rating.score,
    reviewCount: clinic.rating.count,
    bestRating: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
