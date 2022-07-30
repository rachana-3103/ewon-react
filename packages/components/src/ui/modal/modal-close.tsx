import { FC } from "react";
import classnames from "classnames";
import { StyledClose } from "./style";
import { IClose } from "./types";

const ModalClose: FC<IClose> = ({
    className,
    children,
    onClose,
    ...restProps
}) => {
    return (
        <StyledClose
            type="button"
            className={classnames(className, "close")}
            onClick={onClose}
            {...restProps}
            data-dismiss="modal"
            aria-label="Close"
        >
            <span aria-hidden="true">{children}</span>
        </StyledClose>
    );
};

ModalClose.displayName = "ModalClose";

export default ModalClose;
