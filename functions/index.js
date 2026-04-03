const logger = require("firebase-functions/logger");
const {defineSecret} = require("firebase-functions/params");
const {onValueCreated} = require("firebase-functions/v2/database");
const nodemailer = require("nodemailer");

const GMAIL_APP_PASSWORD = defineSecret("GMAIL_APP_PASSWORD");

const NOTIFY_TO_EMAIL = "swetymarton123@gmail.com";
const DATABASE_INSTANCE = "leads-tracker-app-22d5f-default-rtdb";

function buildEmailText(data, submissionId) {
  return [
    "A new contact form message was submitted from the portfolio site.",
    "",
    `Submission ID: ${submissionId}`,
    `Name: ${data.name || "Unknown"}`,
    `Email: ${data.email || "Not provided"}`,
    `Page: ${data.page || "Unknown"}`,
    `Language: ${data.language || "Unknown"}`,
    `Timezone: ${data.timezone || "Unknown"}`,
    data.referrer ? `Referrer: ${data.referrer}` : null,
    data.url ? `URL: ${data.url}` : null,
    "",
    "Message:",
    data.message || "(empty message)",
  ].filter(Boolean).join("\n");
}

exports.emailOnNewContactSubmission = onValueCreated(
  {
    ref: "/contactSubmissions/{submissionId}",
    instance: DATABASE_INSTANCE,
    region: "europe-west1",
    secrets: [GMAIL_APP_PASSWORD],
  },
  async (event) => {
    const submissionId = event.params.submissionId;
    const data = event.data.val();

    if (!data) {
      logger.warn("No contact submission payload found.", {submissionId});
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: NOTIFY_TO_EMAIL,
        pass: GMAIL_APP_PASSWORD.value(),
      },
    });

    await transporter.sendMail({
      from: `Portfolio notifier <${NOTIFY_TO_EMAIL}>`,
      to: NOTIFY_TO_EMAIL,
      replyTo: data.email || undefined,
      subject: `New portfolio message from ${data.name || "Unknown sender"}`,
      text: buildEmailText(data, submissionId),
    });

    logger.info("Notification email sent.", {submissionId, to: NOTIFY_TO_EMAIL});
  },
);
