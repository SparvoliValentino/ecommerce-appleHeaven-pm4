"use client"
import IProduct from "@/app/interfaces/IProducts";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";

export const Card: React.FC<IProduct> = ({id,name,image,description,stock,price,categoryId}) => {

    const {userData} = useAuth();
    const router = useRouter();
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if(userData?.token ){
            const cart = JSON.parse(localStorage.getItem("cart") || "[]" )
            const productExist = cart.some((product:IProduct)=>{
                if(product.id ===id ) return true
                return false;
            })
            if(productExist){
                Swal.fire({
                    title:"This products already exist in your cart",
                    width:400,
                    padding:"3em"
                })
                router.push("/order/cart");
            }else{
                Swal.fire({
                    title: "You will add this product to your cart!",
                    text: "Are you sure?",
                    icon: "warning",
                    confirmButtonColor: "#3085d6",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      addToCart({ id, name, image, description, stock, price, categoryId });
                      Swal.fire("Added!", "The product has been added to your cart.", "success");
                    }
                  });
            }
        }else{
            Swal.fire({
                title: "Stop!",
                text: "You must been logged in to add products!",
                icon: "warning",
                confirmButtonColor: "#3085d6",
              }).then((result) => {
                if (result.isConfirmed) {
                  router.push("/login");
                }
              });
        }
    }
    return (
        <div>
            <div className="flex w-full p-1 mt-4">
                <div className="w-3/4 flex justify-center ">
                    <div className="border-gray-200 rounded-md border-2 shadow-xl">
                        <img src={image} alt="" className="w-auto" />
                    </div>
                </div>
                <div className="w-1/4 h-[500px] flex flex-col justify-evenly items-start border-gray-200 border-2 rounded-md mr-4 shadow-xl p-2 ">
                    <h2 className="text-[50px]">{name}</h2>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1">
                            {/* Estrella 1 */}
                            <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            {/* Estrella 2 */}
                            <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            {/* Estrella 3 */}
                            <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            {/* Estrella 4 */}
                            <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            {/* Estrella 5 (vacía) */}
                            <svg
                                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
                    </div>
                    <p className="text-[100px] font-bold">${price}</p>
                    <div className="flex w-full items-start">
                        <h2 className="ml-2 mr-2">Stock:</h2>
                        <p>{stock}</p>
                    </div>
                    <button 
                        className="bg-blue-700 text-white p-2 mr-4 rounded-lg w-full"
                        onClick={handleAddToCart}
                        >
                            Add to Cart
                    </button>
                </div>
            </div>
            <div className="mt-4 flex flex-col justify-center p-6">
                <h2 className="text-[30px] font-bold text-gray-600">Product description:</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default Card;