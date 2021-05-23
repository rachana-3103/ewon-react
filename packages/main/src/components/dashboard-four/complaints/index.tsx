import { FC } from "react";
import { Card, CardBody, SectionTitle, ApexAreaChart } from "@doar/components";
import { complaintsData } from "@doar/shared/data/dashboard-four";
import {
    StyledHeader,
    StyledSpan,
    StyledChart,
    StyledDiv,
    StyledDivTop,
    StyledNumb,
    StyledText,
    StyledRate,
    StyledDesc,
} from "./style";

const Complaints: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Complaints Received" />
                <StyledSpan>
                    This Month <i className="fa fa-chevron-down" />
                </StyledSpan>
            </StyledHeader>
            <CardBody p={["0px", "0px"]} position="relative">
                <StyledDiv>
                    <StyledDivTop>
                        <StyledNumb>165</StyledNumb>
                        <StyledText>
                            <StyledRate color="success">
                                0.3% <i className="fa fa-arrow-up" />
                            </StyledRate>{" "}
                            than last month
                        </StyledText>
                    </StyledDivTop>
                    <StyledDesc>
                        The total number of complaints that have been received.
                    </StyledDesc>
                </StyledDiv>
                <StyledChart>
                    <ApexAreaChart
                        options={complaintsData.options}
                        series={complaintsData.series}
                        width="100%"
                        height="100%"
                    />
                </StyledChart>
            </CardBody>
        </Card>
    );
};

export default Complaints;
