import '@emotion/react';
import {ThemeId} from "../Utill/theme";

export type themeId = ThemeId.LIGHT_GRAY | ThemeId.DARK_GRAY | ThemeId.WHITE

declare module '@emotion/react' {
    export interface Theme {
        [key in themeId]: {
            background: string,
            color: string,
            hoverBackground: string,
        }
    }
}