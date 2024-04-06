import React, { useEffect, useState } from "react";
import HeadingThere from "../typography/HeadingThere";
import TextOne from "../typography/TextOne";
import TextTwo from "../typography/TextTwo";
import Button from "../components/Button";
import HeadingOne from "../typography/HeadingOne";
import HeadingTwo from "../typography/HeadingTwo";
import { Link } from "react-router-dom";

function Favorite(props) {
  const [uniqueItems, setUniqueItems] = useState([]);
  const [count, setcount] = useState(1)

  useEffect(() => {

    //takrorlanuvchi idlarni tekshiradi va agar bor  bo'lsa bittasini oladi
    function getId(arr) {
      return arr?.reduce((uniqueItems, currentItem) => {
        if (!uniqueItems.some((item) => item.id === currentItem.id)) {
          uniqueItems.push(currentItem);
        }
        return uniqueItems;
      }, []);
    }
        // localStoragedan maxsulotlarni oladi va iniy itemsga beradi
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    const uniqueItemsArr = getId(cartProducts);
    setUniqueItems(uniqueItemsArr);
  }, []);

  
    //maxsulotni orttirib boradi
    const inc = () => {
        setcount((prev) => prev + 1);
    }
     //maxsulotni kamaytirib boradi
    const dec = () => {
        count > 0 ?
        setcount((prev) => prev - 1) : "";
    }

    const clearProduct = (removeId) =>{
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    
        const newProduct = cartProducts.filter(item => item.id !== removeId);
        localStorage.setItem('cartProducts', JSON.stringify(newProduct));
        setUniqueItems(newProduct);
    }

  return (
    <div>
      {uniqueItems?.length > 0 ? (
        uniqueItems.map((item) => (
            <div key={item.id} className="flex gap-20">
                <div className="w-[300px]">
                    <img className="w-full" src={item.image} alt="img" />
                </div>
            <div className="info">
            <HeadingThere>{item.name}</HeadingThere>
              <TextOne>{item.price}</TextOne>
              <TextTwo>{item.description}</TextTwo>
            </div>
            <div className="cle">
                <Button secondary2={true} onClick={()=> clearProduct(item.id)}>
                    clear               
                     </Button>
            </div>
            
            <div className="flex  justify-between items-center w-[200px]">
                    <Button secondary={true} onClick={dec}>-</Button>
                    <TextOne>{count}</TextOne>
                    <Button secondary={true} onClick={inc}>+</Button>
                </div>
            
              
            </div>
          ))
      ) : 
      <div className="flex flex-col justify-center items-center gap-5 ">
        <HeadingOne>
            
            Hali maxsulot olinmagan
            
        </HeadingOne>
        <div className="py-5 px-10 rounded-full border-primaryGray border bg-secondaryGray90  ">
            <HeadingTwo>
            <Link to='/product'>
                Maxsulot olish
            </Link>
        </HeadingTwo></div>
      </div>
      }

    </div>
  );
}

export default Favorite;
