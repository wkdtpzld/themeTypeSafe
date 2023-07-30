import '@emotion/react';

export type themeId = "lightGray" | "darkGray"

declare module '@emotion/react' {
    export interface Theme {
        [key in themeId]: {
            background: string,
            color: string,
            hoverBackground: string,
        }
    }
}