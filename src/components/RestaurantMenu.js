import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const location = useLocation();

  // persist mock via state or ?mock=1
  const qsMock = new URLSearchParams(location.search).get("mock") === "1";
  const stateMock = location.state?.useMock === true;
  const forceMock = stateMock || qsMock;

  const resInfo = useRestaurantMenu(resId, forceMock);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfoCard = resInfo.cards?.find((c) => c?.card?.card?.info);
  const info = restaurantInfoCard?.card?.card?.info || {};
  const { name = "Restaurant", cuisines = [], costForTwoMessage = "" } = info;

  const regularCards =
    resInfo.cards?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (!regularCards || regularCards.length === 0) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold text-lg">
        ⚠️ Menu not available for this restaurant. Try another or enable mock mode.
      </div>
    );
  }

  // used only for the tiny warning message
  const menuCard = regularCards.find((c) => c?.card?.card?.itemCards)?.card?.card;
  const { itemCards } = menuCard || {};

  // Only item categories
  const categories =
    regularCards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="px-3 sm:px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg mb-4">
          {cuisines.length ? cuisines.join(", ") + " — " : ""}
          {costForTwoMessage}
        </p>

        {!itemCards && (
          <p className="text-red-500 font-semibold mb-4">
            ⚠️ Menu items not available. Try using mock mode.
          </p>
        )}

        {categories.map((category, index) => (
          <RestaurantCategory
            key={(category?.card?.card?.title || "category") + "-" + index}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
