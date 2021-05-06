import { FC } from "react";
import { Button } from "@doar/components";
import { StyledWrap } from "./style";

const ComposeBtn: FC = () => {
    return (
        <StyledWrap>
            <Button fullwidth>Compose</Button>
        </StyledWrap>
    );
};

export default ComposeBtn;
