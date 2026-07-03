import { CtaBand } from "./components/CtaBand";
import { Expertise } from "./components/Expertise";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { MobileCTABar } from "./components/MobileCTABar";
import { QuoteForm } from "./components/QuoteForm";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { TrustBar } from "./components/TrustBar";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "NYN Detailing",
  image: "https://nyn-detailing.local/og.jpg",
  description:
    "Premium vehicle wrapping, paint protection film (PPF), window tinting and detailing in Slacks Creek QLD.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2/10 Judds Ct",
    addressLocality: "Slacks Creek",
    addressRegion: "QLD",
    postalCode: "4127",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.6453,
    longitude: 153.1213,
  },
  url: "https://nyn-detailing.local",
  priceRange: "$$-$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    reviewCount: "50",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Header />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Services />
        <Expertise />
        <Testimonials />
        <CtaBand />
        <QuoteForm />
        <FAQ />
        <Location />
        <Footer />
      </main>
      <MobileCTABar />
    </>
  );
}
