import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Data
import topData from "../constants/headerTopData.js";
import buttomData from "../constants/header.js";

//Components
import TextThere from "../typography/TextThere.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeaderSearch from "./components/HeaderSearch.jsx";
import NavDesktop from "./components/NavDesktop.jsx";

import Button from "../components/Button.jsx";
import TextOne from "../typography/TextOne.jsx";
import Register from "../components/Register.jsx";
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb.jsx";

function Header(props) {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <header className="">
      <div className="container py-[10px] flex justify-between">
        <div className="flex justify-start items-center gap-[20px]">
          {topData.map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-[20px]">
                <TextThere>{item.text}</TextThere>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start items-center gap-[20px]">
          <div>
            <TextThere>info@mail.ru</TextThere>
          </div>
          <div>
            <TextThere>г. Москва, ул. Московская, д. 35</TextThere>
          </div>
        </div>
      </div>
      <hr />
      <div className="container flex justify-between items-center py-[26px]">
      <Link to="/">
      <div className="logo w-[96px]">
          <LazyLoadImage
            alt="logo"
            src="../../src/assets/img/logo.png"
            effect="opacity"
          />
        </div>
      </Link>
        <HeaderSearch />
        <div className="w-120px ">
          <TextThere>Пн-Пт с 09:00-19:00</TextThere>
          <TextThere>б-Вс - выходной</TextThere>
        </div>

        <NavDesktop toggleModal={toggleModal} />
      </div>
      <hr />

      <div className="container  py-[21px] flex justify-between items-center gap-5">
        <div className="flex justify-between items-center gap-5">
          {buttomData.map((item) => (
            <Fragment key={item.id}>
              <ul>
                <li className="cursor-pointer">
                  <Link to={item.link}>
                    <TextOne>{item.text}</TextOne>
                  </Link>
                </li>
              </ul>
            </Fragment>
          ))}
        </div>

        <div className=" flex gap-5">
          <Button secondary={true}>+7(495)000-00-00</Button>
          <Button primary={true}>Заказать звонок</Button>
        </div>
        
      </div>
      <div className="container">
      <Breadcrumb/>
      </div>

      <div className="  relative flex justify-center items-center bg-red-500">
        <Register open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}

export default Header;
