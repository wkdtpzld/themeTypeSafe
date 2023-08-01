import {themeId} from "../../../Style/emotion";
import {theme} from "../../../Utill/theme";
import styled from "@emotion/styled";


export const ScreenDefaultStyle = styled.div<{themeId: themeId}>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => theme[props.themeId].background};
`