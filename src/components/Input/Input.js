import React from "react";
import BottomSpacer from "../Spacing/BottomSpacer";
import "./input.scss";

function Input({name, type, value, onChange, label, error}) {
    return (
        <>
            <label className="label" htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} value={value} onChange={onChange} />
            {error && <p className="error">{error}</p>}
            <BottomSpacer />
        </>
    )
}

export default Input;