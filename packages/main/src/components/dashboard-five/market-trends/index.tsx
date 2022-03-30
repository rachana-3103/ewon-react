import { FC } from "react";
import { Card, CardBody, SectionTitle, ApexPieChart } from "@doar/components";
import { marketTrendsChart } from "@doar/shared/data/dashboard-five";
import { StyledHeader, StyledChart } from "./style";

const MarketTrends: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Market Trends" />
            </StyledHeader>
            <CardBody>
                <StyledChart>
                    <ApexPieChart
                        options={marketTrendsChart.options}
                        series={marketTrendsChart.series}
                        width="100%"
                        height="100%"
                    />
                </StyledChart>
            </CardBody>
        </Card>
    );
};

export default MarketTrends;
