import React from 'react';

function HeadingThere({children}) {
    return (
        <h3 className='font-semibold text-[18px] table:text-[16px] mobile:text-[16px]'>
            {children}
        </h3>
    );
}

export default HeadingThere;