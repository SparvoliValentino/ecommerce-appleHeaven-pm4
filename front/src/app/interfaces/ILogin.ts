import IProduct from "./IProducts";
import { IRegister } from "./IRegister";

export interface ILogin {
    login:boolean,
    user: {
        id?: number,
        name?:string,
        email?:string,
        address?: string,
        phone?: string,
        role?: string,
        credential?: {
            id:number,
            password:string
        },
        orders?: []
    },
    token:string
}

export interface ILoginProps{
    email:string,
    password:string
}

export interface IUserData{
    user: {
        id?: number,
        name?:string,
        email?:string,
        address?: string,
        phone?: string,
        role?: string,
        credential?: {
            id:number,
            password:string
        },
        orders?: IProduct[]
  },
  token: string
}
