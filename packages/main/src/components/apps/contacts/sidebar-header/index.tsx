import { FC } from "react";
import { Search, UserPlus } from "react-feather";
import { Button } from "@doar/components";
import SearchForm from "../search-form";
import { StyledHeader } from "./style";

const SidebarHeader: FC = () => {
    return (
        <StyledHeader>
            <Search className="search" />
            <SearchForm />
            <Button size="xs" iconButton>
                <UserPlus />
            </Button>
        </StyledHeader>
    );
};

export default SidebarHeader;
