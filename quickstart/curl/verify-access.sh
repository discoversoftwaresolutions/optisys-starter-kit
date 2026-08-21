#!/usr/bin/env bash
set -euo pipefail

: "${OPTISYS_API_URL:?OPTISYS_API_URL is required}"
: "${OPTISYS_API_KEY:?OPTISYS_API_KEY is required}"

curl -sS \
  --fail-with-body \
  -H "X-API-Key: ${OPTISYS_API_KEY}" \
  "${OPTISYS_API_URL%/}/api/v1/ping"

echo
