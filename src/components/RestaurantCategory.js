import ItemList from "./ItemList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const RestaurantCategory = ({ data , showItems , setShowIndex}) => {
    console.log(data);

    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-3"> 
            {/* Header */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                  <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                  </span>
                  <span>
                     <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </div>

                { showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;