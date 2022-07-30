import { FC } from "react";
import classNames from "classnames";
import { SpaceProps, BorderProps, TypographyProps } from "@doar/shared/styled";
import { StyledCol } from "./style";
import { ColProps } from "./types";

interface IProps extends SpaceProps {
    className?: string;
}

interface IColProps extends IProps, ColProps, BorderProps, TypographyProps {}

const Col: FC<IColProps> = ({ className, ...props }) => {
    const { smOrder, mdOrder, lgOrder, xlOrder } = props;
    const restProps = props;
    let orderSm;
    let orderMd;
    let orderlg;
    let orderXl;

    if (smOrder === 0 || mdOrder === 0 || lgOrder === 0 || xlOrder === 0) {
        if (smOrder === 0) {
            orderSm = `order-sm-${smOrder}`;
            delete restProps.smOrder;
        }
        if (mdOrder === 0) {
            orderMd = `order-md-${mdOrder}`;
            delete restProps.mdOrder;
        }
        if (lgOrder === 0) {
            orderlg = `order-lg-${lgOrder}`;
            delete restProps.lgOrder;
        }
        if (xlOrder === 0) {
            orderXl = `order-xl-${xlOrder}`;
            delete restProps.xlOrder;
        }
    }

    return (
        <StyledCol
            className={classNames(
                className,
                orderSm,
                orderMd,
                orderlg,
                orderXl
            )}
            {...restProps}
        />
    );
};

export default Col;
