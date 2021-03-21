import { createGlobalStyle } from '@doar/shared/styled';
// import {IbmFontSans, IonIcons} from "@doar/shared/fonts"

export const ResetCSS = createGlobalStyle`
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
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 400;
        color: #001737;
        font-size: 0.875rem;
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
    #story--ui-navbar--navbar-controls{
        height: 335px;
        padding-left: 20px;
    }
    #story--ui-dropdown--dropdown-controls,
    #story--ui-dropdown--basic-example,
    #story--ui-dropdown--dropup,
    #story--ui-dropdown--dropleft,
    #story--ui-dropdown--dropright{
        height: 300px;
        text-align: center;
        .dropdown{
            width: 141px;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-top: 100px !important;
        }
    }
    #story--ui-avatar--sizes .story-wrap,
    #story--ui-avatar--shapes .story-wrap,
    #story--ui-avatar--initials .story-wrap,
    #story--ui-avatar--status-indicator .story-wrap,
    #story--ui-card--card-images .story-wrap,
    #story--ui-card--header-footer .story-wrap, 
    #story--ui-card--background-color .story-wrap{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    input,
    select{
        box-sizing: border-box;
    }
    .blockquote {
        margin-bottom: 1rem;
        font-size: 1.09375rem;
    }
    .blockquote-footer {
        display: block;
        font-size: 80%;
        color: #7987a1;
    }
    .st-bg{
        background-color: #f5f6fa;    
        padding: 10px 15px;
    }
`;

