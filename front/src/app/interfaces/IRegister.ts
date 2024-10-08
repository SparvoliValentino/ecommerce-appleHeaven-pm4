export interface IRegister {
    email:string;
    password:string;
    name:string;
    address:string;
    phone:string;
    token:string;
    id:number;
}

export interface IRegisterProps{
    email:string,
    password:string,
    repeatPassword:string,
    name:string,
    // lastName:string,
    address:string,
    phone:string,
}



// "email": "valenspavoli@gmail.com",
// "password":"admin",
// "name":"valentino",
// "address": "roca269",
// "phone": "iphone"