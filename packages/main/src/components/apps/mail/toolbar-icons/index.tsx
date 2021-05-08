import { FC, useState } from "react";
import {
    Archive,
    Slash,
    Mail,
    Folder,
    Tag,
    Star,
    Trash,
    Printer,
    MoreVertical,
} from "react-feather";
import NavIcon, { NavLink, NavDivider } from "../../../nav-icon";
import { StyledToolbar } from "./style";

const ToolbarIcons: FC = () => {
    const [show, setShow] = useState(false);
    const handleNav = () => {
        setShow((prev) => !prev);
    };
    return (
        <StyledToolbar $show={show}>
            <NavIcon>
                <NavLink path="#!">
                    <Archive />
                </NavLink>
                <NavLink path="#!">
                    <Slash />
                </NavLink>
                <NavLink path="#!">
                    <Mail />
                </NavLink>
                <NavLink path="#!">
                    <Folder />
                </NavLink>
                <NavLink path="#!">
                    <Tag />
                </NavLink>
                <NavDivider />
                <NavLink path="#!">
                    <Star />
                </NavLink>
                <NavLink path="#!">
                    <Trash />
                </NavLink>
                <NavLink path="#!">
                    <Printer />
                </NavLink>
            </NavIcon>
            <button type="button" className="option-btn" onClick={handleNav}>
                <MoreVertical />
            </button>
        </StyledToolbar>
    );
};

export default ToolbarIcons;
