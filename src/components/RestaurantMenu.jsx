import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); // Get the restaurant ID from the URL parameters

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (!resInfo) {
    return <Shimmer />; // Show shimmer effect while loading
  }

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    locality,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.cards?.[2]?.card?.card?.info || {}; // Use optional chaining to avoid errors

  const categories =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.categories || []; // Use optional chaining and fallback to an empty array

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h2>{avgRating}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{locality}</h2>
      <h2>{totalRatingsString}</h2>
      <img
        style={{ width: "100px", height: "100px" }}
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />

      <h1>MENU</h1>

      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category?.title}>
            <h2>{category?.title}</h2>
            <ul>
              {category?.itemCards?.map((item) => (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} - RS{" "}
                  {item?.card?.info?.price / 100 || "N/A"}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No menu categories available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;