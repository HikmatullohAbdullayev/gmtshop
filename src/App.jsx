import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Container from "./style/Container";
import Wrapper from "./style/Wrapper";
import Flex from "./style/Flex";

import Button from "./components/Button";
import HeadingTwo from "./typography/HeadingTwo";
import TextOne from "./typography/TextOne";

import NewCarusel from "./components/NewCarusel";
import BrendCarusel from "./components/BrendCarusel";
import CustomSliders from "./components/HeroCarusel";
// import ProductCarusel from "./components/ProductCarusel";

import imagesData from "./constants/imgData";
// import ProductCaruselSection from "./pages/sections/ProductCaruselSection";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Favorite from "./pages/Favorite";
import ProductDetail from "./pages/ProductDetail";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    // <Container>
    //   <div className="brendCarusel mt-[100px] ">
    //     <div className=" flex justify-between gap-[130px] px-5 items-start  table1080:flex-col table1080:gap-[35px]">
    //       <div className="flex justify-between items-center gap-[25px] w-full">
    //         <div className="text">
    //           <HeadingTwo>Бренды</HeadingTwo>
    //           <TextOne>Эксклюзивные поставщики</TextOne>
    //         </div>
    //         <div className="hidden table1080:block">
    //           <Button primary={true}>Все новости</Button>
    //         </div>
    //       </div>

    //       <div className="flex justify-between items-center ">
    //         <BrendCarusel images={imagesData} />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="newCarusel mt-[100px]">
    //     <div className=" flex justify-between gap-[130px] px-5 items-start table1080:flex-col table1080:gap-[35px]">
    //       <div className="flex justify-between items-center w-full">
    //         <HeadingTwo style={{ color: "red" }}>Новости компании</HeadingTwo>
    //         <div className="hidden table1080:block">
    //           <Button primary={true}>Все новости</Button>
    //         </div>
    //       </div>
    //       <div className="flex justify-between items-center ">
    //         <NewCarusel images={imagesData} />
    //       </div>
    //     </div>
    //   </div>

    //   <CustomSliders/>
    //  <Home/>

    // </Container>

    <>
      <Routes>
       <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />}/>
          <Route path="product" element={<Product/>}/>
          <Route path="favorite" element={<Favorite/>}/>
          <Route path="product/:id" element={<ProductDetail/>}/>
        <Route path="*" element={<h1>sahifa topilmadi</h1>}/>
       </Route>

      </Routes>
    </>
  );
}

export default App;
