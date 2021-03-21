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
            </CardBody>
        </Card>
    );
};

export default SalesRevenue;
