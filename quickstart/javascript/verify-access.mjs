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

const response = await fetch(
  `${apiUrl.replace(/\/$/, "")}/api/v1/ping`,
  {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
    },
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
