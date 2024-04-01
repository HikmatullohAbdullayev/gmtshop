import React from 'react';

function FlexCol({
    children,
    width
}) {
    return (
        <div className={`flex flex-col justify-between items-center ${width}`}>
            {children}
        </div>
    );
}

export default FlexCol;