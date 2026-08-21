# Compute Brokerage

OptiSys models compute infrastructure as selectable execution targets rather
than requiring applications to hard-code a single provider or hardware type.

A target may include characteristics such as:

- cloud provider
- region
- accelerator
- supported workload
- supported framework
- estimated latency
- estimated execution cost
- performance score
- availability score
- compliance attributes

The Matrix Engine evaluates compatible targets and produces a deterministic
selection that can subsequently be evaluated by policy and execution gates.

This architecture provides the foundation for Compute-as-a-Service brokerage
across heterogeneous infrastructure.

## Important Boundary

Target selection is not equivalent to provider execution.

OptiSys intentionally separates:

    target resolution
        ↓
    policy decision
        ↓
    execution authorization
        ↓
    provider execution

This allows infrastructure recommendations and plans to be evaluated without
implicitly mutating customer infrastructure.
