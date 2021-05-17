import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import { StyledLabel } from "./style";

type IProps = SpaceProps;

const Label: FC<IProps> = ({ children }) => {
    return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
