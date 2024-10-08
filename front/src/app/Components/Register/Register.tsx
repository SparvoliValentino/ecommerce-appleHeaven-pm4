"use client"

import { useState } from "react"

import { IRegisterProps } from "@/app/interfaces/IRegister"


import { validate } from "./validate"
import { register } from "@/app/helpers/authHelper"

import Swal from "sweetalert2"
import { useRouter } from "next/navigation"

export const Register = () => {

    const router= useRouter();
    const initialState = {
        email: "",
        password: "",
        repeatPassword: "",
        name: "",
        phone: "",
        address: ""
    }
    const [dataUser, setDataUser] = useState<IRegisterProps>(initialState)
    const [errors, setErrors] = useState<IRegisterProps>(initialState)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setDataUser({
            ...dataUser,
            [name]: value,
        });

        // Crear un objeto de errores temporal que copia los actuales
        const newErrors = { ...errors };

        // Validar solo el campo específico
        const validationResult = validate({ ...dataUser, [name]: value });

        console.log(newErrors)
        // Aquí nos aseguramos de que el valor sea siempre una cadena
        newErrors[name as keyof IRegisterProps] = validationResult[name as keyof IRegisterProps] || "";

        setErrors(newErrors);

    }
    const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await register(dataUser);
        Swal.fire({
            title:"You have successfully registered",
            width:400,
            padding:"3em"
        });
        router.push("/login")
    }

    return (
        <form className="max-w-xl mx-auto h-auto shadow-xl p-3" onSubmit={handleSumbit} autoComplete="off">
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="email"
                    id="email-address"
                    value={dataUser.email}
                    className="block py-2.5 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email" required
                    onChange={handleChange}
                />
                {errors.email && (
                    <p className="text-red-500">{errors.email} </p>
                )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={dataUser.password}
                    className="block py-2.5 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Password " required
                    onChange={handleChange}
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password} </p>
                )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="password"
                    name="repeatPassword"
                    id="repeatPassword"
                    value={dataUser.repeatPassword}
                    className="block py-2.5 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Repeat Password" required
                    onChange={handleChange}
                />
                {errors.repeatPassword && (
                    <p className="text-red-500">{errors.repeatPassword} </p>
                )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={dataUser.name}
                    className="block py-2.5 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Full name" required
                    onChange={handleChange}
                />
                {errors.name && (
                    <p className="text-red-500">{errors.name} </p>
                )}
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={dataUser.phone}
                        className="block py-2.5 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Phone Number" required
                        onChange={handleChange}
                    />
                    {errors.phone && (
                        <p className="text-red-500">{errors.phone} </p>
                    )}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={dataUser.address}
                        className="block py-2.5 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Adress" required
                        onChange={handleChange}
                    />
                    {errors.address && (
                        <p className="text-red-500">{errors.address} </p>
                    )}
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            <div className="w-full mt-4 flex flex-col justify-center items-center">
                <h2 className="italic text-black">Do you have an account?</h2>
                <button className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Sing up</button>
            </div>
        </form>
    )
}

export default Register;