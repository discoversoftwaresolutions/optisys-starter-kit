export type OptiSysConnection = {
  apiUrl: string;
  apiKey: string;
};

export type OptimizationRequest = {
  workload: string;
  provider?: string;
  region?: string;
  accelerator?: string;
  cost_limit_usd?: number;
  enforce_strict_capping?: boolean;
};

function normalizeApiUrl(
  value: string
): string {
  return value
    .trim()
    .replace(/\/+$/, "");
}

function headers(
  apiKey: string
): HeadersInit {
  return {
    "X-API-Key": apiKey,
    "Content-Type":
      "application/json",
  };
}

export async function verifyConnection(
  connection: OptiSysConnection
) {
  const apiUrl =
    normalizeApiUrl(
      connection.apiUrl
    );

  const response =
    await fetch(
      `${apiUrl}/api/v1/ping`,
      {
        method: "GET",
        headers: headers(
          connection.apiKey
        ),
      }
    );

  const body =
    await response.json();

  if (!response.ok) {
    throw new Error(
      body?.detail ||
        `OptiSys returned ${response.status}`
    );
  }

  return body;
}

export async function optimize(
  connection: OptiSysConnection,
  payload: OptimizationRequest
) {
  const apiUrl =
    normalizeApiUrl(
      connection.apiUrl
    );

  const response =
    await fetch(
      `${apiUrl}/api/optimize`,
      {
        method: "POST",
        headers: headers(
          connection.apiKey
        ),
        body:
          JSON.stringify(
            payload
          ),
      }
    );

  const body =
    await response.json();

  if (!response.ok) {
    throw new Error(
      body?.detail ||
        `OptiSys returned ${response.status}`
    );
  }

  return body;
}
