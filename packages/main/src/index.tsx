import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@doar/shared/src/theme/utils";
import { theme } from "@doar/shared/src/theme";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
