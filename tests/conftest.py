import os

import pytest
import requests
from dotenv import load_dotenv


load_dotenv()


@pytest.fixture(scope="session")
def api_url() -> str:
    value = os.getenv(
        "OPTISYS_API_URL",
        "",
    ).rstrip("/")

    if not value:
        pytest.skip(
            "OPTISYS_API_URL is not configured."
        )

    return value


@pytest.fixture(scope="session")
def api_key() -> str:
    value = os.getenv(
        "OPTISYS_API_KEY",
        "",
    ).strip()

    if not value:
        pytest.skip(
            "OPTISYS_API_KEY is not configured."
        )

    return value


@pytest.fixture(scope="session")
def headers(api_key: str) -> dict[str, str]:
    return {
        "X-API-Key": api_key,
        "Content-Type": "application/json",
    }


@pytest.fixture(scope="session")
def timeout_seconds() -> float:
    return float(
        os.getenv(
            "OPTISYS_REQUEST_TIMEOUT_SECONDS",
            "120",
        )
    )


@pytest.fixture(scope="session")
def session() -> requests.Session:
    client = requests.Session()
    yield client
    client.close()
