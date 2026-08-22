# Provider Selection

OptiSys separates provider selection from application business logic.

Provider-aware architecture exists across:

- infrastructure discovery
- Matrix target resolution
- provider adapters
- migration execution
- cutover
- source retirement

The architecture allows additional provider implementations to satisfy
common contracts while preserving the orchestration workflow.

## Provider Scope

The OptiSys architecture contains abstractions and/or discovery support for
multiple infrastructure providers.

The public certification evidence currently establishes GCP as the validated
Matrix adapter and live provider execution path represented by this starter
kit.

Other provider targets may be exercised by Matrix contract tests without
being represented as live execution-certified.
