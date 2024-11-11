import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

     const handleClearCart = () => {
        dispatch(clearCart());
     }

  return (
    <div className="text-center m-4 p-4">
         <div className="flex items-center justify-center gap-x-10">
           <h1 className="text-2xl font-bold">Cart Page</h1>

           <button className="p-2 bg-white text-green-600 font-bold border border-green-600 rounded-lg shadow-md 
             hover:bg-green-600 hover:text-white hover:shadow-lg 
             focus:outline-none focus:ring-2 focus:ring-green-300 
             active:bg-green-700 transition duration-150 ease-in-out"
               onClick={handleClearCart}>
              Clear Cart
          </button>

         </div>
       
        <div className="w-6/12 m-auto p-2">

            {cartItems.length === 0 && (
             <h1 className="p-4 text-amber-700 font-bold">Food Ordering App's Cart is Empty , Please Add Items to the Cart !!🛒</h1>
            )}
        
            <ItemList  items={cartItems} />  
        </div>
    </div>
  );
};



export default Cart;