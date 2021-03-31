import { FC } from "react";
import { Progress } from "@doar/components";
import {
    StyledProgress,
    StyledProgressDiv,
    StyledProgressGoal,
    StyledProgressGoalText,
    StyledProgressNumb,
    StyledProgressTitle,
} from "./style";

interface IProps {
    title: string;
    goalText: string;
    number: string;
    goal: string;
    progress: {
        bg: string;
        now: number;
    };
}

const MetricsProgress: FC<IProps> = ({
    title,
    goalText,
    number,
    goal,
    progress: { bg, now },
}) => {
    return (
        <StyledProgress>
            <StyledProgressDiv>
                <StyledProgressTitle>{title}</StyledProgressTitle>
                <StyledProgressGoalText>{goalText}</StyledProgressGoalText>
            </StyledProgressDiv>
            <StyledProgressDiv>
                <StyledProgressNumb>{number}</StyledProgressNumb>
                <StyledProgressGoal>
                    <small>{goal}</small>
                </StyledProgressGoal>
            </StyledProgressDiv>
            <Progress bg={bg} now={now} height="4px" opacity={0.5} />
        </StyledProgress>
    );
};

export default MetricsProgress;
