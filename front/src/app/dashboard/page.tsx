"use client"

import { useEffect, useState } from "react";
import { IUserData } from "../interfaces/ILogin";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";
import { NextResponse } from "next/server";
import Cookies from 'js-cookie'


export const Dashboard = () => {

    const router = useRouter();
    const { userData } = useAuth();

    const handleLoggedOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will have to Sing up again!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Logout!",
                    icon: "success"
                });
                localStorage.removeItem("userToken")
                localStorage.removeItem("cart")
                Cookies.remove('token', { path: '/' });
                router.push("/login")
            }
        });
    }

    return (
        <div className="w-full bg-white flex justify-center">
            <div className="max-w-[1500px] min-h-[800px] mx-auto w-full flex flex-col justify-evenly items-center text-2xl rounded-md shadow-xl">
                <div>
                    <h2 className="font-bold text-[50px]">Welcome to your dashboard!</h2>
                </div>
                <div className="flex w-1/2 justify-evenly items-center border-gray-600 border-2 p-2 rounded-md shadow-xl">
                    <h2 className="w-1/2 text-center">Name:</h2>
                    <h2 className="w-1/2 text-center">{userData?.user.name}</h2>
                </div>
                <div className="flex w-1/2 justify-evenly border-gray-600 border-2 p-2 rounded-md shadow-xl">
                    <h2 className="w-1/2 text-center">Email address:</h2>
                    <h2 className="w-1/2 text-center">{userData?.user.email}</h2>
                </div>
                <div className="flex w-1/2 justify-evenly border-gray-600 border-2 p-2 rounded-md shadow-xl">
                    <h2 className="w-1/2 text-center">Address:</h2>
                    <h2 className="w-1/2 text-center">{userData?.user.address}</h2>
                </div>
                <div className="flex w-1/2 justify-evenly border-gray-600 border-2 p-2 rounded-md shadow-xl">
                    <h2 className="w-1/2 text-center">Phone:</h2>
                    <h2 className="w-1/2 text-center">{userData?.user.phone}</h2>
                </div>
                <div className="flex w-1/2 justify-evenly border-gray-600 border-2 p-2 rounded-md shadow-xl">
                    <h2 className="w-1/2 text-center">Orders:</h2>
                    {
                        userData?.user?.orders?.length === 0 ? (
                            <p className="w-1/2 text-center">You dont have any order yet</p>
                        ) : (
                            <p className="w-1/2 text-center"><a href="/dashboard/orders">See your orders</a></p>
                        )
                    }
                </div>
                <button
                    onClick={handleLoggedOut}
                    className="w-1/4 bg-blue-600 p-2 rounded-md text-white shadow-lg hover:bg-blue-300"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};



{/* <div className="w-full">
            <div className="min-w-[1200px] min-h-[700px] max-w-[1500px] m-auto ">
                <div className=" bg-white rounded-md border-gray-400 border-2 shadow-xl flex">
                    <div className="w-1/4 bg-gray-300 p-4 flex flex-col">
                        <h2 className="m-auto">Apple Heaven</h2>
                        <ul className="my-5 bg-green-600 p-2 flex flex-col justify-center items-center">
                            <li className="w-full hover:bg-slate-400 text-center rounded-md ">Account Settings</li>
                            <li className="w-full mt-4 hover:bg-slate-400 text-center">Sing out</li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-4">
                        <h2>Username</h2>
                        <h2>Valentino</h2>
                        <h2>Address</h2>
                        <h2>Address</h2>
                        <h2>Username</h2>
                        <h2>Valentino</h2>
                        <h2>Address</h2>
                        <h2>Address</h2>
                        <h2>Username</h2>
                        <h2>Valentino</h2>
                        <h2>Address</h2>
                        <h2>Address</h2>
                        
                    </div>
                </div>
            </div>
        </div> */}

export default Dashboard;
