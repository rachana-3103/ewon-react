import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import { StyledRow } from "./style";
import { RowProps } from "./types";

interface IProps extends SpaceProps {
    className?: string;
}

interface IRowProps extends IProps, RowProps {
    gutters?: number;
    noGutter?: boolean;
}

const Row: FC<IRowProps> = ({ className, gutters, noGutter, ...props }) => {
    return (
        <StyledRow
            $gutters={gutters}
            $noGutter={noGutter}
            className={className}
            {...props}
        />
    );
};

export default Row;
