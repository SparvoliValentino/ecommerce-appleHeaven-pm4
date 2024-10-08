import { METHODS } from "http";
import { ILogin, ILoginProps } from "../interfaces/ILogin";
import axios from "axios";
import { IRegister, IRegisterProps } from "../interfaces/IRegister";
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (userInfo: ILoginProps) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        });

        // Verificar si la respuesta fue exitosa (código 2xx)
        if (!response.ok) {
            const errorResponse = await response.json(); // Obtener el mensaje del error del servidor
            throw new Error(errorResponse.message || `HTTP error! status: ${response.status}`);
        }

        // Verificar el tipo de contenido de la respuesta
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
            const userLogin: ILogin = await response.json(); // Convertimos a JSON si el contenido es JSON
            console.log(userLogin);
            return userLogin;
        } else {
            throw new Error("El servidor no devolvió un JSON válido.");
        }
    } catch (error: any) {
        // Manejamos el error y mostramos una alerta si es necesario
        Swal.fire({
            title: error.message || "Ocurrió un error durante el inicio de sesión",
            width: 400,
            padding: "3em"
        });
        throw new Error(error.message || "Error desconocido");
    }
};


export const register = async (userInfo: IRegisterProps)=>{
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userInfo)
        })
        // Verificar si la respuesta fue exitosa (código 2xx)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Verificar el tipo de contenido de la respuesta
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
            const userRegister: IRegister = await response.json(); // Convertimos a JSON si el contenido es JSON
            console.log(userRegister);
            return userRegister;
        } else {
            throw new Error("El servidor no devolvió un JSON válido.");
        }
    } catch (error:any) {
        throw new Error(error);
    }
}