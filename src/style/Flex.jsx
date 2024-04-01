
import React from 'react';

function Flex({
    children,

  }) {
    
    return (
      <div className={`flex justify-between items-center   `}>
        {children}
      </div>
    );
  }
  
  export default Flex;