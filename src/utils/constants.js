export const CDN_URL = 
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"

export const LOGO_URL = 
  "https://static.vecteezy.com/system/resources/previews/001/936/506/non_2x/chef-girl-smiling-happy-and-cooking-with-love-in-her-kitchen-vector.jpg"

 
// export const Menu_API = 
//   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3787054&lng=78.55259869999999&restaurantId="

 
// Use proxy when running locally; use Swiggy in production
export const IS_LOCAL =
  typeof window !== "undefined" && window.location.hostname === "localhost";

export const Menu_API = IS_LOCAL
  ? "http://localhost:5174/api/menu?resId="
  : "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3787054&lng=78.55259869999999&restaurantId=";


export const List_API = IS_LOCAL
  ? "http://localhost:5174/api/restaurants"
  : "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3787054&lng=78.55259869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
