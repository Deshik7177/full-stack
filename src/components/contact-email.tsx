'use server';

import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your website contact form</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission</Heading>
          <Section>
            <Text style={paragraph}>
              You have received a new message from your website&apos;s contact form.
            </Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              <strong>From:</strong> {name}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </Text>
            <Hr style={hr} />
            <Heading as="h2" style={subheading}>
              Message:
            </Heading>
            <Text style={messageStyle}>{message}</Text>
            <Hr style={hr} />
            <Text style={footer}>
              This email was sent from the contact form on your Sytecx Labs website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #f0f0f0',
  borderRadius: '4px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#484848',
  padding: '0 40px',
};

const subheading = {
  fontSize: '18px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#484848',
  padding: '0 40px',
  marginTop: '24px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#484848',
  padding: '0 40px',
};

const messageStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#484848',
  padding: '0 40px',
  whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 40px',
};