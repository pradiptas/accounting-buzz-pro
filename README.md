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
- Bookkeeping, AP/AR, payroll, reconciliation, month-end reporting, personal and corporate tax, sales-tax compliance, business setup, advisory, and CPA-ready year-end content
- Industry-specific positioning for technology, real estate, healthcare, manufacturing, retail/e-commerce, and professional services
- Domestic service positioning with cross-border tax explicitly excluded
- Original, locally hosted editorial imagery
- Mobile navigation and scroll-reveal effects
- Accessible FAQ accordions and semantic page structure
- Contact form that composes an email to `support@accountingbuzz.com`
- SEO metadata and ProfessionalService structured data

## Before launch

1. Confirm the exact tax services and jurisdictions offered.
2. Replace the dummy email when a live mailbox is ready.
3. Connect a real form service if you want submissions stored instead of opening the visitor's email app.
4. Add a privacy policy and any required business/licensing disclosures.
5. Add a custom domain and analytics only after consent/privacy requirements are settled.

## Hosting recommendation

GitHub Pages is the simplest free demo host for this exact site. AWS S3 with CloudFront is the best fit when you want more control, production-grade caching, and AWS-native infrastructure. Wix is easiest for non-technical ongoing editing, but this custom code would need to be rebuilt or embedded inside Wix rather than deployed there as-is.
