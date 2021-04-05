import { FC } from "react";
import {
    Card,
    CardBody,
    ApexAreaChart,
    CardFooter,
    Row,
    Col,
} from "@doar/components";
import { cryptoChart } from "@doar/shared/data/dashboard-three";
import NavLine from "./nav-line";
import {
    StyledHeader,
    StyledHeaderRight,
    StyledHeaderText,
    StyledText,
    StyledChart,
    StyledFooterTitle,
    StyledFooterSub,
} from "./style";

const CryptoChart: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <NavLine />
                <StyledHeaderRight>
                    <StyledHeaderText>
                        03/01/2019
                        <i className="fa fa-chevron-down" />
                    </StyledHeaderText>
                    <StyledText>To</StyledText>
                    <StyledHeaderText>
                        03/02/2019
                        <i className="fa fa-chevron-down" />
                    </StyledHeaderText>
                </StyledHeaderRight>
            </StyledHeader>
            <CardBody p={["10px", "20px"]}>
                <StyledChart>
                    <ApexAreaChart
                        options={cryptoChart.options}
                        series={cryptoChart.series}
                        width="100%"
                        height="100%"
                    />
                </StyledChart>
            </CardBody>
            <CardFooter p="20px">
                <Row gutters={20}>
                    <Col col={6} sm={4} md>
                        <StyledFooterTitle>Market Cap</StyledFooterTitle>
                        <StyledFooterSub>$14.5B</StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md>
                        <StyledFooterTitle>Volume (24h)</StyledFooterTitle>
                        <StyledFooterSub>$4.6B</StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md>
                        <StyledFooterTitle>Change</StyledFooterTitle>
                        <StyledFooterSub>
                            -$7.98 <i className="danger fa fa-arrow-down" />
                        </StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md>
                        <StyledFooterTitle>
                            Circulating Supply
                        </StyledFooterTitle>
                        <StyledFooterSub>17.59M</StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md>
                        <StyledFooterTitle>All Time High</StyledFooterTitle>
                        <StyledFooterSub>$18.4K</StyledFooterSub>
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    );
};

export default CryptoChart;
