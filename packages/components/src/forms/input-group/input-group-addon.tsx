import { FC } from "react";
import classname from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledInputGroupWrap } from "./style";

interface IProps extends SpaceProps {
    className?: string;
}

interface IWrap extends IProps {
    dir?: "append" | "prepend";
}

const InputGroupAddon: FC<IWrap> = ({
    children,
    dir = "append",
    className,
    ...rest
}) => {
    return (
        <StyledInputGroupWrap
            className={classname(className, `input-group-${dir}`)}
            $dir={dir}
            {...rest}
        >
            {children}
        </StyledInputGroupWrap>
    );
};

export default InputGroupAddon;
