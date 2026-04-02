import { useState } from "react";
import { saveCookieConsent } from "./firebase";

const STORAGE_KEY = "portfolio-cookie-consent";

function getInitialVisibility() {
  if (typeof window === "undefined") return true;
  return !window.localStorage.getItem(STORAGE_KEY);
}

export default function CookieConsentBanner({ language, page }) {
  const [isVisible, setIsVisible] = useState(getInitialVisibility);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isVisible) return null;

  function buildPayload(consent) {
    return {
      consent,
      browserLanguage: typeof navigator === "undefined" ? "" : navigator.language,
      cookieEnabled: typeof navigator === "undefined" ? false : Boolean(navigator.cookieEnabled),
      language,
      page,
      referrer: typeof document === "undefined" ? "" : document.referrer,
      screen: typeof window === "undefined" ? "" : `${window.screen.width}x${window.screen.height}`,
      submittedAtClient: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      url: typeof window === "undefined" ? "" : window.location.href,
      userAgent: typeof navigator === "undefined" ? "" : navigator.userAgent,
      viewport: typeof window === "undefined" ? "" : `${window.innerWidth}x${window.innerHeight}`,
    };
  }

  async function handleChoice(consent) {
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await saveCookieConsent(buildPayload(consent));
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, consent);
      }
      setIsVisible(false);
    } catch (error) {
      console.error("Cookie consent write failed:", error);
      setErrorMessage("Could not save your choice. Check the database rules and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <aside className="cookie-banner" aria-label="Cookie preferences">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__copy">
          <p className="eyebrow">Preferences</p>
          <h2>Cookies</h2>
        </div>

        <div className="cookie-banner__actions">
          <button
            type="button"
            className="button button--secondary"
            onClick={() => void handleChoice("declined")}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Decline"}
          </button>
          <button
            type="button"
            className="button button--primary"
            onClick={() => void handleChoice("accepted")}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Accept"}
          </button>
        </div>

        {errorMessage ? <p className="cookie-banner__feedback">{errorMessage}</p> : null}
      </div>
    </aside>
  );
}
