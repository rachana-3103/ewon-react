import { FC } from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    HorizontalBarChart,
    SectionTitle,
} from "@doar/components";
import { RealTimeSalesData } from "@doar/shared/data/dashboard-one";
import {
    StyledBodyTitle,
    StyledBullet,
    StyledHeader,
    StyledList,
    StyledListItem,
    StyledListText,
    StyledBodyStatus,
    StyledBodyText,
    StyledChart,
} from "./style";

const RealTimeSales: FC = () => {
    return (
        <Card height="100%">
            <StyledHeader>
                <SectionTitle title="Real-Time Sales" />
                <StyledList>
                    <StyledListItem>
                        <StyledBullet bg="malibu" />
                        <StyledListText>Today</StyledListText>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledBullet bg="tropical" />
                        <StyledListText>Yesterday</StyledListText>
                    </StyledListItem>
                </StyledList>
            </StyledHeader>
            <CardBody pb={["0px", "0px"]}>
                <Row mb="36px">
                    <Col col>
                        <StyledBodyTitle>
                            $150,200{" "}
                            <StyledBodyStatus color="success">
                                <i className="fa fa-arrow-up" /> 0.20%
                            </StyledBodyStatus>
                        </StyledBodyTitle>
                        <StyledBodyText>Total Sales</StyledBodyText>
                    </Col>
                    <Col col>
                        <StyledBodyTitle>
                            $21,880{" "}
                            <StyledBodyStatus color="danger">
                                <i className="fa fa-arrow-down" /> 1.04%
                            </StyledBodyStatus>
                        </StyledBodyTitle>
                        <StyledBodyText>Avg. Sales Per Day</StyledBodyText>
                    </Col>
                </Row>
                <StyledChart>
                    <HorizontalBarChart
                        data={RealTimeSalesData.data}
                        options={RealTimeSalesData.options}
                        width={341}
                        height={225}
                    />
                </StyledChart>
            </CardBody>
        </Card>
    );
};

export default RealTimeSales;
