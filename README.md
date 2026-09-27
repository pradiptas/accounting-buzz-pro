# Accounting Buzz website

A responsive static website for Accounting Buzz, built with plain HTML, CSS, and JavaScript. It has no build step or third-party runtime dependencies.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Included

- Responsive one-page marketing site
- Four focused core services: daily bookkeeping, AP/AR, credit-card and bank reconciliation, and personal/business tax preparation
- Clear audience positioning for individuals, families, sole proprietors, and small to medium-sized businesses
- Business registration, bookkeeping/tax setup, and website setup/maintenance callout
- Domestic service positioning with cross-border tax explicitly excluded
- Original, locally hosted editorial imagery
- Mobile navigation and scroll-reveal effects
- Accessible FAQ accordions and semantic page structure
- Contact form that composes an email to `support.acctbuzzpro@gmail.com`
- SEO, Open Graph, social-share, and ProfessionalService structured data
- Full-logo social assets for Instagram and Facebook in `assets/social/`

## Before launch

1. Confirm the exact tax services and jurisdictions offered.
2. Connect a real form service if you want submissions stored instead of opening the visitor's email app.
3. Add a privacy policy and any required business/licensing disclosures.
4. Add a custom domain and analytics only after consent/privacy requirements are settled.

## Hosting recommendation

GitHub Pages is the simplest free demo host for this exact site. AWS S3 with CloudFront is the best fit when you want more control, production-grade caching, and AWS-native infrastructure. Wix is easiest for non-technical ongoing editing, but this custom code would need to be rebuilt or embedded inside Wix rather than deployed there as-is.
