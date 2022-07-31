import { FC } from "react";
import classname from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledInputGroupText } from "./style";

interface IProps extends SpaceProps {
    className?: string;
}

export const InputGroupText: FC<IProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <StyledInputGroupText
            className={classname(className, `input-group-text`)}
            {...rest}
        >
            {children}
        </StyledInputGroupText>
    );
};

export default InputGroupText;
