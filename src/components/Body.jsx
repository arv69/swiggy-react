import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ShimmerPostItem } from "react-shimmer-effects";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // const [filterdRestaurants, setFilteredRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]); // New state to store the original list
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants);
    setOriginalList(restaurants); // Save the original list
  };

  const handleClickRating = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    setListOfRestaurants(filteredList);
  };

  const handleClickVeg = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.veg === true
    );
    setListOfRestaurants(filteredList);
  };

  const handleClickSearch = () => {
    const filteredListSearch = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filteredListSearch);
  }

  const handleClickAll = () => {
    setListOfRestaurants(originalList); // Reset to the original list
  };
  console.log("Body rendered");
  return listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className="search-btn" onClick={
          handleClickSearch}>Search</button>
      </div>
        <button className="filter-btn" onClick={handleClickRating}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={handleClickVeg}>
          Veg
        </button>
        <button className="filter-btn" onClick={handleClickAll}>
          Reset
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((item) => {
          // console.log(item.info.name);
          return <RestaurantCard key={item.info.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
