import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button";

function Register({ open, setOpen }) {
  // const [token, setToken] = useState("")

  const toggleModal = () => {
    setOpen(!open);
    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dataSubmit = (dataForm) => {
    axios
      .post("https://reqres.in/api/login", {
        email: dataForm.email,
        password: dataForm.password,
      })
      .then(function (response) {
        const data = response.data.token;
        localStorage.setItem("userInfo", data);
        toast.success("Xush kelibsiz");
      })
      .catch(function (error) {
        toast.error("Emailda xatolik bor");
        console.log(error);
      });
   

    reset();
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {open && (
        <div className="fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white w-[400px] p-5 rounded-lg">
            <form  onSubmit={handleSubmit(dataSubmit)} className="relative bg-secondaryGray90 p-2">
             <div className="absolute top-0 right-0"> 
             <Button secondary2={true} onClick={toggleModal}>
                x
              </Button></div>

              <div className="p-2 mt-10 ">
                <input className="w-full p-2 rounded-lg outline-primaryGray"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-primaryGray p-2">Email yozilishi shart</p>}
              </div>
              <div className="p-2">
                <input
                className="w-full p-2 rounded-lg outline-primaryGray"
                  type="password"
                  id="password"
                  maxLength="10"
                  minLength="8"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p  className="text-primaryGray p-2">Parol 8-10 ta belgi bo'lishi shart</p>}
              </div>

              <Button secondary={true} type="submit">Yuborish</Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
