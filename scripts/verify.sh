#!/usr/bin/env bash

set -euo pipefail

ROOT="$(
  cd "$(dirname "${BASH_SOURCE[0]}")/.." &&
  pwd
)"

cd "$ROOT"

echo "=============================================================="
echo "OPTISYS STARTER KIT VERIFICATION"
echo "=============================================================="

failure=0

required_files=(
  README.md
  LICENSE
  SECURITY.md
  CONTRIBUTING.md
  CHANGELOG.md
  requirements.txt
  config/.env.example
)

echo
echo "===== REQUIRED FILES ====="

for file in "${required_files[@]}"; do
  if [ -f "$file" ]; then
    echo "PASS $file"
  else
    echo "FAIL $file"
    failure=1
  fi
done

echo
echo "===== SECRET PATTERN SCREEN ====="

if grep -RniE \
  '(AWS_SECRET_ACCESS_KEY|BEGIN (RSA|OPENSSH|EC) PRIVATE KEY|postgresql://[^[:space:]]+:[^[:space:]]+@|optisys_live_[A-Za-z0-9_-]{20,})' \
  . \
  --exclude-dir=.git \
  --exclude-dir=.venv \
  --exclude-dir=venv \
  --exclude-dir=node_modules \
  --exclude='verify.sh' \
  --exclude='.env.example'
then
  echo "SECRET_SCREEN=FAIL"
  failure=1
else
  echo "SECRET_SCREEN=PASS"
fi

echo
echo "===== INTERNAL INFRASTRUCTURE SCREEN ====="

if grep -RniE \
  '(10\.[0-9]+\.[0-9]+\.[0-9]+|gen-lang-client-[0-9]+|cloudsql/|REDIS_HOST=10\.)' \
  . \
  --exclude-dir=.git \
  --exclude-dir=.venv \
  --exclude-dir=venv \
  --exclude-dir=node_modules \
  --exclude='verify.sh'
then
  echo "INTERNAL_INFRASTRUCTURE_SCREEN=FAIL"
  failure=1
else
  echo "INTERNAL_INFRASTRUCTURE_SCREEN=PASS"
fi

echo
echo "===== REQUIRED DIRECTORY CHECK ====="

required_dirs=(
  quickstart
  interoperability
  integration
  matrix-engine
  cloud-orchestration
  securepact
  tests
  benchmarks
  evidence
  examples
  ui-template
  deployment
  config
  scripts
)

for dir in "${required_dirs[@]}"; do
  if [ -d "$dir" ]; then
    echo "PASS $dir/"
  else
    echo "FAIL $dir/"
    failure=1
  fi
done

echo
echo "=============================================================="

if [ "$failure" -eq 0 ]; then
  echo "OPTISYS_STARTER_KIT_VERIFY=PASS"
else
  echo "OPTISYS_STARTER_KIT_VERIFY=FAIL"
  exit 1
fi
