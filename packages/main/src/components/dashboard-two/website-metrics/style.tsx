import styled, { device, themeGet } from "@doar/shared/styled";
import { CardHeader, Button } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    display: flex;
    flex-direction: column;
    border-bottom: 0;
    padding-top: 20px;
    padding-left: 20px;
    ${device.small} {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    ${device.large} {
        padding-left: 25px;
        padding-top: 25px;
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 5px;
`;

export const StyledDesc = styled.p`
    margin-bottom: 0px;
    color: ${themeGet("colors.text3")};
    font-size: 12px;
`;

export const StyledButton = styled(({ ...props }) => <Button {...props} />)`
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 1.8;
`;

export const StyledChart = styled.div`
    margin-left: -17px;
    margin-top: -24px;
    margin-bottom: -17px;
    height: 180px;
    ${device.small} {
        height: 200px;
    }
    ${device.medium} {
        height: 250px;
    }
    ${device.large} {
        height: 300px;
    }
`;

export const StyledProgressDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

export const StyledProgressTitle = styled.h6`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 0px;
`;

export const StyledProgressGoalText = styled.span`
    color: ${themeGet("colors.text4")};
    font-size: 10px;
`;

export const StyledProgressNumb = styled.h5`
    line-height: 1.2;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 0px;
`;

export const StyledProgressGoal = styled.h6`
    line-height: 1.2;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;
