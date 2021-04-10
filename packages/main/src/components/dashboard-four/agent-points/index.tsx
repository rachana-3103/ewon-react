import { FC } from "react";
import {
    Card,
    CardBody,
    SectionTitle,
    Media,
    MediaBody,
    Avatar,
    AvatarInitial,
    Progress,
} from "@doar/components";
import {
    StyledHeader,
    StyledDiv,
    StyledTitle,
    StyledRole,
    StyledDivLeft,
    StyledDivRight,
} from "./style";

const AgentPoints: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Agent Performance Points" />
            </StyledHeader>
            <CardBody pt="25px">
                <Media>
                    <Avatar>
                        <AvatarInitial>D</AvatarInitial>
                    </Avatar>
                    <MediaBody ml="15px">
                        <StyledTitle>Katherine Lumaad</StyledTitle>
                        <StyledRole>Technical Support</StyledRole>
                        <Progress
                            now={85}
                            bg="primary"
                            height="4px"
                            opacity={0.7}
                            mb="4px"
                        />
                        <StyledDiv>
                            <StyledDivLeft>Executive Level</StyledDivLeft>
                            <StyledDivRight>12,312 points</StyledDivRight>
                        </StyledDiv>
                    </MediaBody>
                </Media>
                <Media mt="25px">
                    <Avatar>
                        <AvatarInitial>D</AvatarInitial>
                    </Avatar>
                    <MediaBody ml="15px">
                        <StyledTitle>Adrian Monino</StyledTitle>
                        <StyledRole>Sales Representative</StyledRole>
                        <Progress
                            now={60}
                            bg="success"
                            height="4px"
                            opacity={0.7}
                            mb="4px"
                        />
                        <StyledDiv>
                            <StyledDivLeft>Master Level</StyledDivLeft>
                            <StyledDivRight>10,044 points</StyledDivRight>
                        </StyledDiv>
                    </MediaBody>
                </Media>
                <Media mt="25px">
                    <Avatar>
                        <AvatarInitial>D</AvatarInitial>
                    </Avatar>
                    <MediaBody ml="15px">
                        <StyledTitle>Rolando Paloso</StyledTitle>
                        <StyledRole>Software Support</StyledRole>
                        <Progress
                            now={45}
                            bg="indigo"
                            height="4px"
                            opacity={0.7}
                            mb="4px"
                        />
                        <StyledDiv>
                            <StyledDivLeft>Super Elite Level</StyledDivLeft>
                            <StyledDivRight>7,500 points</StyledDivRight>
                        </StyledDiv>
                    </MediaBody>
                </Media>
                <Media mt="25px">
                    <Avatar>
                        <AvatarInitial>D</AvatarInitial>
                    </Avatar>
                    <MediaBody ml="15px">
                        <StyledTitle>Dyanne Rose Aceron</StyledTitle>
                        <StyledRole>Sales Representative</StyledRole>
                        <Progress
                            now={40}
                            bg="pink"
                            height="4px"
                            opacity={0.7}
                            mb="4px"
                        />
                        <StyledDiv>
                            <StyledDivLeft>Elite Level</StyledDivLeft>
                            <StyledDivRight>6,870 points</StyledDivRight>
                        </StyledDiv>
                    </MediaBody>
                </Media>
            </CardBody>
        </Card>
    );
};

export default AgentPoints;
