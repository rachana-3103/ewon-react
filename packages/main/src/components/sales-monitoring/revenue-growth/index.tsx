import { FC } from "react";
import { Card, CardBody, Row, Col, LineChart } from "@doar/components";
import { RevenueChart } from "@doar/shared/data/sales-monitoring";
import {
    StyledHeader,
    StyledTitle,
    StyledList,
    StyledListItem,
    StyledBullet,
    StyledListText,
    StyledCardBodyWrap,
    StyledCardBodyTitle,
    StyledCardBodySubtitle,
    StyledCardBodyText,
    StyledChart,
} from "./style";

const RevenueGrowth: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <StyledTitle>
                    Account &amp; Monthly Recurring Revenue Growth
                </StyledTitle>
                <StyledList>
                    <StyledListItem>
                        <StyledBullet bg="primary" />
                        <StyledListText>Growth Actual</StyledListText>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledBullet bg="malibu" />
                        <StyledListText>Actual</StyledListText>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledBullet bg="tropical" />
                        <StyledListText>Plan</StyledListText>
                    </StyledListItem>
                </StyledList>
            </StyledHeader>
            <CardBody p={["0px", "0px"]} position="relative">
                <StyledCardBodyWrap>
                    <Row>
                        <Col sm={5}>
                            <StyledCardBodyTitle>$620,076</StyledCardBodyTitle>
                            <StyledCardBodySubtitle>
                                MRR Growth
                            </StyledCardBodySubtitle>
                            <StyledCardBodyText>
                                Measure How Fast You’re Growing Monthly
                                Recurring Revenue. <a href="/">Learn More</a>
                            </StyledCardBodyText>
                        </Col>
                        <Col sm={5} mt={["20px", "0px"]}>
                            <StyledCardBodyTitle>$1,200</StyledCardBodyTitle>
                            <StyledCardBodySubtitle>
                                AVG. MRR/CUSTOMER
                            </StyledCardBodySubtitle>
                            <StyledCardBodyText>
                                The revenue generated per account on a monthly
                                or yearly basis. <a href="/">Learn More</a>
                            </StyledCardBodyText>
                        </Col>
                    </Row>
                </StyledCardBodyWrap>
                <StyledChart>
                    <LineChart
                        data={RevenueChart.data}
                        options={RevenueChart.options}
                        width={615}
                        height={315}
                    />
                </StyledChart>
            </CardBody>
        </Card>
    );
};

export default RevenueGrowth;
