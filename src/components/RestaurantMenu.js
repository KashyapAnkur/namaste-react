import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info;
    const data = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="menu text-center">
            <h1 className="font-bold">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ") } - {costForTwoMessage}</p>
            {/* Categories Accordion */}
            {categories.map((category) => <RestaurantCategory data={category?.card?.card} key={category?.card?.card?.title} />)}
        </div>
    )
}

export default RestaurantMenu;