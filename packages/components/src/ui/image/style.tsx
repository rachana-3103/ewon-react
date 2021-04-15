/* eslint-disable jsx-a11y/alt-text */
import styled, {
    space,
    layout,
    flexbox,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    device,
    css,
    themeGet,
} from "@doar/shared/styled";

interface ImageProps extends SpaceProps, LayoutProps {
    $shape?: "rounded" | "circle" | "thumbnail";
    $fluid?: boolean;
    $align?: "left" | "right";
    $fit?: "cover" | "contain";
}

const imageCss = css<ImageProps>`
    max-width: 100%;
    ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: ${themeGet("radii.rounded")};
        `}
    ${({ $shape }) =>
        $shape === "circle" &&
        css`
            border-radius: ${themeGet("radii.circle")};
        `}
	${({ $shape }) =>
        $shape === "thumbnail" &&
        css`
            padding: 0.25rem;
            background-color: transparent;
            border: 1px solid ${themeGet("colors.text4")};
            border-radius: ${themeGet("radii.rounded")};
        `}
	${({ $fluid }) =>
        $fluid &&
        css`
            height: auto;
        `}
	${({ $align }) =>
        $align === "left" &&
        css`
            float: left;
        `}
	${({ $align }) =>
        $align === "right" &&
        css`
            float: right;
        `}
	
	${({ $fit }) =>
        $fit === "cover" &&
        css`
            width: 100%;
            height: 100%;
            object-fit: cover;
        `}
	${({ $fit }) =>
        $fit === "contain" &&
        css`
            width: 100%;
            height: 100%;
            object-fit: contain;
        `}

    ${space};
    ${layout};
`;

export const StyledImage = styled(
    ({
        m,
        mx,
        my,
        ml,
        mr,
        mt,
        mb,
        maxWidth,
        maxHeight,
        width,
        height,
        display,
        ...rest
    }) => <img {...rest} />
)<ImageProps>`
    ${imageCss}
`;

const groupCss = css<FlexboxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        position: relative;
        background-color: #fff;
        &:not(:first-of-type) {
            margin-left: -15px;
        }
        ${device.small} {
            &:not(:first-of-type) {
                margin-left: -25px;
            }
            padding: 3px;
        }
    }
    ${flexbox};
`;

export const StyledGroup = styled(({ alignItems, justifyContent, ...rest }) => (
    <div {...rest} />
))<FlexboxProps>`
    ${groupCss};
`;
