import React from 'react';

function TextOne({children}) {
    return (
        <p className='font-medium text-[16px] table:text-[14px] mobile:text-[12px]'>
            {children}
        </p>
    );
}

export default TextOne;