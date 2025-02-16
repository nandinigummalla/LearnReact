// named import
import { CLOUD_URL } from "../utils/constants";

// Receiving the agruments as props and using them ... properties will come as object and use them
// The props which are coming should match with the name of the prop coming from the card
const RestCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="rescard">
      <img
        className="resimg"
        alt="restaurant card"
        src={`${CLOUD_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestCard;
