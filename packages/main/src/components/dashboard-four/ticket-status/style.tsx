import styled, {
    device,
    ColorProps,
    color,
    themeGet,
} from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
    ${device.small} {
        display: flex;
        justify-content: space-between;
    }
`;

export const StyledHeaderLeft = styled.div`
    margin-bottom: 10px;
    ${device.small} {
        margin-bottom: 0px;
    }
`;

export const StyledList = styled.ul`
    letter-spacing: 0.5px;
    margin-bottom: 0px;
    padding-left: 0;
    list-style: none;
`;

export const StyledListItem = styled.li`
    display: inline-block;
    &:not(:last-child) {
        margin-right: 0.5rem;
    }
    &:not(:first-child) {
        margin-left: 10px;
    }
`;

export const StyledBullet = styled(({ bg, ...rest }) => (
    <span {...rest} />
))<ColorProps>`
    display: inline-block;
    border-radius: 50%;
    height: 7px;
    margin-right: 5px;
    width: 7px;
    ${color};
`;

export const StyledListText = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 219px;
    & > div {
        margin-left: -14px;
        margin-right: -11px;
    }
    .apexcharts-grid {
        line {
            stroke-width: 1px;
        }
        & > line {
            display: none;
        }
    }
`;

export const StyledNumb = styled.h4`
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    margin-bottom: 10px;
`;

export const StyleTitle = styled.h6`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: #1b2e4b;
    margin-bottom: 2px;
`;

export const StyledText = styled.p`
    font-size: 10px;
    color: #8392a5;
    margin-bottom: 0px;
    span {
        font-weight: 500;
    }
    i {
        font-size: 8px;
    }
`;
