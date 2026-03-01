import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "321Oak — Every Student Can Master Anything",
  description:
    "321Oak is a non-profit learning platform dedicated to the belief that every student can master anything with the right support, pacing, and encouragement.",
  metadataBase: new URL("https://321oak.com"),
  openGraph: {
    title: "321Oak — Every Student Can Master Anything",
    description:
      "A free, open learning platform combining mastery-based progression, spaced repetition, and built-in accommodations for every K–12 learner.",
    type: "website",
    url: "https://321oak.com",
    siteName: "321Oak",
  },
  twitter: {
    card: "summary",
    title: "321Oak — Every Student Can Master Anything",
    description:
      "A free, open learning platform combining mastery-based progression, spaced repetition, and built-in accommodations for every K–12 learner.",
  },
};

function Footer() {
  return (
    <footer className="border-t border-warm-200 bg-warm-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-display text-sm font-semibold text-warm-700">
              321Oak
            </p>
            <p className="mt-1 text-xs text-warm-500">
              A 501(c)(3) non-profit &middot; Every student can master anything.
            </p>
          </div>
          <div className="flex gap-6 text-xs text-warm-500">
            <a
              href="mailto:hello@321oak.com"
              className="rounded-sm transition-colors hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Contact
            </a>
            <a
              href="https://github.com/321oak"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm transition-colors hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-warm-200 pt-6 text-center text-xs text-warm-400">
          <p>&copy; {new Date().getFullYear()} 321Oak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${sourceSans.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
