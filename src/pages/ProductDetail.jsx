import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from "../constants/productData.json"
import HeadingOne from '../typography/HeadingOne';
import TextOne from '../typography/TextOne';
import TextTwo from '../typography/TextTwo';
import Button from '../components/Button';
import toast, { Toaster } from 'react-hot-toast';

function ProductDetail(props) {
    const [count, setcount] = useState(1)
    const [userProduct, setUserProduct] = useState([])

    //maxsulotni orttirib boradi
    const inc = () => {
        setcount((prev) => prev + 1);
    }
     //maxsulotni kamaytirib boradi
    const dec = () => {
        count > 0 ?
        setcount((prev) => prev - 1) : "";
    }
    
    
    const { id } = useParams()
    
    //aynan kerakli maxsulotni render qilib beradi
    const product = Product.find((item) => item.id == id);
    console.log(product);

    //maxsulotni soni 0 dan kamayib ketsa, maxsulot narxini o'zgartirib yubormaydi
    const countPrice = count > 0 ? product.price * count : product.price



    const addProduct = ( ) => {
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
      

        
        const storedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        const alreadyAdded = storedProducts.find((item) => item.id === id);
        if (!alreadyAdded) {
            // Tanlangan maxsulotni mahsulotlar ro'yxatiga qo'shish
            const updatedProducts = [...storedProducts, product];
            localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    console.log("Maxsulot muvaffaqiyatli qo'shildi");
    toast.success("Maxsulot muvaffaqiyatli qo'shildi")
    Toaster
} else {
    console.log("Bu maxsulot avvalroq qo'shilgan");
    toast.error("bu maxsulot avvalroq qo'shilgan");
        console.log(error);
}


        
    } else {
        console.log("Foydalanuvchi haqida ma'lumot topilmadi");
        toast.error("Avval Login qilish kerak");
        console.log(error);
    }
}

    
    
     return (
       <>
        <Toaster position="top-center" reverseOrder={false} />
        <div className=' conainer flex justify-around items-center gap-10'>
           <div className="w-[600px] h-[400px]  ">
            <img className='w-full h-full object-cover' src={product.image} alt="img" />
           </div>
           <div className="flex  flex-col  gap-10">
            <div className="text">
            <HeadingOne>
                {product.name}
            </HeadingOne>
            <TextOne>
                { countPrice }
            </TextOne>
            <TextTwo>
                {product.description}
            </TextTwo>
            </div>

            <div className="buttons flex  flex-col  gap-10">
                <div className="flex  justify-between items-center w-[200px]">
                    <Button secondary={true} onClick={dec}>-</Button>
                    <TextOne>{count}</TextOne>
                    <Button secondary={true} onClick={inc}>+</Button>
                </div>
                <Button secondary={true}>Задать вопрос</Button>
                <Button primary={true} onClick={addProduct} >Добавить в корзину</Button>
            </div>

           </div>
        </div>
       </>
    );
}

export default ProductDetail;