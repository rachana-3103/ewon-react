import { FC } from "react";
import classnames from "classnames";
import { StyledBody } from "./style";
import { IBody } from "./types";

const ModalBody: FC<IBody> = ({ className, children, ...restProps }) => {
    return (
        <StyledBody
            className={classnames(className, "modal-body")}
            {...restProps}
        >
            {children}
        </StyledBody>
    );
};
export default ModalBody;
