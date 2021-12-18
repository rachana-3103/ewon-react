import React from "react";
import Aisde from "./aside";

interface IProps {
    aside?: "minimize";
}

const Layout: React.FC<IProps> = ({ children, aside }) => {
    return (
        <>
            <Aisde layout={aside} />
            {children}
        </>
    );
};

export default Layout;
