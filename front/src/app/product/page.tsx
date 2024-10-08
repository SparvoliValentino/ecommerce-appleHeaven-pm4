import ProductList from '../Components/ProductsList/ProductsLIst';
import { fetchingProducts } from '../helpers/productBackHelper';
import FilterProductsForm from '../Components/FilterProductsForm/FilterProductsForm';

export const Products = async () => {
    const products = await fetchingProducts();

    return (
        <div className='w-full bg-white flex justify-center items-center h-full flex-col'>
            <div className="max-w-[370px] md:max-w-[1500px] m-auto">
                <div className="my-6 max-w-[370px] md:max-w-[1500px] border-b-4 flex justify-center">
                    <h2 className="text-black text-xl md:text-4xl mb-3">Our products</h2>
                </div>
                <div className='flex flex-col md:flex-row min-w-[1000px]'>
                    <div>
                        <FilterProductsForm />
                    </div>
                    <div className="w-[370px] md:w-full sm:max-w-[800px] md:mx-auto flex flex-wrap justify-center md:justify-evenly md:gap-1 md:mb-11">
                        {
                            products.map((product) => (
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
    );
}

export default Products;




