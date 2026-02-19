import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  nom?: string;
  entreprise?: string;
  email?: string;
  telephone?: string;
  message?: string;
};

function sanitize(value: string | undefined) {
  return (value ?? "").trim();
}

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const nom = sanitize(body.nom);
  const entreprise = sanitize(body.entreprise);
  const email = sanitize(body.email);
  const telephone = sanitize(body.telephone);
  const message = sanitize(body.message);

  if (!nom || !email || !message) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "sharonmaman.law@gmail.com";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Configuration email manquante." },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  const subject = `Nouveau message – ${nom}`;
  const text = [
    `Nom complet: ${nom}`,
    `Entreprise: ${entreprise || "-"}`,
    `Email: ${email}`,
    `Téléphone: ${telephone || "-"}`,
    "",
    message,
  ].join("\n");

  const html = `
    <div>
      <p><strong>Nom complet:</strong> ${nom}</p>
      <p><strong>Entreprise:</strong> ${entreprise || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${telephone || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Échec de l’envoi du message." },
      { status: 500 }
    );
  }
}
