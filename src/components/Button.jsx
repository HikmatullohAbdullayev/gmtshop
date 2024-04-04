

function Button({ primary,secondary,secondary2,  children, btn }) {
    return (
        <button
        onClick={btn}
         className={`py-[11px] px-[30px] rounded-full font-semibold
         ${primary ? "bg-primaryGray text-white hover:bg-secondaryGray100 focus:outline focus:outline-white  active:bg-[#066753]" : ""}
         ${secondary ? "bg-white text-primaryGray border border-[#D5D1E1]  border-solid hover:border-primaryGray focus:bg-secondaryGray90 active:border-primaryGray active:text-primaryGray" : ""}
         ${secondary2 ? "bg-white text-black border border-[#D5D1E1]  border-solid  hover:border-primaryGray focus:bg-secondaryGray90 active:bg-white" : ""}
         
         `} 
         >
            {children}
        </button>
    );
}

export default Button;

