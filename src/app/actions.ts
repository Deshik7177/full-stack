
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(formData: z.infer<typeof contactFormSchema>) {
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    throw new Error('Invalid form data.');
  }

  const { name, email, message } = parsedData.data;

  // IMPORTANT: You must create a .env.local file in the root of your project
  // and add your email provider's SMTP credentials.
  //
  // .env.local
  // SMTP_HOST=your-smtp-host.com
  // SMTP_PORT=587
  // SMTP_USER=your-professional-email@example.com
  // SMTP_PASSWORD=your-email-password
  //

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: (process.env.SMTP_PORT || 587) === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`, // Use your professional email as the sender
    to: "we@sytecxlabs.com", // Send the email to your professional address
    replyTo: email, // Set the reply-to to the user's email
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send message. Please try again later.');
  }
}
