import { useEffect, useState } from "react";
import { saveLeadCapture } from "./firebase";

const STORAGE_KEY = "portfolio-consent-choice";

function getInitialVisibility() {
  if (typeof window === "undefined") return true;
  return !window.localStorage.getItem(STORAGE_KEY);
}

function getStoredChoice() {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(STORAGE_KEY) ?? "";
}

export default function LeadCaptureBanner({ language, page, openSignal }) {
  const [isVisible, setIsVisible] = useState(getInitialVisibility);
  const [storedChoice, setStoredChoice] = useState(getStoredChoice);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!openSignal) return;
    setErrorMessage("");
    setIsVisible(true);
  }, [openSignal]);

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function hideBanner(choice) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, choice);
    }
    setStoredChoice(choice);
    setIsVisible(false);
  }

  function reopenBanner() {
    setErrorMessage("");
    setIsVisible(true);
  }

  function buildPayload(consent, includeIdentity = false) {
    return {
      consent,
      name: includeIdentity ? formData.name.trim() : "",
      email: includeIdentity ? formData.email.trim() : "",
      message: includeIdentity ? formData.message.trim() : "",
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

  async function submitChoice(consent, includeIdentity = false) {
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await saveLeadCapture(buildPayload(consent, includeIdentity));
      hideBanner(consent);
    } catch (error) {
      console.error("Lead capture write failed:", error);
      setErrorMessage("Could not save your choice. Check the database rules and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleAccept(event) {
    event.preventDefault();
    void submitChoice("accepted", true);
  }

  function handleDecline() {
    void submitChoice("declined");
  }

  if (!isVisible) {
    return (
      <button
        type="button"
        className="lead-banner-toggle"
        onClick={reopenBanner}
        aria-label="Open cookie preferences"
      >
        Cookies
        {storedChoice ? <span className="lead-banner-toggle__status">{storedChoice}</span> : null}
      </button>
    );
  }

  return (
    <aside className="lead-banner" aria-label="Cookie preferences">
      <div className="lead-banner__inner">
        <div className="lead-banner__copy">
          <p className="eyebrow">Preferences</p>
          <h2>Cookies</h2>
          <p className="muted">Choose Accept or Decline. You can also leave your name and email.</p>
        </div>

        <form className="lead-banner__form" onSubmit={handleAccept}>
          <label className="lead-banner__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={updateField}
              placeholder="Your name"
            />
          </label>

          <label className="lead-banner__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={updateField}
              placeholder="you@example.com"
            />
          </label>

          <label className="lead-banner__field lead-banner__field--wide">
            <span>Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={updateField}
              placeholder="Write a short message"
              rows="3"
            />
          </label>

          <div className="lead-banner__actions">
            <button
              type="button"
              className="button button--secondary"
              onClick={handleDecline}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Decline"}
            </button>
            <button type="submit" className="button button--primary" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Accept"}
            </button>
          </div>

          {errorMessage ? <p className="lead-banner__feedback">{errorMessage}</p> : null}
        </form>
      </div>
    </aside>
  );
}
