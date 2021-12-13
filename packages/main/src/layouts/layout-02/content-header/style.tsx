import styled, { device } from "@doar/shared/styled";

export const StyledHeader = styled.div`
    background-color: #fff;
    height: 55px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
    padding-left: 65px;
    ${device.large} {
        height: 60px;
        padding: 0 25px;
    }
    .nav {
        &-link {
            &:not(:first-of-type) {
                margin-left: 10px;
            }
            line-height: 1;
            padding: 0;
            color: rgba(27, 46, 75, 0.75);
            svg {
                width: 18px;
                height: 18px;
                ${device.large} {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
`;
