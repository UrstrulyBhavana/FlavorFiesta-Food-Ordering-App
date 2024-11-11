import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
    console.log(items)
      
    const dispatch = useDispatch();
 
    const handleAddItem = (item) => {
      dispatch(addItem(item));
    }
   
    return (
        <div>
            { items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                      
                    <div className="w-9/12">
                          <div className="py-2">
                             <span className="font-semibold">{ item.card.info.name }</span>
                             <span className="font-bold"> -  ₹ { item.card.info.price/100 || item.card.info.defaultPrice/100  }</span>
                           </div>

                           <p className="text-sm text-gray-500">{ item.card.info.description }</p>
                    </div>

                    <div className="w-3/12 p-4">
                        <div className="absolute">
                         <button  className="p-2 mx-14 bg-white text-green-600 font-bold border border-green-600 rounded-lg shadow-md 
                         hover:bg-green-600 hover:text-white hover:shadow-lg 
                          focus:outline-none focus:ring-2 focus:ring-green-300 
                          active:bg-green-700 transition duration-150 ease-in-out"
                            onClick={() => handleAddItem(item)}>
                            Add +
                          </button>

                        </div>
                        <img src={ CDN_URL + item.card.info.imageId} className="aspect-square rounded-lg bg-cover border border-gray-300 shadow-lg  "/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;


