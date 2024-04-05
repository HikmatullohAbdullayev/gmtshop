import React from 'react';

function HeadingTwo({children}) {
    return (
        <h2 className='  font-medium text-[30px] table:text-[20px] mobile:text-[18px]' >
            {children}
        </h2>
    );
}

export default HeadingTwo;