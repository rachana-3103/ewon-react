import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, theme } from "@doar/shared/styled";
import { GlobalStyle } from "@doar/shared/css";
import { store } from "./redux/store";
import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
