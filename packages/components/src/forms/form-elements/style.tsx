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
    ${(props) => props.$state === "success" && SuccessInputStyles};
    ${(props) => props.$state === "warning" && WarningInputStyles};
    ${(props) => props.$state === "error" && ErrorInputStyles};
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
    ${(props) => props.$state === "success" && SuccessInputStyles};
    ${(props) => props.$state === "warning" && WarningInputStyles};
    ${(props) => props.$state === "error" && ErrorInputStyles};
    ${space};
    ${layout};
    ${colorStyles};
`;

interface IFeedback {
    $state?: "success" | "warning" | "error";
}

export const StyledFeedback = styled.div<IFeedback>`
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    ${({ $state }) =>
        $state === "success" &&
        css`
            color: ${themeGet("colors.success")};
        `};
    ${({ $state }) =>
        $state === "warning" &&
        css`
            color: ${themeGet("colors.warning")};
        `};
    ${({ $state }) =>
        $state === "error" &&
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
        border: #97a3b9 solid 1px;
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
            border-color: #0168fa;
            background-color: #0168fa;
        }
        & ~ label:after {
            background-image: url(${check});
        }
    }
    &:disabled {
        & ~ label {
            color: #7987a1;
        }
        &:checked ~ label:before {
            border-color: rgba(1, 104, 250, 0.2);
            background-color: rgba(1, 104, 250, 0.5);
        }
    }
    &:active {
        & ~ label:before {
            color: #fff;
            background-color: #afd0ff;
            border-color: #afd0ff;
        }
    }
    &:focus {
        & ~ label:before {
            box-shadow: 0 0 0 0.2rem rgb(1 104 250 / 25%);
        }
        &:not(:checked) {
            & ~ label:before {
                border-color: #7cb2fe;
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
            border-color: #0168fa;
            background-color: #0168fa;
        }
        & ~ label:after {
            background-image: url(${circle});
        }
    }
    &:not(:disabled):active {
        & ~ label:before {
            color: #fff;
            background-color: #afd0ff;
            border-color: #afd0ff;
        }
    }
    &:focus {
        &:before {
            box-shadow: 0 0 0 0.2rem rgb(1 104 250 / 25%);
        }
    }
    &:disabled {
        &:checked {
            & ~ label:before {
                background-color: rgba(1, 104, 250, 0.5);
                border-color: rgba(1, 104, 250, 0.2);
            }
        }
        & ~ label {
            color: #7987a1;
            &:before {
                background-color: #e3e7ed;
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
        border: 1px solid #97a3b9;
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
    border-color: #c0ccda;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff url(${selectIcon}) no-repeat right 0.625rem center/8px 10px;
    ${InputStyles};
    ${(props) => props.$state === "success" && SuccessInputStyles};
    ${(props) => props.$state === "warning" && WarningInputStyles};
    ${(props) => props.$state === "error" && ErrorInputStyles};
    ${space};
    ${layout};
    ${colorStyles};
`;
