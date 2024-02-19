import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const handleLogin = () => {
        setBtnName(btnName == "Login" ? "Logout" : "Login");
    };

    const contextData = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex header justify-between shadow-lg m-2 bg-pink-100 sticky top-0">
            <div className="logo-container">
                <img
                    className="w-36 logo"
                    src={`${LOGO_URL}`}
                />
            </div>
            <div className="flex items-center nav-items">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? '✅' : '🔴'}
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems?.length} items)</Link></li>
                    <button className="login" onClick={handleLogin}>{btnName}</button>
                    <li className="px-4 font-bold">{contextData.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;