import { FC } from "react";
import { Card, Row, Col, ApexBarChart } from "@doar/components";
import { RetentionChart } from "@doar/shared/data/dashboard-one";
import {
    StyledCardHeader,
    StyledCardBody,
    StyledTitle,
    StyledDesc,
    StyledCardBodyTitle,
    StyledCardBodySubtitle,
    StyledCardBodyText,
    StyledChart,
} from "./style";

const AccountRetention: FC = () => {
    return (
        <Card>
            <StyledCardHeader>
                <StyledTitle>Account Retention</StyledTitle>
                <StyledDesc>
                    Number of customers who have active subscription with you.
                </StyledDesc>
            </StyledCardHeader>
            <StyledCardBody>
                <StyledChart>
                    <ApexBarChart
                        series={RetentionChart.series}
                        options={RetentionChart.options}
                        width="100%"
                        height={282}
                    />
                </StyledChart>
                <Row>
                    <Col col={12} sm>
                        <StyledCardBodyTitle>
                            $1,680<small>.50</small>
                        </StyledCardBodyTitle>
                        <StyledCardBodySubtitle color="primary">
                            Expansions
                        </StyledCardBodySubtitle>
                        <StyledCardBodyText>
                            Customers who have upgraded the level of your
                            products or service.
                        </StyledCardBodyText>
                    </Col>
                    <Col col={12} sm mt={["20px", "0px"]}>
                        <StyledCardBodyTitle>
                            $1,520<small>.00</small>
                        </StyledCardBodyTitle>
                        <StyledCardBodySubtitle color="pink">
                            Cancellations
                        </StyledCardBodySubtitle>
                        <StyledCardBodyText>
                            Customers who have ended their subscription with
                            you.
                        </StyledCardBodyText>
                    </Col>
                </Row>
            </StyledCardBody>
        </Card>
    );
};

export default AccountRetention;
