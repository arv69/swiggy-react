import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// resData.map((item) => {
//   const { name, cloudinaryImageId, cuisines, avgRating } = item.info;
//   const imageUrl = `${img}${cloudinaryImageId}`;
//   console.log(name, imageUrl, cuisines, avgRating);
// });

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Body /> */}
      {/* <RestaurantCard /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Error /> */}
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],

    errorElement: <Error />,
  },

  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

// import React from "react";
// import ReactDOM from "react-dom/client";
export default App;
