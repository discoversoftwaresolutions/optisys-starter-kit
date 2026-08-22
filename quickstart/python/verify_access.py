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

response = requests.get(
    f"{api_url}/api/v1/ping",
    headers={
        "X-API-Key": api_key,
    },
    timeout=30,
)

response.raise_for_status()

print(
    json.dumps(
        response.json(),
        indent=2,
        sort_keys=True,
    )
)
