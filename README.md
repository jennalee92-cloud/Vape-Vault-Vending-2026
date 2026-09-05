# Vape Vault Vending

A modern, responsive Next.js website for Vape Vault Vending. Includes pages for Home, About, Services, Pricing, FAQ, and Contact.

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000` to view the site locally.

## Contact Form

This project includes a simple server-side handler at `/api/contact` that saves form submissions to `data/submissions.json` in the project root.

For production, replace the handler with an email provider or webhook (SendGrid, Mailgun, Formspree, or your backend). The current implementation is a local file-based store intended for development and testing.

## Deploy

Deploy to Vercel for best results (Next.js first-party integration). Use `vercel` or connect the GitHub repo to Vercel and set environment variables if you replace the local contact handler with a remote email service.

## Notes

- Tailwind CSS is used for styling.
- Replace placeholder text, logo, and images with your assets.
- Ensure compliance before launching in regulated markets.

## Vercel Quick Deploy

1. Initialize a Git repository and push to GitHub (if you haven't already):

```bash
cd C:\Users\jenna\VapeVaultVending
git init
git add .
git commit -m "Initial site scaffold"
# create a new GitHub repo and add as origin, then:
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

2. Deploy on Vercel

- Option A (recommended): Visit https://vercel.com, import your GitHub repository, and follow the prompts. Vercel will detect Next.js and use `vercel.json`.

- Option B (CLI): Install the Vercel CLI and deploy from your terminal:

```bash
npm i -g vercel
vercel login
vercel --prod
```

3. Environment variables

- If you replace the local contact handler (`app/api/contact/route.ts`) with a real email/webhook provider, set the provider keys in Vercel Dashboard → Settings → Environment Variables. Use the keys listed in `.env.example` as references.

4. Submissions

- The current contact handler saves submissions to `data/submissions.json` for development only. For production, configure an email provider or webhook and remove or secure the file-based storage.

