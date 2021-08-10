import { FC, useState, useCallback } from "react";
import { ThemeProvider, themes } from "@doar/shared/styled";
import { GlobalStyle } from "@doar/shared/css";
import { TTheme } from "@doar/shared/types";
import SettingsCard from "./components/settings";
// import { useAppSelector } from "./redux/hooks";

const Theme: FC = ({ children }) => {
    // const { theme } = useAppSelector((state) => state.ui);
    const [theme, setTheme] = useState<TTheme>("classic");
    const themeHandler = useCallback((el) => {
        setTheme(el);
    }, []);
    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <SettingsCard themeHandler={themeHandler} curTheme={theme} />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
