import {
    SpaceProps,
    PositionProps,
    LayoutProps,
    TypographyProps,
    BorderProps,
    ColorProps,
} from "@doar/shared/styled";

export interface ICardCommonProps {
    className?: string;
}

export interface ICardProps extends LayoutProps, SpaceProps {
    className?: string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
}

export interface ICardImageProps {
    src: string;
    alt?: string;
    className?: string;
    isTop?: boolean;
    isBottom?: boolean;
}

export interface ICardTitleProps {
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface ICardBodyProps
    extends ICardCommonProps,
        SpaceProps,
        PositionProps,
        TypographyProps {}

export interface ICardHeaderProps
    extends ICardCommonProps,
        SpaceProps,
        ColorProps,
        TypographyProps {
    variant?: "flexbcenter";
}

export interface ICardFooterProps
    extends ICardCommonProps,
        SpaceProps,
        BorderProps {}

export interface ICardLinkProps {
    className?: string;
    path: string;
}