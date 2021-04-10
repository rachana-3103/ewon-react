import { FC } from "react";
import {
    Card,
    CardBody,
    SectionTitle,
    Media,
    MediaBody,
    Avatar,
    AvatarInitial,
    Heading,
    Text,
    Progress,
} from "@doar/components";
import { StyledHeader, StyledDiv } from "./style";

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
                        <Heading fontSize="13px" mb="2px">
                            Katherine Lumaad
                        </Heading>
                        <Text color="text3" mb="10px" fontSize="12px">
                            Technical Support
                        </Text>
                        <Progress
                            now={85}
                            bg="primary"
                            height="4px"
                            opacity={0.7}
                            mb="4px"
                        />
                        <StyledDiv>
                            <Text as="span" color="text3">
                                Executive Level
                            </Text>
                            <Text as="span" fontWeight="500">
                                12,312 points
                            </Text>
                        </StyledDiv>
                    </MediaBody>
                </Media>
                <Media mt="25px">
                    <Avatar>
                        <AvatarInitial>D</AvatarInitial>
                    </Avatar>
                    <MediaBody ml="15px">
                        <Heading fontSize="13px" mb="2px">
                            Adrian Monino
                        </Heading>
                        <Text color="text3" mb="10px" fontSize="12px">
                            Sales Representative
                        </Text>
                        <Progress
                            now={60}
                            bg="success"
                            height="4px"
                            opacity={0.7}
                            mb="4px"
                        />
                        <StyledDiv>
                            <Text as="span" color="text3">
                                Master Level
                            </Text>
                            <Text as="span" fontWeight="500">
                                10,044 points
                            </Text>
                        </StyledDiv>
                    </MediaBody>
                </Media>
                <Media mt="25px">
                    <Avatar>
                        <AvatarInitial>D</AvatarInitial>
                    </Avatar>
                    <MediaBody ml="15px">
                        <Heading fontSize="13px" mb="2px">
                            Rolando Paloso
                        </Heading>
                        <Text color="text3" mb="10px" fontSize="12px">
                            Software Support
                        </Text>
                        <Progress
                            now={45}
                            bg="indigo"
                            height="4px"
                            opacity={0.7}
                            mb="4px"
                        />
                        <StyledDiv>
                            <Text as="span" color="text3">
                                Super Elite Level
                            </Text>
                            <Text as="span" fontWeight="500">
                                7,500 points
                            </Text>
                        </StyledDiv>
                    </MediaBody>
                </Media>
                <Media mt="25px">
                    <Avatar>
                        <AvatarInitial>D</AvatarInitial>
                    </Avatar>
                    <MediaBody ml="15px">
                        <Heading fontSize="13px" mb="2px">
                            Dyanne Rose Aceron
                        </Heading>
                        <Text color="text3" mb="10px" fontSize="12px">
                            Sales Representative
                        </Text>
                        <Progress
                            now={40}
                            bg="pink"
                            height="4px"
                            opacity={0.7}
                            mb="4px"
                        />
                        <StyledDiv>
                            <Text as="span" color="text3">
                                Elite Level
                            </Text>
                            <Text as="span" fontWeight="500">
                                6,870 points
                            </Text>
                        </StyledDiv>
                    </MediaBody>
                </Media>
            </CardBody>
        </Card>
    );
};

export default AgentPoints;
