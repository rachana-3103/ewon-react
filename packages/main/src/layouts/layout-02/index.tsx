import React from "react";
import Aisde from "./aside";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Aisde />
            {children}
        </>
    );
};

export default Layout;
