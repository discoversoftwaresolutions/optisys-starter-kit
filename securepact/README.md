# SecurePact

SecurePact provides the integrity, verification, audit, and trust layer
represented in OptiSys execution results.

SecurePact evidence allows a customer to verify that an execution result is
associated with a traceable operation and cryptographic integrity metadata.

## Customer-Visible Evidence

OptiSys execution results may expose:

- `trace_id`
- `execution_id`
- `output_checksum`
- `notarization_id`
- `notarization_status`
- `notarization_verified`
- `securepact_evidence`
- checksum verification
- ledger metadata
- Merkle verification

## Trust Model

The public starter kit validates customer-visible evidence only.

It does not expose private SecurePact ledger, signing, policy, or enforcement
implementation source.

## Verification Flow

Execution
→ Canonical Result
→ SHA-256 Digest
→ Notarization
→ Evidence Record
→ Ledger / Merkle Evidence
→ Customer Verification
