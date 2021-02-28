import React from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </>
    );
};

export default Layout;
