# SecurePact Evidence Verification

SecurePact evidence links an OptiSys execution to cryptographic integrity
metadata.

A verification workflow should check:

1. a trace identifier exists;
2. an execution identifier exists;
3. an output checksum exists;
4. the checksum is valid SHA-256;
5. a notarization identifier exists;
6. notarization reports verified status;
7. SecurePact evidence reports verified status;
8. evidence identifiers correspond to the execution response.

## Example Fields

```json
{
  "trace_id": "trace-...",
  "execution_id": "exec-...",
  "output_checksum": "<64-character SHA-256>",
  "notarization_id": "notar-sha256-...",
  "notarization_verified": true,
  "securepact_evidence": {
    "verified": true
  }
}
