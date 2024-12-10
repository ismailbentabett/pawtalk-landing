"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect } from "react";

// Define Google Analytics configuration type
interface GoogleAnalyticsConfig {
  page_path: string;
  [key: string]: string | boolean | number;
}

// Define window.gtag function type
declare global {
  interface Window {
    dataLayer: never[];
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: GoogleAnalyticsConfig
    ) => void;
  }
}

// Define your Google Analytics Measurement ID
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "GA_MEASUREMENT_ID";

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && window.gtag) {
      // Construct the full URL including search params
      const url = searchParams.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      // Send pageview with the full URL
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
        transport_type: "beacon",
        send_page_view: true,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsContent />
      </Suspense>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      {/* Initialize gtag */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_location: window.location.href,
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}
