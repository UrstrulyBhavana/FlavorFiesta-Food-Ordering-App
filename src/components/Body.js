import React, { useContext, useEffect, useState } from 'react'
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
 
    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // const RestaurantCardPromoted =  withPromotedLabel(RestaurantCard);

    console.log("Body Rendered ", listOfRestaurants)

    useEffect(() => {
      fetchData();
    }, []);


const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3787054&lng=78.55259869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if( onlineStatus === false)
    return(
       <h1>Looks like you're Offline !! Please check your Internet Connection; </h1>
    );

    const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? ( 
      <Shimmer />
     ) : (
    <div className='body'>

        <div className='filter flex '>

            <div className='search m-4 p-4'>

                <input type='text' 
                 data-testid = "searchInput"
                 className='border border-solid border-black rounded-md text-center font-medium mb-2  py-1'
                 value={searchText}
                 onChange={(e) => {
                 setSearchText(e.target.value);
                 }}
                />

                <button   className="p-2 mx-14 m-4 bg-white text-green-600 font-bold border border-green-600 rounded-lg shadow-md 
                  hover:bg-green-600 hover:text-white hover:shadow-lg 
                  focus:outline-none focus:ring-2 focus:ring-green-300 
                  active:bg-green-700 transition duration-150 ease-in-out"
                    onClick={() => {
                 // console.log(searchText)
                    const filteredRestaurant = listOfRestaurants.filter((res) => 
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                   setFilteredRestaurant(filteredRestaurant);
                  } } > 
                    Search
                </button>
            </div>

            <div className='m-4 p-4 flex items-center '>
                <button className="p-2 mx-14 m-4 bg-white text-green-600 font-bold border border-green-600 rounded-lg shadow-md 
                  hover:bg-green-600 hover:text-white hover:shadow-lg 
                  focus:outline-none focus:ring-2 focus:ring-green-300 
                  active:bg-green-700 transition duration-150 ease-in-out"
                onClick={ () => {
                const filteredList = listOfRestaurants.filter( 
                     (res) => res.info.avgRating > 4.2
                );

                setFilteredRestaurant(filteredList)
            }}>
                 Top Rated Restaurants
            </button>
        </div>

            <div className='updatingcontextvalue m-4 p-4 flex items-center'>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mx-4">
                   UserName :
                 </label>
               
                <input className="min-w-min px-3 py-2 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={loggedInUser}
                   onChange={(e) => setUserName(e.target.value)}/>
            </div>
        </div>

        <div className='res-container flex flex-wrap justify-center gap-4'>
            {
                filteredRestaurant.map((restaurant) => (

                <Link key={restaurant.info.id} to={ "/restaurants/" + restaurant.info.id} >
                    { restaurant.info.promoted ? (
                        <RestaurantCardPromoted resData = {restaurant} />
                        ) : (
                       <RestaurantCard   resData = {restaurant}/>
                        )}    
                  </Link> 
                ))
            }
        </div>
    </div>
)
}

export default Body

