import styled, { themeGet, css } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledUser = styled.div`
    margin-bottom: 25px;
`;

export const StyledAvatarWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledAlerts = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`;

export const StyledAlert = styled(({ ...rest }) => <Anchor {...rest} />)`
    color: ${themeGet("colors.text3")};
    display: block;
    line-height: 1.215;
    &.new {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 7px;
            height: 7px;
            background-color: ${themeGet("colors.danger")};
            box-shadow: 0 0 0 2px #fff;
            border-radius: 100%;
        }
    }

    &:not(:first-of-type) {
        margin-left: 10px;
    }
`;

export const StyledLoggedInUser = styled.div`
    margin-top: 15px;
`;

export const StyledUserBtn = styled.button`
    background-color: transparent;
    padding: 0;
    border: none;
    color: ${themeGet("colors.text4")};
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const StyledUserData = styled.div`
    margin-bottom: 15px;
`;

interface ICollapse {
    $show: boolean;
}

export const StyledUserCollapse = styled.div<ICollapse>`
    ${({ $show }) =>
        !$show &&
        css`
            display: none;
        `}
`;
