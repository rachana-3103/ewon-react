import { FC } from "react";
import { Globe, GitHub, Twitter, Instagram, Facebook } from "react-feather";
import WidgetTitle from "../widget-title";
import { StyledItem, StyledLink } from "./style";

const UserWebsites: FC = () => {
    return (
        <>
            <WidgetTitle>Websites &amp; Social Channel</WidgetTitle>
            <ul>
                <StyledItem>
                    <Globe width={18} height={18} strokeWidth="2.3px" />
                    <StyledLink path="#!">http://fenchiumao.me/</StyledLink>
                </StyledItem>
                <StyledItem>
                    <GitHub width={18} height={18} strokeWidth="2.3px" />
                    <StyledLink path="#!">@fenchiumao</StyledLink>
                </StyledItem>
                <StyledItem>
                    <Twitter width={18} height={18} strokeWidth="2.3px" />
                    <StyledLink path="#!">@fenmao</StyledLink>
                </StyledItem>
                <StyledItem>
                    <Instagram width={18} height={18} strokeWidth="2.3px" />
                    <StyledLink path="#!">@fenchiumao</StyledLink>
                </StyledItem>
                <StyledItem>
                    <Facebook width={18} height={18} strokeWidth="2.3px" />
                    <StyledLink path="#!">@fenchiumao</StyledLink>
                </StyledItem>
            </ul>
        </>
    );
};

export default UserWebsites;
