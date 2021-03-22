import { FC } from "react";
import { Card, CardBody, SparklinesLines } from "@doar/components";
import { IConversion } from "@doar/shared/types";
import {
    StyledCardTitle,
    StyledCardBottom,
    StyledCardRate,
    StyledCardText,
    StyledCardChangePercent,
    StyledChart,
} from "./style";

type IProps = Omit<IConversion, "id">;

const Conversion: FC<IProps> = ({ title, rate, change, chart }) => {
    return (
        <Card>
            <CardBody>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledCardBottom>
                    <StyledCardRate>{rate}</StyledCardRate>
                    <StyledCardText>
                        <StyledCardChangePercent $growth={change.growth}>
                            {change?.percentage}{" "}
                            {change?.growth === "up" && (
                                <i className="icon ion-md-arrow-up" />
                            )}
                            {change?.growth === "down" && (
                                <i className="icon ion-md-arrow-down" />
                            )}{" "}
                        </StyledCardChangePercent>
                        {change?.time && "than last week"}
                    </StyledCardText>
                </StyledCardBottom>
                <StyledChart>
                    <SparklinesLines
                        data={[...chart]}
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
    );
};

export default Conversion;
