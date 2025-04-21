import React from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList  from '../utils/mockData';
const Body = () => {
    const[listOfRestaurants, setListOfRestaurants] =useState(resList); 
    const handleClickRating = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
        setListOfRestaurants(filteredList);
    }  
    const handleClickVeg = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info.veg === true);
        setListOfRestaurants(filteredList);
    }
    const handleClickAll = () => {
        setListOfRestaurants(resList);
    }

    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={handleClickRating}>Top Rated Restaurants</button>
            <button className="filter-btn" onClick={handleClickVeg} >Veg</button>
            <button className='filter-btn' onClick={handleClickAll}>Reset</button>
        </div>
        <div className="res-container">
         {listOfRestaurants.map((item) => {
            return <RestaurantCard key={item.info.id} resData={item} />;
          }
          )}
        </div>
      </div>
    );
  };
  

export default Body