# OptiSys Cloud Orchestration

OptiSys provides a policy-governed orchestration layer for selecting
infrastructure targets across heterogeneous cloud and compute environments.

The orchestration architecture separates four responsibilities:

1. Workload requirement interpretation
2. Infrastructure target resolution
3. Policy and execution authorization
4. Provider execution

This separation allows OptiSys to reason about cloud, region, accelerator,
cost, performance, availability, compliance, and workload compatibility
without coupling infrastructure selection directly to provider mutation.

## Core Flow

Workload
→ Requirements
→ Matrix Resolution
→ Provider / Region / Accelerator Selection
→ Policy Evaluation
→ Execution Authorization
→ Provider Execution
→ Verification
→ Evidence

## Validated Scope

The public starter kit demonstrates:

- provider-aware workload routing
- region-aware target selection
- accelerator-aware target selection
- policy-governed infrastructure resolution
- deterministic Matrix decisions
- execution authorization boundaries
- adapter-based provider architecture
- GCP execution validation
- TPU accelerator validation
- cryptographic execution evidence

AWS and Azure may participate in Matrix target modeling and adapter
contracts, but this starter kit does not represent them as live
provider-execution-certified unless corresponding certification evidence
is published.

See:

- `compute-brokerage/`
- `hardware-routing/`
- `provider-selection/`
- `execution-boundary/`
