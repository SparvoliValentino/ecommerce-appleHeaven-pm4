// import products from "../../helpers/productsHelper"

export const product = () => {
    return (
        <div className='w-full bg-white flex justify-center items-center h-full flex-col' >
            <div className="my-6 w-full max-w-[1050px] border-b-4 flex justify-center">
                <h2 className="text-black text-4xl mb-3">Our products</h2>
            </div>
            <div className=" max-w-[1000px] mx-auto flex flex-wrap justify-evenly gap-4 mb-11" >
                {
                    products.map((product) => (
                        <div key={product.id} className="flex flex-col w-[200px] h-[300px] border border-gray-400 m-auto rounded-xl justify-center items-center hover:text-blue-700 shadow-custom-inset">
                            <h2 className="font-medium text-xl">{product.name}</h2>
                            <div className="min-w-[160px] min-h-[230px] flex justify-center items-center p-1">
                                <img src={product.image} alt="" />   
                            </div>
                            <h2>${product.price}</h2>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default product;

// export default Product;