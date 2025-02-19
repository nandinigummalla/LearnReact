// named import
import { CLOUD_URL } from "../utils/constants";

// Receiving the agruments as props and using them ... properties will come as object and use them
// The props which are coming should match with the name of the prop coming from the card
const RestCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, areaName } =
    resData?.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="rescard">
      <img
        className="resimg"
        alt="restaurant card"
        src={`${CLOUD_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{avgRating} Rating</h4>
      <h4>{slaString}</h4>
      <h5>{costForTwo}</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestCard;
