import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import { StyledContainer } from "./style";

interface IProps extends SpaceProps {
    className?: string;
}

const Container: FC<IProps> = ({ className, ...props }) => {
    return <StyledContainer className={className} {...props} />;
};

export default Container;
