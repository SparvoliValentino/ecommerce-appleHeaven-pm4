"use client";
import CartOrderCard from "@/app/Components/CartOrderCard/CartOrderCard";
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";
import { createOrder } from "@/app/helpers/ordersHelper";
import Swal from "sweetalert2";

export const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const { userData } = useAuth();

    const handleDeleteProduct = (productId: number) => {
        Swal.fire({
            title: "You will delete this product from your cart!",
            text: "Are you sure?",
            icon: "warning",
            confirmButtonColor: "#3085d6",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(productId);
            }
        });
    };
    
    const handlePurchase = async () => {
        const idProduct = cart.map((product) => product.id);

        if (userData?.user?.id) {
            try {
                const newOrder = await createOrder(idProduct, userData.token, userData.user.id);
                const storedUserToken = localStorage.getItem("userToken");
                if (storedUserToken) {
                    const parsedUserToken = JSON.parse(storedUserToken);
                    parsedUserToken.user.orders = parsedUserToken.user.orders || [];
                    parsedUserToken.user.orders.push(newOrder);
                    localStorage.setItem("userToken", JSON.stringify(parsedUserToken));
                }
                Swal.fire({
                    title: "Buy successfully",
                    width: 400,
                    padding: "3em",
                });
                clearCart();
            } catch (error) {
                console.error("Error creating order:", error);
            }
        } else {
            Swal.fire({
                title: "You have an error, please try again later",
                width: 400,
                padding: "3em",
            });
        }
    };
    return (
        <div className="w-full h-full bg-gray-100 p-5">
            <div className="bg-white max-w-[1500px] flex-grow flex flex-col justify-center min-h-[700px] m-auto shadow-full-inset rounded-md p-3">
                <div className="flex flex-col justify-center items-center">
                    <div className="border-b-4 border-gray-400 w-full mb-6">
                        <h2 className="text-[50px] text-center">Your cart</h2>
                    </div>
                    {
                        cart && cart.length > 0 ? (
                            cart.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex flex-col justify-evenly items-center w-full max-w-[1500px] min-h-[200px] m-auto h-full"
                                >
                                    <CartOrderCard
                                        name={product.name}
                                        price={product.price}
                                        image={product.image}
                                        onDelete={() => handleDeleteProduct(product.id)} // Pasar la función de eliminación
                                    />
                                </div>
                            ))
                        ) : (
                            <div>
                                <h2>You don't have anything in your cart</h2>
                            </div>
                        )
                    }
                </div>
                <div className="w-full h-auto flex justify-center p-5 mt-auto">
                    <button
                        className="w-1/2 bg-green-600 rounded-lg text-[30px] font-bold hover:bg-green-400"
                        onClick={handlePurchase}
                    >
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
