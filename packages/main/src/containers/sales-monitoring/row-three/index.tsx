import { FC } from "react";
import { Row, Col } from "@doar/components";
import SalesRevenue from "../../../components/sales-monitoring/sales-revenue";

const RowThree: FC = () => {
    return (
        <Row gutters={10}>
            <Col xl={4} md={6} mt="10px">
                <SalesRevenue />
            </Col>
            <Col xl={8} lg={12} mt="10px">
                dfsad
            </Col>
        </Row>
    );
};

export default RowThree;
