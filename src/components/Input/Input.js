import React from "react";
import "./input.scss";

function Input({name, type, value, onChange, label, error}) {
    return (
        <>
            <label className="label" htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} value={value} onChange={onChange} />
            {error && <p className="error">{error}</p>}
        </>
    )
}

export default Input;