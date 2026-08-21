# OptiSys Starter Kit

The OptiSys Starter Kit is the public reference toolkit for validating,
integrating, benchmarking, and building against the OptiSys Headless API.

OptiSys is designed for interoperable infrastructure operations across
heterogeneous cloud, compute, migration, routing, security, audit, and
compliance environments.

## Core Capability Areas

### Interoperability

Validate connectivity and normalized interaction across heterogeneous
providers, systems, infrastructure classes, and workload environments.

### Integration and Migration

Exercise discovery, integration, migration planning, execution,
cutover verification, and rollback-oriented workflows.

### Matrix Engine

Validate policy-driven routing, workload resolution, migration decisions,
provider selection, and infrastructure placement.

### Multi-Cloud Orchestration and Compute Brokerage

Exercise workload placement across cloud providers, regions, compute classes,
and accelerator types.

### SecurePact

Validate execution evidence including:

- trace identity
- execution identity
- output checksums
- notarization identifiers
- notarization verification
- SecurePact evidence
- ledger evidence
- Merkle verification
- checksum verification

### Audit and Compliance

Produce reproducible technical evidence for enterprise governance,
certification, audit, and compliance workflows.

## Flagship Validation

### 1M Multi-Domain Certification

Validated run characteristics:

| Metric | Result |
|---|---:|
| Resources processed | 1,000,000 |
| Dependency-safe execution waves | 7 |
| Median throughput | ~47,800+ resources/sec |
| Median certification time | ~20.9 seconds |
| Passing runs | 3 / 3 |
| Failures | 0 |
| Integrity | SHA-256 evidence |

Published benchmark results represent observed performance under documented
test conditions and are not universal performance guarantees.

## Repository Structure

- `quickstart/` — first authenticated API calls
- `interoperability/` — connectivity and provider normalization
- `integration/` — integration and migration workflows
- `matrix-engine/` — routing and decision verification
- `cloud-orchestration/` — multi-cloud placement and brokerage
- `securepact/` — verification, notarization, audit, and compliance
- `tests/` — public API contract tests
- `benchmarks/` — benchmark runners and methodology
- `evidence/` — sanitized certification evidence
- `examples/` — customer-facing integration examples
- `ui-template/` — optional reference frontend
- `deployment/` — deployment examples
- `scripts/` — setup, verification, testing, and benchmark helpers


## Live Dashboard Demo

See a hosted example of an OptiSys-powered operational dashboard:

https://optisys-ui-82265264308.us-central1.run.app/

The hosted dashboard is one possible interface built around OptiSys.
OptiSys itself is headless and can be integrated into existing applications,
developer portals, automation systems, infrastructure platforms, or custom
interfaces.

The open-source reference implementation is available under:

`ui-template/frontend/`

## Quick Start

```bash
git clone https://github.com/discoversoftwaresolutions/optisys-starter-kit.git
cd optisys-starter-kit

python3 -m venv .venv
source .venv/bin/activate

pip install -r requirements.txt

cp config/.env.example .env
