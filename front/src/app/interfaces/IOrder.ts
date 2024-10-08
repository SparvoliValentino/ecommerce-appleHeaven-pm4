import IProduct from "./IProducts";

export interface IOrder{
    id:number;
    status:string;
    date:Date;
    products: IProduct[];
}

export interface IOrderProps {
    products:[];
    userId:number;
}



