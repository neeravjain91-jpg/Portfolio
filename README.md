# Neerav Jain — Personal Engineering Portfolio

[![Live Production Portfolio](https://img.shields.io/badge/Production%20Portfolio-neerav--jain--portfolio.vercel.app-000000.svg?style=for-the-badge&logo=vercel)](https://neerav-jain-portfolio.vercel.app)
[![Production Build](https://img.shields.io/badge/Build-Passing%20(Next.js%2014)-success.svg)](https://github.com/neeravjain91-jpg/Portfolio)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4+-38bdf8.svg)](https://tailwindcss.com/)
[![Verified Deployments](https://img.shields.io/badge/Live%20Deployments-5%20Verified%20(HTTP%20200)-emerald.svg)](https://neerav-jain-portfolio.vercel.app/deployments)
[![Automated E2E Tests](https://img.shields.io/badge/Playwright%20Tests-Passing%20(19%2F19)-brightgreen.svg)](tests/)

> **Live Production Website**: [https://neerav-jain-portfolio.vercel.app](https://neerav-jain-portfolio.vercel.app)  
> **Authoritative GitHub Repository**: [https://github.com/neeravjain91-jpg/Portfolio](https://github.com/neeravjain91-jpg/Portfolio)

A production-ready engineering portfolio for **Neerav Jain** (B.Tech CSE in Artificial Intelligence & Machine Learning, ABES Engineering College). Showcases 8 detailed project architectures, 5 verified live cloud deployments, a 24-repository provenance ledger, a single-page ATS-compliant vector PDF resume, and an enterprise serverless contact API with atomic rate limiting and anti-spam protection.

---

## 🏛️ Architecture & Tech Stack

* **Framework**: [Next.js 14.2](https://nextjs.org/) (App Router, Server Components, Static Site Generation / SSG)
* **Language**: [TypeScript 5.4](https://www.typescriptlang.org/) (Strict mode, ES2020 target)
* **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) (Dark aesthetic, accessible high-contrast typography, responsive viewports)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Contact Dispatch**: [Resend](https://resend.com/) Serverless Node SDK with HTML entity escaping and CRLF header injection sanitization
* **Rate Limiting**: Distributed atomic sliding-window via [@upstash/redis](https://upstash.com/) with in-memory fallback
* **Testing & Quality**: [Playwright](https://playwright.dev/) end-to-end testing, [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright) accessibility auditing, [ESLint 8](https://eslint.org/)
* **Deployment**: [Vercel](https://vercel.com/) Fluid Compute Edge Network

---

## 🌐 Verified Live Deployments

All 5 core application deployments are actively running in cloud environments with verified **HTTP 200 OK** connectivity (last tested 2026-11-13):

| System Name | Category | Primary Empirical Metric | Verified Live URL |
| :--- | :--- | :--- | :--- |
| **AeroPulse-X** | AI/ML & Digital Twin | 99.81% Syn. Acc • 308 Passed Pytest Tests | [aeropulse-test.vercel.app](https://aeropulse-test.vercel.app) |
| **Ocean Subsurface ML** | Deep Learning & Oceanography | 0.9800 °C RMSE (-22.11% vs B1) • 106 Tests | [code-gules-three.vercel.app](https://code-gules-three.vercel.app) |
| **Wildfire Intelligence** | AI/ML & Geospatial | 0.8920 LOGRO ROC-AUC • 60 Passed Pytest Tests | [major-forest-fire.vercel.app](https://major-forest-fire.vercel.app) |
| **SYNAPSE / SIGNATURE VMAKE** | Computer Vision & FinTech | 4.82% Unseen Writer EER • 53 Passed Tests | [signature-v-five.vercel.app](https://signature-v-five.vercel.app) |
| **Bank Statement Table Extractor** | Document Intelligence & NLP | 99.10% Table Recall • 41 Passed Tests | [mayank-ten-indol.vercel.app](https://mayank-ten-indol.vercel.app) |

> **Note on Test Counts:** The 568 automated unit/regression tests (AeroPulse: 308, Ocean: 106, Wildfire: 60, SYNAPSE: 53, Bank: 41) are contained within the individual project repositories. The portfolio website maintains its own independent Playwright end-to-end and Axe accessibility test suite.

---

## 📂 Repository Structure

```
├── .github/
│   └── workflows/
│       ├── ci.yml                     # PR and push CI (lint, tsc, build, playwright, a11y)
│       └── deployments-health.yml     # Daily scheduled external deployment probes
├── public/
│   └── Neerav_Jain_Resume.pdf         # Single-page ATS-compliant vector PDF resume
├── scripts/
│   ├── check_deployments.py           # Real-time multi-route latency & health probe
│   ├── generate_resume_pdf.py         # ReportLab vector PDF generator script
│   └── verify_production_live.py      # Production deployment smoke test script
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts       # Secure server-side contact API (Resend + Upstash)
│   │   ├── audit/page.tsx             # 24-Repository Provenance & Lineage Audit
│   │   ├── deployments/page.tsx       # Live Deployments Command Center
│   │   ├── projects/[slug]/page.tsx   # Detailed showcase case study pages
│   │   ├── globals.css                # Tailwind utilities, focus rings, reduced-motion
│   │   ├── layout.tsx                 # Root layout, Open Graph, JSON-LD structured data
│   │   ├── not-found.tsx              # 404 handler
│   │   ├── page.tsx                   # Recruiter-focused developer homepage
│   │   ├── robots.ts                  # Search engine robots directives
│   │   └── sitemap.ts                 # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── ContactForm.tsx            # Accessible form with client validation & privacy notice
│   │   ├── Footer.tsx                 # Semantic footer with navigation links
│   │   ├── LiveDeploymentBadge.tsx    # Live badge indicator
│   │   ├── Navbar.tsx                 # Responsive header with mobile drawer & ARIA controls
│   │   ├── ProjectCard.tsx            # Project showcase cards
│   │   ├── ProjectDirectory.tsx       # Search and filterable project grid
│   │   └── ResumeModal.tsx            # Accessible CV modal with Escape-to-close & print
│   ├── data/
│   │   ├── profile.ts                 # Verified education, experience, and skills data
│   │   └── projects.ts                # Centralized, strongly typed project and deployment specs
│   └── lib/
│       └── analytics.ts               # Privacy-conscious engagement event tracking
├── tests/
│   ├── accessibility.spec.ts          # Axe-core WCAG 2.1 AA automated accessibility tests
│   └── portfolio.spec.ts              # Playwright E2E and API integration test suite
├── .env.example                       # Environment variables template
├── playwright.config.ts               # Playwright test configuration
└── tsconfig.json                      # TypeScript compiler configuration (ES2020 target)
```

---

## 🚀 Key Pages & Public Routes

* `/`: Comprehensive recruiter-oriented landing page featuring:
  * Hero section with authentic academic positioning (`B.Tech CSE AI & ML Student • ABESEC`)
  * Direct action buttons (Download Resume, Explore Projects, Live Demonstrations, GitHub, Contact)
  * Verified live cloud deployments spotlight
  * Scientific & Engineering Philosophy (4 experimental pillars)
  * Dynamic Project Directory with real-time text search and live demo filters
  * Technical Skills Tooling Matrix (Machine Learning, Deep Learning, Geospatial, Full-Stack, IoT, DevOps)
  * Experience (Cognifyz Frontend Intern, Rajendra Gears IoT Trainee) & Academic Education (ABESEC B.Tech, Govt Polytechnic Diploma)
  * Secure Contact Form with direct `mailto:` fallback
* `/projects/[slug]`: 8 comprehensive project case studies:
  * `/projects/aeropulse-x` — MALE-UAV Engine Health Digital Twin
  * `/projects/ocean-subsurface-ml` — North Indian Ocean Subsurface Temperature ML
  * `/projects/wildfire-intelligence` — Sovereign India Wildfire Spatiotemporal Intelligence
  * `/projects/signature-vmake` — SYNAPSE Biometric Signature Verification
  * `/projects/bank-statement-extractor` — Bank Statement Document Intelligence
  * `/projects/amazon-ml-entity-resolution` — DeepResolve ER Large-Scale Entity Resolution
  * `/projects/road-guardian-ai` — Road Guardian AI Pothole Detection
  * `/projects/hackmate` — HackMate Hackathon Team Collaboration Platform
* `/deployments`: Live Deployments Command Center displaying verified uptime, response latency, and 4-tier verification status.
* `/audit`: Full 24-Repository Provenance & Lineage Audit explaining canonical selections, duplicate resolutions, and academic coursework.
* `/Neerav_Jain_Resume.pdf`: Static single-page vector ATS resume with selectable text.

---

## 🔒 Contact API Architecture & Security

The contact pipeline at `/api/contact` enforces enterprise defense-in-depth:

```
[ Client Browser ]
        │
        │ POST /api/contact (Content-Type: application/json, Max: 10 KB)
        ▼
[ Next.js Serverless Handler: src/app/api/contact/route.ts ]
        │
        ├── 1. Content-Type (415 if not application/json) & Body Size (413 if > 10 KB)
        ├── 2. Distributed Atomic Sliding-Window Rate Limiter (@upstash/redis or in-memory fallback)
        │      └── Limit: 5 requests / 10 minutes per IP -> [429 if exceeded]
        ├── 3. Honeypot Anti-Spam Validation (hidden company_fax field) -> [400 if filled]
        ├── 4. Server-Side Schema Validation (Name: 2–100, Email: regex, Message: 10–3000)
        ├── 5. Header Sanitization (strips \\r, \\n, \\t) & HTML Entity Escaping (&, <, >, ", ')
        ├── 6. RESEND_API_KEY Check -> [503 with mailto fallback if not configured]
        └── 7. Resend Email Dispatch
                   ├── to: process.env.CONTACT_TO_EMAIL || "neeravjain91@gmail.com"
                   ├── from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>"
                   └── replyTo: sanitized sender email
```

### Truthful Status
A successful Resend API response confirms provider acceptance for delivery; the frontend displays:  
`"Message submitted successfully. Your inquiry has been accepted by the email dispatch service."`

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

| Variable | Required | Default / Description |
| :--- | :---: | :--- |
| `RESEND_API_KEY` | Optional in dev | API key from [Resend](https://resend.com) (`re_...`). Returns handled 503 if omitted. |
| `CONTACT_TO_EMAIL` | Optional | Recipient inbox (default: `neeravjain91@gmail.com`). |
| `CONTACT_FROM_EMAIL` | Optional | Sender address (default: `Portfolio Contact <onboarding@resend.dev>`). |
| `UPSTASH_REDIS_REST_URL` | Optional | REST URL for Upstash Redis distributed rate limiting. |
| `UPSTASH_REDIS_REST_TOKEN` | Optional | REST Token for Upstash Redis distributed rate limiting. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical production URL (default: `https://neerav-jain-portfolio.vercel.app`). |

---

## 🛠️ Local Setup & Commands

### 1. Prerequisites
* Node.js 18.17+ or 20+
* npm or pnpm
* Python 3.10+ (for optional resume generation or deployment probes)

### 2. Installation
```bash
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Quality Checks & Static Analysis
```bash
npm run lint          # ESLint check
npx tsc --noEmit      # TypeScript typecheck
```

### 5. Automated Tests
```bash
npm test              # Run Playwright E2E and Axe accessibility test suites
```

### 6. Production Build
```bash
npm run build
npm run start
```

---

## ☁️ Production Deployment

The repository deploys automatically on every push to `main` via Vercel GitHub integration.

### Setting Production Environment Variables in Vercel:
1. Navigate to **Project Settings > Environment Variables** on Vercel.
2. Add `RESEND_API_KEY` with your key from [resend.com](https://resend.com).
3. (Optional) Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` from [upstash.com](https://upstash.com).
4. Re-deploy or promote the deployment.

---

## ⚠️ Known Limitations & Boundaries

1. **Email Delivery Configuration:** Without configuring `RESEND_API_KEY` in Vercel environment variables, the serverless contact endpoint returns an intentional HTTP 503 error banner offering a direct `mailto:` link.
2. **Custom Domain DNS:** Outbound emails sent via `onboarding@resend.dev` deliver directly to the email registered with Resend. Sending to arbitrary third-party addresses from a custom domain requires configuring DKIM/SPF DNS records in Resend.
3. **Edge Microcontroller Constraints:** Full Three.js 3D rendering and deep sequence TCN inference in AeroPulse-X require modern desktop/mobile web browsers; low-power IoT microcontrollers consume reduced-order telemetry feeds.
