import { FC } from "react";
import { BarChart2 } from "react-feather";
import {
    Card,
    CardBody,
    ButtonGroup,
    Button,
    Media,
    MediaBody,
} from "@doar/components";
import {
    StyledHeader,
    StyledTitle,
    StyeldSubtitle,
    StyledMediaWrap,
    StyledMedaLeft,
    StyledMediaTitle,
    StyledMediaSub,
    StyledTable,
    StyledTH,
    StyledTD,
    StyledTDRate,
} from "./style";

const RecentEarnings: FC = () => {
    return (
        <Card mb="10px">
            <StyledHeader>
                <div>
                    <StyledTitle>Your Most Recent Earnings</StyledTitle>
                    <StyeldSubtitle>
                        Your sales and referral earnings over the last 30 days
                    </StyeldSubtitle>
                </div>
                <ButtonGroup mt={["20px", "0px"]}>
                    <Button size="xs" color="white" active>
                        Range
                    </Button>
                    <Button size="xs" color="white">
                        Period
                    </Button>
                </ButtonGroup>
            </StyledHeader>
            <CardBody py={["30px", "30px"]}>
                <StyledMediaWrap>
                    <Media>
                        <StyledMedaLeft bg="teal">
                            <BarChart2 size="24" />
                        </StyledMedaLeft>
                        <MediaBody>
                            <StyledMediaTitle>Gross Earnings</StyledMediaTitle>
                            <StyledMediaSub>$1,958,104</StyledMediaSub>
                        </MediaBody>
                    </Media>
                    <Media mt={["20px", "0px"]} ml={[null, "15px", "40px"]}>
                        <StyledMedaLeft bg="pink">
                            <BarChart2 size="24" />
                        </StyledMedaLeft>
                        <MediaBody>
                            <StyledMediaTitle>Tax Withheld</StyledMediaTitle>
                            <StyledMediaSub>
                                $234,769<small>.50</small>
                            </StyledMediaSub>
                        </MediaBody>
                    </Media>
                    <Media mt={["20px", "0px"]} ml={[null, "15px", "40px"]}>
                        <StyledMedaLeft bg="primary">
                            <BarChart2 size="24" />
                        </StyledMedaLeft>
                        <MediaBody>
                            <StyledMediaTitle>Net Earnings</StyledMediaTitle>
                            <StyledMediaSub>
                                $1,608,469<small>.50</small>
                            </StyledMediaSub>
                        </MediaBody>
                    </Media>
                </StyledMediaWrap>
            </CardBody>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTH>Date</StyledTH>
                        <StyledTH>Sales Count</StyledTH>
                        <StyledTH>Gross Earnings</StyledTH>
                        <StyledTH>Tax Withheld</StyledTH>
                        <StyledTH>Net Earnings</StyledTH>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <StyledTD color="text3">03/05/2018</StyledTD>
                        <StyledTD fontWeight="500">1,050</StyledTD>
                        <StyledTD color="teal">+ $32,580.00</StyledTD>
                        <StyledTD color="pink">- $3,023.10</StyledTD>
                        <StyledTD fontWeight="500">
                            $28,670.90{" "}
                            <StyledTDRate color="success">
                                <i className="fa fa-arrow-up" /> 4.5%
                            </StyledTDRate>
                        </StyledTD>
                    </tr>
                    <tr>
                        <StyledTD color="text3">03/04/2018</StyledTD>
                        <StyledTD fontWeight="500">980</StyledTD>
                        <StyledTD color="teal">+ $30,065.10</StyledTD>
                        <StyledTD color="pink">- $2,780.00</StyledTD>
                        <StyledTD fontWeight="500">
                            $26,930.40{" "}
                            <StyledTDRate color="danger">
                                <i className="fa fa-arrow-down" /> 0.8%
                            </StyledTDRate>
                        </StyledTD>
                    </tr>
                    <tr>
                        <StyledTD color="text3">03/04/2018</StyledTD>
                        <StyledTD fontWeight="500">980</StyledTD>
                        <StyledTD color="teal">+ $30,065.10</StyledTD>
                        <StyledTD color="pink">- $2,780.00</StyledTD>
                        <StyledTD fontWeight="500">
                            $26,930.40{" "}
                            <StyledTDRate color="danger">
                                <i className="fa fa-arrow-down" /> 0.8%
                            </StyledTDRate>
                        </StyledTD>
                    </tr>
                    <tr>
                        <StyledTD color="text3">03/04/2018</StyledTD>
                        <StyledTD fontWeight="500">980</StyledTD>
                        <StyledTD color="teal">+ $30,065.10</StyledTD>
                        <StyledTD color="pink">- $2,780.00</StyledTD>
                        <StyledTD fontWeight="500">
                            $26,930.40{" "}
                            <StyledTDRate color="danger">
                                <i className="fa fa-arrow-down" /> 0.8%
                            </StyledTDRate>
                        </StyledTD>
                    </tr>
                    <tr>
                        <StyledTD color="text3">03/04/2018</StyledTD>
                        <StyledTD fontWeight="500">980</StyledTD>
                        <StyledTD color="teal">+ $30,065.10</StyledTD>
                        <StyledTD color="pink">- $2,780.00</StyledTD>
                        <StyledTD fontWeight="500">
                            $26,930.40{" "}
                            <StyledTDRate color="danger">
                                <i className="fa fa-arrow-down" /> 0.8%
                            </StyledTDRate>
                        </StyledTD>
                    </tr>
                </tbody>
            </StyledTable>
        </Card>
    );
};

export default RecentEarnings;
