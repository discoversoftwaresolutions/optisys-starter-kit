import React, {
  useMemo,
  useState,
} from "react";

import {
  optimize,
  verifyConnection,
  type OptiSysConnection,
} from "./api/optisys";

const LIVE_DEMO_URL =
  "https://optisys-ui-82265264308.us-central1.run.app/";

const styles = `
:root {
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  color: #111827;
  background: #f5f7fb;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

button,
input,
select {
  font: inherit;
}

.shell {
  min-height: 100vh;
}

.header {
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 18px 28px;
}

.header-inner {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  font-size: 22px;
  font-weight: 800;
}

.subtitle {
  margin-top: 3px;
  color: #6b7280;
  font-size: 13px;
}

.demo-link {
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 28px;
}

.hero {
  margin-bottom: 22px;
}

.hero h1 {
  margin: 0;
  font-size: 31px;
}

.hero p {
  max-width: 760px;
  color: #6b7280;
  line-height: 1.6;
}

.grid {
  display: grid;
  gap: 18px;
}

.grid.two {
  grid-template-columns:
    repeat(
      2,
      minmax(0, 1fr)
    );
}

.grid.three {
  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );
}

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 20px;
}

.card h2,
.card h3 {
  margin-top: 0;
}

.label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 700;
}

.field {
  margin-bottom: 14px;
}

.input,
.select {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 9px;
  padding: 10px 11px;
  background: #ffffff;
}

.button {
  border: none;
  border-radius: 9px;
  padding: 10px 15px;
  background: #1d4ed8;
  color: white;
  cursor: pointer;
  font-weight: 700;
}

.button.secondary {
  background: #eef2ff;
  color: #3730a3;
}

.button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.status {
  margin-top: 15px;
  padding: 12px;
  border-radius: 10px;
  background: #f8fafc;
  font-size: 14px;
}

.status.good {
  background: #ecfdf5;
  color: #166534;
}

.status.bad {
  background: #fef2f2;
  color: #991b1b;
}

.metric {
  font-size: 25px;
  font-weight: 800;
}

.muted {
  color: #6b7280;
  font-size: 13px;
}

.result-grid {
  display: grid;
  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );
  gap: 12px;
}

.result-item {
  background: #f8fafc;
  border-radius: 10px;
  padding: 12px;
  overflow-wrap: anywhere;
}

.result-label {
  color: #6b7280;
  font-size: 12px;
  margin-bottom: 5px;
}

.result-value {
  font-weight: 700;
}

.code {
  background: #111827;
  color: #e5e7eb;
  padding: 14px;
  border-radius: 10px;
  overflow: auto;
  font-family:
    ui-monospace,
    SFMono-Regular,
    Menlo,
    monospace;
  font-size: 12px;
  max-height: 380px;
}

.check {
  color: #047857;
  font-weight: 700;
}

.warning {
  color: #92400e;
  font-size: 12px;
  line-height: 1.5;
}

@media (
  max-width: 820px
) {
  .grid.two,
  .grid.three,
  .result-grid {
    grid-template-columns: 1fr;
  }

  .header-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
`;

function safeString(
  value: unknown
): string {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return "—";
  }

  return String(value);
}

export default function App() {
  const [connection, setConnection] =
    useState<OptiSysConnection>({
      apiUrl: "",
      apiKey: "",
    });

  const [
    connectionResult,
    setConnectionResult,
  ] = useState<any>(null);

  const [
    optimizationResult,
    setOptimizationResult,
  ] = useState<any>(null);

  const [error, setError] =
    useState("");

  const [busy, setBusy] =
    useState(false);

  const [request, setRequest] =
    useState({
      workload:
        "matrix_multiplication",
      provider: "gcp",
      region: "us-central1",
      accelerator: "tpu",
      costLimit: 150,
    });

  const routing =
    optimizationResult?.routing ||
    {};

  const evidence =
    optimizationResult
      ?.securepact_evidence ||
    {};

  const merkle =
    evidence?.merkle ||
    {};

  const connected =
    connectionResult
      ?.tenant_access ===
    "confirmed";

  const evidenceVerified =
    optimizationResult
      ?.notarization_verified ===
      true &&
    evidence?.verified === true;

  const summary = useMemo(
    () => ({
      provider:
        routing.resolved_provider,
      region:
        routing.resolved_region,
      accelerator:
        routing.resolved_accelerator ||
        optimizationResult
          ?.accelerator,
    }),
    [
      routing,
      optimizationResult,
    ]
  );

  async function handleVerify() {
    setBusy(true);
    setError("");

    try {
      const result =
        await verifyConnection(
          connection
        );

      setConnectionResult(
        result
      );
    } catch (err: any) {
      setConnectionResult(null);
      setError(
        err?.message ||
          "Unable to verify OptiSys access."
      );
    } finally {
      setBusy(false);
    }
  }

  async function handleOptimize() {
    setBusy(true);
    setError("");

    try {
      const result =
        await optimize(
          connection,
          {
            workload:
              request.workload,
            provider:
              request.provider,
            region:
              request.region,
            accelerator:
              request.accelerator,
            cost_limit_usd:
              Number(
                request.costLimit
              ),
            enforce_strict_capping:
              true,
          }
        );

      setOptimizationResult(
        result
      );
    } catch (err: any) {
      setOptimizationResult(
        null
      );

      setError(
        err?.message ||
          "OptiSys optimization failed."
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <style>
        {styles}
      </style>

      <div className="shell">
        <header className="header">
          <div className="header-inner">
            <div>
              <div className="brand">
                OptiSys
              </div>

              <div className="subtitle">
                Intelligent Infrastructure
                Orchestration Platform
              </div>
            </div>

            <a
              className="demo-link"
              href={
                LIVE_DEMO_URL
              }
              target="_blank"
              rel="noreferrer"
            >
              View Live Dashboard Demo →
            </a>
          </div>
        </header>

        <main className="container">
          <section className="hero">
            <h1>
              OptiSys Developer
              Reference Dashboard
            </h1>

            <p>
              A minimal open-source
              interface demonstrating
              authentication,
              infrastructure requests,
              workload routing,
              optimization, and
              SecurePact execution
              evidence through the
              OptiSys Headless API.
            </p>
          </section>

          <div className="grid two">
            <section className="card">
              <h2>
                Connect to OptiSys
              </h2>

              <div className="field">
                <label className="label">
                  API Endpoint
                </label>

                <input
                  className="input"
                  placeholder=
                    "https://YOUR-OPTISYS-GATEWAY"
                  value={
                    connection.apiUrl
                  }
                  onChange={
                    (event) =>
                      setConnection(
                        {
                          ...connection,
                          apiUrl:
                            event
                              .target
                              .value,
                        }
                      )
                  }
                />
              </div>

              <div className="field">
                <label className="label">
                  API Key
                </label>

                <input
                  className="input"
                  type="password"
                  placeholder=
                    "optisys_live_..."
                  value={
                    connection.apiKey
                  }
                  onChange={
                    (event) =>
                      setConnection(
                        {
                          ...connection,
                          apiKey:
                            event
                              .target
                              .value,
                        }
                      )
                  }
                />
              </div>

              <div className="actions">
                <button
                  className="button"
                  onClick={
                    handleVerify
                  }
                  disabled={
                    busy ||
                    !connection.apiUrl ||
                    !connection.apiKey
                  }
                >
                  Verify Access
                </button>
              </div>

              <p className="warning">
                The API key is held
                only in this page's
                React state. This
                template does not
                write credentials to
                the repository or
                browser localStorage.
              </p>

              {connected && (
                <div className=
                  "status good"
                >
                  ✓ Authenticated —
                  tenant access
                  confirmed
                </div>
              )}

              {error && (
                <div className=
                  "status bad"
                >
                  {error}
                </div>
              )}
            </section>

            <section className="card">
              <h2>
                Connection
              </h2>

              <div className=
                "result-grid"
              >
                <div className=
                  "result-item"
                >
                  <div className=
                    "result-label"
                  >
                    Status
                  </div>

                  <div className=
                    "result-value"
                  >
                    {safeString(
                      connectionResult
                        ?.status
                    )}
                  </div>
                </div>

                <div className=
                  "result-item"
                >
                  <div className=
                    "result-label"
                  >
                    Marketplace
                  </div>

                  <div className=
                    "result-value"
                  >
                    {safeString(
                      connectionResult
                        ?.marketplace
                    )}
                  </div>
                </div>

                <div className=
                  "result-item"
                >
                  <div className=
                    "result-label"
                  >
                    Core Agent
                  </div>

                  <div className=
                    "result-value"
                  >
                    {safeString(
                      connectionResult
                        ?.core_agent_status
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div
            className="grid two"
            style={{
              marginTop: 18,
            }}
          >
            <section className="card">
              <h2>
                Infrastructure
                Request
              </h2>

              <div className="field">
                <label className=
                  "label"
                >
                  Workload
                </label>

                <input
                  className="input"
                  value={
                    request.workload
                  }
                  onChange={
                    (event) =>
                      setRequest({
                        ...request,
                        workload:
                          event
                            .target
                            .value,
                      })
                  }
                />
              </div>

              <div className=
                "grid two"
              >
                <div className=
                  "field"
                >
                  <label className=
                    "label"
                  >
                    Provider
                  </label>

                  <input
                    className="input"
                    value={
                      request.provider
                    }
                    onChange={
                      (event) =>
                        setRequest({
                          ...request,
                          provider:
                            event
                              .target
                              .value,
                        })
                    }
                  />
                </div>

                <div className=
                  "field"
                >
                  <label className=
                    "label"
                  >
                    Region
                  </label>

                  <input
                    className="input"
                    value={
                      request.region
                    }
                    onChange={
                      (event) =>
                        setRequest({
                          ...request,
                          region:
                            event
                              .target
                              .value,
                        })
                    }
                  />
                </div>
              </div>

              <div className=
                "grid two"
              >
                <div className=
                  "field"
                >
                  <label className=
                    "label"
                  >
                    Accelerator
                  </label>

                  <input
                    className="input"
                    value={
                      request
                        .accelerator
                    }
                    onChange={
                      (event) =>
                        setRequest({
                          ...request,
                          accelerator:
                            event
                              .target
                              .value,
                        })
                    }
                  />
                </div>

                <div className=
                  "field"
                >
                  <label className=
                    "label"
                  >
                    Cost Limit USD
                  </label>

                  <input
                    className="input"
                    type="number"
                    value={
                      request.costLimit
                    }
                    onChange={
                      (event) =>
                        setRequest({
                          ...request,
                          costLimit:
                            Number(
                              event
                                .target
                                .value
                            ),
                        })
                    }
                  />
                </div>
              </div>

              <button
                className="button"
                onClick={
                  handleOptimize
                }
                disabled={
                  busy ||
                  !connection.apiUrl ||
                  !connection.apiKey
                }
              >
                Execute Optimization
              </button>
            </section>

            <section className="card">
              <h2>
                Resolved Routing
              </h2>

              <div className=
                "result-grid"
              >
                <div className=
                  "result-item"
                >
                  <div className=
                    "result-label"
                  >
                    Provider
                  </div>
                  <div className=
                    "result-value"
                  >
                    {safeString(
                      summary.provider
                    )}
                  </div>
                </div>

                <div className=
                  "result-item"
                >
                  <div className=
                    "result-label"
                  >
                    Region
                  </div>
                  <div className=
                    "result-value"
                  >
                    {safeString(
                      summary.region
                    )}
                  </div>
                </div>

                <div className=
                  "result-item"
                >
                  <div className=
                    "result-label"
                  >
                    Accelerator
                  </div>
                  <div className=
                    "result-value"
                  >
                    {safeString(
                      summary
                        .accelerator
                    )}
                  </div>
                </div>
              </div>

              <div
                className=
                  "result-grid"
                style={{
                  marginTop: 12,
                }}
              >
                <div className=
                  "result-item"
                >
                  <div className=
                    "result-label"
                  >
                    Status
                  </div>
                  <div className=
                    "result-value"
                  >
                    {safeString(
                      optimizationResult
                        ?.status
                    )}
                  </div>
                </div>

                <div className=
                  "result-item"
                >
                  <div className=
                    "result-label"
                  >
                    Routing Source
                  </div>
                  <div className=
                    "result-value"
                  >
                    {safeString(
                      routing
                        .routing_source
                    )}
                  </div>
                </div>

                <div className=
                  "result-item"
                >
                  <div className=
                    "result-label"
                  >
                    Confidence
                  </div>
                  <div className=
                    "result-value"
                  >
                    {safeString(
                      optimizationResult
                        ?.confidence
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section
            className="card"
            style={{
              marginTop: 18,
            }}
          >
            <h2>
              SecurePact Execution
              Evidence
            </h2>

            <div className=
              "result-grid"
            >
              <div className=
                "result-item"
              >
                <div className=
                  "result-label"
                >
                  Verification
                </div>

                <div className=
                  "result-value"
                >
                  {evidenceVerified ? (
                    <span className=
                      "check"
                    >
                      ✓ Verified
                    </span>
                  ) : (
                    "—"
                  )}
                </div>
              </div>

              <div className=
                "result-item"
              >
                <div className=
                  "result-label"
                >
                  Trace ID
                </div>
                <div className=
                  "result-value"
                >
                  {safeString(
                    optimizationResult
                      ?.trace_id
                  )}
                </div>
              </div>

              <div className=
                "result-item"
              >
                <div className=
                  "result-label"
                >
                  Execution ID
                </div>
                <div className=
                  "result-value"
                >
                  {safeString(
                    optimizationResult
                      ?.execution_id
                  )}
                </div>
              </div>

              <div className=
                "result-item"
              >
                <div className=
                  "result-label"
                >
                  Output SHA-256
                </div>
                <div className=
                  "result-value"
                >
                  {safeString(
                    optimizationResult
                      ?.output_checksum
                  )}
                </div>
              </div>

              <div className=
                "result-item"
              >
                <div className=
                  "result-label"
                >
                  Notarization ID
                </div>
                <div className=
                  "result-value"
                >
                  {safeString(
                    optimizationResult
                      ?.notarization_id
                  )}
                </div>
              </div>

              <div className=
                "result-item"
              >
                <div className=
                  "result-label"
                >
                  Merkle Verification
                </div>
                <div className=
                  "result-value"
                >
                  {merkle
                    ?.verified ===
                  true ? (
                    <span className=
                      "check"
                    >
                      ✓ Verified
                    </span>
                  ) : (
                    "—"
                  )}
                </div>
              </div>
            </div>
          </section>

          <section
            className="card"
            style={{
              marginTop: 18,
            }}
          >
            <h2>
              Published Benchmark
              Evidence
            </h2>

            <div className=
              "grid three"
            >
              <div>
                <div className=
                  "metric"
                >
                  1,000,000
                </div>
                <div className=
                  "muted"
                >
                  resources in the
                  multi-domain
                  certification
                </div>
              </div>

              <div>
                <div className=
                  "metric"
                >
                  47,814+
                </div>
                <div className=
                  "muted"
                >
                  median resources/sec
                  in the 1M
                  certification
                </div>
              </div>

              <div>
                <div className=
                  "metric"
                >
                  164,289+
                </div>
                <div className=
                  "muted"
                >
                  median resources/sec
                  canonical-resource
                  processing
                </div>
              </div>
            </div>

            <p className="muted">
              See the repository's
              evidence and benchmark
              directories for
              methodology, sanitized
              results, and checksums.
              Results represent
              observed validation
              environments and are not
              universal performance
              guarantees.
            </p>
          </section>

          {optimizationResult && (
            <section
              className="card"
              style={{
                marginTop: 18,
              }}
            >
              <h2>
                Raw API Response
              </h2>

              <pre className="code">
                {JSON.stringify(
                  optimizationResult,
                  null,
                  2
                )}
              </pre>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
