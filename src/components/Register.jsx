import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

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
    console.log(data);
    console.log(dataForm);

    reset();
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {open && (
        <div className="fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white w-[400px] p-5 rounded-lg">
            <form onSubmit={handleSubmit(dataSubmit)} className="relative">
              <button className="absolute top-2 right-2" onClick={toggleModal}>
                Close
              </button>

              <div className="inp">
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>Email yozilishi shart</p>}
              </div>
              <div className="inp">
                <input
                  type="password"
                  id="password"
                  maxLength="10"
                  minLength="8"
                  {...register("password", { required: true })}
                />
                {errors.password && <p>Parol 8-10 ta belgi bo'lishi shart</p>}
              </div>

              <button type="submit">Yuborish</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
