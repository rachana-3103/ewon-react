import { FC } from "react";
import { Card, CardBody, VectorMap } from "@doar/components";
import usajson from "@doar/shared/data/maps/usa.json";
import {
    StyledHeader,
    StyledTitle,
    StyledHeaderRight,
    StyledHeaderRightText,
    StyledHeaderRightIcon,
    StyeldMap,
    StyledTable,
    StyledTH,
    StyledTD,
} from "./style";

const SalesRevenue: FC = () => {
    return (
        <Card height={[null, null, null, "100%"]}>
            <StyledHeader>
                <StyledTitle>Sales Revenue</StyledTitle>
                <StyledHeaderRight>
                    <StyledHeaderRightText>Country</StyledHeaderRightText>
                    <StyledHeaderRightIcon>
                        USA <i className="icon ion-ios-arrow-down" />
                    </StyledHeaderRightIcon>
                </StyledHeaderRight>
            </StyledHeader>
            <CardBody p={["0px", "0px"]}>
                <StyeldMap>
                    <VectorMap
                        data={usajson}
                        height="200px"
                        width="100%"
                        color="#d1e6fa"
                        selectedColor="#69b2f8"
                        checkedLayers={[
                            "us-ca",
                            "us-wy",
                            "us-tx",
                            "us-ny",
                            "us-fl",
                        ]}
                        tooltip
                    />
                </StyeldMap>
                <StyledTable borderless>
                    <thead>
                        <tr>
                            <StyledTH>States</StyledTH>
                            <StyledTH>Orders</StyledTH>
                            <StyledTH>Earnings</StyledTH>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <StyledTD>California</StyledTD>
                            <StyledTD>12,201</StyledTD>
                            <StyledTD>$150,200.80</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>Texas</StyledTD>
                            <StyledTD>11,950</StyledTD>
                            <StyledTD>$138,910.20</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>Wyoming</StyledTD>
                            <StyledTD>11,198</StyledTD>
                            <StyledTD>$132,050.00</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>Florida</StyledTD>
                            <StyledTD>12,201</StyledTD>
                            <StyledTD>$150,200.80</StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>New York</StyledTD>
                            <StyledTD>8,560</StyledTD>
                            <StyledTD>$117,087.50</StyledTD>
                        </tr>
                    </tbody>
                </StyledTable>
            </CardBody>
        </Card>
    );
};

export default SalesRevenue;
