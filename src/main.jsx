import * as Sentry from "@sentry/react";
import React from "react";
import ReactDOM from "react-dom/client";
import LogRocket from "logrocket";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

Sentry.init({
  dsn: "https://bdd5b90e8ab91f7e44e62c0358da8dee@o4505716862877696.ingest.sentry.io/4505756673376256",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

LogRocket.init("fskgrn/personal-site");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
