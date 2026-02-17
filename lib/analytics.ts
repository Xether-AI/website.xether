import { track } from "@vercel/analytics"

type AnalyticsEvent =
    | { name: "form_submit"; properties: { form_id: string; status: "success" | "error" } }
    | { name: "cta_click"; properties: { label: string; location: string } }
    | { name: "link_click"; properties: { label: string; href: string } }

// Define window with gtag for type safety
interface WindowWithGtag extends Window {
    gtag?: (command: string, eventName: string, eventParams?: Record<string, any>) => void;
}

/**
 * Centralized analytics utility for Xether AI.
 * Wraps Vercel Analytics and can be extended for GA/Sentry.
 */
export const analytics = {
    trackEvent: (event: AnalyticsEvent) => {
        // Track via Vercel
        track(event.name, event.properties)

        // Log to console in development
        if (process.env.NODE_ENV === "development") {
            console.log(`[Analytics] ${event.name}:`, event.properties)
        }

        // Google Analytics (handled automatically by @next/third-parties/google if configured)
        const win = (typeof window !== "undefined" ? window : {}) as WindowWithGtag;
        if (win.gtag) {
            win.gtag("event", event.name, event.properties)
        }
    },

    trackFormSubmit: (formId: string, status: "success" | "error" = "success") => {
        analytics.trackEvent({
            name: "form_submit",
            properties: { form_id: formId, status }
        })
    },

    trackCTAClick: (label: string, location: string) => {
        analytics.trackEvent({
            name: "cta_click",
            properties: { label, location }
        })
    }
}
