import { FC } from "react";
import { Col } from "@doar/components";
import WebsiteMetrics from "../../../components/dashboard-two/website-metrics";

const RowOne: FC = () => {
    return (
        <>
            <Col lg={8} xl={9}>
                <WebsiteMetrics />
            </Col>
        </>
    );
};

export default RowOne;
