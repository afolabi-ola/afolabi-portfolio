# Afolabi Quadri - Portfolio

![Portfolio Preview](public/og-image.png)

Personal portfolio website showcasing real-world full-stack projects, backend growth, and product-focused engineering.

## Overview

This portfolio highlights production-oriented work including:

- CBT examination platforms
- Secure escrow transaction workflows
- Full-stack dashboards and web applications

It is built with a modern Next.js App Router architecture and an interactive UI experience.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React 19](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/), [Lucide Icons](https://lucide.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment:** [Vercel](https://vercel.com)

## Features

- **Hero Navigation:** CTA buttons scroll directly to Projects and Contact sections.
- **Projects Showcase:** Hover overlay on project cards with full description and complete stack.
- **AI Assistant:** Custom assistant responses for portfolio topics, including CBT and Escrow app details.
- **Contact Form:** Real message delivery through an API route using Resend.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.

## Contact Form Delivery (Resend)

The contact form posts to `POST /api/contact` and sends email through Resend.

Create a `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_inbox@example.com
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```

Notes:

- `RESEND_API_KEY` is required.
- `CONTACT_TO_EMAIL` is optional (defaults to your configured fallback).
- `CONTACT_FROM_EMAIL` should be a verified sender for production domains.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/BOL-DEV/BOL-PORTFOLIO.git
   cd BOL-PORTFOLIO
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or npm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or npm run dev
   ```

4. **Open the app**

   Visit [http://localhost:3000](http://localhost:3000)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).

---

Built by [Afolabi Quadri](https://github.com/afolabi-ola)
