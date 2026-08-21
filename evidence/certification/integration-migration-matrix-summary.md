# OptiSys Integration, Migration, and Matrix Certification Summary

## Migration Controls

Validated behaviors include:

- provider execution uses a migration execution coordinator;
- rollback checkpoints are created before execution;
- destructive cutover can be denied;
- migration verification is required before cutover;
- SecurePact evidence is required before cutover;
- rollback revokes cutover authority;
- rollback preserves the source;
- source retirement requires a satisfied rollback window;
- source retirement requires verified cutover;
- source retirement requires SecurePact evidence.

## Matrix Controls

Validated behaviors include:

- deterministic execution-target resolution;
- highest-scoring compatible target selection;
- provider policy enforcement;
- region policy enforcement;
- accelerator policy enforcement;
- workload and framework compatibility checks;
- compliance checks;
- cost and latency policy;
- explicit production approval;
- fail-closed unresolved destination behavior.

## Execution Boundary

Migration authorization and Matrix authorization do not imply provider
execution.

Validated tests explicitly preserve:

`provider_execution_attempted = false`

during planning and authorization-only flows.
