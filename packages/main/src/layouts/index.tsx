import React from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";

interface IProps {
    className?: string;
}

const Layout: React.FC<IProps> = ({ children, className }) => {
    return (
        <>
            <Header />
            <Content className={className}>{children}</Content>
            <Footer />
        </>
    );
};

export default Layout;
