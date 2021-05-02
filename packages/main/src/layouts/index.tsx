import React from "react";
import Header from "./header";
import Footer from "./footer";

interface IProps {
    hasSidebar?: boolean;
    sidebar?: "calendar";
}

const Layout: React.FC<IProps> = ({ children, hasSidebar, sidebar }) => {
    return (
        <>
            <Header hasSidebar={hasSidebar} sidebar={sidebar} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
