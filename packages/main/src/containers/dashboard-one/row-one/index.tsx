import { FC } from "react";
import { Col } from "@doar/components";
import { conversions } from "@doar/shared/data/sales-monitoring";
import Conversion from "../../../components/sales-monitoring/conversion";

const RowOne: FC = () => {
    return (
        <>
            {conversions.map((data) => (
                <Col
                    sm={6}
                    lg={3}
                    mt={["10px", null, null, "0px"]}
                    key={data.id}
                >
                    <Conversion
                        title={data.title}
                        rate={data.rate}
                        change={data.change}
                        chart={data.chart}
                    />
                </Col>
            ))}
        </>
    );
};

export default RowOne;
