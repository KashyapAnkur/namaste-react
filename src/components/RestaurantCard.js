import { CDN_URL } from "../utils/constants";
/* eslint-disable */
const RestaurantCard = (props) => {
    const { resData } = props;
    const { 
        cloudinaryImageId, 
        name, 
        avgRating, 
        cuisines, 
        slaString, 
        sla
    } = resData;
  
    return (
        <div data-testid="resCard" className="res-card p-4 m-1 w-[190px] bg-gray-100 hover:bg-gray-200">
            <img
                className="res-logo rounded-lg"
                src={`${CDN_URL}${cloudinaryImageId}`}
                alt="res-logo"
            ></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating.toFixed(1)} stars</h4>
            <h4>{sla.slaString} minutes</h4>
        </div>
    )
};


// Higher order component
// input - restaurantCard => resraurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {

    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-1 m-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
};

export default RestaurantCard;