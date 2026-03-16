import ReactDOM from "react-dom/client";

import App from "@/App";
import { ThemeProvider } from "@/components/theme-provider";

import "@/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <App />
  </ThemeProvider>,
);
