# Vercel Deployment Guide

This repository is prepared for Vercel deployment. Follow these steps to create a Vercel project and enable automatic deployments from GitHub.

## 1. Create a GitHub repository and push

```bash
cd C:\Users\jenna\VapeVaultVending
git init
git add .
git commit -m "Initial site scaffold"
# create a new GitHub repo, then:
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

## 2. Create a Vercel token

1. Log in to https://vercel.com
2. Visit https://vercel.com/account/tokens
3. Create a new token (name it `github-deploy-token`) and copy it.

## 3. Add GitHub secret

1. Go to your GitHub repo → Settings → Secrets and variables → Actions → New repository secret
2. Name: `VERCEL_TOKEN`
3. Value: paste the token you copied from Vercel

## 4. Import project into Vercel (recommended)

- Go to https://vercel.com/new and import your GitHub repository.
- Vercel will detect Next.js and use `vercel.json` automatically.
- No additional configuration is strictly required — the GitHub Action will run on every push to `main`.

## 5. (Optional) Local deploy

Install Vercel CLI and deploy from your machine:

```bash
npm i -g vercel
vercel login
# then run
npm run vercel:deploy
```

## 6. Notes on environment variables and contact form

- The repository includes a local API handler at `/api/contact` that saves submissions to `data/submissions.json` for development only.
- For production, replace `app/api/contact/route.ts` with an email provider or webhook; set provider API keys in Vercel Dashboard → Settings → Environment Variables.
- See `.env.example` for variable names to add.

## 7. Troubleshooting

- If the GitHub Action fails, check `Actions` → the workflow run logs in GitHub for build errors.
- If Vercel deploy fails from the CLI, run `vercel --debug` to get detailed output.

*** End of guide ***
