import styled, { css } from "@doar/shared/styled";

export const StyledSidebar = styled.div<{ $sidebar?: boolean }>`
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 60px;
    right: 0;
    transition: all 0.3s;
    @media (min-width: 480px) {
        width: 250px;
        border-right: 1px solid rgba(72, 94, 144, 0.16);
    }
    ${({ $sidebar }) =>
        $sidebar &&
        css`
            @media (max-width: 479px) {
                transform: translateX(-100vw);
            }
        `}
`;

export const StyledHeader = styled.div`
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
    height: 60px;
`;
export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
export const StyledFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    border-top: 1px solid rgba(72, 94, 144, 0.16);
    padding-left: 20px;
    padding-right: 15px;
`;
