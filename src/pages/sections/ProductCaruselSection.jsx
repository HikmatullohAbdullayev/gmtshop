import React from 'react';


import Button from "../../components/Button";
import HeadingTwo from "../../typography/HeadingOne";
import TextOne from "../../typography/TextOne";
import TextTwo from "../../typography/TextTwo";


import ProductCarusel from "../../components/ProductCarusel";

function ProductCaruselSection(props) {
    return (
        <>
        <div className="productCarusel mt-[100px]">
        <div className=" flex justify-between gap-[130px] px-5 items-start table1080:flex-col table1080:gap-[35px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col text-nowrap ">
            <HeadingTwo >Каталог товаров</HeadingTwo>
            <div className="flex flex-col items-start gap-[10px] mt-[40px]">
             <span className="cursor-pointer ">
             <TextOne>
              Хиты продаж
              </TextOne>
             </span>
              <span className="cursor-pointer">
              <TextOne>
              Новинки
              </TextOne>
              </span>
             <span className="cursor-pointer">
             <TextOne>
              Акции
              </TextOne>
             </span>
            </div>
            </div>
            <div className="hidden table1080:block">
              <Button secondary={true}>Бесплатная консультация</Button>
            </div>
            <div className="hidden table1080:block">
              <Button primary={true}>Все товары</Button>
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <ProductCarusel  />
          </div>
        </div>
      </div>


        </>
    );
}

export default ProductCaruselSection;