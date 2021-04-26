import styled, { themeGet, css } from "@doar/shared/styled";

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
    ${({ $type }) =>
        $type === "calendar" &&
        css`
            span {
                border-color: ${themeGet("colors.primary")};
                &:before {
                    background-color: ${themeGet("colors.primary")};
                }
            }
        `}
    ${({ $type }) =>
        $type === "birthday" &&
        css`
            span {
                border-color: ${themeGet("colors.success")};
                &:before {
                    background-color: ${themeGet("colors.success")};
                }
            }
        `}
	${({ $type }) =>
        $type === "holiday" &&
        css`
            span {
                border-color: ${themeGet("colors.pink")};
                &:before {
                    background-color: ${themeGet("colors.pink")};
                }
            }
        `}
	${({ $type }) =>
        $type === "discover" &&
        css`
            span {
                border-color: ${themeGet("colors.teal")};
                &:before {
                    background-color: ${themeGet("colors.teal")};
                }
            }
        `}
	${({ $type }) =>
        $type === "meetup" &&
        css`
            span {
                border-color: ${themeGet("colors.indigo")};
                &:before {
                    background-color: ${themeGet("colors.indigo")};
                }
            }
        `}
	${({ $type }) =>
        $type === "other" &&
        css`
            span {
                border-color: ${themeGet("colors.orange")};
                &:before {
                    background-color: ${themeGet("colors.orange")};
                }
            }
        `}
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
