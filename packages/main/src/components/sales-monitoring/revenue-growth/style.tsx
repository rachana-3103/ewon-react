import styled, {
    device,
    themeGet,
    color,
    ColorProps,
} from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    padding-top: 20px;
    padding-bottom: 20px;
    ${device.small} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 0px;
`;

export const StyledList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    margin-bottom: 0px;
    margin-top: 20px;
    ${device.small} {
        margin-top: 10px;
    }
    ${device.medium} {
        margin-top: 0px;
    }
`;

export const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-right: 0.5rem;
    }
    &:not(:first-child) {
        margin-left: 5px;
    }
`;

export const StyledBullet = styled.span<ColorProps>`
    display: block;
    border-radius: 0.25rem;
    height: 10px;
    margin-right: 5px;
    width: 10px;
    ${color};
`;

export const StyledListText = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
`;

export const StyledCardBodyWrap = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
    ${device.xlarge} {
        width: 100%;
    }
`;

export const StyledCardBodyTitle = styled.h3`
    margin-bottom: 5px;
    font-weight: 400;
    letter-spacing: -1px;
    font-family: ${themeGet("fonts.rubik")};
`;

export const StyledCardBodySubtitle = styled.h6`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 10px;
`;

export const StyledCardBodyText = styled.p`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledChart = styled.div`
    position: relative;
    overflow: hidden;
    margin: 0 15px 15px;
    padding-top: 80px;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    ${device.small} {
        margin: 0 20px 15px;
        padding-top: 0;
        overflow: visible;
    }
`;
