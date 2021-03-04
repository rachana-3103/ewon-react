/* eslint-disable react/react-in-jsx-scope */
import styled, { layout, space, css } from "@doar/shared/styled";

export const StyledMedia = styled(({ mb, ...props }) => <div {...props} />)`
    ${space};
    display: flex;
    align-items: flex-start;
`;

export const StyledMediaLeft = styled(({ width, mr, ml, ...props }) => (
    <div {...props} />
))`
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

export const StyledMediaBody = styled.div`
    flex: 1;
`;
