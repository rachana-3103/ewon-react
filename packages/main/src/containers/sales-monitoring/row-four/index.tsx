import { FC } from "react";
import { Col } from "@doar/components";
import Transaction from "../../../components/sales-monitoring/transaction";
import Customers from "../../../components/sales-monitoring/customers";
import RealTimeSales from "../../../components/sales-monitoring/real-time-sales";

const RowFour: FC = () => {
    return (
        <>
            <Col md={6} xl={4} mt="10px">
                <Transaction />
            </Col>
            <Col md={6} xl={4} mt="10px">
                <Customers />
            </Col>
            <Col md={6} xl={4} mt="10px">
                <RealTimeSales />
            </Col>
        </>
    );
};

export default RowFour;
