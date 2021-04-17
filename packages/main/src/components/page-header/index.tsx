import { FC } from "react";
import Breadcrumb from "../breadcrumb";
import SearchForm from "../search-form";
import { StyledWrap } from "./style";

const PageHeader: FC = () => {
    return (
        <StyledWrap>
            <div>
                <Breadcrumb
                    prev={{ text: "Your Profile", link: "/profile-view" }}
                    title="Connections"
                    wcText="Connections"
                />
            </div>
            <SearchForm />
        </StyledWrap>
    );
};

export default PageHeader;
