# Matrix Routing

Matrix routing resolves a customer workload against available execution
targets.

The resolver:

- discovers viable targets;
- checks compatibility;
- scores candidates;
- preserves alternatives;
- selects the highest-scoring compatible target.

The result can expose:

- provider
- region
- accelerator
- normalized score
- decision rationale
- alternative candidates

Selection remains distinct from execution authorization.
