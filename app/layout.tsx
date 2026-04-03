"use client";

import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Smooth scroll with Lenis
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import("lenis");
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const raf = (time: number) => {
          lenis!.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } catch {
        // Lenis not available, fallback to CSS smooth scroll
      }
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cab'Qual — Conseil & Certification ISO, RSE | Paris</title>
        <meta
          name="description"
          content="20 ans d'expertise en conseil, audit et formation pour vos certifications ISO et démarches RSE. 300+ projets réussis. 9,5/10 de satisfaction client. Cabinet conseil Paris."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
