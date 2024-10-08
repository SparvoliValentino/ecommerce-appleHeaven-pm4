"use client"

import { useState } from "react"
import { ILoginProps } from "@/app/interfaces/ILogin"

import { validate } from "./validate"
import { login } from "@/app/helpers/authHelper"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"
import { useAuth } from "@/app/context/AuthContext"

import Cookies from 'js-cookie'

export const Login = () => {
    const {setUserData} = useAuth()
    const router = useRouter();
    const initialState = {
        email: "",
        password: "",
    }
    const [dataUser, setDataUser] = useState<ILoginProps>(initialState)
    const [errors, setErrors] = useState<ILoginProps>(initialState)


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
        newErrors[name as keyof ILoginProps] = validationResult[name as keyof ILoginProps] || "";

        setErrors(newErrors);

    }
    const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await login(dataUser)
        const {token,user} = response;
        localStorage.setItem("userToken", JSON.stringify({token,user}))
        Cookies.set('token',token)
        Swal.fire({
            title: "You have successfully logged",
            width:400,
            padding:"3em"
        });
        router.push("/Home")
        setUserData({token,user})
    }

    return (
        <form className="max-w-xl mx-auto h-auto shadow-xl p-3" onSubmit={handleSumbit} autoComplete="off">
            <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="emaial">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email-address"
                    value={dataUser.email}
                    className="block py-2.5 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-gray-500 placeholder:opacity-30" placeholder="Email" required
                    onChange={handleChange}
                />
                {errors.email && (
                    <p className="text-red-500">{errors.email} </p>
                )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="emaial">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={dataUser.password}
                    className="block py-2.5 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-gray-500 placeholder:opacity-30" placeholder="Password " required
                    onChange={handleChange}
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password} </p>
                )}
            </div>
            <div className="w-full flex justify-center items-center">
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            <h2>Don’t have an account yet? <a href="/register">Sign up</a></h2>
        </form>
    )
}

export default Login;