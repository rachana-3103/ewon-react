import { FC } from "react";
import classNames from "classnames";
import { SpaceProps, BorderProps } from "@doar/shared/styled";
import { StyledContainer, StyledRow, StyledCol } from "./style";
import { ColProps, RowProps } from "./types";

interface IProps extends SpaceProps {
    className?: string;
}

export const Container: FC<IProps> = ({ className, ...props }) => {
    return <StyledContainer className={className} {...props} />;
};

interface IRowProps extends IProps, RowProps {
    gutters?: number;
    noGutter?: boolean;
}

export const Row: FC<IRowProps> = ({
    className,
    gutters,
    noGutter,
    ...props
}) => {
    return (
        <StyledRow
            $gutters={gutters}
            $noGutter={noGutter}
            className={className}
            {...props}
        />
    );
};

interface IColProps extends IProps, ColProps, BorderProps {}

export const Col: FC<IColProps> = ({ className, ...props }) => {
    const { smOrder, xlOrder, mdOrder, lgOrder, ...rest } = props;
    let restProps;
    let orderSm;
    let orderMd;
    let orderlg;
    let orderXl;
    if (smOrder === 0 || mdOrder === 0 || lgOrder === 0 || xlOrder === 0) {
        restProps = rest;
        orderSm = smOrder !== undefined ? `order-sm-${smOrder}` : "";
        orderMd = mdOrder !== undefined ? `order-md-${mdOrder}` : "";
        orderlg = lgOrder !== undefined ? `order-lg-${lgOrder}` : "";
        orderXl = xlOrder !== undefined ? `order-xl-${xlOrder}` : "";
    } else {
        restProps = props;
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
