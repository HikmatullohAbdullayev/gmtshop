
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

  useEffect(() => {
    // Takrorlanuvchi idlarni tekshiradi va agar bor bo'lsa bittasini oladi
    function getId(arr) {
      return arr?.reduce((uniqueItems, currentItem) => {
        if (!uniqueItems.some((item) => item.id === currentItem.id)) {
          uniqueItems.push(currentItem);
        }
        return uniqueItems;
      }, []);
    }

    // LocalStoragedan mahsulotlarni oladi va iniy itemsga beradi
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    const uniqueItemsArr = getId(cartProducts);
    setUniqueItems(uniqueItemsArr);
  }, []);

  // Mahsulotni orttirib boradi
  const inc = (id) => {
    const updatedItems = uniqueItems.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setUniqueItems(updatedItems);
    localStorage.setItem("cartProducts", JSON.stringify(updatedItems));
  };

  // Mahsulotni kamaytirib boradi
  const dec = (id) => {
    const updatedItems = uniqueItems.map((item) =>
      item.id === id && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    );
    setUniqueItems(updatedItems);
    localStorage.setItem("cartProducts", JSON.stringify(updatedItems));
  };

  const clearProduct = (removeId) => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    const newProduct = cartProducts.filter((item) => item.id !== removeId);
    localStorage.setItem("cartProducts", JSON.stringify(newProduct));
    setUniqueItems(newProduct);
  };

  return (
    <div className="grid gap-5">
      {uniqueItems?.length > 0 ? (
        uniqueItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-center mx-auto w-full text-center gap-10  tablemin:flex-col"
          >
            <div className="max-w-[400px] mx-auto">
              <img className="w-full" src={item.image} alt="img" />
            </div>
            <div className="info">
              <HeadingThere>{item.name}</HeadingThere>
              <TextOne>{(item.price * item.count).toFixed(2)}</TextOne>
              <TextTwo>{item.description}</TextTwo>
            </div>
            <div className="flex flex-col justify-evenly mx-auto w-[200px]">
              <div className="flex justify-between items-center">
                <Button secondary={true} onClick={() => dec(item.id)}>
                  -
                </Button>
                <TextOne>{item.count}</TextOne>
                <Button secondary={true} onClick={() => inc(item.id)}>
                  +
                </Button>
              </div>
              <div className="mx-auto">
                <Button secondary2={true} onClick={() => clearProduct(item.id)}>
                  clear
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center gap-5">
          <HeadingOne>Hali mahsulot olinmagan</HeadingOne>
          <div className="py-5 px-10 rounded-full border-primaryGray border bg-secondaryGray90">
            <HeadingTwo>
              <Link to="/product">Mahsulot olish</Link>
            </HeadingTwo>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorite;
