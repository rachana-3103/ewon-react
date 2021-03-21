import { FC } from "react";
import { SpaceProps, PositionProps } from "@doar/shared/styled";
import {
    StyledCard,
    StyledCardImage,
    StyledCardBody,
    StyledCardHeading,
    StyledCardText,
    StyledCardSubtitle,
    StyledCardLink,
    StyledCardHeader,
    StyledCardFooter,
    StyledCardImgOverlay,
    StyledCardGroup,
    StyledCardDeck,
    StyledCardColumns,
} from "./style";

interface ICardCommonProps {
    className?: string;
}

interface ICardProps {
    className?: string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
}

export const Card: FC<ICardProps> = ({
    children,
    className,
    color,
    ...restProps
}) => {
    const classes = className ? `card ${className}` : "card";
    return (
        <StyledCard className={classes} {...restProps} $color={color}>
            {children}
        </StyledCard>
    );
};

interface ICardImageProps {
    src: string;
    alt?: string;
    className?: string;
    isTop?: boolean;
    isBottom?: boolean;
}

export const CardImage: FC<ICardImageProps> = ({
    src,
    alt,
    className,
    isTop,
    isBottom,
    ...restProps
}) => {
    const topClass = isTop ? "card-img-top" : "";
    const bottomClass = isBottom ? "card-img-bottom" : "";
    const classes = className
        ? `card-image ${className} ${topClass} ${bottomClass}`
        : `card-image ${topClass} ${bottomClass}`;
    return (
        <StyledCardImage
            src={src}
            alt={alt}
            className={classes}
            $isTop={isTop}
            $isBottom={isBottom}
            {...restProps}
        />
    );
};

interface ICardBodyProps extends ICardCommonProps, SpaceProps, PositionProps {}

export const CardBody: FC<ICardBodyProps> = ({
    children,
    className,
    ...restProps
}) => {
    const classes = className ? `card-body ${className}` : "card-body";
    return (
        <StyledCardBody className={classes} {...restProps}>
            {children}
        </StyledCardBody>
    );
};

interface ICardTitleProps {
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle: FC<ICardTitleProps> = ({
    children,
    className,
    as,
    ...restProps
}) => {
    const classes = className ? `card-title ${className}` : "card-title";
    return (
        <StyledCardHeading as={as} className={classes} {...restProps}>
            {children}
        </StyledCardHeading>
    );
};

export const CardText: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    const classes = className ? `card-text ${className}` : "card-text";
    return (
        <StyledCardText className={classes} {...restProps}>
            {children}
        </StyledCardText>
    );
};

export const CardSubtitle: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    const classes = className ? `card-subtitle ${className}` : "card-subtitle";
    return (
        <StyledCardSubtitle className={classes} {...restProps}>
            {children}
        </StyledCardSubtitle>
    );
};

interface ICardLinkProps {
    className?: string;
    path: string;
}

export const CardLink: FC<ICardLinkProps> = ({
    children,
    className,
    path,
    ...restProps
}) => {
    const classes = className ? `card-link ${className}` : "card-link";
    return (
        <StyledCardLink path={path} className={classes} {...restProps}>
            {children}
        </StyledCardLink>
    );
};

export const CardHeader: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    const classes = className ? `card-header ${className}` : "card-header";
    return (
        <StyledCardHeader className={classes} {...restProps}>
            {children}
        </StyledCardHeader>
    );
};

export const CardFooter: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    const classes = className ? `card-footer ${className}` : "card-footer";
    return (
        <StyledCardFooter className={classes} {...restProps}>
            {children}
        </StyledCardFooter>
    );
};

export const CardImageOverlay: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    const classes = className
        ? `card-img-overlay ${className}`
        : "card-img-overlay";
    return (
        <StyledCardImgOverlay className={classes} {...restProps}>
            {children}
        </StyledCardImgOverlay>
    );
};

export const CardGroup: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    const classes = className ? `card-group ${className}` : "card-group";
    return (
        <StyledCardGroup className={classes} {...restProps}>
            {children}
        </StyledCardGroup>
    );
};

export const CardDeck: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    const classes = className ? `card-deck ${className}` : "card-deck";
    return (
        <StyledCardDeck className={classes} {...restProps}>
            {children}
        </StyledCardDeck>
    );
};

export const CardColumns: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    const classes = className ? `card-columns ${className}` : "card-columns";
    return (
        <StyledCardColumns className={classes} {...restProps}>
            {children}
        </StyledCardColumns>
    );
};
