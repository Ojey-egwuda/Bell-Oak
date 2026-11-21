# Bell Oak Holdings Ltd website

Brochure website for Bell Oak Holdings Ltd (company no. 17464434), built with Next.js 15, React 19 and Tailwind CSS 3. The design, colours and fonts match the approved design file.

## Run it locally

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. In development the enquiry form logs submissions to the terminal instead of sending email.

## Enquiry form email

Enquiries are emailed through [Resend](https://resend.com). Copy `.env.example` to `.env.local` and fill in:

| Variable | What it is |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The live site address, e.g. `https://www.belloakholdings.co.uk` |
| `RESEND_API_KEY` | API key from Resend |
| `ENQUIRY_TO_EMAIL` | Inbox that receives enquiries (comma-separate for more than one) |
| `ENQUIRY_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `Bell Oak Website <website@belloakholdings.co.uk>` |

In production the form shows an error, and logs why, if these are missing, so enquiries are never silently lost. Replies go straight to the person who enquired (the `reply_to` header).

Spam protection: a hidden honeypot field plus a limit of 5 enquiries per IP address every 10 minutes.

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. Import it at https://vercel.com/new. Vercel detects Next.js automatically.
3. Add the four environment variables above under Project Settings → Environment Variables.
4. Add the custom domain under Project Settings → Domains and follow the DNS instructions.

Netlify or any Node host also works: `npm run build`, then `npm start`.

## Where to change things

| What | File |
| --- | --- |
| Company name, number, address, phone, nav, enquiry types | `lib/site.ts` |
| Colours, fonts, shadows | `tailwind.config.ts` |
| Page sections | `components/*.tsx` |
| Privacy notice | `app/privacy/page.tsx` |
| Form email handling | `app/api/enquiry/route.ts` |

## Before launch

- Fill in the `[placeholders]` in `app/privacy/page.tsx`: contact email, ICO registration number, hosting and email providers, retention period. Pay the ICO data protection fee if it hasn't been paid.
- Confirm the "Investment Partnerships" wording with a solicitor (financial promotion rules, FSMA section 21).
- Set `NEXT_PUBLIC_SITE_URL` so the sitemap and social previews use the real domain.

## Checks

```bash
npm run lint
npm run build
```
