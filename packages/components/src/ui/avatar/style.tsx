import styled, {
    css,
    themeGet,
    layout,
    LayoutProps,
    color as colorStyles,
    ColorProps,
} from "@doar/shared/styled";

interface IProps extends LayoutProps {
    $size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    $shape?: "circle" | "rounded" | "square";
    $initialText?: boolean;
    $status?: "online" | "offline";
}

export const StyledAvatar = styled(({ display, ...rest }) => (
    <div {...rest} />
))<IProps>`
    position: relative;
    ${({ $size }) =>
        ($size === "default" || !$size) &&
        css`
            width: 38px;
            height: 38px;
        `}

    ${({ $size }) =>
        $size === "xs" &&
        css`
            width: 26px;
            height: 26px;
        `}

    ${({ $size }) =>
        $size === "sm" &&
        css`
            width: 32px;
            height: 32px;
        `}

    ${({ $size }) =>
        $size === "md" &&
        css`
            width: 48px;
            height: 48px;
        `}

    ${({ $size }) =>
        $size === "lg" &&
        css`
            width: 64px;
            height: 64px;
        `}

    ${({ $size }) =>
        $size === "xl" &&
        css`
            width: 72px;
            height: 72px;
        `}
    ${({ $size }) =>
        $size === "xxl" &&
        css`
            width: 100px;
            height: 100px;
        `}

    ${({ $shape }) =>
        $shape === "square" &&
        css`
            border-radius: 0;
            img {
                border-radius: 0;
            }
        `}

    ${({ $shape }) =>
        $shape === "circle" &&
        css`
            border-radius: ${themeGet("radii.circle")};
            img {
                border-radius: ${themeGet("radii.circle")};
            }
        `}
    
    ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: ${themeGet("radii.rounded")};
            img {
                border-radius: ${themeGet("radii.rounded")};
            }
        `}
    ${({ $status }) =>
        ($status === "online" || $status === "offline") &&
        css`
            &:after {
                content: "";
                position: absolute;
                width: 9px;
                height: 9px;
                right: 2px;
                bottom: 2px;
                border-radius: 100%;
                box-shadow: 0 0 0 2px #fff;
            }
        `}
    ${({ $status }) =>
        $status === "online" &&
        css`
            &:after {
                background-color: ${themeGet("colors.success")};
            }
        `}
    ${({ $status }) =>
        $status === "offline" &&
        css`
            &:after {
                background-color: ${themeGet("colors.text4")};
            }
        `}
    
    ${({ $size, $status }) =>
        $size === "xs" &&
        Boolean($status) &&
        css`
            &:after {
                width: 5px;
                height: 5px;
            }
        `}

    ${({ $size, $status }) =>
        $size === "sm" &&
        Boolean($status) &&
        css`
            &:after {
                width: 7px;
                height: 7px;
            }
        `}
    
    ${({ $size, $status }) =>
        $size === "lg" &&
        Boolean($status) &&
        css`
            &:after {
                width: 10px;
                height: 10px;
                bottom: 3px;
                right: 4px;
            }
        `}

    ${({ $size, $status }) =>
        $size === "xl" &&
        Boolean($status) &&
        css`
            &:after {
                width: 11px;
                height: 11px;
                bottom: 4px;
                right: 5px;
                box-shadow: 0 0 0 2.5px #fff;
            }
        `}

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    ${layout};
`;

interface IAvatarText extends ColorProps {
    $size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export const StyledInitialText = styled(({ color, bg, ...rest }) => (
    <span {...rest} />
))<IAvatarText>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #8392a5;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    ${({ $size }) =>
        $size === "xs" &&
        css`
            font-size: 10px;
        `}

    ${({ $size }) =>
        $size === "sm" &&
        css`
            font-size: 13px;
        `}

    ${({ $size }) =>
        $size === "md" &&
        css`
            font-size: 18px;
        `}

    ${({ $size }) =>
        $size === "lg" &&
        css`
            font-size: 24px;
        `}
    ${({ $size }) =>
        $size === "xl" &&
        css`
            font-size: 30px;
        `}

    ${({ $size }) =>
        $size === "xxl" &&
        css`
            font-size: 45px;
        `}

    ${({ $shape }) =>
        $shape === "square" &&
        css`
            border-radius: 0;
        `}

    ${({ $shape }) =>
        $shape === "circle" &&
        css`
            border-radius: ${themeGet("radii.circle")};
        `}
    
    ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: ${themeGet("radii.rounded")};
        `}
    ${colorStyles};
`;
