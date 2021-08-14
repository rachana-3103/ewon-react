import tinycolor from "tinycolor2";

const primary = "#0168fa";
const secondary = "#5f6d88";
const gray50 = "#fafbfc";
const gray100 = "#f4f5f8";
const gray200 = "#e3e7ed";
const gray300 = "#cdd4e0";
const gray400 = "#b4bdce";
const gray500 = "#97a3b9";
const gray600 = "#7987a1";
const gray700 = "#596882";
const gray800 = "#3b4863";
const gray900 = "#1c273c";
const gray950 = "#637388";

export const classic = {
    primary,
    secondary,
    success: "#10b759",
    info: "#00b8d4",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#e5e9f2",
    dark: "#3b4863",
    text: "#001737",
    text2: "#1b2e4b",
    text3: "#8392a5",
    text4: "#c0ccda",
    heading: "#001737",
    link: "#001737",
    background: "#ffffff",
    hover: primary,
    white: "#ffffff",
    black: "#000000",
    close: "#1b2e4b",
    border: "#485e9029",
    gray50,
    gray100,
    gray200,
    gray300,
    gray400,
    gray500,
    gray600,
    gray700,
    gray800,
    gray900,
    gray950,
    whisper: "#f5f6fa",
    malibu: "#69b2f8",
    tropical: "#d1e6fa",
    pink: "#f10075",
    bayoux: "#49597b",
    athens: "#e9ecf1",
    orange: "#fd7e14",
    cyan: "#17a2b8",
    teal: "#00cccc",
    indigo: "#5b47fb",
    vulcan: "#0f1520",
    litecoin: "#325a98",
    lightblue: "#a5d7fd",
    brand2: "#042893",
    shuttle: "#5c6c7f",
    science: "#063cdd",
    facebook: "#4064ac",
    twitter: "#00a7e6",
    shuttle2: "#566476",
    lilac: "#f8f9fc",
    catskill: "#eef0f7",
    gulf: "#031a61",
    river: "#475362",
    zircon: "#f3f8ff",
};

export const light = {
    primary,
    secondary,
    success: "#10b759",
    info: "#00b8d4",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#e5e9f2",
    dark: "#3b4863",
    text: "#001737",
    text2: "#1b2e4b",
    text3: "#8392a5",
    text4: "#c0ccda",
    heading: "#001737",
    link: "#001737",
    background: "#f5f6fa",
    hover: primary,
    white: "#ffffff",
    black: "#000000",
    close: "#1b2e4b",
    border: "#485e9029",
    gray50: "#fafbfc",
    gray100: "#f4f5f8",
    gray200: "#e3e7ed",
    gray300: "#cdd4e0",
    gray400: "#b4bdce",
    gray500: "#97a3b9",
    gray600: "#7987a1",
    gray700: "#596882",
    gray800: "#3b4863",
    gray900: "#1c273c",
    gray950: "#637388",
    whisper: "#f5f6fa",
    malibu: "#69b2f8",
    tropical: "#d1e6fa",
    pink: "#f10075",
    bayoux: "#49597b",
    athens: "#e9ecf1",
    orange: "#fd7e14",
    cyan: "#17a2b8",
    teal: "#00cccc",
    indigo: "#5b47fb",
    vulcan: "#0f1520",
    litecoin: "#325a98",
    lightblue: "#a5d7fd",
    brand2: "#042893",
    shuttle: "#5c6c7f",
    science: "#063cdd",
    facebook: "#4064ac",
    twitter: "#00a7e6",
    shuttle2: "#566476",
    lilac: "#f8f9fc",
    catskill: "#eef0f7",
    gulf: "#031a61",
    cornflower: "#525f70",
    river: "#475362",
    zircon: "#f3f8ff",
};

const skinUi01 = tinycolor(primary).desaturate(20).toHexString();
const coolBg = tinycolor(skinUi01).setAlpha(0.03).toRgbString();
const coolBorder = tinycolor(skinUi01).lighten(46).toRgbString();

export const cool = {
    primary,
    secondary,
    success: "#10b759",
    info: "#00b8d4",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#e5e9f2",
    dark: "#3b4863",
    text: "#001737",
    text2: "#1b2e4b",
    text3: "#8392a5",
    text4: "#c0ccda",
    heading: "#001737",
    link: "#001737",
    background: coolBg,
    hover: primary,
    white: "#ffffff",
    black: "#000000",
    close: "#1b2e4b",
    border: coolBorder,
    gray50,
    gray100,
    gray200,
    gray300,
    gray400,
    gray500,
    gray600,
    gray700,
    gray800,
    gray900,
    gray950,
    whisper: "#f5f6fa",
    malibu: "#69b2f8",
    tropical: "#d1e6fa",
    pink: "#f10075",
    bayoux: "#49597b",
    athens: "#e9ecf1",
    orange: "#fd7e14",
    cyan: "#17a2b8",
    teal: "#00cccc",
    indigo: "#5b47fb",
    vulcan: "#0f1520",
    litecoin: "#325a98",
    lightblue: "#a5d7fd",
    brand2: "#042893",
    shuttle: "#5c6c7f",
    science: "#063cdd",
    facebook: "#4064ac",
    twitter: "#00a7e6",
    shuttle2: "#566476",
    lilac: "#f8f9fc",
    catskill: "#eef0f7",
    gulf: "#031a61",
    cornflower: "#525f70",
    river: "#475362",
    zircon: "#f3f8ff",
    skinUi01,
};

const darkBg = tinycolor(gray900).darken(5).toString();
// const darkBorder = tinycolor(gray900).lighten(5).toString();

export const dark = {
    primary,
    secondary,
    success: "#10b759",
    info: "#00b8d4",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#e5e9f2",
    dark: "#3b4863",
    text: "#ffffff",
    text2: gray300,
    text3: "#8392a5",
    text4: tinycolor(gray700).setAlpha(0.7).toRgbString(),
    heading: "#ffffff",
    link: "#ffffff",
    background: darkBg,
    hover: primary,
    white: "#ffffff",
    black: "#000000",
    close: gray300,
    border: "#485e9029",
    gray50,
    gray100,
    gray200,
    gray300,
    gray400,
    gray500,
    gray600,
    gray700,
    gray800,
    gray900,
    gray950,
    whisper: "#f5f6fa",
    malibu: "#69b2f8",
    tropical: "#d1e6fa",
    pink: "#f10075",
    bayoux: "#49597b",
    athens: "#e9ecf1",
    orange: "#fd7e14",
    cyan: "#17a2b8",
    teal: "#00cccc",
    indigo: "#5b47fb",
    vulcan: "#0f1520",
    litecoin: "#325a98",
    lightblue: "#a5d7fd",
    brand2: "#042893",
    shuttle: "#5c6c7f",
    science: "#063cdd",
    facebook: "#4064ac",
    twitter: "#00a7e6",
    shuttle2: "#566476",
    lilac: "#f8f9fc",
    catskill: "#eef0f7",
    gulf: "#031a61",
    cornflower: "#525f70",
    river: "#475362",
    zircon: "#f3f8ff",
};
