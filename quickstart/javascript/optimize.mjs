const apiUrl =
  process.env.OPTISYS_API_URL;

const apiKey =
  process.env.OPTISYS_API_KEY;

if (!apiUrl) {
  throw new Error(
    "OPTISYS_API_URL is required"
  );
}

if (!apiKey) {
  throw new Error(
    "OPTISYS_API_KEY is required"
  );
}

const payload = {
  workload:
    "matrix_multiplication",
  accelerator:
    "tpu",
  cost_limit_usd:
    150.0,
  enforce_strict_capping:
    true,
};

const response = await fetch(
  `${apiUrl.replace(/\/$/, "")}/api/optimize`,
  {
    method: "POST",
    headers: {
      "X-API-Key":
        apiKey,
      "Content-Type":
        "application/json",
    },
    body:
      JSON.stringify(
        payload
      ),
  }
);

const body =
  await response.json();

if (!response.ok) {
  console.error(body);
  process.exit(1);
}

console.log(
  JSON.stringify(
    body,
    null,
    2
  )
);
