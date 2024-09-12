import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import CartContextProvider from "./context/CartContext.tsx";
import CheckoutContextProvider from "./context/CheckoutContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CartContextProvider>
        <CheckoutContextProvider>
          <App />
        </CheckoutContextProvider>
      </CartContextProvider>
    </ThemeProvider>
  </StrictMode>
);
