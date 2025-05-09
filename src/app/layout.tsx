import Head from "next/head";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IRL by Club Xperiences - Discover Social Events Near You",
  description:
    "IRL is a social discovery product by Club Xperiences, helping professionals and creators find jamming sessions, book clubs, art meetups, and more — near you.",
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


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-black text-white overflow-x-hidden">
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <footer className="p-4 bg-primary text-center text-white">
            © {new Date().getFullYear()} Club Xperiences
          </footer>
        </div>
      </body>
    </html>
  );
}
