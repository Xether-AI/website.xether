# Xether AI - Marketing & Product Website

## Overview

The marketing and product website for Xether AI, an enterprise-grade platform for automated data lifecycle management. This site serves as the primary public-facing interface for the platform.

## Purpose

This website is **not** the application dashboard or user interface. It is the marketing site that:

- Explains what Xether AI is and what problems it solves
- Showcases core capabilities and features
- Provides pricing information
- Directs users to sign up or request demos
- Communicates the value proposition to ML engineers, data engineers, and enterprises

## What Xether AI Is

Xether AI is not a model. It is not a dashboard toy.

Xether AI is a **data infrastructure layer** built for teams that train, deploy, and maintain machine learning systems in production. The platform focuses on **data as a first-class asset**, providing reproducibility, auditability, scalability, and automation across the entire data pipeline.

It is designed to feel like GitLab does for code, but applied to **datasets and data pipelines**.

## Core Features Highlighted

- **Dataset Management & Versioning**: Git-like version control for datasets
- **Automated Data Pipelines**: Modular, composable stages for ingestion, cleaning, validation, transformation, and augmentation
- **AI-Powered Data Operations**: ML models for outlier detection, anomaly detection, and synthetic data generation
- **Synthetic Data Engine**: Privacy-preserving, controlled synthetic data generation
- **Enterprise Orchestration**: Event-driven, fault-tolerant pipeline execution
- **Observability & Auditability**: Full lineage tracking and compliance-ready audit trails

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: Shadcn/UI (Radix UI primitives)
- **Data Fetching**: TanStack Query (React Query)
- **API Communication**: REST (to main backend)

## Frontend Architecture

### Responsibilities

- Explain what Xether AI is and what problems it solves
- Showcase core capabilities and features
- Provide pricing information
- Direct users to sign up or request demos
- Communicate value proposition to ML engineers, data engineers, and enterprises

### Communication

- **Backend API**: REST only
- **No direct storage access**: All data flows through backend APIs
- **Authentication**: OAuth2 flow via backend

## Design Philosophy

The website follows these principles:

- **Professional**: Enterprise-grade, not flashy
- **Minimalist**: Clean, focused design
- **Technical but readable**: Speaks to engineers without jargon overload
- **No hype language**: Honest, clear communication
- **Similar tone to**: GitLab, HashiCorp, Stripe documentation

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm or pnpm

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

The project is optimized for deployment on [Vercel](https://vercel.com).

## Related Components

- **[Backend](../backend)**: Main API and authentication service
- **[Main Pipeline](../main%20pipeline)**: Data processing engine
- **[Docs](../docs)**: Developer documentation and API references

## License

Licensed under the [MIT License](LICENSE).
