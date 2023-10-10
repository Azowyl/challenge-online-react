import React from 'react';
import './button.scss';

function SubmitButton({label}) {
    return (
        <button type="submit">{label}</button>
    );
}

export default SubmitButton;
