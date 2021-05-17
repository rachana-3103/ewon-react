import { FC } from "react";
import { PlusCircle } from "react-feather";
import { Badge } from "@doar/components";
import Label from "../label";
import {
    StyledWrap,
    StyledHeader,
    StyledBtn,
    StyledNav,
    StyledLink,
} from "./style";

const SidebarChannels: FC = () => {
    return (
        <StyledWrap>
            <StyledHeader>
                <Label>All Channels</Label>
                <StyledBtn>
                    <PlusCircle size={14} />
                </StyledBtn>
            </StyledHeader>
            <StyledNav>
                <StyledLink path="#!"># general</StyledLink>
                <StyledLink path="#!"># engineering</StyledLink>
                <StyledLink path="#!" $active>
                    # products{" "}
                    <Badge color="danger" shape="circle" ml="auto">
                        2
                    </Badge>
                </StyledLink>
            </StyledNav>
        </StyledWrap>
    );
};

export default SidebarChannels;
