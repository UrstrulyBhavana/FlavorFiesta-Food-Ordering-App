import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RestaurantCard = (props) => {

  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[230px] h-[360px] rounded-lg bg-amber-300 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">

      <img className="rounded-lg w-full h-40 object-cover " src={CDN_URL + cloudinaryImageId} alt={name} />

       <div className="res-card-content flex-1 flex flex-col justify-between">
        <h4 className="font-bold py-2 text-lg text-center">{name}</h4>
        <h5 className="text-center text-sm text-black truncate ">{cuisines.join(" , ")}</h5>
        <h5 className="text-center text-sm">{avgRating}<FontAwesomeIcon icon={faStar} /></h5>
        <h5 className="text-center text-sm">{sla.slaString}</h5>
        <h5 className="text-center text-sm">{costForTwo}</h5>
      </div>

    </div>
  );
}

//  export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
//         <RestaurantCard {... props} />
//       </div>
//     )
//   }
 
// }

export default RestaurantCard;

