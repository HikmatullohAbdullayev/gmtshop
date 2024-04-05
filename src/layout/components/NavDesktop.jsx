import React, { useState } from 'react';
import LoginIcon from "../../assets/icon/LoginIcon"
import LogOutIcon from "../../assets/icon/LogOutIcon"
import FavoriteIcon from "../../assets/icon/FavoriteIcon"
import ChartsIcon from "../../assets/icon/ChartsIcon"
import ProductIcon from "../../assets/icon/ProductIcon"

function NavDesktop({toggleModal}) {

    const [token, setToken] = useState(null)
    
    return (
        <nav>
            <ul className=' flex justify-between items-center gap-[25px]'>
                <li className='p-1 flex flex-col justify-between items-center gap-[6px]'>
                    <span className='w-[18px]  '  onClick={toggleModal}>
                        <LoginIcon/>
                    </span>
                    <p className=' text-[14px] text-secondary2'> 
                    Войти 
                    </p>
                </li>
                <li className='p-1 flex flex-col justify-between items-center gap-[6px]'>
                    <span className='w-[20px] '>
                        <FavoriteIcon/>
                    </span>
                    <p className=' text-[14px] text-secondary2'> 
                    Избранное 
                    </p>
                </li>
                <li className='p-1 flex flex-col justify-between items-center gap-[6px]'>
                    <span className='w-[18px] '>
                        <ChartsIcon/>
                    </span>
                    <p className=' text-[14px] text-secondary2'> 
                    Сравнить 
                    </p>
                </li>
                <li className='p-1 flex flex-col justify-between items-center gap-[6px]'>
                    <span className='w-[20px] '>
                        <ProductIcon/>
                    </span>
                    <p className=' text-[14px] text-secondary2'> 
                    Корзина 
                    </p>
                </li>
            </ul>
            
        </nav>
    );
}

export default NavDesktop;NavDesktop