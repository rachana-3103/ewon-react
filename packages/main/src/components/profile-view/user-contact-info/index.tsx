import { FC } from "react";
import { Briefcase, Home, Smartphone, Phone, Mail } from "react-feather";
import WidgetTitle from "../widget-title";
import { StyledItem, StyledLink, StyledSpan } from "./style";

const UserContactInfo: FC = () => {
    return (
        <>
            <WidgetTitle>Contact Information</WidgetTitle>
            <ul>
                <StyledItem>
                    <Briefcase width={18} height={18} strokeWidth="2.3px" />
                    <StyledSpan>Bay Area, San Francisco, CA</StyledSpan>
                </StyledItem>
                <StyledItem>
                    <Home width={18} height={18} strokeWidth="2.3px" />
                    <StyledSpan>Westfield, Oakland, CA</StyledSpan>
                </StyledItem>
                <StyledItem>
                    <Smartphone width={18} height={18} strokeWidth="2.3px" />
                    <StyledLink path="#!">(+1) 012 345 6789</StyledLink>
                </StyledItem>
                <StyledItem>
                    <Phone width={18} height={18} strokeWidth="2.3px" />
                    <StyledLink path="#!">(+1) 987 654 3201</StyledLink>
                </StyledItem>
                <StyledItem>
                    <Mail width={18} height={18} strokeWidth="2.3px" />
                    <StyledLink path="#!">me@fenchiumao.me</StyledLink>
                </StyledItem>
            </ul>
        </>
    );
};

export default UserContactInfo;
