import styled, {
    space,
    css,
    device,
    SpaceProps,
    border,
    BorderProps,
} from "@doar/shared/styled";
import { Container, Row, Col } from "styled-bootstrap-grid";

type IProps = SpaceProps;

export const StyledContainer = styled(
    ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }) => (
        <Container {...props} />
    )
)<IProps>`
    ${space};
`;

export const StyledRow = styled(
    ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }) => <Row {...props} />
)<IProps>`
    ${space};
    ${({ $gutters }) =>
        !!$gutters &&
        css`
            margin-left: -${$gutters / 2}px;
            margin-right: -${$gutters / 2}px;
            & > div {
                padding-left: ${$gutters / 2}px;
                padding-right: ${$gutters / 2}px;
            }
        `}
    ${({ $noGutter }) =>
        $noGutter === true &&
        css`
            margin-left: 0px;
            margin-right: 0px;
            & > div {
                padding-left: 0px;
                padding-right: 0px;
            }
        `}
`;

interface ICol extends IProps, BorderProps {}

export const StyledCol = styled(
    ({ p, pl, pr, pt, pb, m, ml, mr, mt, mb, ...props }) => <Col {...props} />
)<ICol>`
    ${device.medium} {
        &.order-md-0 {
            order: 0;
        }
    }
    ${device.large} {
        &.order-lg-0 {
            order: 0;
        }
    }
    ${device.xlarge} {
        &.order-xl-0 {
            order: 0;
        }
    }
    ${space};
    ${border};
`;
