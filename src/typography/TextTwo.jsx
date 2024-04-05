import React from 'react';

function TextTwo ({children}) {
    return (
        <p className='font-normal text-[12px] table:text-[10px] mobile:text-[10px]'>
         {children} 
        </p>
    );
}

export default  TextTwo 