import styled from "@doar/shared/styled";

export const StyledWrap = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
`;

interface IItemProps {
    $show: boolean;
    $type:
        | "calendar"
        | "birthday"
        | "holiday"
        | "discover"
        | "meetup"
        | "other";
    $color: string;
}

export const StyledItem = styled.button<IItemProps>`
    display: flex;
    align-items: center;
    color: #1b2e4b;
    padding: 6px 10px;
    border: none;
    background: transparent;
    &:hover {
        background-color: #f5f6fa;
    }
    &:focus,
    &:active {
        outline: none;
    }
    span {
        border-color: ${(props) => props.$color};
        &:before {
            background-color: ${(props) => props.$color};
        }
    }
`;

export const StyledBullet = styled.span`
    position: relative;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #fff;
    margin-right: 10px;
    border: 2px solid transparent;
    &:before {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 6px;
        height: 6px;
        border-radius: 100%;
    }
`;
