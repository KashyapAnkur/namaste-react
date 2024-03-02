import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemCards }) => {

    const dispatch = useDispatch();
    const handleAction = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    };

    return (
        <div>
            {itemCards.map(item => (
                <div
                    data-testid="foodItems"
                    key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                    <div className="w-3/4">
                        <div className="py-2">
                            <span>
                                {item?.card?.info?.name}{" "}
                            </span>
                            <span>
                                - ₹{
                                    item?.card?.info?.price ? 
                                    (item?.card?.info?.price / 100).toFixed(2) : 
                                    (item?.card?.info?.defaultPrice / 100).toFixed(2)
                                }
                            </span>
                        </div>
                        <p className="text-xs">
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="relative">
                            <button
                                className="mx-6 text-xs -bottom-3 rounded-lg bg-purple-600 text-white shadow-lg absolute w-16 h-7"
                                onClick={() => handleAction(item)}    
                            >Add +</button>
                            <img src={CDN_URL + item?.card?.info?.imageId} />
                        </div>
                        
                    </div>
                </div> 
            ))}
        </div>
    )
}

export default ItemList;