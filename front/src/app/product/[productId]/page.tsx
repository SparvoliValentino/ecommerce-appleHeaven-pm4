// import {Product} from "@/app/Components/Product/Product";
import { fetchingProductById, fetchingProducts } from "@/app/helpers/productBackHelper";
import Card from "../../Components/card/Card"
import BackButon from "@/app/Components/BackButtom/page";
export const productDetail = async ({params}: {params:{productId:string}})=>{
    const product = await fetchingProductById(params.productId);
    return(
        <div className="w-full bg-gray-100 flex flex-col justify-center">
            <div className="max-w-[1500px] m-auto w-full p-3 mb-0">
                <BackButon
                    linkToRoute = "/product"
                />
            </div>
            <div className="max-w-[1500px] my-3 m-auto border-gray-200 border-2 rounded-md bg-white shadow-xl">
                    <Card
                        {...product}
                    /> 
            </div>
        </div>
    )
}

export default productDetail;