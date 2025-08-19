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

  // This is where you would call your backend service.
  // Replace the URL with your actual backend endpoint.
  try {
    const response = await fetch('https://your-backend-api.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsedData.data),
    });

    if (!response.ok) {
      // The backend returned an error
      throw new Error('Failed to submit form to backend.');
    }

    // Backend call was successful
    return { success: true };

  } catch (error) {
    console.error('Backend API call failed:', error);
    // Let the form know that the submission failed
    throw new Error('There was a problem with the submission.');
  }
}
