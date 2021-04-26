import styled, { device, themeGet } from "@doar/shared/styled";

export const StyledMain = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.3s;
    ${device.large} {
        left: 280px;
    }
`;

export const StyledWrap = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.3s;
    ${device.large} {
        left: 280px;
    }
    .fc {
        height: 100%;
        .fc {
            &-toolbar {
                &.fc-header-toolbar {
                    height: 55px;
                    margin-bottom: 0 !important;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
                    padding: 0 15px;
                }
                button {
                    height: 32px;
                    background-color: #fff;
                    background-image: none;
                    border: 1px solid rgba(72, 94, 144, 0.16);
                    color: rgba(27, 46, 75, 0.7);
                    box-shadow: none;
                    padding: 0 15px;
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    text-transform: capitalize;
                    outline: none;
                    text-shadow: none;
                    border-radius: 0;
                    transition: all 0.2s ease-in-out;
                    &:hover,
                    &:focus {
                        border-color: #8392a5;
                        color: #1b2e4b;
                        position: relative;
                        z-index: 5;
                        background-color: #fff;
                    }
                    &:not(:disabled) {
                        &.fc-button-active {
                            background-color: #f5f6fa;
                            border-color: #c0ccda;
                            color: #1b2e4b;
                        }
                    }
                }
                .fc {
                    &-toolbar-chunk {
                        &:first-child {
                            display: flex;
                            align-items: center;
                        }
                        &:last-child {
                            display: none;
                            @media (min-width: 480px) {
                                display: block;
                            }

                            @media (max-width: 575px) {
                                button {
                                    text-indent: -9999px;
                                    width: 32px;
                                    height: 32px;
                                    position: relative;
                                    color: transparent;
                                    &:before {
                                        position: absolute;
                                        top: 6px;
                                        left: 10px;
                                        z-index: 100;
                                        display: inline-block;
                                        text-indent: 0;
                                        font-size: 12px;
                                        font-weight: 700;
                                        color: #1b2e4b;
                                    }
                                    &.fc-dayGridMonth-button {
                                        &:before {
                                            content: "M";
                                        }
                                    }
                                    &.fc-timeGridWeek-button {
                                        &:before {
                                            content: "W";
                                        }
                                    }
                                    &.fc-timeGridDay-button {
                                        &:before {
                                            content: "D";
                                        }
                                    }
                                    &.fc-listWeek-button {
                                        &:before {
                                            content: "L";
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &-button-group {
                        button:first-child {
                            border-top-left-radius: 0.25rem;
                            border-bottom-left-radius: 0.25rem;
                        }
                        button:last-child {
                            border-top-right-radius: 0.25rem;
                            border-bottom-right-radius: 0.25rem;
                        }
                    }
                    &-prev-button,
                    &-next-button {
                        padding: 0;
                        width: 34px;
                        justify-content: center;
                        span {
                            margin: 0;
                        }
                    }
                    &-icon-left-single-arrow,
                    &-icon-right-single-arrow {
                        top: 0;
                    }
                    &-today-button {
                        border-radius: 0.25rem;
                        color: rgba(27, 46, 75, 0.7);
                        background-color: #fff;
                        display: none;
                        ${device.medium} {
                            display: block;
                        }
                        &:disabled {
                            border-color: rgba(72, 94, 144, 0.16);
                            background-color: #f5f6fa;
                            color: #8392a5;
                            font-weight: 400;
                            cursor: default;
                        }
                    }
                    &-toolbar-title {
                        font-size: 16px;
                        font-weight: 500;
                        letter-spacing: -0.2px;
                        ${device.small} {
                            font-size: 18px;
                        }
                        ${device.large} {
                            font-size: 20px;
                        }
                    }
                }
            }
            &-view-harness {
                height: calc(100% - 50px) !important;
            }
            &-view {
                th,
                td {
                    border-color: rgba(72, 94, 144, 0.16);
                }
            }
            &-scrollgrid {
                border-top-width: 0;
                border-left-width: 0;
                &-section-header {
                    .fc-scroller {
                        overflow-y: auto !important;
                    }
                }
                table {
                    width: 100% !important;
                }
            }
            &-col {
                &-header-cell {
                    padding: 5px 0;
                    border-color: rgba(72, 94, 144, 0.16);
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 500;
                    color: #1b2e4b;
                    font-weight: 600;
                    ${device.small} {
                        font-size: 12px;
                    }
                    &-cushion {
                        padding: 0;
                        color: inherit;
                    }
                }
            }
            &-daygrid {
                &-body {
                    border-left-width: 0;
                    font-family: -apple-system, BlinkMacSystemFont, "Inter UI",
                        Roboto, sans-serif;
                    width: 100% !important;
                }
                &-day {
                    &.fc-day {
                        &-other,
                        &-today {
                            background-color: #f8f9fc;
                        }
                        &-other {
                            .fc-daygrid-day-top {
                                opacity: 1;
                            }
                        }
                        &-today {
                            .fc-daygrid-day-number {
                                background-color: #0168fa;
                                color: #fff;
                                border-radius: 1px;
                            }
                        }
                    }
                    &-number {
                        font-size: 14px;
                        font-weight: 400;
                        font-family: -apple-system, BlinkMacSystemFont,
                            "Inter UI", Roboto, sans-serif;
                        color: #596882;
                        display: inline-block;
                        padding: 5px 8px;
                        position: relative;
                        transition: all 0.2s ease-in-out;
                        margin: 2px 2px 0 0;
                        min-width: 36px;
                        text-align: center;
                        &:hover,
                        &:focus {
                            color: #1b2e4b;
                            background-color: #f5f6fa;
                            text-decoration: none;
                        }
                    }
                    &-events {
                        min-height: 1.7em;
                    }
                }
                &-event {
                    border-width: 0;
                    border-top-width: 5px;
                    border-radius: 0;
                    ${device.small} {
                        border-top-width: 0;
                        border-left-width: 2px;
                        padding: 1px 4px;
                    }
                    .fc-event {
                        &-main {
                            color: #001737;
                            display: none;
                            ${device.small} {
                                display: block;
                            }
                        }
                        &-time {
                            font-weight: 500;
                            overflow: visible;
                        }
                        &-desc {
                            display: none;
                        }
                    }
                }
            }
            &-timegrid {
                &-body {
                    overflow: hidden;
                }
                .fc {
                    &-col-header {
                        font-size: 11px;
                        font-weight: 600;
                        text-transform: uppercase;
                        padding: 5px 0;
                        color: #1b2e4b;
                        ${device.small} {
                            font-size: 12px;
                        }
                        &-cell-cushion {
                            &:hover {
                                text-decoration: none;
                            }
                            span {
                                display: block;
                                &:first-child {
                                    color: #8392a5;
                                    font-size: 8px;
                                    font-weight: 400;
                                    line-height: 1.2;
                                    ${device.small} {
                                        font-size: 11px;
                                        font-weight: 500;
                                    }
                                }
                                &:last-child {
                                    font-weight: 500;
                                    font-size: 14px;
                                    font-family: Helvetica, Arial, sans-serif;
                                    line-height: 1;
                                    ${device.small} {
                                        font-size: 25px;
                                    }
                                }
                            }
                        }
                        .fc-day-today {
                            .fc-col-header-cell-cushion {
                                span:last-child {
                                    color: #0168fa;
                                }
                            }
                        }
                    }
                    &-timegrid-event {
                        padding: 5px;
                        border-left-width: 0;
                        border-right-width: 0;
                        border-top-width: 2px;
                        .fc-event {
                            &-title {
                                font-size: 14px;
                                font-weight: 700;
                                color: #1c273c;
                                margin-bottom: 10px;
                                &-container {
                                    flex-grow: 0;
                                }
                            }
                            &-time {
                                font-size: 11px;
                                color: #1c273c;
                            }
                            &-desc {
                                display: none;
                                line-height: 1.3;
                                color: rgba(28, 39, 60, 0.8);
                                ${device.large} {
                                    display: block;
                                }
                            }
                        }
                    }
                    &-timegrid-col {
                        &.fc-day-today {
                            background-color: rgba(244, 245, 248, 0.7);
                        }
                    }
                }
            }
            &-list {
                border: none;
                .fc {
                    &-scroller {
                        padding: 20px 20px 20px 0;
                    }
                    &-list {
                        &-table {
                            border-collapse: separate;
                            display: block;
                            font-family: ${themeGet("fonts.interUi")};
                            & > tbody {
                                display: flex;
                                flex-wrap: wrap;
                            }
                        }
                        &-day {
                            flex: 0 0 20%;
                            max-width: 20%;
                            margin-top: 15px;
                            display: flex;
                            justify-content: center;
                            ${device.small} {
                                flex: 0 0 15%;
                                max-width: 15%;
                            }
                            ${device.medium} {
                                flex: 0 0 12%;
                                max-width: 12%;
                            }
                            ${device.large} {
                                flex: 0 0 10%;
                                max-width: 10%;
                            }
                            &:first-of-type {
                                margin-top: 0;
                                & + .fc-list-event {
                                    margin-top: 0;
                                }
                            }
                            & > th {
                                border: none;
                            }
                            .fc-list-day {
                                &-cushion {
                                    background-color: transparent;
                                    border-width: 0;
                                    padding: 0;
                                }
                                &-text {
                                    display: block;
                                    font-size: 11px;
                                    text-transform: uppercase;
                                    color: #8392a5;
                                    font-weight: 500;
                                    padding: 5px;
                                    text-align: center;
                                    &:hover {
                                        text-decoration: none;
                                    }
                                    &.now {
                                        color: ${themeGet("colors.primary")};
                                        span {
                                            color: ${themeGet(
                                                "colors.primary"
                                            )};
                                        }
                                    }
                                    span {
                                        display: block;
                                        font-size: 28px;
                                        font-weight: 400;
                                        letter-spacing: -1.5px;
                                        color: #001737;
                                        line-height: 1;
                                        ${device.small} {
                                            font-size: 32px;
                                        }
                                        ${device.xlarge} {
                                            font-size: 36px;
                                        }
                                    }
                                }
                            }
                        }
                        &-event {
                            flex: 0 0 calc(80% - 5px);
                            max-width: calc(80% - 5px);
                            display: flex;
                            flex-direction: column;
                            border-left-width: 4px;
                            border-left-style: solid;
                            background-color: #fff;
                            margin-top: 15px;
                            & + .fc-list-event {
                                margin-left: 20%;
                                ${device.small} {
                                    margin-left: 15%;
                                }
                                ${device.medium} {
                                    margin-left: 12%;
                                }
                                ${device.large} {
                                    margin-left: 10%;
                                }
                                ${device.xlarge} {
                                    margin-left: 8%;
                                }
                            }
                            &:hover {
                                background-color: #fff;
                            }
                            ${device.small} {
                                flex: 0 0 calc(85% - 5px);
                                max-width: calc(85% - 5px);
                            }
                            ${device.medium} {
                                flex: 0 0 calc(88% - 5px);
                                max-width: calc(88% - 5px);
                            }
                            ${device.large} {
                                flex: 0 0 calc(90% - 5px);
                                max-width: calc(90% - 5px);
                            }
                            ${device.xlarge} {
                                flex: 0 0 calc(90% - 5px);
                                max-width: calc(90% - 5px);
                            }
                            &:first-child {
                            }
                            & > td {
                                border-width: 0;
                            }
                            .fc-list-event {
                                &-graphic {
                                    display: none;
                                }
                                &-time {
                                    padding: 12px 15px 2px;
                                    width: 100%;
                                    text-transform: uppercase;
                                    font-size: 11px;
                                    font-weight: 600;
                                    letter-spacing: 0.5px;
                                    border-top: 1px solid #e5e9f2;
                                    border-right: 1px solid #e5e9f2;
                                    box-sizing: border-box;
                                    border-bottom: none;
                                }
                                &-title {
                                    padding: 0 15px 12px;
                                    border-bottom: 1px solid #e5e9f2;
                                    border-right: 1px solid #e5e9f2;
                                    box-sizing: border-box;
                                    border-top: none;
                                    a {
                                        display: block;
                                        font-weight: 500;
                                        font-size: 16px;
                                        margin-bottom: 2px;
                                        color: #001737;
                                        ${device.small} {
                                            font-size: 18px;
                                        }
                                    }
                                }
                                &-desc {
                                    font-size: 12px;
                                    line-height: 1.375;
                                    display: block;
                                    color: #8392a5;
                                    ${device.large} {
                                        font-size: 13px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
