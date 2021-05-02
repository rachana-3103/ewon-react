/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, {
    themeGet,
    css,
    space,
    layout,
    color as colorStyles,
    SpaceProps,
    ColorProps,
    LayoutProps,
} from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
import check from "../../static/check.svg";
import circle from "../../static/circle.svg";
import selectIcon from "../../static/select.svg";

interface IInput extends SpaceProps, ColorProps, LayoutProps {
    $state?: "success" | "warning" | "error";
    $showState?: boolean;
    $showErrorOnly?: boolean;
}

const InputStyles = css`
    display: block;
    width: 100%;
    padding: 0.46875rem 0.625rem;
    font-size: ${themeGet("fontSize.body")};
    font-family: ${themeGet("fonts.body")};
    font-weight: 400;
    line-height: ${themeGet("lineHeights.body")};
    color: ${themeGet("colors.text2")};
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${themeGet("colors.text4")};
    border-radius: ${themeGet("radii.rounded")};
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &::placeholder {
        color: ${themeGet("colors.text4")};
        font-size: ${themeGet("fontSize.body")};
        font-family: ${themeGet("fonts.body")};
    }
    &:-ms-input-placeholder {
        color: ${themeGet("colors.text4")};
        font-size: ${themeGet("fontSize.body")};
        font-family: ${themeGet("fonts.body")};
    }
    &::-ms-input-placeholder {
        color: ${themeGet("colors.text4")};
        font-size: ${themeGet("fontSize.body")};
        font-family: ${themeGet("fonts.body")};
    }
    &:disabled,
    &[readonly] {
        background-color: ${themeGet("colors.whisper")};
    }
    &:focus {
        color: ${themeGet("colors.gray700")};
        background-color: #fff;
        border-color: ${(props) =>
            tinycolor2(props.theme.colors.primary).lighten(25).toString()};
        outline: 0;
        box-shadow: ${themeGet("shadows.input")};
    }
`;

const SuccessInputStyles = css`
    border-color: ${themeGet("colors.success")};
    padding-right: calc(1.5em + 0.9375rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.23438rem) center;
    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);
    &:focus {
        border-color: ${themeGet("colors.success")};
        box-shadow: 0 0 0 0.2rem rgb(16 183 89 / 25%);
    }
`;

const WarningInputStyles = css`
    border-color: ${themeGet("colors.warning")};
    padding-right: calc(1.5em + 0.9375rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.23438rem) center;
    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);
    &:focus {
        border-color: ${themeGet("colors.warning")};
        box-shadow: 0 0 0 0.2rem rgb(255 193 7 / 25%);
    }
`;

const ErrorInputStyles = css`
    border-color: ${themeGet("colors.danger")};
    padding-right: calc(1.5em + 0.9375rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.23438rem) center;
    background-size: calc(0.75em + 0.46875rem) calc(0.75em + 0.46875rem);
    &:focus {
        border-color: ${themeGet("colors.danger")};
        box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);
    }
`;

export const StyledInput = styled(
    ({
        width,
        height,
        p,
        px,
        py,
        pl,
        pr,
        pt,
        pb,
        m,
        mx,
        my,
        ml,
        mr,
        mt,
        mb,
        color,
        ...rest
    }) => <input {...rest} />
)<IInput>`
    height: 38px;
    ${InputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        $showState &&
        !$showErrorOnly &&
        SuccessInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        $showState &&
        !$showErrorOnly &&
        WarningInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" && $showState && $showErrorOnly && ErrorInputStyles};
    ${space};
    ${layout};
    ${colorStyles};
`;

export const StyledTextarea = styled(
    ({
        width,
        height,
        p,
        px,
        py,
        pl,
        pr,
        pt,
        pb,
        m,
        mx,
        my,
        ml,
        mr,
        mt,
        mb,
        color,
        ...rest
    }) => <textarea {...rest} />
)<IInput>`
    height: auto;
    min-height: 38px;
    ${InputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        $showState &&
        !$showErrorOnly &&
        SuccessInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        $showState &&
        !$showErrorOnly &&
        WarningInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" && $showState && $showErrorOnly && ErrorInputStyles};
    ${space};
    ${layout};
    ${colorStyles};
`;

interface IFeedback {
    $state?: "success" | "warning" | "error";
    $showState?: boolean;
    $showErrorOnly?: boolean;
}

export const StyledFeedback = styled.div<IFeedback>`
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    ${({ $state, $showErrorOnly }) =>
        $state !== "error" &&
        $showErrorOnly &&
        css`
            display: none;
        `}
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        $showState &&
        !$showErrorOnly &&
        css`
            color: ${themeGet("colors.success")};
        `};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        $showState &&
        !$showErrorOnly &&
        css`
            color: ${themeGet("colors.warning")};
        `};

    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" &&
        $showState &&
        $showErrorOnly &&
        css`
            color: ${themeGet("colors.danger")};
        `};
`;

export const StyledBoxWrap = styled(
    ({ p, px, py, pl, pr, pt, pb, m, mx, my, ml, mr, mt, mb, ...rest }) => (
        <div {...rest} />
    )
)<SpaceProps>`
    min-height: inherit;
    position: relative;
    display: block;
    padding-left: 1.5rem;
    ${space};
`;

export const StyledCheckboxLabel = styled.label`
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    display: inline-block;
    &:before {
        transition: background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        position: absolute;
        top: 44%;
        transform: translateY(-50%);
        left: -1.5rem;
        display: block;
        width: 1rem;
        height: 1rem;
        pointer-events: none;
        content: "";
        background-color: #fff;
        border: 1px solid ${themeGet("colors.gray500")};
        border-radius: 0.25rem;
    }
    &:after {
        position: absolute;
        top: 44%;
        transform: translateY(-50%);
        left: -1.4rem;
        display: block;
        width: 1rem;
        height: 1rem;
        content: "";
        background: no-repeat 50% / 50% 50%;
    }
`;

export const StyledCheckbox = styled.input`
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1.15625rem;
    opacity: 0;
    &:checked {
        & ~ label:before {
            color: #fff;
            border-color: ${themeGet("colors.primary")};
            background-color: ${themeGet("colors.primary")};
        }
        & ~ label:after {
            background-image: url(${check});
        }
    }
    &:disabled {
        & ~ label {
            color: ${themeGet("colors.gray600")};
        }
        &:checked ~ label:before {
            border-color: ${(props) =>
                tinycolor2(props.theme.colors.primary)
                    .setAlpha(0.2)
                    .toString()};
            background-color: ${(props) =>
                tinycolor2(props.theme.colors.primary)
                    .setAlpha(0.5)
                    .toString()};
        }
    }
    &:active {
        & ~ label:before {
            color: #fff;
            background-color: ${(props) =>
                tinycolor2(props.theme.colors.primary).lighten(35).toString()};
            border-color: ${(props) =>
                tinycolor2(props.theme.colors.primary).lighten(35).toString()};
        }
    }
    &:focus {
        & ~ label:before {
            box-shadow: 0 0 0 0.2rem
                ${(props) =>
                    tinycolor2(props.theme.colors.primary)
                        .setAlpha(0.25)
                        .toString()};
        }
        &:not(:checked) {
            & ~ label:before {
                border-color: ${(props) =>
                    tinycolor2(props.theme.colors.primary)
                        .lighten(25)
                        .toString()};
            }
        }
    }
`;

export const StyledRadio = styled.input`
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1.15625rem;
    opacity: 0;
    &:checked {
        & ~ label:before {
            color: #fff;
            border-color: ${themeGet("colors.primary")};
            background-color: ${themeGet("colors.primary")};
        }
        & ~ label:after {
            background-image: url(${circle});
        }
    }
    &:disabled {
        & ~ label {
            color: ${themeGet("colors.gray600")};
        }
        &:checked ~ label:before {
            border-color: ${(props) =>
                tinycolor2(props.theme.colors.primary)
                    .setAlpha(0.2)
                    .toString()};
            background-color: ${(props) =>
                tinycolor2(props.theme.colors.primary)
                    .setAlpha(0.5)
                    .toString()};
        }
    }
    &:not(:disabled):active {
        & ~ label:before {
            color: #fff;
            background-color: ${(props) =>
                tinycolor2(props.theme.colors.primary).lighten(35).toString()};
            border-color: ${(props) =>
                tinycolor2(props.theme.colors.primary).lighten(35).toString()};
        }
    }
    &:active {
        & ~ label:before {
            color: #fff;
            background-color: ${(props) =>
                tinycolor2(props.theme.colors.primary).lighten(35).toString()};
            border-color: ${(props) =>
                tinycolor2(props.theme.colors.primary).lighten(35).toString()};
        }
    }
    &:focus {
        & ~ label:before {
            box-shadow: 0 0 0 0.2rem
                ${(props) =>
                    tinycolor2(props.theme.colors.primary)
                        .setAlpha(0.25)
                        .toString()};
        }
        &:not(:checked) {
            & ~ label:before {
                border-color: ${(props) =>
                    tinycolor2(props.theme.colors.primary)
                        .lighten(25)
                        .toString()};
            }
        }
    }
`;

export const StyledRadioLabel = styled.label`
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    display: inline-block;
    &:before {
        transition: background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        position: absolute;
        top: 44%;
        transform: translateY(-50%);
        border-radius: 50%;
        left: -1.4rem;
        display: block;
        width: 14px;
        height: 14px;
        pointer-events: none;
        content: "";
        background-color: #fff;
        border: 1px solid ${themeGet("colors.gray500")};
    }
    &:after {
        position: absolute;
        top: 44%;
        transform: translateY(-50%);
        left: -1.4rem;
        display: block;
        width: 16px;
        height: 16px;
        content: "";
        background: no-repeat 50% / 50% 50%;
    }
`;

export const StyledSelect = styled(
    ({
        width,
        height,
        p,
        px,
        py,
        pl,
        pr,
        pt,
        pb,
        m,
        mx,
        my,
        ml,
        mr,
        mt,
        mb,
        color,
        ...rest
    }) => <select {...rest} />
)<IInput>`
    height: 38px;
    border-color: ${themeGet("colors.text4")};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff url(${selectIcon}) no-repeat right 0.625rem center/8px 10px;
    ${InputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        $showState &&
        !$showErrorOnly &&
        SuccessInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        $showState &&
        !$showErrorOnly &&
        WarningInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" && $showState && $showErrorOnly && ErrorInputStyles};
    ${space};
    ${layout};
    ${colorStyles};
`;
