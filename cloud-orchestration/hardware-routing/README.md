# Dynamic Hardware Routing

OptiSys Matrix targets support accelerator-aware workload placement.

Validated Matrix test coverage includes hardware classes such as:

- Google TPU
- NVIDIA GPU
- AMD GPU
- AWS Trainium
- AWS Inferentia

Hardware selection can be constrained by workload requirements and policy.

## Example

An AI workload may request:

    workload: ai_inference
    accelerator: tpu

The Matrix layer can evaluate available targets and select a compatible
provider, region, and accelerator combination.

The selected target is subsequently passed through the execution
authorization boundary.

## Production Evidence

The published OptiSys validation corpus includes GCP TPU execution evidence
with accelerator matching and cryptographic output checksums.

The presence of a hardware class in Matrix routing tests does not by itself
represent live production certification of that hardware provider.
