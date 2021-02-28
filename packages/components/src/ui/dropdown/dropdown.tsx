/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
    ReactChild,
    ReactText,
    useState,
    useCallback,
    useEffect,
    useRef,
} from "react";
import { useClickOutside } from "@doar/shared/hooks";
import { Button, ButtonProps } from "../button/button";
import { StyledDropMenu, StyledDropdown, StyledDropItem } from "./style";

type IChild = Exclude<ReactChild, ReactText>;

interface IBtnMeasure {
    clientWidth: number;
    clientHeight: number;
    clientLeft: number;
    clientTop: number;
    offsetWidth: number;
    offsetHeight: number;
    offsetLeft: number;
    offsetTop: number;
}

interface DropdownProps {
    /**
     * Required. Default is `down`.
     */
    direction: "up" | "down" | "left" | "right";
    className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
    children,
    direction,
    className,
    ...restProps
}) => {
    const [show, setShow] = useState(false);
    const [btnMeasure, setBtnMeasure] = useState<
        IBtnMeasure | Record<string, unknown>
    >({});
    const handleClick = () => {
        setShow((prev) => !prev);
    };
    const onClose = useCallback(() => {
        setShow(false);
    }, []);

    const containerRef = useClickOutside(onClose);
    const btnref: React.RefObject<HTMLButtonElement> = React.createRef();

    useEffect(() => {
        setBtnMeasure((prev) => {
            return {
                ...prev,
                clientWidth: btnref?.current?.clientWidth,
                clientHeight: btnref?.current?.clientHeight,
                clientLeft: btnref?.current?.clientLeft,
                clientTop: btnref?.current?.clientTop,
                offsetWidth: btnref?.current?.offsetWidth,
                offsetHeight: btnref?.current?.offsetHeight,
                offsetLeft: btnref?.current?.offsetLeft,
                offsetTop: btnref?.current?.offsetTop,
            };
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const RenderChild = React.Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as React.FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "DropdownToggle") {
                return (
                    <child.type
                        ref={btnref}
                        {...child.props}
                        onClick={handleClick}
                    />
                );
            }
            if (name === "DropdownMenu") {
                return (
                    <child.type
                        {...child.props}
                        btnMeasure={btnMeasure}
                        direction={direction}
                        show={show}
                    />
                );
            }
        }
        return null;
    });

    const classes = className ? `${className} dropdown` : "dropdown";

    return (
        <StyledDropdown {...restProps} className={classes} ref={containerRef}>
            {RenderChild}
        </StyledDropdown>
    );
};

Dropdown.defaultProps = {
    direction: "down",
};

export const DropdownToggle = React.forwardRef(
    (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
        const { children, ...restProps } = props;
        return (
            <Button ref={ref} {...restProps}>
                {children}
            </Button>
        );
    }
);

DropdownToggle.defaultProps = {
    label: "DropdownToggle",
};
DropdownToggle.displayName = "DropdownToggle";

interface IDropMenu {
    show?: boolean;
    btnMeasure?: IBtnMeasure;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

interface IMenuMeasure {
    clientWidth: number;
    clientHeight: number;
    clientLeft: number;
    clientTop: number;
    offsetWidth: number;
    offsetHeight: number;
    offsetLeft: number;
    offsetTop: number;
}

export const DropdownMenu: React.FC<IDropMenu> = ({
    children,
    show,
    btnMeasure,
    direction,
    className,
    ...restProps
}) => {
    const [menuMeasure, setMenuMeasure] = useState<IMenuMeasure>({
        clientWidth: 0,
        clientHeight: 0,
        clientLeft: 0,
        clientTop: 0,
        offsetWidth: 0,
        offsetHeight: 0,
        offsetLeft: 0,
        offsetTop: 0,
    });
    const menuRef: React.Ref<HTMLDivElement> = useRef(null);

    useEffect(() => {
        setMenuMeasure((prev) => {
            return {
                ...prev,
                clientWidth: menuRef?.current?.clientWidth || 0,
                clientHeight: menuRef?.current?.clientHeight || 0,
                clientLeft: menuRef?.current?.clientLeft || 0,
                clientTop: menuRef?.current?.clientTop || 0,
                offsetWidth: menuRef?.current?.offsetWidth || 0,
                offsetHeight: menuRef?.current?.offsetHeight || 0,
                offsetLeft: menuRef?.current?.offsetLeft || 0,
                offsetTop: menuRef?.current?.offsetTop || 0,
            };
        });
    }, [show]);
    const classes = className ? `${className} dropdown-menu` : "dropdown-menu";
    return (
        <StyledDropMenu
            $btnWidth={btnMeasure?.offsetWidth}
            $btnHeight={btnMeasure?.clientHeight}
            $menuWidth={menuMeasure.offsetWidth}
            $show={show}
            $direction={direction}
            ref={menuRef}
            className={classes}
            {...restProps}
        >
            {children}
        </StyledDropMenu>
    );
};

DropdownMenu.displayName = "DropdownMenu";

interface IDropItem {
    path: string;
    className?: string;
    active?: boolean;
}

export const DropdownItem: React.FC<IDropItem> = ({
    children,
    path,
    className,
    active,
}) => (
    <StyledDropItem active={active} path={path} className={className}>
        {children}
    </StyledDropItem>
);
