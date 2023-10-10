import {useCallback, useState} from "react";

function usePersistedState(key, initialValue) {
    const savedValue = localStorage.getItem(key);
    const [value, setValue] = useState(savedValue ? JSON.parse(savedValue) : initialValue);

    const save = useCallback((newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }, []);

    return [value, save];
}

export default usePersistedState;