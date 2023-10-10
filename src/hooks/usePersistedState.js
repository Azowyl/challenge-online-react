import {useEffect, useState} from "react";

function usePersistedState(key, initialValue) {
    const savedValue = localStorage.getItem(key);
    const [value, setValue] = useState(savedValue ? JSON.parse(savedValue) : initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default usePersistedState;