import React from "react";
import SearchIcon from "../../assets/icon/SearchIcon";

function HeaderSearch(props) {
  return (
    <div className="rounded-full max-w-[614px] flex justify-between border border-[#EFEFEF] border-solid items-center  gap-2 ">
      <p className="text-[14px] rounded-full text-secondary2 px-[15px]  py-[10px]  bg-[#EFEFEF]">Все категории</p>
      <div className="w-[400px]">
        <input className="w-full bg-primaryMilk py-[10px]"  type="text" id="search" name="search" placeholder="Поиск" />
      </div>
        <label className="bg-[#EFEFEF] py-[10px] px-[25px] rounded-full " htmlFor="search">
          <span className="w-[20px]  ">
            <SearchIcon />
          </span>
        </label>
    
    </div>
  );
}

export default HeaderSearch;
