/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    SectionTitle,
} from "@doar/components";
import { Watchlists } from "@doar/shared/data/dashboard-three";
import Watchlist from "../../../components/dashboard-three/watchlist";

interface IBorderProps {
    borderLeft: any[];
    borderColor: any[];
    borderTop: any[];
}

const RowThree: FC = () => {
    let borderProps: IBorderProps;

    return (
        <Col col={12} mt="10px">
            <Card>
                <CardHeader>
                    <SectionTitle title="Cryptocurrency Watchlist" />
                </CardHeader>
                <CardBody p={["0px", "0px"]}>
                    <Row noGutter>
                        {Watchlists &&
                            Watchlists.map((item, i) => {
                                if (i !== 0) {
                                    if (i % 2 === 0) {
                                        borderProps = {
                                            borderLeft: [null, `1px solid`],
                                            borderColor: ["border", "gray300"],
                                            borderTop: ["1px solid", "0px"],
                                        };
                                    } else {
                                        borderProps = {
                                            borderLeft: [
                                                null,
                                                null,
                                                null,
                                                `1px solid`,
                                            ],
                                            borderColor: [
                                                "border",
                                                null,
                                                null,
                                                "gray300",
                                            ],
                                            borderTop: [
                                                "1px solid",
                                                null,
                                                null,
                                                "0px",
                                            ],
                                        };
                                    }
                                }
                                return (
                                    <Col
                                        key={item.id}
                                        col
                                        sm={6}
                                        lg
                                        {...borderProps}
                                    >
                                        <Watchlist
                                            icon={item.icon}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            coin={item.coin}
                                            coinRate={item.coinRate}
                                            coinStatus={item.coinStatus}
                                            color={item.color}
                                            markets={item.markets}
                                            chart={item.chart}
                                        />
                                    </Col>
                                );
                            })}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
};

export default RowThree;
