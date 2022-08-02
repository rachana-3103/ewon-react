import classnames from "classnames";
import { StyledBody } from "./style";
import { IBody } from "./types";

const ModalBody = ({ className, children, ...restProps }: IBody) => {
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
