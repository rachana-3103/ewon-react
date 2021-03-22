import styled, {
    device,
    color as colorStyles,
    ColorProps,
    typography,
    TypographyProps,
    themeGet,
} from "@doar/shared/styled";
import { CardHeader, Table } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    border-bottom: 0;
    padding-bottom: 0px;
    padding-top: 20px;
    ${device.small} {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 5px;
`;

export const StyeldSubtitle = styled.p`
    font-size: 13px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledMediaWrap = styled.div`
    ${device.small} {
        display: flex;
    }
`;

export const StyledMedaLeft = styled(({ bg, ...rest }) => (
    <div {...rest} />
))<ColorProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    height: 40px;
    margin-right: 10px;
    opacity: 0.5;
    color: #fff;
    width: 40px;
    ${device.medium} {
        width: 50px;
        height: 50px;
    }
    ${colorStyles};
`;

export const StyledMediaTitle = styled.h6`
    font-size: 10px;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 600;
    color: ${themeGet("colors.text3")};
    margin-bottom: 5px;
    ${device.medium} {
        margin-bottom: 8px;
    }
`;

export const StyledMediaSub = styled.h4`
    font-size: 20px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 0px;
    ${device.small} {
        font-size: 18px;
    }
    ${device.medium} {
        font-size: 24px;
    }
`;

export const StyledTable = styled(({ ...rest }) => <Table {...rest} />)`
    font-size: 13px;
    margin-bottom: 0;
    thead th,
    tbody td {
        border-color: #e5e9f2;
    }
`;

export const StyledTH = styled.th`
    font-family: ${themeGet("fonts.interUi")};
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #8392a5;
    &:first-child {
        padding-left: 20px;
    }
    &:not(:first-child) {
        text-align: right;
    }
    &:last-child {
        padding-right: 20px;
    }
`;

interface ITDProps extends ColorProps, TypographyProps {}

export const StyledTD = styled(({ color, fontWeight, ...rest }) => (
    <td {...rest} />
))<ITDProps>`
    ${colorStyles};
    ${typography}
    &:first-child {
        padding-left: 20px;
    }
    &:not(:first-child) {
        text-align: right;
    }
    &:last-child {
        padding-right: 20px;
    }
`;

export const StyledTDRate = styled(({ color, ...rest }) => <span {...rest} />)`
    font-size: 10px;
    font-weight: 400;
    margin-left: 5px;
    ${colorStyles};
`;
