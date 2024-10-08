export const CartOrderCard = ({name, price,image, onDelete} : {name:string , price:number , image:string, onDelete: () => void}) => {
    
    const handleDeleteProduct = () => {
        // Obtenemos el array de productos desde localStorage
        const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');

        // Filtramos el producto a eliminar basado en una propiedad única
        const updatedProducts = storedProducts.filter((product: { name: string; price: number; image: string }) => {
            return product.name !== name; // Podrías usar otra propiedad si es más única, como id
        });

        // Guardamos el nuevo array en localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        // Opcionalmente puedes agregar una notificación o recargar el componente
        console.log(`${name} eliminado del carrito.`);
    };
    
    return (
        <div className="w-3/4 shadow-xl flex justify-evenly items-center p-3 border-gray-600 border-2 rounded-md">
            <img
                src={image}
                alt=""
                className="w-[100px] h-[100px]"
            />
            <h2>{name}</h2>
            <h2>{price}</h2>
            <button onClick={onDelete} className="w-[50px] h-[50px] bg-red-300 rounded-full">X</button>
        </div>
    )
}

export default CartOrderCard;