import React from 'react';

function Wrapper({children}) {
    return (
        <div className="flex flex-col justify-between h-screen ">
            {children}
        </div>
    );
}

export default Wrapper;