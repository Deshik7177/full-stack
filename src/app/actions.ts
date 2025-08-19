'use server';

import { z } from 'zod';

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

  // For production, you would replace this with a call to your email service
  // For example, using Resend, SendGrid, or Nodemailer
  console.log('New contact form submission:');
  console.log('Name:', parsedData.data.name);
  console.log('Email:', parsedData.data.email);
  console.log('Message:', parsedData.data.message);

  // Simulate a successful submission
  return { success: true };
}
