import styled, {
    themeGet,
    color as colorStyles,
    ColorProps,
} from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
    justify-content: space-between;
    display: flex;
`;

export const StyledSpan = styled.span`
    font-size: 13px;
    color: ${themeGet("colors.text3")};
    i {
        font-size: 12px;
    }
`;

export const StyledDiv = styled.div`
    position: absolute;
    left: 20px;
    top: 10px;
`;

export const StyledDivTop = styled.div`
    display: flex;
    align-items: baseline;
`;

export const StyledNumb = styled.h1`
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-right: 5px;
    margin-bottom: 0px;
`;

export const StyledText = styled.p`
    font-size: 11px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledRate = styled(({ color, ...rest }) => (
    <span {...rest} />
))<ColorProps>`
    font-weight: 500;
    ${colorStyles};
`;

export const StyledDesc = styled.p`
    width: 60%;
    font-size: 12px;
    color: ${themeGet("colors.text3")};
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 205px;
    margin-bottom: -5px;
    margin-top: -20px;
    & > div {
        margin-left: -9px;
        margin-right: -7px;
    }
    .apexcharts-xaxis {
        &-label {
            font-size: 9px;
            font-weight: 600;
            font-family: ${themeGet("fonts.interUi")} !important;
            &:first-of-type {
                display: none;
            }
        }
    }
    .apexcharts-gridline {
        stroke-width: 0.3px;
    }
`;
