import styled, { themeGet } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledList = styled.ul`
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
`;

export const StyledItem = styled.li`
    margin-right: 5px;
    margin-bottom: 5px;
    display: inline-block;
    &:not(:last-of-type) {
        margin-right: 0.5rem;
    }
`;

export const StyledSkill = styled(({ ...rest }) => <Anchor {...rest} />)`
    display: block;
    background-color: #fff;
    border: 1px solid ${themeGet("colors.text4")};
    padding-top: 3px;
    padding-bottom: 1px;
    padding-left: 8px;
    padding-right: 8px;
    color: ${themeGet("colors.text2")};
    border-radius: 0.25rem;
`;
