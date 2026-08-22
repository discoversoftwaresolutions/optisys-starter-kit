#!/usr/bin/env bash
set -euo pipefail

: "${OPTISYS_API_URL:?OPTISYS_API_URL is required}"
: "${OPTISYS_API_KEY:?OPTISYS_API_KEY is required}"

curl -sS \
  --fail-with-body \
  -X POST \
  "${OPTISYS_API_URL%/}/api/optimize" \
  -H "X-API-Key: ${OPTISYS_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "workload": "matrix_multiplication",
    "accelerator": "tpu",
    "cost_limit_usd": 150.0,
    "enforce_strict_capping": true
  }'

echo
