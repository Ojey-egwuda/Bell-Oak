# Bell Oak Holdings Ltd website

The official website of Bell Oak Holdings Ltd (company no. 17464434), a UK real estate investment and asset management company, live at https://www.belloakholdings.co.uk.

## What's on the site

- **Home page** (`/`), in this order:
  - Hero
  - About Us, including the company's core principles
  - Our Services
  - Why Choose Bell Oak Holdings
  - Investment Strategy
  - Contact Us, with the enquiry form
- **Privacy notice** at `/privacy`
- **404 page** for any address that doesn't exist

## Enquiry form

The form collects the enquirer's full name, email address, phone number (optional), enquiry type and message.

- Submissions are validated on the server and emailed to the company via Resend. Replies go straight to the enquirer (`reply_to`).
- Spam protection: a hidden honeypot field, plus a limit of 5 enquiries per IP address every 10 minutes.
- When run locally without the email settings, enquiries are logged to the terminal instead of being emailed.

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- Self-hosted fonts: Playfair Display and Plus Jakarta Sans, via Fontsource
- Zod (form validation)

## Project structure

| Path | What it is |
| --- | --- |
| `app/` | Pages and layout: home page, privacy notice, 404 page, sitemap and robots |
| `components/` | The home page sections, header, footer and enquiry form |
| `lib/site.ts` | Company details, navigation links and enquiry types |
| `lib/enquiry.ts` | Validation schema for the enquiry form |
| `app/api/enquiry/route.ts` | Receives enquiries, applies the rate limit and sends the email |
| `tailwind.config.ts` | Brand colours, fonts and shadows |

## Editing content

- **Company details, navigation and enquiry types:** `lib/site.ts`
- **Colours and fonts:** `tailwind.config.ts`
- **Section copy:** the matching file in `components/` (for example `components/services.tsx` for Our Services)

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Checks:

```bash
npm run lint
npm run build
```

## Environment variables

See `.env.example`.

| Variable | What it is for |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The public site address, used in SEO metadata and the sitemap |
| `RESEND_API_KEY` | API key for sending enquiry emails through Resend |
| `ENQUIRY_TO_EMAIL` | Inbox that receives enquiries (comma-separate for more than one) |
| `ENQUIRY_FROM_EMAIL` | Sender address shown on enquiry emails |
