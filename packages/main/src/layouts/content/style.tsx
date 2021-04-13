import styled, { device, space, SpaceProps, css } from "@doar/shared/styled";

interface IProps extends SpaceProps {
    $fullHeight?: boolean;
    $align: "top" | "center" | "bottom";
}

const conentCSS = css<IProps>`
    padding: 20px;
    ${device.large} {
        padding: 25px;
        margin-top: 60px;
    }
    ${device.xlarge} {
        padding: 30px;
    }
    ${({ $fullHeight }) =>
        $fullHeight &&
        css`
            min-height: calc(100vh - 107px);
            display: flex;
            flex-direction: column;
            justify-content: center;
        `}

    ${({ $align }) =>
        $align !== "center" &&
        css`
            & > .container {
                flex: 1;
            }
        `}
    ${space};
`;

export const StyledContent = styled(
    ({ p, px, py, m, mx, my, $fullHeight, $align, ...rest }) => (
        <div {...rest} />
    )
)<IProps>`
    ${conentCSS}
`;
