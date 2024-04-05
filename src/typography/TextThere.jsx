import React from 'react';

function TextThere({children}) {
    return (
        <p className='font-medium text-[12px] table:text-[10px] mobile:text-[10px]'>
            {children}
        </p>
    );
}

export default TextThere;