# OptiSys Reference UI

This directory contains an optional open-source reference interface for the
OptiSys Headless API.

The reference UI demonstrates:

- API authentication
- workload requests
- provider and region routing
- accelerator selection
- optimization execution
- SecurePact evidence
- SHA-256 output integrity
- execution notarization
- benchmark visibility

## Live Dashboard Demo

A more complete hosted OptiSys dashboard can be viewed at:

https://optisys-ui-82265264308.us-central1.run.app/

The hosted dashboard demonstrates one possible product experience built on
OptiSys.

It is not required to use OptiSys.

## Run the Template

From `ui-template/frontend`:

    npm install
    npm run dev

Then open the local Vite URL and enter the API endpoint and API key supplied
by your activated OptiSys workspace.

## Security Model

The public reference UI does not include:

- production OptiSys credentials
- marketplace tokens
- customer cloud credentials
- AWS access keys
- Azure client secrets
- GCP service-account files
- private OptiSys implementation source
- private SecurePact signing or ledger implementation

The API key entered in the reference UI is held only in React state and is
not persisted to localStorage by the template.

For production applications, use an authentication and credential-handling
architecture appropriate for your environment.
