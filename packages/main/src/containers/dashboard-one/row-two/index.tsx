import { FC } from "react";
import { Col } from "@doar/components";
import RevenueGrowth from "../../../components/sales-monitoring/revenue-growth";
import AccountRetention from "../../../components/sales-monitoring/account-retention";

const RowTwo: FC = () => {
    return (
        <>
            <Col lg={8} xl={7} mt="10px">
                <RevenueGrowth />
            </Col>
            <Col lg={4} xl={5} mt="10px">
                <AccountRetention />
            </Col>
        </>
    );
};

export default RowTwo;
