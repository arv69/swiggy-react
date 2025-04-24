import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]); // New state to store the original list

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurants(restaurants);
    setOriginalList(restaurants); // Save the original list
  };

  const handleClickRating = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
    setListOfRestaurants(filteredList);
  };

  const handleClickVeg = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.veg === true);
    setListOfRestaurants(filteredList);
  };

  const handleClickAll = () => {
    setListOfRestaurants(originalList); // Reset to the original list
  };
   if(listOfRestaurants.length === 0) {
    return (
      <div className="loading">
        <img
          src="https://media.giphy.com/media/3o7aD2saXk4v1Y5x6I/giphy.gif"
          alt="Loading..."
        />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
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
          console.log(item.info.name);
          return <RestaurantCard key={item.info.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;