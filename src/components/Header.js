import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    //console.log(loggedInUser)

    const cartItems = useSelector((store) => store.cart.items); // subscribing to store using selector
    console.log(cartItems)

    return (
        <div className="flex justify-between  bg-yellow-300 shadow-lg font-bold">
            <div className="logo-container">
             <img className="w-32" src={LOGO_URL} />
            </div>

             <div className="flex items-center">

               <ul className="flex p-4 m-4">

                <li className="px-4 ">
                    Online Status: { onlineStatus ? "✅" : "🔴"}
                </li>

                <li className="px-4">
                     <Link to="/" className="text-slate-900 hover:text-purple-900 hover:underline">Home</Link>
                </li>
                <li className="px-4  text-slate-900 hover:text-purple-900 hover:underline"> 
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4 text-slate-900 hover:text-purple-900 hover:underline"> 
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="text-slate-900 hover:text-purple-900 hover:underline">
                    <Link to="/grocery"> Grocery</Link>
                </li>
                <li className="px-4 text-slate-900 hover:text-purple-900 hover:underline">
                    <Link to="/cart">
                      <FontAwesomeIcon icon={faCartShopping} />
                      ({cartItems.length} items)
                    </Link>
                </li>

                <button className="px-4 " onClick={() => {
                    btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                }}> {btnNameReact} </button>

                <li className="px-4 text-slate-900 border border-amber-500 bg-yellow-200 rounded-full">{loggedInUser}</li>

               </ul>
             </div>

        </div>
    )
}

export default Header;

