"use client"

import { useAuth } from "@/app/context/AuthContext";
import { getOrders } from "@/app/helpers/ordersHelper";
// import { IUserData } from "@/app/interfaces/ILogin";
import { IOrder } from "@/app/interfaces/IOrder";
// import IProduct from "@/app/interfaces/IProducts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Orders = ()=>{

    const router = useRouter();
    const [orders,setOrders]=useState<IOrder[]>([])
    const {userData} = useAuth();

    const fetchData = async ()=>{
        console.log(orders)
        const response = await getOrders(userData?.token!)
        // debugger
        setOrders(response);
    }

    useEffect(()=>{
        if(userData?.user.name){
           userData?.user.name === undefined ? router.push("/login") : fetchData()
        }
    },[userData?.user])


    return(
        <div className="flex flex-col bg-white w-full">
            <div className="max-w-[1500px] min-h-[700px] m-auto">
                <div className="my-6 w-full min-w-[1500px] border-b-4 flex justify-center">
                    <h1 className="justify-center text-[50px] p-1 font-semibold">Mis compras</h1>
                </div>
                <div className="min-h-[300px] flex flex-col justify-evenly items-center border-transparent rounded-md shadow-full-inset">
                    {
                        orders && orders.length > 0 ? (
                            orders.map((order) => (
                                <div className=" w-3/4 flex p-2 gap-2 justify-evenly border-black border-2" key={order.id}>
                                    <div className="mt-0 flex flex-col justify-evenly min-h-full items-center">
                                        <h2 className="text-xl">Products you bought:</h2>
                                        {order.products.map((product) => (
                                        
                                                <ul className="flex flex-col" key={product.id}>
                                                    <li className="text-lg">{product.name}</li>
                                                </ul>
                                        ))}
                                    </div>
                                    <div className=" mt-0 flex flex-col min-h-full justify-evenly items-center">
                                        <h2 className="text-xl">Status of the order:</h2>
                                        <h2 className={order?.status === 'approved' ? 'text-green-500' : 'text-red-500'}>
                                            {order?.status === 'approved' ? 'Order Approved' : 'Order Not Approved'}
                                        </h2>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>
                                No hay ordenes
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Orders;