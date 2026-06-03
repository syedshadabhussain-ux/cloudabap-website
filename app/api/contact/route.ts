import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message || message.length < 10) {
      return Response.json(
        {
          success: false,
          error: "Invalid input",
        },
        {
          status: 400,
        },
      );
    }

    const result = await resend.emails.send({
      from: "CloudABAP <onboarding@resend.dev>",
      to: ["shadabhussainara@gmail.com"],
      replyTo: email,
      subject: `[CloudABAP] ${name} (${email})`,
      html: `
    <h2>New Contact Form Message</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <hr />

    <p>${message}</p>
  `,
    });

    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
