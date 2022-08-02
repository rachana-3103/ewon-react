import{__rest as n,__assign as r,__makeTemplateObject as o}from"../../../../../node_modules/tslib/tslib.es6.js";import{jsx as t}from"react/jsx-runtime";import e,{css as i,themeGet as a}from"@doar/shared/styled";import{Tabs as l}from"react-tabs";var d,s,c,b,p,f,g,u,m,x,h,y,v=e((function(o){var e=n(o,[]);return t(l,r({},e))}))(x||(x=o(["\n    ","\n    .react-tabs {\n        &__tab-list {\n            display: flex;\n            flex-wrap: wrap;\n            border-color: ",";\n            ","\n            ","\n        }\n        &__tab {\n            margin-bottom: 0;\n            background-color: ",";\n            border-color: ",";\n            color: ",";\n            border-bottom-width: 0;\n            position: relative;\n            margin-bottom: -1px;\n            padding: 0 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 38px;\n            transition: background-color 0.2s;\n            border: 1px solid transparent;\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem;\n            cursor: pointer;\n            &:not(:first-of-type) {\n                margin-left: 5px;\n            }\n            &--selected {\n                background-color: #fff;\n                z-index: 5;\n                color: ",";\n                border-color: ","\n                    "," #fff;\n            }\n            &--disabled {\n                background-color: transparent;\n                color: ",";\n                border-color: transparent;\n                pointer-events: none;\n                cursor: default;\n            }\n            ","\n            ","\n\t\t\t","\n                ","\n        }\n        &__tab-panel {\n            transition: all 0.15s linear;\n            display: none;\n            height: 0;\n            max-width: 100%;\n            visibility: hidden;\n            overflow: hidden;\n            opacity: 0;\n            &--selected {\n                display: block;\n                height: auto;\n                visibility: visible;\n                opacity: 1;\n                overflow: visible;\n            }\n        }\n        &__content {\n            ","\n            ","\n        }\n    }\n"],["\n    ","\n    .react-tabs {\n        &__tab-list {\n            display: flex;\n            flex-wrap: wrap;\n            border-color: ",";\n            ","\n            ","\n        }\n        &__tab {\n            margin-bottom: 0;\n            background-color: ",";\n            border-color: ",";\n            color: ",";\n            border-bottom-width: 0;\n            position: relative;\n            margin-bottom: -1px;\n            padding: 0 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 38px;\n            transition: background-color 0.2s;\n            border: 1px solid transparent;\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem;\n            cursor: pointer;\n            &:not(:first-of-type) {\n                margin-left: 5px;\n            }\n            &--selected {\n                background-color: #fff;\n                z-index: 5;\n                color: ",";\n                border-color: ","\n                    "," #fff;\n            }\n            &--disabled {\n                background-color: transparent;\n                color: ",";\n                border-color: transparent;\n                pointer-events: none;\n                cursor: default;\n            }\n            ","\n            ","\n\t\t\t","\n                ","\n        }\n        &__tab-panel {\n            transition: all 0.15s linear;\n            display: none;\n            height: 0;\n            max-width: 100%;\n            visibility: hidden;\n            overflow: hidden;\n            opacity: 0;\n            &--selected {\n                display: block;\n                height: auto;\n                visibility: visible;\n                opacity: 1;\n                overflow: visible;\n            }\n        }\n        &__content {\n            ","\n            ","\n        }\n    }\n"])),(function(n){return!0===n.$vertical&&i(d||(d=o(["\n            display: flex;\n            align-items: flex-start;\n        "],["\n            display: flex;\n            align-items: flex-start;\n        "])))}),a("colors.border"),(function(n){return!0===n.$vertical&&i(s||(s=o(["\n                    border-bottom: 0;\n                    border-right: 0;\n                    justify-content: flex-start;\n                    flex-direction: column;\n                    width: 150px;\n                "],["\n                    border-bottom: 0;\n                    border-right: 0;\n                    justify-content: flex-start;\n                    flex-direction: column;\n                    width: 150px;\n                "])))}),(function(n){return"line"===n.$variation&&i(c||(c=o(["\n                    border-bottom: 2px solid ",";\n                "],["\n                    border-bottom: 2px solid ",";\n                "])),a("colors.border"))}),a("colors.border"),a("colors.border"),a("colors.gray700"),a("colors.primary"),a("colors.gray300"),a("colors.gray300"),a("colors.gray400"),(function(n){return!0===n.$justified&&i(b||(b=o(["\n                    flex-basis: 0;\n                    flex-grow: 1;\n                    text-align: center;\n                "],["\n                    flex-basis: 0;\n                    flex-grow: 1;\n                    text-align: center;\n                "])))}),(function(n){return!0===n.$vertical&&i(p||(p=o(["\n                    border-color: ",";\n                    border-right-width: 0;\n                    margin-bottom: 0;\n                    margin-right: -1px;\n                    border-top-right-radius: 0;\n                    border-bottom-right-radius: 0;\n                    border-top-left-radius: 0.25rem;\n                    border-bottom-left-radius: 0.25rem;\n                    &:not(:first-of-type) {\n                        margin-left: 0;\n                        margin-top: 5px;\n                    }\n                    &--selected {\n                        border-color: ",";\n                    }\n                "],["\n                    border-color: ",";\n                    border-right-width: 0;\n                    margin-bottom: 0;\n                    margin-right: -1px;\n                    border-top-right-radius: 0;\n                    border-bottom-right-radius: 0;\n                    border-top-left-radius: 0.25rem;\n                    border-bottom-left-radius: 0.25rem;\n                    &:not(:first-of-type) {\n                        margin-left: 0;\n                        margin-top: 5px;\n                    }\n                    &--selected {\n                        border-color: ",";\n                    }\n                "])),a("colors.border"),a("colors.border"))}),(function(n){return"line"===n.$variation&&i(f||(f=o(['\n                    padding: 8px 0;\n                    background-color: transparent;\n                    border: none;\n                    border-radius: 0;\n                    &:not(:first-of-type) {\n                        margin-left: 25px;\n                    }\n                    &--selected {\n                        border: none;\n                        background-color: transparent;\n                        &:after {\n                            content: "";\n                            position: absolute;\n                            bottom: -1px;\n                            left: 0;\n                            right: 0;\n                            height: 2px;\n                            background-color: ',";\n                        }\n                    }\n                "],['\n                    padding: 8px 0;\n                    background-color: transparent;\n                    border: none;\n                    border-radius: 0;\n                    &:not(:first-of-type) {\n                        margin-left: 25px;\n                    }\n                    &--selected {\n                        border: none;\n                        background-color: transparent;\n                        &:after {\n                            content: "";\n                            position: absolute;\n                            bottom: -1px;\n                            left: 0;\n                            right: 0;\n                            height: 2px;\n                            background-color: ',";\n                        }\n                    }\n                "])),a("colors.primary"))}),(function(n){return"dark"===n.theme.name&&i(g||(g=o(["\n                    color: ",";\n                "],["\n                    color: ",";\n                "])),a("colors.gray300"))}),(function(n){return!0===n.$vertical&&i(u||(u=o(["\n                    flex: 1;\n                "],["\n                    flex: 1;\n                "])))}),(function(n){return"line"===n.$variation&&i(m||(m=o(["\n                    border: none;\n                    padding: 0;\n                    margin-top: 20px;\n                "],["\n                    border: none;\n                    padding: 0;\n                    margin-top: 20px;\n                "])))})),k=e.div(y||(y=o(["\n    padding: 20px;\n    border-top: 0;\n    border: 1px solid ",";\n    ","\n"],["\n    padding: 20px;\n    border-top: 0;\n    border: 1px solid ",";\n    ","\n"])),a("colors.gray300"),(function(n){return"dark"===n.theme.name&&i(h||(h=o(["\n            border-color: ",";\n        "],["\n            border-color: ",";\n        "])),a("colors.gray500"))}));export{k as StyledTabContent,v as StyledTabs};
//# sourceMappingURL=style.js.map
