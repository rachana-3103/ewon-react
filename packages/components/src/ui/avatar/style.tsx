import styled, {
    css,
    themeGet,
    layout,
    LayoutProps,
} from "@doar/shared/styled";

interface IProps extends LayoutProps {
    $size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    $shape?: "circle" | "rounded" | "square";
    $initialText?: boolean;
    $status?: "online" | "offline";
}

export const StyledInitialText = styled.span`
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
`;

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
            img {
                border-radius: 0;
            }
            ${StyledInitialText} {
                border-radius: 0;
            }
        `}

    ${({ $shape }) =>
        $shape === "circle" &&
        css`
            img {
                border-radius: ${themeGet("radii.circle")};
            }
            ${StyledInitialText} {
                border-radius: ${themeGet("radii.circle")};
            }
        `}
    
    ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            img {
                border-radius: ${themeGet("radii.rounded")};
            }
            ${StyledInitialText} {
                border-radius: ${themeGet("radii.rounded")};
            }
        `}
    ${({ $size, $initialText }) =>
        $size === "xs" &&
        Boolean($initialText) &&
        css`
            ${StyledInitialText} {
                font-size: 10px;
            }
        `}

    ${({ $size, $initialText }) =>
        $size === "sm" &&
        Boolean($initialText) &&
        css`
            ${StyledInitialText} {
                font-size: 13px;
            }
        `}

    ${({ $size, $initialText }) =>
        $size === "md" &&
        Boolean($initialText) &&
        css`
            ${StyledInitialText} {
                font-size: 18px;
            }
        `}

    ${({ $size, $initialText }) =>
        $size === "lg" &&
        Boolean($initialText) &&
        css`
            ${StyledInitialText} {
                font-size: 24px;
            }
        `}
    ${({ $size, $initialText }) =>
        $size === "xl" &&
        Boolean($initialText) &&
        css`
            ${StyledInitialText} {
                font-size: 30px;
            }
        `}

    ${({ $size, $initialText }) =>
        $size === "xxl" &&
        Boolean($initialText) &&
        css`
            ${StyledInitialText} {
                font-size: 45px;
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
