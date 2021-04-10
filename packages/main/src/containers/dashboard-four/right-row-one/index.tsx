import { FC } from "react";
import { Col } from "@doar/components";

const RightRowOne: FC = () => {
    return (
        <>
            <Col col={12} md={6} lg={12}>
                df
            </Col>
            <Col col={12} md={6} lg={12} mt={["10px", null, 0, "10px"]}>
                df
            </Col>
        </>
    );
};

export default RightRowOne;
