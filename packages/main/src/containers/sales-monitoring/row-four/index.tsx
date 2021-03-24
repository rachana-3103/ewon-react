import { FC } from "react";
import { Row, Col } from "@doar/components";
import Transaction from "../../../components/sales-monitoring/transaction";
import Customers from "../../../components/sales-monitoring/customers";
import RealTimeSales from "../../../components/sales-monitoring/real-time-sales";

const RowFour: FC = () => {
    return (
        <Row gutters={10}>
            <Col md={6} xl={4} mt="10px">
                <Transaction />
            </Col>
            <Col md={6} xl={4} mt="10px">
                <Customers />
            </Col>
            <Col md={6} xl={4} mt="10px">
                <RealTimeSales />
            </Col>
        </Row>
    );
};

export default RowFour;
