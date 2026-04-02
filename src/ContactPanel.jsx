import { useEffect, useRef, useState } from "react";
import { saveContactSubmission } from "./firebase";

export default function ContactPanel({ language, page, openSignal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [position, setPosition] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const panelRef = useRef(null);
  const dragCleanupRef = useRef(null);

  useEffect(() => {
    if (!openSignal) return;
    setErrorMessage("");
    setPosition(null);
    setIsOpen(true);
  }, [openSignal]);

  useEffect(() => () => {
    if (dragCleanupRef.current) {
      dragCleanupRef.current();
      dragCleanupRef.current = null;
    }
  }, []);

  if (!isOpen) return null;

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function closePanel() {
    setErrorMessage("");
    setIsOpen(false);
  }

  function clearDragListeners() {
    if (dragCleanupRef.current) {
      dragCleanupRef.current();
      dragCleanupRef.current = null;
    }

    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  }

  function clampPosition(nextX, nextY, width, height) {
    const margin = 12;
    const maxX = Math.max(margin, window.innerWidth - width - margin);
    const maxY = Math.max(margin, window.innerHeight - height - margin);

    return {
      x: Math.min(Math.max(nextX, margin), maxX),
      y: Math.min(Math.max(nextY, margin), maxY),
    };
  }

  function handleDragStart(event) {
    if (event.button !== 0) return;

    const panel = panelRef.current;
    if (!panel) return;

    clearDragListeners();

    const rect = panel.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";

    const handlePointerMove = (moveEvent) => {
      const nextPosition = clampPosition(
        moveEvent.clientX - offsetX,
        moveEvent.clientY - offsetY,
        panel.offsetWidth,
        panel.offsetHeight,
      );
      setPosition(nextPosition);
    };

    const handlePointerUp = () => {
      clearDragListeners();
    };

    dragCleanupRef.current = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    event.preventDefault();
  }

  function buildPayload() {
    return {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      language,
      page,
      referrer: typeof document === "undefined" ? "" : document.referrer,
      submittedAtClient: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      url: typeof window === "undefined" ? "" : window.location.href,
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await saveContactSubmission(buildPayload());
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Contact submission failed:", error);
      setErrorMessage("Could not send your message. Check the database rules and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const panelStyle = position
    ? {
      left: `${position.x}px`,
      top: `${position.y}px`,
      bottom: "auto",
      transform: "none",
    }
    : undefined;

  return (
    <div className="contact-panel-shell" aria-label="Get in touch">
      <aside
        ref={panelRef}
        className={`contact-panel ${position ? "contact-panel--floating" : ""}`}
        style={panelStyle}
      >
        <div className="contact-panel__inner">
          <button
            type="button"
            className="contact-panel__drag-handle"
            onPointerDown={handleDragStart}
            aria-label="Drag contact form"
          >
            <span className="contact-panel__drag-pill" />
          </button>

          <div className="contact-panel__copy">
            <h2>Send a message</h2>
          </div>

          <form className="contact-panel__form" onSubmit={handleSubmit}>
            <label className="contact-panel__field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={updateField}
                required
              />
            </label>

            <label className="contact-panel__field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={updateField}
                required
              />
            </label>

            <label className="contact-panel__field contact-panel__field--wide">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={updateField}
                placeholder="Write a short message"
                rows="4"
                required
              />
            </label>

            <div className="contact-panel__actions">
              <button type="button" className="button button--secondary" onClick={closePanel} disabled={isSubmitting}>
                Close
              </button>
              <button type="submit" className="button button--primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>

            {errorMessage ? <p className="contact-panel__feedback">{errorMessage}</p> : null}
          </form>
        </div>
      </aside>
    </div>
  );
}
