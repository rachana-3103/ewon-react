import { FC } from "react";
import classnames from "classnames";
import { StyledFooter } from "./style";
import { IProps } from "./types";

const ModalFooter: FC<IProps> = ({ className, children, ...restProps }) => {
    return (
        <StyledFooter
            className={classnames(className, "modal-body")}
            {...restProps}
        >
            {children}
        </StyledFooter>
    );
};

export default ModalFooter;
