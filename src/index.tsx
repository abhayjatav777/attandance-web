import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-auth-kit";
import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRoutes";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ loader: "bars" }}
      >
        <Notifications position="top-right" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
