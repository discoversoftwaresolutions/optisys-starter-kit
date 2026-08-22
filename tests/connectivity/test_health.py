def test_gateway_is_reachable(
    session,
    api_url,
    timeout_seconds,
):
    response = session.get(
        f"{api_url}/api/health",
        timeout=timeout_seconds,
    )

    assert response.status_code == 200

    payload = response.json()

    assert payload.get("status") == "ok"
