import { FC } from "react";
import { Portal } from "react-portal";
import classnames from "classnames";
import { CSSTransition } from "react-transition-group";
import { StyledBackdrop, StyledModal } from "./style";
import { IModal } from "./types";

const Modal: FC<IModal> = ({
    className,
    show,
    size,
    centered,
    children,
    onClose,
    ...restProps
}) => {
    return (
        <Portal>
            <>
                <StyledBackdrop $show={show} />
                <StyledModal
                    $show={show}
                    $size={size}
                    $centered={centered}
                    className={classnames(className)}
                    onClick={onClose}
                    {...restProps}
                >
                    <CSSTransition
                        in={show}
                        timeout={400}
                        unmountOnExit
                        classNames="modal"
                    >
                        {() => (
                            <div className="modal-dialog">
                                <div
                                    className="modal-content"
                                    onClick={(e) => e.stopPropagation()}
                                    role="button"
                                    tabIndex={0}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                    </CSSTransition>
                </StyledModal>
            </>
        </Portal>
    );
};

Modal.defaultProps = {
    size: "md",
    centered: true,
};

export default Modal;
