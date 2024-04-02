import React from 'react';

function Container({children}) {
    return (
        <div className="flex justify-between items-center max-w-[1310px] mx-auto px-[20px] ">
            {children}
            
        </div>
    );
}

export default Container;
Container