import { FC } from "react";
import { Row, Col } from "@doar/components";
import { conversions } from "@doar/shared/data/sales-monitoring";
import Conversion from "../../../components/sales-monitoring/conversion";

const RowOne: FC = () => {
    return (
        <Row gutters={10}>
            {conversions.map((data) => (
                <Col sm={6} lg={3} mt={["10px", "0px"]} key={data.id}>
                    <Conversion
                        title={data.title}
                        rate={data.rate}
                        change={data.change}
                        chart={data.chart}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default RowOne;
