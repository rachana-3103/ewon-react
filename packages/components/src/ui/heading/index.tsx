import { FC, ElementType } from "react";
import { SpaceProps, ColorProps, TypographyProps } from "@doar/shared/styled";
import { StyledHeading } from "./style";

interface IProps extends SpaceProps, ColorProps, TypographyProps {
    as?: ElementType;
    className?: string;
}

const Heading: FC<IProps> = ({ as, className, children, ...restProps }) => {
    return (
        <StyledHeading as={as} className={className} {...restProps}>
            {children}
        </StyledHeading>
    );
};

export default Heading;
