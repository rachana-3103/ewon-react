import styled, {
    layout,
    space,
    css,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
} from "@doar/shared/styled";

interface IMedia extends SpaceProps, FlexboxProps {}

export const StyledMedia = styled(
    ({ m, ml, mr, mt, mb, alignItems, ...props }) => <div {...props} />
)<IMedia>`
    ${space};
    display: flex;
    align-items: flex-start;
`;

interface IMediaLeft extends SpaceProps, LayoutProps {}

export const StyledMediaLeft = styled(({ width, mr, ml, ...props }) => (
    <div {...props} />
))<IMediaLeft>`
    ${layout};
    ${space};
    ${(props) =>
        props.$alignMent === "middle" &&
        css`
            align-self: center;
        `}
    ${(props) =>
        props.$alignMent === "end" &&
        css`
            align-self: flex-end;
        `}
    img {
        max-width: 100%;
    }
`;

export const StyledMediaBody = styled(
    ({ width, m, mr, ml, mt, mb, ...props }) => <div {...props} />
)<SpaceProps>`
    ${space};
    flex: 1;
`;
