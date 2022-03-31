import { FC } from "react";
import { Row, Col } from "@doar/components";
import BestSellingProducts from "../../../components/dashboard-five/best-selling-products";
import TopSellers from "../../../components/dashboard-five/top-sellers";

const RowThree: FC = () => {
    return (
        <Row mb={20} gutters={10}>
            <Col lg={6}>
                <BestSellingProducts />
            </Col>
            <Col lg={6}>
                <TopSellers />
            </Col>
        </Row>
    );
};

export default RowThree;
