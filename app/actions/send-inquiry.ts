"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type InquiryState = {
  success?: boolean;
  error?: string;
} | null;

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const slug = formData.get("slug")?.toString() ?? "";
  const serviceName = formData.get("serviceName")?.toString() ?? "";

  // Validation
  if (!name || !email || !phone || !message) {
    return { error: "Vyplňte prosím všechna povinná pole." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Zadejte prosím platný e-mail." };
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail) {
    console.error("CONTACT_EMAIL env variable is not set");
    return { error: "Nepodařilo se odeslat. Zkuste to prosím později." };
  }

  const pageUrl = slug
    ? `https://anfilov.cz/nabidka/${slug}`
    : "https://anfilov.cz";

  const subject = serviceName
    ? `Nová poptávka — ${serviceName}`
    : "Nová poptávka z anfilov.cz";

  try {
    await resend.emails.send({
      from: "Anfilov Web <noreply@mail.anfilov.cz>",
      to: contactEmail,
      replyTo: email,
      subject,
      text: [
        `Nová poptávka z webu anfilov.cz`,
        ``,
        `Jméno: ${name}`,
        `Email: ${email}`,
        `Telefon: ${phone}`,
        ``,
        `Zpráva:`,
        message,
        ``,
        `---`,
        `Odesláno ze stránky: ${serviceName || slug || "—"}`,
        `URL: ${pageUrl}`,
      ].join("\n"),
    });

    return { success: true };
  } catch (err) {
    console.error("Failed to send inquiry email:", err);
    return { error: "Nepodařilo se odeslat. Zkuste to prosím později." };
  }
}
