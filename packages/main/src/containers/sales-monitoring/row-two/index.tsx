import { FC } from "react";
import { Row, Col } from "@doar/components";
import RevenueGrowth from "../../../components/sales-monitoring/revenue-growth";
import AccountRetention from "../../../components/sales-monitoring/account-retention";

const RowTwo: FC = () => {
    return (
        <Row gutters={10}>
            <Col lg={8} xl={7} mt="10px">
                <RevenueGrowth />
            </Col>
            <Col lg={4} xl={5} mt="10px">
                <AccountRetention />
            </Col>
        </Row>
    );
};

export default RowTwo;
