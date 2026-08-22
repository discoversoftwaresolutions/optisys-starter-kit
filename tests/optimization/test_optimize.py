import os


def test_optimize_returns_execution_evidence(
    session,
    api_url,
    headers,
    timeout_seconds,
):
    payload = {
        "provider": os.getenv(
            "OPTISYS_PROVIDER",
            "gcp",
        ),
        "region": os.getenv(
            "OPTISYS_REGION",
            "us-central1",
        ),
        "accelerator": os.getenv(
            "OPTISYS_ACCELERATOR",
            "tpu_accelerator",
        ),
        "metrics": {},
    }

    response = session.post(
        f"{api_url}/api/optimize",
        headers=headers,
        json=payload,
        timeout=timeout_seconds,
    )

    assert response.status_code == 200

    data = response.json()

    assert data.get("status") == "completed"
    assert data.get("trace_id")
    assert data.get("execution_id")
    assert data.get("output_checksum")
    assert data.get("notarization_id")
