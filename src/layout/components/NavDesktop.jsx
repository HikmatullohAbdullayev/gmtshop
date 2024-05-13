import React, { useEffect, useState } from "react";
import LoginIcon from "../../assets/icon/LoginIcon";
import LogOutIcon from "../../assets/icon/LogOutIcon";
import ProductIcon from "../../assets/icon/ProductIcon";
import { Link } from "react-router-dom";

function NavDesktop({ toggleModal }) {
  const userLogin = localStorage.getItem("userInfo");

  const removeLogin = () => localStorage.removeItem("userInfo");

  return (
    <nav>
      <ul className=" flex justify-between items-center gap-[25px]">
        <li className="p-1 flex flex-col justify-between items-center gap-[6px] cursor-pointer">
          {userLogin ? (
            <span className="w-[18px]  " onClick={removeLogin}>
              <LogOutIcon />
            </span>
          ) : (
            <span className="w-[18px]  " onClick={toggleModal}>
              <LoginIcon />
            </span>
          )}

          <p className=" text-[14px] text-secondary2">Войти</p>
        </li>
               <li className="p-1 flex flex-col justify-between items-center gap-[6px] cursor-pointer">
         <Link to="favorite">
         <span className="w-[20px] ">
            <ProductIcon />
          </span>
          </Link>
          <p className=" text-[14px] text-secondary2">Корзина</p>
        </li>
      </ul>
    </nav>
  );
}

export default NavDesktop;
NavDesktop;
