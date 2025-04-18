import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "@mui/material/styles"; // Styles de MUI
import CssBaseline from "@mui/material/CssBaseline"; // Reset CSS global
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#1e88e5" }, // Bleu personnalisé
    secondary: { main: "#fc3a18" }, // Rose
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: { fontWeight: "bold", letterSpacing: "1px" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none", // Empêche les boutons d’être en majuscules
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
