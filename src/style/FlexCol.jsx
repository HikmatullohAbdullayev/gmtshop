import React from 'react';

function FlexCol({
    children
}) {
    return (
        <div className={`flex flex-col justify-between items-center `}>
            {children}
        </div>
    );
}

export default FlexCol;