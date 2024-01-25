import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          //Filter logic here 
          const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4.2);
          setListOfRestaurant(filteredList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="top">Restaurants with online food delivery in Bhopal</div>
      <div className="res-container">
        {listOfRestaurants.map((restauant) => (
          <RestaurantCard key={restauant.info.id} resData={restauant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
