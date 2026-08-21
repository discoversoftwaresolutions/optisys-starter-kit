# Execution Boundary

One of the central OptiSys orchestration controls is the separation between
planning and infrastructure execution.

The Matrix layer determines where a workload should execute.

The policy layer determines whether that selection is acceptable.

The execution gate determines whether execution is authorized.

Provider-specific execution is handled by a separate execution layer.

This distinction prevents a routing or recommendation decision from
automatically becoming an infrastructure mutation.

## Lifecycle

    Matrix Resolution
          ↓
    Policy Evaluation
          ↓
    Execution Gate
          ↓
    Execution Plan
          ↓
    Provider Executor
          ↓
    Verification
          ↓
    Evidence

Dry-run and planning workflows therefore remain useful even when provider
execution is intentionally disabled.
