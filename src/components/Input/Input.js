import React from "react";
import "./input.scss";

function Input({label, error, icon, name, ...inputProps}) {
    return (
        <>
            <label className="label" htmlFor={name}>{label}</label>
            <span style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                {icon}
                <span style={{width: '100%'}}>
                    <input id={name} name={name} {...inputProps} />
                </span>
            </span>
            {error && <p className="error">{error}</p>}
        </>
    )
}

export default Input;