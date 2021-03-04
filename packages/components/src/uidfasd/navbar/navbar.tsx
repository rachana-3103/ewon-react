import React from "react";
import { IMenu } from "@doar/shared/types";
import { getSiblings } from "@doar/shared/methods";
import {
    StyledNavbar,
    StyledNavitem,
    StyledNavlink,
    StyledSubmenu,
    StyledSubNavItem,
    StyledSubNavlink,
    StyledMegaMenu,
    StyledMegaMenuInner,
    StyledMegamenuList,
    StyledMegamenuLabel,
} from "./style";

interface IProps {
    menus: IMenu[];
}

export const Navbar: React.FC<IProps> = ({ menus }) => {
    const clickHandler = (e: React.MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const submenu = target.querySelector(".submenu");
        const siblings = getSiblings(target);
        submenu?.classList.toggle("open");
        siblings.forEach((sib) => {
            sib.childNodes.forEach((child) => {
                const childHT = child as HTMLElement;
                childHT?.classList?.remove("open");
            });
        });
    };
    return (
        <StyledNavbar>
            {menus &&
                menus.map((nav: IMenu) => {
                    const hasSubmenu = !!nav.submenu?.length;
                    const hasMegamenu = !!nav.megamenu?.length;
                    const { submenu, megamenu } = nav;
                    return (
                        <StyledNavitem
                            $hasSubmenu={hasSubmenu || hasMegamenu}
                            key={nav.id}
                            onClick={
                                hasSubmenu || hasMegamenu
                                    ? clickHandler
                                    : () => {}
                            }
                        >
                            <StyledNavlink path={nav.url}>
                                {nav.label}
                            </StyledNavlink>
                            {hasSubmenu && (
                                <StyledSubmenu className="submenu">
                                    {submenu?.map(
                                        ({ id, label, url, Icon }) => (
                                            <StyledSubNavItem key={id}>
                                                <StyledSubNavlink path={url}>
                                                    {Icon && <Icon />}
                                                    {label}
                                                </StyledSubNavlink>
                                            </StyledSubNavItem>
                                        )
                                    )}
                                </StyledSubmenu>
                            )}
                            {hasMegamenu && (
                                <StyledMegaMenu className="submenu">
                                    <StyledMegaMenuInner>
                                        {megamenu?.map((megaNav) => (
                                            <StyledMegamenuList
                                                key={megaNav.id}
                                            >
                                                {megaNav?.title && (
                                                    <StyledMegamenuLabel>
                                                        {megaNav?.title}
                                                    </StyledMegamenuLabel>
                                                )}
                                                {megaNav?.submenu?.map(
                                                    ({
                                                        id,
                                                        label,
                                                        url,
                                                        Icon,
                                                    }) => (
                                                        <StyledSubNavItem
                                                            key={id}
                                                        >
                                                            <StyledSubNavlink
                                                                path={url}
                                                            >
                                                                {Icon && (
                                                                    <Icon />
                                                                )}
                                                                {label}
                                                            </StyledSubNavlink>
                                                        </StyledSubNavItem>
                                                    )
                                                )}
                                            </StyledMegamenuList>
                                        ))}
                                    </StyledMegaMenuInner>
                                </StyledMegaMenu>
                            )}
                        </StyledNavitem>
                    );
                })}
        </StyledNavbar>
    );
};

Navbar.defaultProps = {
    menus: [],
};
