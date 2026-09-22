import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { Shell } from "@/components/shell";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.milkstreetdistillery.com"),
  title: {
    default: "Milk Street Distillery · Grain to glass in Branchville",
    template: "%s · Milk Street Distillery",
  },
  description:
    "Sussex County’s grain-to-glass distillery. Mashed, fermented, distilled, and bottled at 1 Milk Street, Building 1, Branchville, NJ.",
  openGraph: {
    title: "Milk Street Distillery",
    description: "Grain to glass, on Milk Street. Branchville, New Jersey.",
    images: ["/media/place/column-still.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milk Street Distillery",
    description: "Grain to glass, on Milk Street.",
    images: ["/media/place/column-still.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd />
        <Shell>{children}</Shell>
        <span className="sr-only">{site.name}</span>
      </body>
    </html>
  );
}
