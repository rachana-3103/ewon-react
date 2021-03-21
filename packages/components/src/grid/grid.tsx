import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import { StyledContainer, StyledRow, StyledCol } from "./style";
import { ColProps } from "./types";

interface IProps extends SpaceProps {
    className?: string;
}

export const Container: FC<IProps> = ({ className, ...props }) => {
    return <StyledContainer className={className} {...props} />;
};

interface IRowProps extends IProps {
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

interface IColProps extends IProps, ColProps {}

export const Col: FC<IColProps> = ({ className, ...props }) => {
    return <StyledCol className={className} {...props} />;
};
