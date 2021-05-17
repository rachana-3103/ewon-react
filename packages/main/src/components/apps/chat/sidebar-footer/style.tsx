import styled from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLinks = styled.div`
    align-items: center;
    display: flex;
`;

export const StyledLink = styled(({ ...rest }) => <Anchor {...rest} />)`
    padding: 3px 6px;
    color: #8392a5;
    border-radius: 0.25rem;
    line-height: 1;
`;
