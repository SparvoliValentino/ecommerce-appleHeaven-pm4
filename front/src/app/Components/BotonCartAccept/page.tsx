import { addProduct } from "@/app/helpers/ordersHelper";
import { IOrder, IOrderProps } from "@/app/interfaces/IOrder";

export const BotonCartAccept: React.FC<IOrderProps>  = ({products, userId})=>{
    
    function handleAcceptOrder(){
        addProduct({products,userId})
        console.log(addProduct);
        throw alert("Su pedido fue exitoso")
    }
    
    return(
        <div>
            <button
                onClick={handleAcceptOrder}
            >Accept</button>
        </div>
    )
}

export default BotonCartAccept;