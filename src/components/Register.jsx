// import axios from 'axios';
// import React, { useState } from 'react';
// import {useForm} from "react-hook-form"

// function Register({open, setOpen}) {
    

//     const toggleModal = () => {
//         setOpen(!open);
//     };

// const { register,
//      handleSubmit,
//       formState: {errors}, 
//      } = useForm()


//      const dataSubmit = (dataForm) => {
//         console.log(dataForm)
//      }

//     return (
//         <div >
//             {open && (
//                 <div className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
//                     <div className="bg-white w-[400px] p-5 rounded-lg">
//                         <form onSubmit={handleSubmit(dataSubmit)} className='relative'>
//                         <button className="absolute top-2 right-2" onClick={toggleModal}>Close</button>

//                             <div className="inp">
//                                 <input  {...register("email", {require:true})} />
//                                 {errors.email && <p>email yoz</p>}
//                             </div>
//                             <div className="inp">
//                                 <input  id="password" {...register("password", {require:true})} />
//                                 {errors.password && <p>password yoz</p>}
//                             </div>

//                             <button type='submit'>send</button>
//                         </form>
//                     </div>
//                 </div>
//             )}
           
//         </div>
//     );
// }

// export default Register;



import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { requset } from '../constants/requset';

function Register({ open, setOpen }) {

    const toggleModal = () => {
        setOpen(!open);
        reset()
    };

    const { register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

   

    const dataSubmit = (dataForm) => {
        axios.post("https://reqres.in/api/login", {
            email: dataForm.email,
            password: dataForm.password
          })
          .then(function (response) {
            console.log(response.data.token);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(dataForm)
        reset()

    }

  
    return (
        <div>
            {open && (
                <div className="fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white w-[400px] p-5 rounded-lg">
                        <form onSubmit={handleSubmit(dataSubmit)} className='relative'>
                            <button className="absolute top-2 right-2" onClick={toggleModal}>Close</button>

                            <div className="inp">
                                <input type="email"  id="email" name="email"  {...register("email", { required: true })} />
                                {errors.email && <p>Email yozilishi shart</p>}
                            </div>
                            <div className="inp">
                                <input type="password" id="password" maxLength="10" minLength="8" {...register("password", { required: true }, )} />
                                {errors.password && <p>Parol 8-10 ta belgi bo'lishi shart</p>}
                            </div>

                            <button type='submit'>Yuborish</button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Register;
