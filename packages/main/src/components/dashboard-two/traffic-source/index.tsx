import { FC } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@doar/components";
import { StyledTitle, StyledNumber, StyledSubtitle, StyledDesc } from "./style";

const TrafficSource: FC = () => {
    return (
        <Card>
            <CardHeader>
                <StyledTitle>Top Traffic Source</StyledTitle>
            </CardHeader>
            <CardBody textAlign="center">
                <StyledNumber>29,931</StyledNumber>
                <StyledSubtitle>Organic Search</StyledSubtitle>
                <StyledDesc>
                    Measures your user&apos;s sources that generate traffic
                    metrics to your website for this month.
                </StyledDesc>
            </CardBody>
            <CardFooter borderTopWidth={0} pt="0px">
                ddd
            </CardFooter>
        </Card>
    );
};

export default TrafficSource;
