import { FC } from "react";
import { Row, Col, Card, CardBody, SparklinesLines } from "@doar/components";
import { conversions } from "@doar/shared/data/sales-monitoring";
import {
    StyledCardTitle,
    StyledCardBottom,
    StyledCardRate,
    StyledCardText,
    StyledCardChangePercent,
    StyledChart,
} from "./style";

const RowOne: FC = () => {
    return (
        <Row gutters={10}>
            {conversions.map((data) => (
                <Col sm={6} lg={3} mt={["10px", "0px"]} key={data.id}>
                    <Card>
                        <CardBody>
                            <StyledCardTitle>{data?.title}</StyledCardTitle>
                            <StyledCardBottom>
                                <StyledCardRate>{data?.rate}</StyledCardRate>
                                <StyledCardText>
                                    <StyledCardChangePercent
                                        $growth={data.change.growth}
                                    >
                                        {data?.change?.percentage}{" "}
                                        {data?.change?.growth === "up" && (
                                            <i className="icon ion-md-arrow-up" />
                                        )}
                                        {data?.change?.growth === "down" && (
                                            <i className="icon ion-md-arrow-down" />
                                        )}{" "}
                                    </StyledCardChangePercent>
                                    {data?.change?.time && "than last week"}
                                </StyledCardText>
                            </StyledCardBottom>
                            <StyledChart>
                                <SparklinesLines
                                    data={[...data?.chart]}
                                    width={200}
                                    height={30}
                                    color="#9db2c6"
                                    lineStyle={{
                                        fill: "none",
                                    }}
                                    hasSpot
                                    spotSize={2}
                                    spotStyle={{
                                        fill: "#9db2c6",
                                    }}
                                />
                            </StyledChart>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default RowOne;
