import styled, { device, themeGet, css } from "@doar/shared/styled";

const link3 = css`
    color: ${themeGet("colors.text3")};
    &:hover {
        color: ${themeGet("colors.text2")};
    }
`;

export const StyledWrap = styled.div`
    background-color: #fff;
    border-radius: ${themeGet("radii.rounded")};
    display: flex;
    justify-content: flex-end;
    border: 1px solid ${themeGet("colors.border")};
    height: 50px;
    margin-bottom: 20px;
    ${device.large} {
        margin-bottom: 25px;
    }
`;

export const StyledShare = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-right: auto;
    align-items: center;
    display: flex;
`;

export const StyledAnchor = styled.a`
    margin-left: 10px;
    ${link3};
    span {
        display: none;
        ${device.small} {
            display: inline;
        }
    }
`;

export const RightBtn = styled.div`
    width: 50px;
    border-left: 1px solid ${themeGet("colors.border")};
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const RightBtnLink = styled.a`
    ${link3}
    line-height: 1;
`;
