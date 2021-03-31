import { FC } from "react";
import {
    Card,
    CardBody,
    ButtonGroup,
    Row,
    Col,
    ApexBarChart,
} from "@doar/components";
import { webMetricsChart } from "@doar/shared/data/dashboard-two";
import {
    StyledHeader,
    StyledTitle,
    StyledDesc,
    StyledButton,
    StyledChart,
} from "./style";

const WebsiteMetrics: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <div>
                    <StyledTitle>Website Audience Metrics</StyledTitle>
                    <StyledDesc>
                        Audience to which the users belonged while on the
                        current date range.
                    </StyledDesc>
                </div>
                <ButtonGroup mt={["20px", "0px"]}>
                    <StyledButton size="xs" color="white">
                        Day
                    </StyledButton>
                    <StyledButton size="xs" color="white">
                        Week
                    </StyledButton>
                    <StyledButton size="xs" color="white" active>
                        Month
                    </StyledButton>
                </ButtonGroup>
            </StyledHeader>
            <CardBody p={[null, null, "25px"]}>
                <Row smAlignItems="end">
                    <Col lg={7} xl={8}>
                        <StyledChart>
                            <ApexBarChart
                                options={webMetricsChart.options}
                                series={webMetricsChart.series}
                                width="100%"
                                height="100%"
                            />
                        </StyledChart>
                    </Col>
                    <Col lg={5} xl={4}>
                        dsf
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default WebsiteMetrics;
