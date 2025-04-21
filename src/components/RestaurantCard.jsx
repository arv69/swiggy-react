import React from 'react'
import { CDN_URL } from '../utils/constant';


const styleCard = {
    backgroundColor: "#f0f0f0",
  };
const RestaurantCard = ({ resData }) => {
    const { name, cloudinaryImageId, cuisines, avgRating } = resData.info;
      return (
        <div className="res-card" style={styleCard}>
          <img
            className="res-img"
            src={CDN_URL+cloudinaryImageId}
            alt="Restaurant"
            
          />
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>38 Minutes</h4>
          
        </div>
      );
    };
    

export default RestaurantCard