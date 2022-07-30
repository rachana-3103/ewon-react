import {
    Children,
    FC,
    ReactChild,
    ReactText,
    useState,
    useCallback,
    FunctionComponent,
} from "react";
import classnames from "classnames";
import { useClickOutside } from "@doar/shared/hooks";
import { StyledDropdown } from "./style";

type IChild = Exclude<ReactChild, ReactText>;

interface DropdownProps {
    /**
     * Required. Default is `down`.
     */
    direction: "up" | "down" | "left" | "right";
    className?: string;
}

const Dropdown: FC<DropdownProps> = ({
    children,
    direction,
    className,
    ...restProps
}) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((prev) => !prev);
    };
    const onClose = useCallback(() => {
        setShow(false);
    }, []);

    const containerRef = useClickOutside<HTMLDivElement>(onClose);

    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "DropdownToggle") {
                return <child.type {...child.props} onClick={handleClick} />;
            }
            if (name === "DropdownMenu") {
                return (
                    <child.type
                        {...child.props}
                        direction={direction}
                        show={show}
                    />
                );
            }
        }
        return null;
    });

    return (
        <StyledDropdown
            {...restProps}
            className={classnames(className, "dropdown")}
            ref={containerRef}
        >
            {RenderChild}
        </StyledDropdown>
    );
};

Dropdown.defaultProps = {
    direction: "down",
};

export default Dropdown;
