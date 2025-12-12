---
sidebar_position: 1
---

# Introduction to Privexbot

Welcome to **Privexbot** - the privacy-first AI chatbot builder that runs on Secret VM (Trusted Execution Environments).

## What is Privexbot?

**Privexbot** is a privacy-focused, multi-tenant SaaS platform that empowers organizations to build, train, and deploy AI-powered chatbots using their own data. Unlike traditional platforms, **all AI workloads**—including data ingestion, training, and inference—are executed within **Secret VM** environments to ensure:

- 🔒 **Confidential Computation** - Data encrypted in memory during processing
- 🛡️ **Remote Attestation** - Cryptographically verify code integrity
- 🔐 **Zero Data Leakage** - Even platform administrators cannot access plaintext data
- ✅ **Regulatory Compliance** - Built for HIPAA, GDPR, and enterprise security requirements

## Key Features

### 🤖 Dual Creation Modes

Privexbot provides two powerful ways to build your chatbot:

1. **Simple Chatbots** - Form-based interface for quick FAQ bots and simple Q&A assistants
2. **Advanced Chatflows** - Visual drag-and-drop workflow builder for complex, multi-step conversational AI

### 📚 RAG-Powered Knowledge Base

Import knowledge from multiple sources:
- 📄 **File Upload** - PDF, Word, Text, CSV, JSON
- 🌐 **Website Scraping** - Multi-page crawl with smart content extraction
- 📝 **Google Docs & Sheets** - Direct integration with Google Workspace
- 📋 **Notion** - Import from Notion pages and databases
- ✍️ **Direct Text** - Paste content directly into the platform

### 🌍 Multi-Channel Deployment

Deploy your chatbot across multiple platforms:
- **Website Widget** - JavaScript embed (~50KB) for any website
- **Discord Bot** - Native Discord integration
- **Telegram Bot** - Full Telegram Bot API support
- **WhatsApp Business** - WhatsApp Business API integration
- **API Access** - RESTful API for custom integrations

### 📊 Lead Generation & Analytics

- **Smart Lead Capture** - Collect contact information at optimal moments
- **Geographic Analytics** - IP-based location tracking
- **Conversion Tracking** - Monitor engagement and success metrics
- **Privacy Controls** - GDPR-compliant data handling

## Why Choose Privexbot?

### For Enterprises
- ✅ **Data Privacy Guaranteed** - Secret VM ensures data never leaves TEE
- ✅ **Regulatory Compliance** - Meet HIPAA, GDPR, SOC 2 requirements
- ✅ **Audit Trails** - Complete logging and attestation records

### For Agencies
- ✅ **Multi-Tenant** - Manage multiple clients and organizations
- ✅ **White-Label** - Rebrand as your own service
- ✅ **Team Collaboration** - Workspaces for different departments

### For Developers
- ✅ **Open Source** - Full codebase transparency
- ✅ **Modern Stack** - FastAPI, React 19, TypeScript
- ✅ **Extensible** - Plugin architecture for custom functionality

## Quick Start

Ready to get started? Here's what you need:

### Prerequisites

- **Docker** (20.10+) and **Docker Compose** (2.0+)
- **Node.js** (20+) - For local development
- **Python** (3.11+) - For backend development

### Installation

```bash
# Clone the repository
git clone https://github.com/privexbot/privexbot.git
cd privexbot

# Set up environment
cp .env.example .env

# Start with Docker
docker compose up -d
```

Your Privexbot platform will be available at:
- **Frontend**: http://localhost:3000
- **API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## Next Steps

Explore our comprehensive documentation:

- [**Getting Started Guide**](./tutorial-basics/create-a-document) - Step-by-step setup instructions
- [**Architecture Overview**](./tutorial-extras/manage-docs-versions) - Technical deep dive
- [**API Reference**](./tutorial-extras/translate-your-site) - Complete API documentation
- [**Examples**](./tutorial-basics/deploy-your-site) - Real-world implementation examples

## Need Help?

- 📚 **Documentation** - Comprehensive guides and tutorials
- 💬 **Community** - Join our Discord community
- 📧 **Support** - Enterprise support available
- 🐛 **Issues** - Report bugs on GitHub

Start building your privacy-first AI chatbot today!
