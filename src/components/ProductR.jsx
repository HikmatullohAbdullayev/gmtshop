import React, { useEffect, useState } from "react";
import Button from "./Button";
import HeadingThere from "../typography/HeadingThere";
import productData from "../constants/productData.json";
import TextOne from "../typography/TextOne";
import { Link } from "react-router-dom";

function ProductR({ itemIdClik, closeModal }) {
  const [itemId, setItemId] = useState(null);



  const clickedItem = productData.find((item) => item.id === itemIdClik);
  useEffect(()=>{
      if (clickedItem) {
      setItemId(clickedItem);
    } else {
      console.log(error.message);
    }
  },[])
  
  // productId ni ishlatib, kerakli ma'lumotlarni olish va chiqarish
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center ">
        <div className="fixed " >
          <div className="absolute ">
            
          </div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ">
          <div className="bg-white px-4 pt-5 pb-4">
            <div className="">
            <div className=" absolute right-0 top-0 bg-gray-50 px-4 py-3 ">
            <Button secondary={true} onClick={closeModal}>Yopish</Button>
          </div>
              <div className=" mt-[50px] gap-10  grid-cols-[repeat(auto-fill,minmax(350px,1fr))]  text-center">
                <div className="max-w-[500px] h-[300px] ">
                    <img className="w-full h-full object-cover rounded-2xl" src={itemId?.image} alt="img" />
                </div>
                <div className=" flex flex-col justify-around info mt-2">
                  <HeadingThere>
                    {itemId?.name}
                  </HeadingThere>
                  <div className="mt-2 max-w-[300px] flex flex-col gap-2 px-2 mx-auto  py-2">
                    <TextOne>  {itemId?.description}</TextOne>
                    
                    <TextOne> Price: {itemId?.price}$</TextOne>
                  </div>

                <div className="">
                <Button primary={true}>
                  <Link  to={`/product/${itemId?.id}`}>
                  Больше информации о товаре
                  </Link>
                  </Button>
                </div>
                  
                    
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductR;
