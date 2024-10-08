import { IOrder, IOrderProps } from "../interfaces/IOrder";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createOrder = async (products: number[], token:string, userId:number)=> {
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                Authorization:token
            },
            body: JSON.stringify({products, userId})
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response.status)
        const orders = await response.json()
        console.log(orders)
        return orders;

    } catch (error) {
        console.error("Error fetching products:", error);
        // return [];
    }
};

export const getOrders = async (token:string)=> {
    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            method:"GET",
            headers: {
                Authorization:token
            }
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const orders = await response.json()
        return orders;

    } catch (error) {
        console.error("Error fetching products:", error);
        // return [];
    }
};