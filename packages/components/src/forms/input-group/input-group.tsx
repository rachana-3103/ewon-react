import { FC } from "react";
import classname from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledInputGroup } from "./style";

interface IProps extends SpaceProps {
    className?: string;
}

const InputGroup: FC<IProps> = ({ children, className, ...rest }) => {
    return (
        <StyledInputGroup
            className={classname(className, "input-group")}
            {...rest}
        >
            {children}
        </StyledInputGroup>
    );
};

export default InputGroup;
