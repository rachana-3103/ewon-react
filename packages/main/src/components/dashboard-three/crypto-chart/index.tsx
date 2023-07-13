import {
  Card,
  CardBody,
  ApexAreaChart,
  CardFooter,
  DropdownToggle,
  DropdownMenu,
} from "@doar/components";
import NavLine from "./nav-line";
import {
  StyledHeader,
  StyledHeaderRight,
  StyledDropdown,
  StyledText,
  StyledChart,
} from "./style";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import moment from "moment";

const CryptoChart = () => {
  const [dynamicValue, setDynamicValue] = useState('30 minutes');
  const [isOpen, setIsOpen] = useState(false);
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Value",
        data: [],
      },
    ],
    options: {
      xaxis: {
        categories: [{}],
      },
    },
  });
  useEffect(() => {
    fetchData(dynamicValue);
  }, [dynamicValue]);

  const fetchData = async (value: string) => {
      try {
        console.log("🚀 ~ file: index.tsx:42 ~ fetchData ~ value:", value.split(" ")[0] ,"---------------", value.split(" ")[1])
      const response = await axios.get(
        `http://localhost:3001/api/syncdataGraph?${value.split(" ")[1]}=${value.split(" ")[0]}`
      );

      const CM160FIT0003_VAL_PV_dates = response.data.CM160FIT0003_VAL_PV.map(
        (item: { date: any }) =>
          moment(item.date).format("DD/MM/YYYY HH:mm:ss")
      );
      const CM160LIT0008_VAL_PV_dates = response.data.CM160LIT0008_VAL_PV.map(
        (item: { date: any }) =>
          moment(item.date).format("DD/MM/YYYY HH:mm:ss")
      );
      const CM160PIT0023_VAL_PV_dates = response.data.CM160PIT0023_VAL_PV.map(
          (item: { date: any }) =>
            moment(item.date).format("DD/MM/YYYY HH:mm:ss")
        );
      const CM160FIT0003_VAL_PV_values =
        response.data.CM160FIT0003_VAL_PV.map(
          (item: { value: any }) => item.value
        );
      const CM160LIT0008_VAL_PV_values =
        response.data.CM160LIT0008_VAL_PV.map(
          (item: { value: any }) => item.value
        );
        const CM160PIT0023_VAL_PV_values =
        response.data.CM160PIT0023_VAL_PV.map(
          (item: { value: any }) => item.value
        );
      console.log(
        "🚀 ~ file: index.tsx:40 ~ fetchData ~ values:",
        CM160FIT0003_VAL_PV_values
      );

      setChartData((prevData) => {
        return {
          ...prevData,
          series: [
            {
              name: "CM160FIT0003_VAL_PV",
              data: CM160FIT0003_VAL_PV_values,
              // color: 'red',
            },
            {
              name: "CM160LIT0008_VAL_PV",
              data: CM160LIT0008_VAL_PV_values,
              // color: 'green',
            },
            {
              name: "CM160PIT0023_VAL_PV",
              data: CM160PIT0023_VAL_PV_values,
              // color: 'blue',
            },
          ],
          options: {
            xaxis: {
                categories: [
                    ...CM160FIT0003_VAL_PV_dates,
                    ...CM160LIT0008_VAL_PV_dates,
                    ...CM160PIT0023_VAL_PV_dates,
                  ],
            },
          },
        };
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = () => {
    setIsOpen(false);
  };
  return (
    <Card>
      <StyledHeader>
        <NavLine />
        <StyledHeaderRight>
          <StyledDropdown>
            <DropdownToggle variant="texted" onClick={() => setDynamicValue('1 minutes')}>
              1 Minute <i className="fa fa-chevron-down" />
            </DropdownToggle>
            <DropdownMenu>
              <button type="button" className="item" onClick={() => {setDynamicValue('1 minutes');{handleToggle}}}>2 Minutes</button>
              <button type="button" className="item" onClick={() => {setDynamicValue('3 minutes');{handleItemClick}}}>3 Minutes</button>
              <button type="button" className="item" onClick={() => setDynamicValue('5 minutes')}>5 Minutes</button>
              <button type="button" className="item" onClick={() => setDynamicValue('10 minutes')}>
                10 Minutes
              </button>
              <button type="button" className="item" onClick={() => setDynamicValue('15 minutes')}>
                15 Minutes
              </button>
              <button type="button" className="item" onClick={() => setDynamicValue('30 minutes')}>
                30 Minutes
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('1 hour')}>
                1 Hour
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('2 hour')}>
                2 Hours
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('3 hour')}>
                3 Hours
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('4 hour')}>
                4 Hours
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('6 hour')}>
                6 Hours
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('8 hour')}>
                8 Hours
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('12 hour')}>
                12 Hours
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('1 day')}>
                1 Day
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('2 days')}>
                2 Days
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('3 days')}>
                3 Days
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('1 week')}>
                1 Week
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('2 week')}>
                2 Weeks
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('5 week')}>
                5 Weeks
              </button><br></br>
              <button type="button" className="item" onClick={() => setDynamicValue('13 week')}>
                13 Weeks
              </button>
            </DropdownMenu>
          </StyledDropdown>
          {/* <StyledText>To</StyledText> */}
          {/* <StyledDropdown>
            <DropdownToggle variant="texted">
              03/01/2019
              <i className="fa fa-chevron-down" />
            </DropdownToggle>
            <DropdownMenu>
              <button type="button" className="item">
                04/01/2019
              </button>
              <button type="button" className="item">
                05/01/2019
              </button>
              <button type="button" className="item">
                06/01/2019
              </button>
              <button type="button" className="item">
                07/01/2019
              </button>
              <button type="button" className="item">
                08/01/2019
              </button>
            </DropdownMenu>
          </StyledDropdown> */}
        </StyledHeaderRight>
      </StyledHeader>
      <CardBody p={["10px", "20px"]}>
        <StyledChart>
          <ApexAreaChart
            options={chartData.options}
            series={chartData.series}
            width="100%"
            height="100%"
          />
        </StyledChart>
      </CardBody>
      <CardFooter p="20px">
        {/* <Row gutters={20}>
                    <Col col={6} sm={4} md>
                        <StyledFooterTitle>Market Cap</StyledFooterTitle>
                        <StyledFooterSub>$14.5B</StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md>
                        <StyledFooterTitle>Volume (24h)</StyledFooterTitle>
                        <StyledFooterSub>$4.6B</StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md mt={["20px", 0]}>
                        <StyledFooterTitle>Change</StyledFooterTitle>
                        <StyledFooterSub>
                            -$7.98 <i className="danger fa fa-arrow-down" />
                        </StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md mt={["20px", null, 0]}>
                        <StyledFooterTitle>
                            Circulating Supply
                        </StyledFooterTitle>
                        <StyledFooterSub>17.59M</StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md mt={["20px", null, 0]}>
                        <StyledFooterTitle>All Time High</StyledFooterTitle>
                        <StyledFooterSub>$18.4K</StyledFooterSub>
                    </Col>
                </Row> */}
      </CardFooter>
    </Card>
  );
};

export default CryptoChart;
