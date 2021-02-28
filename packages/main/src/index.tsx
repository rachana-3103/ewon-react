import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, theme } from "@doar/shared/styled";
import { GlobalStyle } from "@doar/shared/css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
