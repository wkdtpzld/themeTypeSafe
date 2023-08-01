/** @jsxImportSource @emotion/react */
import React, {ButtonHTMLAttributes, ReactNode, useEffect, useState} from "react";
import {themeId} from "../../../Style/emotion";
import {ButtonStyle} from "./style";
import useDebounce from "../../../Hook/useDebounce";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    themeId: themeId;
    onClick: () => void;
    children: ReactNode;
}

const Button = ({themeId, onClick, children, ...props}:IProps) => {

    const [onClickValue, setValue] = useState(0);
    const debounceValue = useDebounce<number>({value: onClickValue, delay: 400});

    const onClickDebounce = () => {
        setValue(prevState => prevState + 1);
    }

    useEffect(() => {
        if (debounceValue > 0) {
            setValue(0);
            onClick();
        }
    }, [debounceValue]);

    return (
        <ButtonStyle
            {...props}
            themeId={themeId}
            onClick={onClickDebounce}
        >
            {children}
        </ButtonStyle>
    )
}

export default Button;