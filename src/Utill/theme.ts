export enum ThemeId {
    LIGHT_GRAY = 'lightGray',
    DARK_GRAY = 'darkGray',
    WHITE = 'white',
}


export const Palette = {
    GRAY_50: "#F8F9FA",
    GRAY_100: "#EBEDEF",
    GRAY_200: "#DDE1E4",
    GRAY_300: "#CED3D8",
    GRAY_400: "#BDC4CB",
    GRAY_500: "#AAB4BC",
    GRAY_600: "#95A1AC",
    GRAY_700: "#808A93",
    GRAY_800: "#646D74",
    GRAY_900: "#3B3F44",
}

export const theme = {
    lightGray: {
        background: Palette.GRAY_100,
        color: Palette.GRAY_700,
        hoverBackground: Palette.GRAY_200,
    },
    darkGray: {
        background: Palette.GRAY_500,
        color: Palette.GRAY_700,
        hoverBackground: Palette.GRAY_700,
    },
    white: {
        background: Palette.GRAY_50,
        color: Palette.GRAY_900,
        hoverBackground: Palette.GRAY_200,
    }
}