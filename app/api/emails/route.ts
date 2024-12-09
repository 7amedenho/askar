import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  try {
    // إعداد Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER, // بريد Gmail الخاص بك
        pass: process.env.GMAIL_PASS, // كلمة المرور الخاصة بـ Gmail أو App Password
      },
    });

    // إعداد الرسالة
    const mailOptions = {
      from: email, // البريد الإلكتروني للمرسل (الزائر)
      to: process.env.GMAIL_USER, // بريدك الإلكتروني
      subject: `New Message from ${name}`,
      text: `You have received a new message from your website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // إرسال البريد الإلكتروني
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
