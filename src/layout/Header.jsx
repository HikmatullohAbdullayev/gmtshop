import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Data
import buttomData from "../constants/header.js";

//Components
import { LazyLoadImage } from "react-lazy-load-image-component";
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
      
      <div className="container flex justify-between items-center py-[26px]">
      <Link to="/">
      <div className="logo w-[96px]">
          <LazyLoadImage
            alt="logo"
            src="https://global-mt.ru/local/templates/gmt/img/Logo.svg"
            effect="opacity"
          />
        </div>
      </Link>
       

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
