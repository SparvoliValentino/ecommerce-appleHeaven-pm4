// import IProduct from "@/app/interfaces/IProducts";
import Link from "next/link";

export const ProductList = ({ id, name, image, price }: { id: number, name: string, image: string, price: number }) => {
    return (
        <div className="w-[150px] p-2 justify-center md:max-w-[700px] md:min-w-[200px] md:w-auto md:mx-auto flex flex-wrap md:justify-evenly md:gap-4 md:mb-11">
            <Link href={`product/${id}`}>
                <div key={id} className="bg-white flex flex-col w-[100px] h-[150px] md:w-[200px] md:h-[300px] border-transparent m-auto rounded-xl justify-center items-center hover:text-blue-700 shadow-xl ">
                    <h2 className="font-medium w-full text-center text-sm truncate md:text-xl">{name}</h2>
                    <div className="w-auto md:min-w-[160px] md:min-h-[230px] md:flex md:justify-center md:items-center md:p-1">
                        <img src={image} alt={name} className="w-full" />
                    </div>
                    <h2 className="text-base">${price}</h2>
                </div>
            </Link>
        </div>
    );
}

export default ProductList;
