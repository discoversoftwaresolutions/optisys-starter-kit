def test_customer_execution_flow(
    session,
    api_url,
    headers,
    timeout_seconds,
):
    response = session.post(
        f"{api_url}/api/optimize",
        headers=headers,
        json={
            "provider": "gcp",
            "region": "us-central1",
            "accelerator": "tpu_accelerator",
            "metrics": {},
        },
        timeout=timeout_seconds,
    )

    assert response.status_code == 200

    data = response.json()

    required_fields = [
        "trace_id",
        "execution_id",
        "output_checksum",
        "notarization_id",
        "routing",
    ]

    for field in required_fields:
        assert data.get(field)

    assert (
        data.get(
            "notarization_verified"
        )
        is True
    )
