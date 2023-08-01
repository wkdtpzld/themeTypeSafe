/** @jsxImportSource @emotion/react */
import React, {HTMLAttributes, ReactNode} from "react";
import {ScreenDefaultStyle} from "./style";
import {themeId} from "../../../Style/emotion";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    themeId: themeId;
    children: ReactNode;
}


const screenDefault = ({themeId, children, ...props}:IProps) => {

    return (
        <ScreenDefaultStyle
            {...props}
            themeId={themeId}
        >
            {children}
        </ScreenDefaultStyle>
    )
}

export default screenDefault;