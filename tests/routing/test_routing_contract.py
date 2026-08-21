import os


def test_routing_resolution_is_present(
    session,
    api_url,
    headers,
    timeout_seconds,
):
    provider = os.getenv(
        "OPTISYS_PROVIDER",
        "gcp",
    )

    region = os.getenv(
        "OPTISYS_REGION",
        "us-central1",
    )

    accelerator = os.getenv(
        "OPTISYS_ACCELERATOR",
        "tpu_accelerator",
    )

    response = session.post(
        f"{api_url}/api/optimize",
        headers=headers,
        json={
            "provider": provider,
            "region": region,
            "accelerator": accelerator,
            "metrics": {},
        },
        timeout=timeout_seconds,
    )

    assert response.status_code == 200

    data = response.json()
    routing = data.get("routing") or {}

    assert routing.get(
        "resolved_provider"
    )

    assert routing.get(
        "resolved_region"
    )

    assert routing.get(
        "resolved_accelerator"
    )
