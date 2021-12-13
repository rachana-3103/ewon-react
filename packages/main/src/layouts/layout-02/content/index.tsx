import React from "react";
import { StyledContent } from "./style";

const Content: React.FC = ({ children }) => {
    return <StyledContent className="content">{children}</StyledContent>;
};

export default Content;
