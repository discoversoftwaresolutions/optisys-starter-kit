# OptiSys Starter Kit

The **OptiSys Starter Kit** is the public reference toolkit for validating, integrating, benchmarking, and building against the **OptiSys Headless API**.

OptiSys is an intelligent infrastructure orchestration platform designed to interoperate with, integrate, migrate, optimize, route, govern, and verify workloads across heterogeneous cloud and compute environments.

It combines deterministic infrastructure decisioning through the Matrix Engine, multi-cloud and accelerator-aware orchestration, migration and cutover controls, workload optimization, and SecurePact-backed execution evidence into a unified headless API platform.

OptiSys is designed for developers, enterprises, infrastructure operators, cloud providers, independent software vendors (ISVs), and technology partners that need a programmable control layer across distributed infrastructure without coupling applications to a single provider, hardware class, or user interface.

**Category:** Intelligent Infrastructure Orchestration
**Primary Interface:** Headless API
**Core Domains:** Interoperability, Integration, Migration, Matrix Engine, Cloud Orchestration, Compute Brokerage, Hardware Routing, Optimization, SecurePact, Audit & Compliance Evidence

---

## What This Repository Provides

This repository provides the public OptiSys Starter Kit, including:

* authenticated API quickstarts
* capability validation tests
* public API contract tests
* benchmark runners and methodology
* sanitized certification evidence
* interoperability examples
* integration and migration workflows
* Matrix Engine routing examples
* multi-cloud orchestration examples
* SecurePact verification
* customer-facing integration examples
* an optional open-source reference UI
* deployment and automation examples

The Starter Kit is intended to help customers understand OptiSys, validate relevant capabilities, evaluate integration patterns, and prepare their own production integrations.

The Starter Kit is **not** the OptiSys production execution plane.

The **OptiSys Headless API** is the primary production interface.

---

## From Provisioning to Production

OptiSys follows a standard enterprise headless API integration model with a guided onboarding and validation experience.

A typical customer lifecycle is:

```text
Purchase / Subscribe
        ↓
Marketplace or Direct Entitlement
        ↓
OptiSys Onboarding and Provisioning
        ↓
Tenant-Scoped API Access
        ↓
Starter Kit
        ↓
Understand and Validate OptiSys
        ↓
Connect Authorized Infrastructure
        ↓
Integrate the OptiSys Headless API
        ↓
Customer Backend / Application / Agent / Automation
        ↓
Production Operations
```

### 1. Acquire

Customers obtain access to OptiSys through a supported marketplace, enterprise agreement, or other authorized distribution channel.

### 2. Onboard and Provision

The OptiSys onboarding process establishes the customer's authorized OptiSys environment.

Depending on the distribution channel and entitlement, onboarding can include:

* marketplace entitlement verification
* customer or organization identity verification
* tenant provisioning
* entitlement activation
* API access provisioning
* credential establishment
* access to the Starter Kit and integration resources

The OptiSys provisioning experience provides onboarding and minimal operational visibility.

It is **not intended to replace the customer's production infrastructure interface or application**.

### 3. Understand and Validate

After provisioning, customers can use the OptiSys Starter Kit to understand and exercise the capabilities available through the OptiSys Headless API.

The Starter Kit provides reference tooling for:

* making initial authenticated API calls
* validating interoperability
* exercising integration and migration workflows
* validating Matrix Engine decisions
* exercising multi-cloud placement and compute brokerage
* validating SecurePact execution evidence
* running public API contract tests
* reproducing documented benchmarks
* reviewing sanitized validation evidence
* examining integration examples
* understanding how OptiSys results can be incorporated into an application

This gives engineering teams a controlled path from initial API access to production integration.

### 4. Connect

Customers authorize the infrastructure, providers, systems, and workload environments that OptiSys is permitted to interact with.

OptiSys can then operate across the authorized environments according to the customer's configuration, policies, entitlements, and supported capabilities.

### 5. Integrate

For production use, customers integrate the OptiSys Headless API server-to-server into the systems appropriate to their environment.

Examples include:

* existing enterprise applications
* internal developer platforms
* infrastructure management platforms
* SaaS products
* ISV products
* AI agents
* automation systems
* CI/CD workflows
* operational tooling
* custom applications and interfaces

A typical production integration follows this model:

```text
Customer UI / Agent / Automation / Platform
                    ↓
             Customer Backend
                    ↓
        Authenticated API Requests
                    ↓
          OptiSys Headless API
                    ↓
       Authorized Infrastructure
```

API credentials and infrastructure credentials should remain within appropriate trusted server-side or workload identity boundaries rather than being embedded directly into public client applications.

### 6. Build the Customer Experience

OptiSys does not require customers to adopt a specific production user interface.

Customers may:

* integrate OptiSys into an existing application
* add OptiSys capabilities to an existing operational dashboard
* expose OptiSys functionality through an ISV product
* build a dedicated interface
* invoke OptiSys through an agent
* use OptiSys entirely through automation

The production experience belongs to the customer or ISV.

OptiSys provides the programmable infrastructure capabilities underneath that experience.

### 7. Operate

Once integrated, OptiSys can participate in authorized infrastructure workflows across its supported capability areas.

The general operational model is:

```text
Discover
   ↓
Analyze
   ↓
Decide
   ↓
Govern
   ↓
Execute
   ↓
Verify
   ↓
Measure
```

The exact workflow depends on the OptiSys capability being invoked and the customer's authorized environment.

---

## Role of the Starter Kit

The Starter Kit is the technical adoption and validation layer between provisioning and production integration.

Its purpose is to answer practical engineering questions such as:

* Can I authenticate successfully?
* Can OptiSys interact with my supported environment?
* How does OptiSys normalize heterogeneous infrastructure?
* How do integration and migration workflows operate?
* How does the Matrix Engine make infrastructure decisions?
* How does multi-cloud placement work?
* How is execution verified?
* What evidence does OptiSys return?
* How can my application consume OptiSys?
* What demonstrated benchmark evidence is available?

Customers can use the Starter Kit during evaluation, proof-of-concept development, integration development, testing, and technical validation.

Production systems are expected to consume the OptiSys Headless API through the integration architecture appropriate to the customer's environment.

---

## Role of the Reference UI

The Starter Kit includes an optional open-source reference frontend.

The reference UI demonstrates one possible way to consume and present OptiSys API capabilities.

It is provided as an implementation reference, not as a required production interface.

Customers and ISVs can inspect the reference implementation, adapt appropriate patterns, or build completely different experiences around the OptiSys Headless API.

---

## Core Capability Areas

### Interoperability

Validate connectivity and normalized interaction across heterogeneous providers, systems, infrastructure classes, and workload environments.

### Integration and Migration

Exercise discovery, integration, migration planning, execution, cutover verification, and rollback-oriented workflows.

### Matrix Engine

Validate policy-driven routing, workload resolution, migration decisions, provider selection, and infrastructure placement.

### Multi-Cloud Orchestration and Compute Brokerage

Exercise workload placement across cloud providers, regions, compute classes, and accelerator types.

### SecurePact

Validate execution evidence including:

* trace identity
* execution identity
* output checksums
* notarization identifiers
* notarization verification
* SecurePact evidence
* ledger evidence
* Merkle verification
* checksum verification

### Audit and Compliance

Produce reproducible technical evidence for enterprise governance, certification, audit, and compliance workflows.

---

## Validation Model

The Starter Kit distinguishes between several forms of technical validation.

### Quickstarts

Quickstarts demonstrate how to establish authenticated communication with the OptiSys Headless API and perform initial API operations.

### API Contract Tests

Public API contract tests verify expected API behavior and integration contracts.

### Capability Validation

Capability validation exercises OptiSys functionality across interoperability, integration, migration, routing, orchestration, verification, and related infrastructure operations.

### Benchmarks

Benchmarks measure observed behavior under documented test conditions using reproducible methodology.

### Certification Evidence

Sanitized evidence provides technical artifacts supporting documented validation and certification results.

Partner-specific certification and ecosystem validation may be maintained separately from the core Starter Kit so that the Starter Kit remains focused on the partner-neutral OptiSys API and customer integration experience.

---

## Flagship Validation

### 1M Multi-Domain Certification

Validated run characteristics:

| Metric                          |                 Result |
| ------------------------------- | ---------------------: |
| Resources processed             |              1,000,000 |
| Dependency-safe execution waves |                      7 |
| Median throughput               | ~47,800+ resources/sec |
| Median certification time       |          ~20.9 seconds |
| Passing runs                    |                  3 / 3 |
| Failures                        |                      0 |
| Integrity                       |       SHA-256 evidence |

Published benchmark results represent observed performance under documented test conditions and are not universal performance guarantees.

---

## Repository Structure

* `quickstart/` — first authenticated API calls
* `interoperability/` — connectivity and provider normalization
* `integration/` — integration and migration workflows
* `matrix-engine/` — routing and decision verification
* `cloud-orchestration/` — multi-cloud placement and brokerage
* `securepact/` — verification, notarization, audit, and compliance
* `tests/` — public API contract tests
* `benchmarks/` — benchmark runners and methodology
* `evidence/` — sanitized certification evidence
* `examples/` — customer-facing integration examples
* `ui-template/` — optional reference frontend
* `deployment/` — deployment examples
* `scripts/` — setup, verification, testing, and benchmark helpers

The repository structure follows the OptiSys adoption path:

```text
Authenticate
    ↓
Understand
    ↓
Validate
    ↓
Benchmark
    ↓
Review Evidence
    ↓
Build
    ↓
Integrate
    ↓
Production
```

---

## Live Dashboard Demo

See a hosted example of an OptiSys-powered operational dashboard:

https://optisys-ui-82265264308.us-central1.run.app/

The hosted dashboard is one possible interface built around OptiSys.

OptiSys itself is headless and can be integrated into existing applications, developer portals, automation systems, infrastructure platforms, agents, ISV products, or custom interfaces.

The dashboard is a reference implementation and is **not required to operate OptiSys in production**.

The open-source reference implementation is available under:

`ui-template/frontend/`

---

## Quick Start

Clone the Starter Kit:

```bash
git clone https://github.com/discoversoftwaresolutions/optisys-starter-kit.git
cd optisys-starter-kit
```

Create and activate a Python virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install the Starter Kit dependencies:

```bash
pip install -r requirements.txt
```

Create the local environment configuration:

```bash
cp config/.env.example .env
```

Configure the required OptiSys API endpoint and credentials according to the environment template, then begin with the examples under:

```text
quickstart/
```

From there, use the capability-specific directories to validate the OptiSys functionality relevant to your integration.

---

## Production Integration

The Starter Kit is designed to help engineering teams reach a point where they can move from reference tooling to their own production implementation.

A production customer does not need to run the Starter Kit as its application.

Instead:

```text
Starter Kit
    ↓
Learn + Validate + Integrate
    ↓
────────────────────────────
     Production Boundary
────────────────────────────
    ↓
Customer Backend
    ↓
OptiSys Headless API
    ↓
Authorized Infrastructure
```

The customer's backend can then expose OptiSys capabilities through whichever experience is appropriate:

```text
                    Customer UI
                         │
                    ISV Product
                         │
                     AI Agent
                         │
                     Automation
                         │
                  CI/CD / Platform
                         │
                         ▼
                  Customer Backend
                         │
                         ▼
                OptiSys Headless API
                         │
                         ▼
              Authorized Infrastructure
```

This model allows OptiSys to remain provider-neutral, interface-neutral, and compatible with existing enterprise architectures.

---

## For ISVs and Technology Partners

ISVs and technology partners can integrate OptiSys behind their existing products rather than requiring downstream customers to adopt a separate OptiSys interface.

A typical embedded integration is:

```text
ISV Application / Existing UI
              ↓
          ISV Backend
              ↓
      OptiSys Headless API
              ↓
Isolated Authorized Customer Context
              ↓
Downstream Customer Infrastructure
```

This allows the ISV to retain control of its product experience while using OptiSys as an underlying infrastructure interoperability and operations layer.

---

## Why OptiSys

Modern infrastructure spans multiple cloud providers, compute classes, accelerators, workload environments, security domains, and operational systems.

Applications increasingly need to interact with that infrastructure without being tightly coupled to one provider or one interface.

OptiSys provides a programmable infrastructure layer designed to support:

* heterogeneous infrastructure interoperability
* integration and migration
* deterministic infrastructure decisioning
* policy-driven routing and placement
* multi-cloud orchestration
* compute brokerage
* accelerator-aware workload placement
* workload optimization
* governed infrastructure operations
* execution verification
* audit and compliance evidence

By exposing these capabilities through a unified headless API, OptiSys can be incorporated into existing enterprise systems instead of requiring organizations to replace their established applications and operational interfaces.

---

## Summary

**OptiSys is the headless infrastructure platform.**

**The onboarding experience provisions access.**

**The Starter Kit helps customers understand, validate, benchmark, and integrate OptiSys.**

**The reference UI demonstrates one possible implementation.**

**The customer or ISV controls the production application and user experience.**

The intended path is:

```text
Acquire
  ↓
Provision
  ↓
Understand
  ↓
Validate
  ↓
Connect
  ↓
Integrate
  ↓
Operate
  ↓
Verify
  ↓
Measure
```

OptiSys remains the programmable infrastructure interoperability and operations layer throughout that lifecycle.
