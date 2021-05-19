import styled, { css } from "@doar/shared/styled";
import { Media } from "@doar/components";

export const StyledWrap = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border-top: 1px solid rgba(72, 94, 144, 0.16);
    flex: 1 1 auto;
`;

export const StyledList = styled.div``;

interface IProps {
    $active: boolean;
}

export const StyledItem = styled(({ ...rest }) => <Media {...rest} />)<IProps>`
    padding: 8px 10px;
    color: #1b2e4b;
    border-radius: 0.25rem;
    cursor: pointer;
    align-items: center;
    &:hover,
    &:focus {
        background-color: #f5f6fa;
    }
    ${({ $active }) =>
        !!$active &&
        css`
            background-color: #e5e9f2;
        `}
`;
