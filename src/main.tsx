import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import { store } from "./redux/store.ts";
import router from "./routes/routes.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
      <Toaster />
    </HelmetProvider>
  </StrictMode>
);
