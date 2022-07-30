import { FC } from "react";
import classnames from "classnames";
import { StyledTitle } from "./style";
import { IProps } from "./types";

const ModalTitle: FC<IProps> = ({ className, children, ...restProps }) => {
    return (
        <StyledTitle
            className={classnames(className, "modal-title")}
            {...restProps}
        >
            {children}
        </StyledTitle>
    );
};

export default ModalTitle;
