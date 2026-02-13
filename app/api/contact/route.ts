import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: Request) {
  try {
    const { name, organization, email, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Send email using Resend
    if (!resend) {
      console.warn("RESEND_API_KEY not configured. Contact form submission logged but not emailed.")
      return NextResponse.json({ success: true })
    }

    await resend.emails.send({
      from: "Fuller Horizons Website <onboarding@resend.dev>",
      to: "contact@fullerhorizons.net",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Organization: ${organization || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
