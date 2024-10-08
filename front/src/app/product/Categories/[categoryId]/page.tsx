import FilterProductsForm from "@/app/Components/FilterProductsForm/FilterProductsForm";
import ProductList from "@/app/Components/ProductsList/ProductsLIst";
import { fetchingProductByCategory } from "@/app/helpers/productBackHelper";



export const Category = async ({ params }: { params: { categoryId: string } }) => {


    const productsByCategory = await fetchingProductByCategory(params.categoryId);


    return (
        <div className="w-full bg-white flex justify-center items-center h-full flex-col">
            <div className="max-w-[1500px] m-auto">
                <div className="text-[60px] w-full flex justify-center items-center border-b-4 mb-3">
                    {
                        params.categoryId === "1" ? (
                            <h2>SmarthPhones</h2>
                        ) : params.categoryId === "2" ? (
                            <h2>Laptops</h2>
                        ) : params.categoryId === "3" ? (
                            <h2>Tablets</h2>
                        ) : params.categoryId === "4" ? (
                            <h2>Headphones</h2>
                        ) : params.categoryId === "5" ? (
                            <h2>Cameras</h2>
                        ) : params.categoryId === "6" ? (
                            <h2>Monitors</h2>
                        ) : params.categoryId === "7" ? (
                            <h2>Storage</h2>
                        ) : params.categoryId === "8" ? (
                            <h2>Accessories</h2>
                        ) : (
                            <h2>Categories</h2>
                        )
                    }
                </div>
                <div className='flex min-w-[1000px] max-w-[1000px] m-auto'>
                    <div>
                        <FilterProductsForm/>
                    </div>
                    <div className="max-w-[1000px] mx-auto flex flex-wrap justify-evenly gap-4 mb-11">
                        {
                            productsByCategory.map((product) => (
                                <ProductList
                                    key={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    id={product.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;