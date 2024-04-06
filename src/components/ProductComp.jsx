import React, { Fragment } from 'react';
import Product from "../constants/productData.json"

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import HeadingThere from '../typography/HeadingThere';
import TextOne from '../typography/TextOne';
import TextTwo from '../typography/TextTwo';
import { Link } from 'react-router-dom';
import Button from './Button';

function ProductComp(props) {
 
    return (
        <div className='container'>
          <div className="box">
             <div className="grid grid-cols-3 grid-rows-4  p-2 gap-5  ">
               {Product.map((item) => (
                <Fragment 
                key={item.id}>

                <div className="link">
                <Link to={`/product/${item.id}`}>
                <div
                  className=" border border-secondary2 rounded-lg " 
                >
                 <div className=" object-cover  ">
                 
                 <img className=' w-full object-cover rounded-lg h-[300px]' src={item.image} alt="img" />
                 </div>
                  <div className="flex flex-col gap-4 p-4">
                  <HeadingThere>
                  {item.name}
                  </HeadingThere>
                  <TextTwo>
                    {item.description}
                  </TextTwo>
                  <TextOne>
                    {item.price}$
                  </TextOne>
                    </div>
                </div>
                </Link>
                <div className="w-full my-2 text-center">
                  <Button primary={true} >rewiuw</Button>
                  </div>
                </div>
                </Fragment>
              ))}
            </div>
          </div>  
        </div>
    );
}

export default ProductComp;