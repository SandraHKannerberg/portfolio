import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Mail to you from the contactform
    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    // Send the mail
    const info = await transporter.sendMail(mailOptions);

    // Auto-reply to confirm: "Thank you for your message" - mail
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thank you for your message!",
      text: `Hello ${name},\n\nThank you for your message. I usually reply within 1-2 days. Have a nice day!\n\nBest Regards,\nSandra Höst Kannerberg\nCreative coder\nsandra.hkannerberg@gmail.com`,
    });

    return NextResponse.json({ status: "success", messageId: info.messageId });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { status: "error", message: "Something went wrong, message not sent" },
      { status: 500 }
    );
  }
}
