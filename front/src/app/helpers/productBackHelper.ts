import IProduct from "../interfaces/IProducts";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const fetchingProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await fetch(`${API_URL}/products`,{
            next: {revalidate:1200}
        });
        const products = response.json()
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchingProductById = async (id:string):Promise<IProduct> =>{
    try {
        const products: IProduct[] = await fetchingProducts();
        const productById = products.find((product)=>product.id.toString()===id)
        if(!productById) throw new Error("Product not found")
        return productById;
    } catch (error:any) {
        throw new Error(error)
    }
}

export const fetchingProductByCategory = async(categoryId:string):Promise<IProduct[]> =>{
    try {
        const products:IProduct[] = await fetchingProducts();
        const productsCategory:IProduct[] = products.filter(product => product.categoryId.toString() === categoryId);
        return productsCategory;
    } catch (error:any) {
        throw new Error(error)
    }
}

