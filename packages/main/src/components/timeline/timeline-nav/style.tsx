import styled from "@doar/shared/styled";

export const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 15px;
    & > a {
        color: #596882;
        &:not(:first-of-type) {
            margin-left: 15px;
        }
    }
`;
