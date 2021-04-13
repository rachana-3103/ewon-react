import React from "react";
import { SpaceProps } from "@doar/shared/styled";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";

interface IProps extends SpaceProps {
    className?: string;
    fullHeight?: boolean;
    align?: "top" | "center" | "bootom";
}

const Layout: React.FC<IProps> = ({
    children,
    className,
    fullHeight,
    align,
    ...restProps
}) => {
    return (
        <>
            <Header />
            <Content
                fullHeight={fullHeight}
                align={align}
                className={className}
                {...restProps}
            >
                {children}
            </Content>
            <Footer />
        </>
    );
};

export default Layout;
