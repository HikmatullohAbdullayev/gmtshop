import React from 'react';

function HeadingOne({children}) {
    return (
        <h1 className='font-medium text-[48px] table:text-[34px] mobile:text-[28px]'>
            {children}
        </h1>
    );
}

export default HeadingOne;