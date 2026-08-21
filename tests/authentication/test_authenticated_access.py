def test_authenticated_ping(
    session,
    api_url,
    headers,
    timeout_seconds,
):
    response = session.get(
        f"{api_url}/api/v1/ping",
        headers=headers,
        timeout=timeout_seconds,
    )

    if response.status_code == 404:
        response = session.get(
            f"{api_url}/api/ping",
            headers=headers,
            timeout=timeout_seconds,
        )

    assert response.status_code == 200

    payload = response.json()

    assert payload.get("tenant_access") in {
        "confirmed",
        True,
    }
