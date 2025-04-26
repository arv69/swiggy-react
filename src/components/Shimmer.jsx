import React from 'react'
import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <>
   <ShimmerPostList className="shimmer-card" postStyle="STYLE_EIGHT" col={4} row={4} gap={30} />;
  </>
  )
}

export default Shimmer