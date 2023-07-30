/** @jsxImportSource @emotion/react */
import React from "react";
import {themeId} from "../style/emotion";
import {css} from "@emotion/react";
import {theme} from "../utill/theme";

interface IProps {
    themeId: themeId;
}

const Button = ({themeId}:IProps) => {

    const buttonStyle = css({
        backgroundColor: `${theme[themeId].background}`,
        display: "flex",
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 3,
    });

    const buttonTextStyle = css({
        color: `${theme[themeId].color}`
    })

    return (
        <div css={buttonStyle}>
            <h1 css={buttonTextStyle}>hello</h1>
        </div>
    )
}

export default Button;