# Security Policy

Do not report security vulnerabilities through public GitHub issues.

This repository must never contain:

- production OptiSys API keys
- marketplace tokens
- cloud credentials
- database credentials
- Redis credentials or private addresses
- private signing keys
- production service-account files
- internal production logs
- proprietary OptiSys implementation source

All runtime credentials must be supplied through environment variables or an appropriate secrets-management system.

Validation evidence must be reviewed and sanitized before publication.
