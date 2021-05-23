import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import tinycolor from "tinycolor2";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { theme } from "./theme";
export declare const device: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
};
export { createGlobalStyle, css, keyframes, ThemeProvider, themeGet, theme, tinycolor, Container, Row, Col, };
export * from "styled-system";
export default styled;
