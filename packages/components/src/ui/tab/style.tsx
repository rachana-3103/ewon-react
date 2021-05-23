import styled, { css } from "@doar/shared/styled";
import { Tabs } from "react-tabs";

interface ITab {
    $justified?: boolean;
    $vertical?: boolean;
    $variation?: "line";
}

export const StyledTabs = styled(({ ...rest }) => <Tabs {...rest} />)<ITab>`
    ${({ $vertical }) =>
        $vertical === true &&
        css`
            display: flex;
            align-items: flex-start;
        `}
    .react-tabs {
        &__tab-list {
            display: flex;
            flex-wrap: wrap;
            border-color: rgba(72, 94, 144, 0.16);
            ${({ $vertical }) =>
                $vertical === true &&
                css`
                    border-bottom: 0;
                    border-right: 0;
                    justify-content: flex-start;
                    flex-direction: column;
                    width: 150px;
                `}
            ${({ $variation }) =>
                $variation === "line" &&
                css`
                    border-bottom: 2px solid rgba(72, 94, 144, 0.16);
                `}
        }
        &__tab {
            margin-bottom: 0;
            background-color: rgba(72, 94, 144, 0.16);
            border-color: rgba(72, 94, 144, 0.16);
            color: #596882;
            border-bottom-width: 0;
            position: relative;
            margin-bottom: -1px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 38px;
            transition: background-color 0.2s;
            border: 1px solid transparent;
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
            cursor: pointer;
            &:not(:first-of-type) {
                margin-left: 5px;
            }
            &--selected {
                background-color: #fff;
                z-index: 5;
                color: #0168fa;
                border-color: #cdd4e0 #cdd4e0 #fff;
            }
            &--disabled {
                background-color: transparent;
                color: #b4bdce;
                border-color: transparent;
                pointer-events: none;
                cursor: default;
            }
            ${({ $justified }) =>
                $justified === true &&
                css`
                    flex-basis: 0;
                    flex-grow: 1;
                    text-align: center;
                `}
            ${({ $vertical }) =>
                $vertical === true &&
                css`
                    border-color: rgba(72, 94, 144, 0.16);
                    border-right-width: 0;
                    margin-bottom: 0;
                    margin-right: -1px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                    &:not(:first-of-type) {
                        margin-left: 0;
                        margin-top: 5px;
                    }
                    &--selected {
                        border-color: rgba(72, 94, 144, 0.16);
                    }
                `}
			${({ $variation }) =>
                $variation === "line" &&
                css`
                    padding: 8px 0;
                    background-color: transparent;
                    border: none;
                    &:not(:first-of-type) {
                        margin-left: 25px;
                    }
                    &--selected {
                        border: none;
                        &:after {
                            content: "";
                            position: absolute;
                            bottom: -1px;
                            left: 0;
                            right: 0;
                            height: 2px;
                            background-color: #0168fa;
                        }
                    }
                `}
        }
        &__tab-panel {
            transition: all 0.15s linear;
            display: none;
            height: 0;
            max-width: 100%;
            visibility: hidden;
            overflow: hidden;
            opacity: 0;
            &--selected {
                display: block;
                height: auto;
                visibility: visible;
                opacity: 1;
                overflow: visible;
            }
        }
        &__content {
            ${({ $vertical }) =>
                $vertical === true &&
                css`
                    flex: 1;
                `}
            ${({ $variation }) =>
                $variation === "line" &&
                css`
                    border: none;
                    padding: 0;
                    margin-top: 20px;
                `}
        }
    }
`;

export const StyledTabContent = styled.div`
    padding: 20px;
    border-top: 0;
    border: 1px solid #cdd4e0;
`;
