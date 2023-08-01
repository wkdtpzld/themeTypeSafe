import {useEffect, useState} from "react";

interface IDebounceProps<T> {
    value: T;
    delay: number;
}

const useDebounce = <T>({value, delay}:IDebounceProps<T>) => {

    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value]);

    return debounceValue;
}

export default useDebounce;