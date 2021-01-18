import { css } from "styled-components";

export const IbmFontSans = css`
    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url("../ibm-plex-sans/complete/woff/IBMPlexSans-Bold.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Bold-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Bold-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Bold-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Bold-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Bold-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Bold-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 700;
        src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-BoldItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 700;
        src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-BoldItalic-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 700;
        src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-BoldItalic-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 700;
        src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-BoldItalic-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 700;
        src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-BoldItalic-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 700;
        src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-BoldItalic-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 700;
        src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-BoldItalic-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-ExtraLight.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLight-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLight-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLight-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLight-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLight-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLight-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-ExtraLightItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLightItalic-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLightItalic-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLightItalic-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLightItalic-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLightItalic-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLightItalic-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Italic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Italic-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Italic-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Italic-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Italic-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Italic-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Italic-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Light.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Light-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Light-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Light-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Light-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Light-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Light-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-LightItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-LightItalic-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-LightItalic-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-LightItalic-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-LightItalic-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-LightItalic-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-LightItalic-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Medium.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Medium-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Medium-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Medium-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Medium-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Medium-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Medium-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        src: local("IBM Plex Sans Medium Italic"),
            local("IBMPlexSans-MediumItalic"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-MediumItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        src: local("IBM Plex Sans Medium Italic"),
            local("IBMPlexSans-MediumItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-MediumItalic-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        src: local("IBM Plex Sans Medium Italic"),
            local("IBMPlexSans-MediumItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-MediumItalic-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        src: local("IBM Plex Sans Medium Italic"),
            local("IBMPlexSans-MediumItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-MediumItalic-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        src: local("IBM Plex Sans Medium Italic"),
            local("IBMPlexSans-MediumItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-MediumItalic-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        src: local("IBM Plex Sans Medium Italic"),
            local("IBMPlexSans-MediumItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-MediumItalic-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        src: local("IBM Plex Sans Medium Italic"),
            local("IBMPlexSans-MediumItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-MediumItalic-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        src: local("IBM Plex Sans"), local("IBMPlexSans"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Regular.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        src: local("IBM Plex Sans"), local("IBMPlexSans"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Regular-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        src: local("IBM Plex Sans"), local("IBMPlexSans"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Regular-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        src: local("IBM Plex Sans"), local("IBMPlexSans"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Regular-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        src: local("IBM Plex Sans"), local("IBMPlexSans"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Regular-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        src: local("IBM Plex Sans"), local("IBMPlexSans"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Regular-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        src: local("IBM Plex Sans"), local("IBMPlexSans"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Regular-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-SemiBold.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBold-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBold-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBold-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBold-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBold-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBold-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-SemiBoldItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBoldItalic-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBoldItalic-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBoldItalic-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBoldItalic-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBoldItalic-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBoldItalic-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 450;
        src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Text.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 450;
        src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Text-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 450;
        src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Text-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 450;
        src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Text-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 450;
        src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Text-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 450;
        src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Text-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 450;
        src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Text-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-TextItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-TextItalic-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-TextItalic-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-TextItalic-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-TextItalic-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-TextItalic-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-TextItalic-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Thin.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Thin-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Thin-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Thin-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Thin-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Thin-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Thin-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url("../fonts/ibm-plex-sans/complete/woff/IBMPlexSans-ThinItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ThinItalic-Cyrillic.woff2")
                format("woff2");
        unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
            U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
            U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ThinItalic-Pi.woff2")
                format("woff2");
        unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081,
            U+2083, U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151,
            U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7,
            U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A,
            U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C,
            U+2B0E-2B11, U+EBE1-EBE7, U+ECE0, U+EFCC;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ThinItalic-Latin3.woff2")
                format("woff2");
        unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ThinItalic-Latin2.woff2")
                format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB,
            U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ThinItalic-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url("../fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ThinItalic-Greek.woff2")
                format("woff2");
        unicode-range: U+0384-038A, U+038C, U+038E-03A1, U+03A3-03CE;
    }
`;
