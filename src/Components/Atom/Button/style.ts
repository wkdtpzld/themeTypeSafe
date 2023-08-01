import {theme} from "../../../Utill/theme";
import styled from "@emotion/styled";
import {themeId} from "../../../Style/emotion";

const breakPoint = [576, 768, 992, 1200];

const mq = breakPoint.map(
    bq => `@media(min-width: ${bq}px)`
);

export const ButtonStyle = styled.button<{themeId: themeId}>`
    display: flex;
    width: 100px;
    height: 100px;
    border-width: 1px;
    border-radius: 3px;
    background-color: ${(props) => theme[props.themeId].background};
    ${mq[0]} {
        background-color: red;
    }
    ${mq[1]} {
        background-color: blue;
    }
    ${mq[2]} {
        background-color: green;
    }
    ${mq[3]} {
        background-color: purple;
    }
`
