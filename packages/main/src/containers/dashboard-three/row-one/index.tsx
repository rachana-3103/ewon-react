import { FC } from "react";
import { Download, Share2, Eye } from "react-feather";
import { Col, Card, Media, MediaBody } from "@doar/components";
import {
    StyledBody,
    StyledAvatar,
    StyledTitle,
    StyledMediaBottom,
    StyledBTCNumber,
    StyledBTCRate,
    StyledRight,
    StyledButton,
} from "./style";

const RowOne: FC = () => {
    return (
        <Col col={12}>
            <Card>
                <StyledBody>
                    <Media>
                        <StyledAvatar>
                            <i className="fab fa-bitcoin" />
                        </StyledAvatar>
                        <MediaBody ml="15px">
                            <StyledTitle>
                                Bitcoin Price <span>(BTC)</span>
                            </StyledTitle>
                            <StyledMediaBottom>
                                <StyledBTCNumber>$3,972.87</StyledBTCNumber>
                                <StyledBTCRate>-$7.98(0.2006%)</StyledBTCRate>
                            </StyledMediaBottom>
                        </MediaBody>
                    </Media>
                    <StyledRight>
                        <StyledButton color="white" size="sm" hasIcon>
                            <Download size={14} strokeWidth="2.5px" />
                            Export CSV
                        </StyledButton>
                        <StyledButton
                            color="white"
                            size="sm"
                            hasIcon
                            mt={["5px", "0px"]}
                            ml={[null, "5px"]}
                        >
                            <Share2 size={14} strokeWidth="2.5px" />
                            Share
                        </StyledButton>
                        <StyledButton
                            color="white"
                            size="sm"
                            hasIcon
                            mt={["5px", "0px"]}
                            ml={[null, "5px"]}
                        >
                            <Eye size={14} strokeWidth="2.5px" />
                            Watch
                        </StyledButton>
                    </StyledRight>
                </StyledBody>
            </Card>
        </Col>
    );
};

export default RowOne;
