import { FC } from "react";
import { Card, CardBody, Row, Col, BarChart } from "@doar/components";
import { RetentionChart } from "@doar/shared/data/sales-monitoring";
import {
    StyledCardHeader,
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
            <CardBody>
                <StyledChart>
                    <BarChart
                        data={RetentionChart.data}
                        options={RetentionChart.options}
                        width={350}
                        height={180}
                    />
                </StyledChart>
                <Row>
                    <Col col>
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
                    <Col col mt={["20px", "0px"]}>
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
            </CardBody>
        </Card>
    );
};

export default AccountRetention;
