import { FC } from "react";
import { Spinner } from "@doar/components";
import { StyledLoader } from "./style";

const Preloader: FC = () => {
    return (
        <StyledLoader>
            <Spinner color="primary" />
        </StyledLoader>
    );
};

export default Preloader;
