import { FC } from "react";
import { Row, Col } from "@doar/components";
import Transaction from "../../../components/sales-monitoring/transaction";
import Customers from "../../../components/sales-monitoring/customers";

const RowFour: FC = () => {
    return (
        <Row>
            <Col md={6} xl={4} mt="10px">
                <Transaction />
            </Col>
            <Col md={6} xl={4} mt="10px">
                <Customers />
            </Col>
            <Col md={6} xl={4} mt="10px">
                {" "}
                dfads
            </Col>
        </Row>
    );
};

export default RowFour;
