import React, { useState,  useEffect, useContext } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");
    // const { loggedInUser, setUserName } = useContext(UserContext);
    const [foundItems, setFoundItems] = useState(0);

    const handleListOfRestaurants = () => {
        const filteredRes = listOfRestaurants.filter((res) => {
            return res.info.avgRating >= 4.3
        });
        setListOfRestaurants(filteredRes);
    };

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // If no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => then useEffect is called on initial render(just once)
    // if dependency array is [brnNameReact] => called everytime brnNameReact is updated
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const jsondata = await data.json();

            if(data.status !== 200) {
                throw new Error("Invalid Data", data.status);
            }
            setListOfRestaurants(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setOriginalListOfRestaurants(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch(err) {
            console.log(err, "ERROR!");
        }
    }

    const handleSearchFilter = () => {
        const filteredList = originalListOfRestaurants.filter((lor) => {
            return lor.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setListOfRestaurants(filteredList);
        setFoundItems(filteredList.length);
    };

    const handleSetSearch = (e) => {
        setSearchText(e.target.value);
        if(e.target.value.length === 0) {
            setListOfRestaurants(originalListOfRestaurants);
            setFoundItems(0);
        }
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return <h1>Looks like you are offline!! Please check your Internet connection</h1>;
    }

    return (
        <div className="body">
            <div className="filter flex">
                <div className="search p-4">
                    <input type="text" data-testid="searchInput" className='search-box border border-solid border-black' value={searchText} onChange={handleSetSearch} />
                    <button className="search-btn rounded-lg px-4 py-2 bg-green-100 mx-4" onClick={handleSearchFilter}>Search</button>
                    {(searchText.length > 0 && foundItems > 0) && <>{foundItems} item(s) found</>}
                </div>
                <div className="search p-4">
                    <button className="filter-btn rounded-lg px-4 py-2 bg-blue-100 mx-4"
                        onClick={handleListOfRestaurants}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search p-4">
                    {/* <input className="border p-1 rounded-lg px-3 border-black"
                        type="text"
                        placeholder="Enter Username"
                        onChange={(e) => setUserName(e.target.value)}
                        value={loggedInUser}
                        maxLength={30}
                    /> */}
                </div>
            </div>
            <div className="res-container m-2 flex flex-wrap">
                {listOfRestaurants.map((restaurant) => (
                    <Link data-testid="resCard" className="listOfRestaurantsLinks" to={`/restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                        {/* if the restaurant is promoted then add promoted label to it */}
                        {
                            restaurant?.info?.promoted === true ? (
                                <RestaurantCardPromoted resData={restaurant.info} />
                            ) :
                            <RestaurantCard
                                resData={restaurant.info}
                            />
                        }
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Body;