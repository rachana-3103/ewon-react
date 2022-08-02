import classname from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledInputGroupText } from "./style";

interface IProps extends SpaceProps {
    className?: string;
    children: React.ReactNode;
}

export const InputGroupText = ({ children, className, ...rest }: IProps) => {
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
