import{ CDN_URL } from "../utils/constants";
 

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    locality,
    areaName,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <div className="rating">
        <p>{avgRating} stars</p>
        <p>{resData.info.sla.deliveryTime} minutes</p>
      </div>
      <h4>{costForTwo}</h4>
      <h4>{locality}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
