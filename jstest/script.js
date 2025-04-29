const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=970172&submitAction=ENTER"
  );
  const json = await data.json();
  const categories =
    json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.categories;
  // console.log(categories);
  
  categories.map((category)=>{
    // console.log(category)
   console.log(category?.title)
    console.log(category?.itemCards?.map((item)=>item?.card?.info?.name))
    
  })
};

fetchData();
