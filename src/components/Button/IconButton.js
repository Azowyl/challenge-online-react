import React from 'react';

function IconButton({icon, ...buttonProps}) {
    return (
        <span {...buttonProps} className="button-icon">
            {icon}
        </span>
    );
}

export default IconButton;