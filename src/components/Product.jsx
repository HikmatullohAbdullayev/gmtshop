import React from 'react';

function Product(props) {
    return (
        <div>
          <div className="box">
             <div className="grid grid-cols-3 grid-rows-4 gap-0 lg:grid lg:grid-cols-2 lg:grid-rows-6 lg:gap-0 ">
               {data.map((item) => (
                <div
                  key={item.id}
                  className={`
                           ${item.id === 1 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-1  bg-red-500" : ""}
                           ${item.id === 2 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-2  bg-green-500" : ""}
                           ${item.id === 3 ? "col-span-1 row-span-2  lg:col-span-1 lg:row-span-1  bg-yellow-500" : ""}
                           ${item.id === 4 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-1  bg-purple-500" : ""}
                           ${item.id === 5 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-1  bg-orange-500" : ""}
                           ${item.id === 6 ? "col-span-1 row-span-2  lg:col-span-1 lg:row-span-2  bg-cyan-500" : ""}
                           ${item.id === 7 ? "col-span-1 row-span-1   lg:col-span-1 lg:row-span-1 bg-pink-500" : ""}
                           ${item.id === 8 ? "col-span-1 row-span-1   lg:col-span-1 lg:row-span-1 bg-indigo-500" : ""}
                           ${item.id === 9 ? "col-span-1 row-span-1   lg:col-span-1 lg:row-span-1 bg-teal-500" : ""}
                           ${item.id === 10 ? "col-span-1 row-span-1  lg:col-span-1 lg:row-span-1  bg-red-500" : ""}
                               `}
                >
                  <img src="" alt="rasm" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>  
        </div>
    );
}

export default Product;