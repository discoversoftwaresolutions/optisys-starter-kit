from __future__ import annotations

import json
import os

import requests
from dotenv import load_dotenv


load_dotenv()

api_url = os.environ[
    "OPTISYS_API_URL"
].rstrip("/")

api_key = os.environ[
    "OPTISYS_API_KEY"
]

payload = {
    "workload":
        "matrix_multiplication",
    "accelerator":
        "tpu",
    "cost_limit_usd":
        150.0,
    "enforce_strict_capping":
        True,
}

response = requests.post(
    f"{api_url}/api/optimize",
    headers={
        "X-API-Key":
            api_key,
        "Content-Type":
            "application/json",
    },
    json=payload,
    timeout=120,
)

response.raise_for_status()

print(
    json.dumps(
        response.json(),
        indent=2,
        sort_keys=True,
    )
)
