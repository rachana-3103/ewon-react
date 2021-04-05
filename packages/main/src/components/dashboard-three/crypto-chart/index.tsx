import { FC } from "react";
import { Card, CardBody, ApexAreaChart } from "@doar/components";
import { cryptoChart } from "@doar/shared/data/dashboard-three";
import NavLine from "./nav-line";
import {
    StyledHeader,
    StyledHeaderRight,
    StyledHeaderText,
    StyledText,
    StyledChart,
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
        </Card>
    );
};

export default CryptoChart;
