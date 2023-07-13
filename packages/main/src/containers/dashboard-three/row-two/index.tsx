import { Col } from "@doar/components";
import CryptoChart from "../../../components/dashboard-three/crypto-chart";
import Cryptcurrencies from "../../../components/dashboard-three/cryptocurrencies";

const RowTwo = () => {
    console.log("🚀 ~ file: index.tsx:1077777777777777 ~ props:")
    return (
        <>
            <Col lg={9} mt="10px">
                <CryptoChart />
            </Col>
            <Col lg={3} mt="10px">
                <Cryptcurrencies />
            </Col>
        </>
    );
};

export default RowTwo;
