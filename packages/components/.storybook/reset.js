import { createGlobalStyle } from '@doar/shared/styled';

export const ResetCSS = createGlobalStyle`
    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Bold.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Bold-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-ExtraLight.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLight-Latin2.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-ExtraLightItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLightItalic-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Italic.woff")
                format("woff");
    }


    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Italic-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Light.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Light-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-LightItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-LightItalic-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Medium.woff")
                format("woff");
    }

  

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Medium-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-MediumItalic.woff")
                format("woff");
    }

  

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-SemiBold.woff")
                format("woff");
    }

    
    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBold-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-SemiBoldItalic.woff")
                format("woff");
    }

    

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-SemiBoldItalic-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-TextItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-TextItalic-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-Thin.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-Thin-Latin1.woff2")
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
            url("./fonts/ibm-plex-sans/complete/woff/IBMPlexSans-ThinItalic.woff")
                format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url("./fonts/ibm-plex-sans/split/woff2/IBMPlexSans-ThinItalic-Latin1.woff2")
                format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }


    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    html {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        scroll-behavior: smooth;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1.5 !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'IBM Plex Sans', sans-serif !important;
        font-weight: 400 !important;
        color: #001737 !important;
        font-size: 0.875rem !important;
        background: #fff;
    }
    a {
        transition: all 0.4s ease 0s;
        color: #001737;
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        font-family: 'IBM Plex Sans', sans-serif;
        line-height: 1.25;
        color: #001737;
        font-weight: 500;
        margin: 0;
        margin-bottom: 8px;
    }
    h1,
    .h1 {
        font-size: 2.1875rem;
    }
    h2,
    .h2 {
        font-size: 1.75rem;
    }
    h3,
    .h3 {
        font-size: 1.53125rem;
    }
    h4,
    .h4 {
        font-size: 1.3125rem;
    }
    h5,
    .h5 {
        font-size: 1.09375rem;
    }
    h6,
    .h6 {
        font-size: 0.875rem;
    }
    p {
        margin: 0 0 15px;
        font-family: 'IBM Plex Sans', sans-serif;
        color: #001737;
    }
    p:last-child, p:only-child {
        margin-bottom: 0;
    }

    .story-wrap > * {
        margin: 10px;
    }
    .docs-story  > div:last-child button{
        margin-left: 0;
    }
    input,
    select{
        box-sizing: border-box;
    }


    .sbdocs {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6 {
            font-family: 'IBM Plex Sans', sans-serif !important;
            line-height: 1.25 !important;
            font-weight: 500 !important;
            margin: 0;
            margin-bottom: 8px;
        }
        h1,
        .h1 {
            font-size: 2.1875rem !important;
        }
        h2,
        .h2 {
            font-size: 1.75rem !important;
        }
        h3,
        .h3 {
            font-size: 1.53125rem !important;
        }
        h4,
        .h4 {
            font-size: 1.3125rem !important;
        }
        h5,
        .h5 {
            font-size: 1.09375rem !important;
        }
        h6,
        .h6 {
            font-size: 0.875rem !important;
        }
        p {
            font-family: 'IBM Plex Sans', sans-serif !important;
        }
        hr{
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        .sbdocs-h1{
            font-size: 30px !important;;
            margin-bottom: 25px !important;;
        }
        .sbdocs-desc{
            font-size: 16px !important;;
            font-weight: 300 !important;;
            margin-bottom: 35px !important;
        }
        .sbdocs-p{
            font-size: 16px !important;
        }
        @media (min-width: 992px){
            .sbdocs-h1{
                font-size: 40px !important;
                margin-bottom: 35px!important;;
            }
            .sbdocs-desc{
                font-size: 20px !important;;
                font-weight: 300 !important;;
                margin-bottom: 45px !important;
            }
        }
    }
`;

