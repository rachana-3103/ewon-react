import { StyledNavLine, StyledNavLink } from "./style";
import RowTwo from "src/containers/dashboard-three/row-two";

interface CustomProps {
    prop1: string;
  }
  
const NavLine = () => {
    const customProps: CustomProps = {
        prop1: 'Hour',
      };
    return (
        <StyledNavLine>
            {/* <StyledNavLink path="#!">Hour</StyledNavLink> */}
            {/* <StyledNavLink
            to="/classic-plus/dashboard-three"
            component={(props: CustomProps) => <RowTwo {...props} {...customProps} />}
          >Hour1</StyledNavLink> */}
            
            {/* <StyledNavLink 
            to="/classic-plus/dashboard-three"
            render={(props: NavLinkProps) => <CryptoChart {...props} />}>Hour1</StyledNavLink> */}
            {/* <StyledNavLink path="#!" active>
                Day
            </StyledNavLink>
            <StyledNavLink path="#!">Week</StyledNavLink>
            <StyledNavLink path="#!">Month</StyledNavLink>
            <StyledNavLink path="#!">Year</StyledNavLink>
            <StyledNavLink path="#!">All</StyledNavLink> */}
        </StyledNavLine>
    );
};

export default NavLine;
