import { IntroOverlay } from "./IntroOverlay";
import { GridSection } from "./GridSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IRL by Club Xperiences - Discover Social Events Near You",
  description:
    "IRL is a social discovery product by Club Xperiences, helping professionals and creators find jamming sessions, book clubs, art meetups, and more near you.",
  keywords: [
    "IRL",
    "Club Xperiences",
    "social events",
    "Clubs",
    "meetups",
    "local meetups",
    "jamming sessions",
    "book clubs",
    "creative communities",
    "event discovery",
    "coming soon",
    "bento grid UI",
  ],
  authors: [{ name: "Club Xperiences", url: "https://clubxperiences.com" }],
  robots: "index, follow",
  openGraph: {
    title: "IRL Social Discovery by Club Xperiences",
    description:
      "Coming soon: A platform to help you discover and join authentic, local experiences with like-minded people.",
    type: "website",
    url: "https://clubxperiences.com/irl",
    siteName: "IRL by Club Xperiences",
    images: [
      {
        url: "https://clubxperiences.com/og-irl.png",
        width: 1200,
        height: 630,
        alt: "IRL by Club Xperiences – Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRL – Social Discovery by Club Xperiences",
    description: "Find meetups, jams, and real-world events near you.",
    images: ["https://clubxperiences.com/og-irl.png"],
    creator: "@clubxperiences",
  },
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <IntroOverlay />
      <GridSection />
      <div
        id="yellow-section"
        className="h-screen bg-yellow-500 flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-black">Full-Screen Yellow</h2>
      </div>
    </main>
  );
}
