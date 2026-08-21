# OptiSys Matrix Engine

The Matrix Engine is the deterministic infrastructure decision layer used by
OptiSys to resolve and govern execution targets.

## Resolution Flow

1. Discover viable execution targets.
2. Filter incompatible targets.
3. Score viable targets.
4. Select the highest-scoring compatible target.
5. Apply Matrix policy.
6. Apply the execution gate.
7. Produce an auditable governance decision.
8. Permit provider execution only when explicitly authorized.

## Decision Dimensions

Matrix decisions can evaluate:

- provider
- region
- accelerator
- workload compatibility
- framework compatibility
- compliance requirements
- estimated cost
- estimated latency
- performance
- availability
- execution approval

## Important Boundary

Matrix authorization is not provider execution.

A workload may be resolved and authorized while:

`provider_execution_attempted = false`

The execution boundary remains separate and explicit.
