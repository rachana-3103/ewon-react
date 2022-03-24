import { FC } from "react";
import { Col } from "@doar/components";
import { conversions } from "@doar/shared/data/dashboard-five";
import Conversion from "../../../components/dashboard-five/conversion";

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
                        icon={data.icon}
                        color={data.color}
                    />
                </Col>
            ))}
        </>
    );
};

export default RowOne;
