import React from 'react';
import Product from "../constants/productData.json"

function ProductComp(props) {
    return (
        <div>
          <div className="box">
             <div className="grid grid-cols-3 grid-rows-4 gap-0 lg:grid lg:grid-cols-2 lg:grid-rows-6 lg:gap-0 ">
               {Product.map((item) => (
                <div
                  key={item.id}
                  className=""
                >
                  <img src={item.image} alt="rasm" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>  
        </div>
    );
}

export default ProductComp;