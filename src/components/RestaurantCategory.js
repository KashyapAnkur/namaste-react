import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const { title, itemCards } = data;
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    };

    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer " onClick={handleClick}>
                    <span className="font-bold text-lg">{title} ({itemCards?.length})</span>
                    <span>{showItems ? '➡️' : '⬇️'}</span>
                </div>
                {showItems && <ItemList itemCards={itemCards} />}
            </div>
            {/* Accordion body */}
        </div>
    )
}

export default RestaurantCategory;