
# Sytecx Labs Website

Welcome to the Sytecx Labs website project! This document provides an overview of the project structure, technologies used, and instructions for making common updates. This application was built using Firebase Studio.

## Tech Stack

This project is built with a modern, component-based architecture using the following technologies:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit)

## Project Structure

Here is a breakdown of the key directories and files in the project:

```
.
├── src
│   ├── app                 # Contains all the pages and layouts (Next.js App Router)
│   │   ├── (page-routes)   # Each folder is a route, e.g., /projects, /services
│   │   ├── layout.tsx      # The main layout for the entire application
│   │   ├── page.tsx        # The homepage of the application
│   │   └── globals.css     # Global styles and Tailwind CSS theme variables
│   │
│   ├── components          # Reusable React components
│   │   ├── ui              # Unmodified UI components from ShadCN
│   │   └── *.tsx           # Custom components (e.g., Navbar, Footer, ProjectCard)
│   │
│   ├── lib                 # Core logic, type definitions, and static data
│   │   ├── data.ts         # Centralized data for projects, services, etc.
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── utils.ts        # Utility functions (e.g., `cn` for classnames)
│   │
│   └── ai                  # Contains all Generative AI related code
│       ├── genkit.ts       # Genkit initialization and configuration
│       └── flows           # Genkit flows for AI functionality
│
├── public                  # Static assets like images and fonts
└── package.json            # Project dependencies and scripts
```

## How to Make Common Changes

### Adding or Updating Content

The majority of the website's dynamic content (like projects, services, workshops, and careers) is managed in a single file for easy updates:

**File to Edit**: `src/lib/data.ts`

To add a new project, for example, you would open `src/lib/data.ts` and add a new object to the `projects` array, following the existing structure. The website will automatically update to display the new content. The same process applies to services, workshops, and career listings.

### Customizing the Theme

The website's color scheme is controlled by CSS variables in `src/app/globals.css`. You can modify the HSL values for `--primary`, `--secondary`, `--background`, etc., to change the look and feel of the entire site.

```css
/* src/app/globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --primary: 215 28% 48%;
    /* ... and so on */
  }

  .dark {
    --background: 222.2 47.4% 11.2%;
    /* ... and so on */
  }
}
```

### Contact Form Logic

The contact form is handled by a **Next.js Server Action**, which provides a secure way to process form submissions without exposing API endpoints to the client.

**File to Edit**: `src/app/actions.ts`

The form is configured to send an email using a standard SMTP server. To make it work, you need to provide your email provider's credentials.

**Example using a custom email provider:**

1.  **Install Nodemailer** (already done):
    The project uses `nodemailer` to send emails.

2.  **Find your SMTP Server Details**:
    You'll need the SMTP host, port, username, and password for your professional email account. You can usually find this information in your email provider's documentation.

3.  **Set Environment Variables**:
    - Create a `.env.local` file in the root of your project.
    - Add your credentials. It should look like this:
      ```
      SMTP_HOST=smtp.yourprovider.com
      SMTP_PORT=587
      SMTP_USER=your-professional-email@yourdomain.com
      SMTP_PASSWORD=your-email-password
      ```

4.  **How it Works**:
    - The server action in `src/app/actions.ts` reads these environment variables to configure `nodemailer` and send the email from your professional account.

## Running the Project Locally

To run the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:9002`.
