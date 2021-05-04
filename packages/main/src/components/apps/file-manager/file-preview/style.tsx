import styled, {
    device,
    color as colorStyles,
    ColorProps,
} from "@doar/shared/styled";
import { Card, CardBody, CardFooter } from "@doar/components";

export const StyledCard = styled(({ ...rest }) => <Card {...rest} />)`
    padding: 10px;
    position: relative;
    border-color: rgba(72, 94, 144, 0.16);
    transition: all 0.2s ease-in-out;
    &:hover,
    &:focus {
        border-color: #c0ccda;
    }
    span {
        font-size: 12px;
        color: #8392a5;
    }
    p {
        margin-bottom: 0;
        color: #475362;
    }
`;

export const StyledThumb = styled(({ color, ...rest }) => (
    <div {...rest} />
))<ColorProps>`
    background-color: #f5f6fa;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    ${device.small} {
        height: 100px;
        font-size: 40px;
    }
    ${device.large} {
        height: 120px;
        font-size: 48px;
    }
    ${colorStyles};
`;

export const StyledBody = styled(({ ...rest }) => <CardBody {...rest} />)`
    padding: 15px 0 0;
`;

export const StyledFooter = styled(({ ...rest }) => <CardFooter {...rest} />)`
    font-size: 11px;
    color: #c0ccda;
    padding: 10px 0 0;
    border-top-width: 0;
    background-color: transparent;
`;

export const StyledMarker = styled.div`
    left: -1px;
    top: -1px;
    position: absolute;
    color: #fff;
    overflow: hidden;
    display: flex;
    width: 45px;
    height: 45px;
    svg {
        width: 16px;
        height: 16px;
        margin-top: calc(30% - 8px);
        margin-left: calc(30% - 8px);
        position: relative;
        z-index: 1;
    }
    &:before {
        content: "";
        position: absolute;
        top: -70%;
        left: -70%;
        width: 140%;
        height: 140%;
        background-color: #ffc107;
        transform: rotate(45deg);
    }
`;
