def test_checksum_is_sha256_length(
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

    checksum = response.json().get(
        "output_checksum",
        "",
    )

    assert len(checksum) == 64

    int(checksum, 16)
