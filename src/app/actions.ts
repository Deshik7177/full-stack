'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/contact-email';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

// IMPORTANT: Create a .env.local file in your root directory
// and add your Resend API key there.
// Example: RESEND_API_KEY=re_123456789
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: z.infer<typeof contactFormSchema>) {
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    throw new Error('Invalid form data.');
  }

  const { name, email, message } = parsedData.data;

  try {
    await resend.emails.send({
      // IMPORTANT: Replace with your own domain and email address.
      // You must verify your domain with Resend to send emails.
      from: 'Contact Form <onboarding@resend.dev>',
      // IMPORTANT: This is where the emails will be sent.
      // Replace with your personal or business email address.
      to: 'your-email@example.com',
      subject: `New message from ${name} via your website`,
      reply_to: email,
      react: <ContactEmail name={name} email={email} message={message} />,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email.');
  }
}
