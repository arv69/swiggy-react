import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

// resData.map((item) => {
//   const { name, cloudinaryImageId, cuisines, avgRating } = item.info;
//   const imageUrl = `${img}${cloudinaryImageId}`;
//   console.log(name, imageUrl, cuisines, avgRating);
// });



const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;
