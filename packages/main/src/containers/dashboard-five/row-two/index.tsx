import { FC } from "react";
import { Row, Col } from "@doar/components";
import RevenueGrowth from "../../../components/dashboard-five/revenue-growth";
import MarketTrends from "../../../components/dashboard-five/market-trends";

const RowTwo: FC = () => {
    return (
        <Row mb={20} gutters={10}>
            <Col lg={8}>
                <RevenueGrowth />
            </Col>
            <Col lg={4}>
                <MarketTrends />
            </Col>
        </Row>
    );
};

export default RowTwo;
