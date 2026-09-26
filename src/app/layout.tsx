import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { Shell } from "@/components/shell";
import { site } from "@/lib/site";
import "./globals.css";
import "./motion.css";

// Hides reveal targets before first paint; drops the flag if the app never hydrates.
const motionFlag = `(function(){try{var d=document.documentElement;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("m");setTimeout(function(){if(!window.__msdMotion)d.classList.remove("m")},6000)}catch(e){}})();`;

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0e0c0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.milkstreetdistillery.com"),
  title: {
    default: "Milk Street Distillery",
    template: "%s · Milk Street Distillery",
  },
  description:
    "Sussex County's first distillery in over 70 years. We are a true grain to glass distillery, as everything is mashed, fermented, distilled and bottled on site.",
  openGraph: {
    title: "Milk Street Distillery",
    description: "Sussex County's first distillery in over 70 years, in Branchville, New Jersey.",
    images: ["/media/place/column-still.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milk Street Distillery",
    description: "Sussex County's first distillery in over 70 years, in Branchville, New Jersey.",
    images: ["/media/place/column-still.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>
        <JsonLd />
        <Shell>{children}</Shell>
        <span className="sr-only">{site.name}</span>
      </body>
    </html>
  );
}
