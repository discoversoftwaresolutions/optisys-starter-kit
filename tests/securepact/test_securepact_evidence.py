def test_securepact_evidence_is_verified(
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

    assert data.get(
        "notarization_verified"
    ) is True

    evidence = (
        data.get(
            "securepact_evidence"
        )
        or {}
    )

    assert evidence.get(
        "verified"
    ) is True

    assert evidence.get(
        "trace_id"
    )

    assert evidence.get(
        "execution_id"
    )

    assert evidence.get(
        "output_checksum"
    )

    assert evidence.get(
        "notarization_id"
    )
