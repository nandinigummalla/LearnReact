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
    <div className="m-4 border-1 rounded-xl bg-gray-100 items-center size-120 shadow-xl hover:bg-gray-200 hover:border-2 ">
      <img
        className="rounded-4xl h-80 w-lg"
        alt="restaurant card"
        src={`${CLOUD_URL}${cloudinaryImageId}`}
      />
      <div className="text-center p-2">
        <h3 className="font-bold">{name}</h3>
        <h4>{avgRating} Rating</h4>
        <h4>{slaString}</h4>
        <h5>{costForTwo}</h5>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
      </div>
    </div>
  );
};

export default RestCard;
