# OptiSys Quickstart

This quickstart validates an activated OptiSys Headless API account.

## Required Environment Variables

Set:

    export OPTISYS_API_URL="https://YOUR-OPTISYS-GATEWAY"
    export OPTISYS_API_KEY="optisys_live_REPLACE_ME"

Use the API endpoint and API key returned by your activated OptiSys workspace.

## Verify API Access

Run:

    curl -sS \
      -H "X-API-Key: $OPTISYS_API_KEY" \
      "$OPTISYS_API_URL/api/v1/ping"

A successful response should indicate:

- authenticated access
- tenant access confirmed
- marketplace identity
- configured OptiSys core connectivity

## Execute an Optimization Request

Run:

    curl -sS \
      -X POST \
      "$OPTISYS_API_URL/api/optimize" \
      -H "X-API-Key: $OPTISYS_API_KEY" \
      -H "Content-Type: application/json" \
      -d '{
        "workload": "matrix_multiplication",
        "accelerator": "tpu",
        "cost_limit_usd": 150.0,
        "enforce_strict_capping": true
      }'

A completed execution can include:

- routing metadata
- provider
- region
- accelerator
- trace ID
- execution ID
- output checksum
- notarization ID
- SecurePact evidence
- ledger evidence
- Merkle verification

Never commit a production API key to this repository.
