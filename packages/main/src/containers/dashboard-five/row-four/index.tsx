import { FC } from "react";
import { Row, Col } from "@doar/components";
import SalesRevenue from "../../../components/dashboard-five/sales-revenue";
import RecentOrders from "../../../components/dashboard-five/recent-orders";

const RowFour: FC = () => {
    return (
        <Row mb={20} gutters={10}>
            <Col lg={7}>
                <RecentOrders />
            </Col>
            <Col lg={5}>
                <SalesRevenue />
            </Col>
        </Row>
    );
};

export default RowFour;
