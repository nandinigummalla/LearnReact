import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useRestInfo from "../utils/useRestInfo";

// Creating a dynamic routing by creating a page which had dynamic url and connecting the both compinents using link which helps in getting the data without reloading the page
const MenuCard = () => {
  const { id } = useParams();

  const response = useRestInfo(id);

  if (response === null) return <ShimmerUI />;

  return (
    <div className="m-4 p-2 text-center">
      <h1 className="font-extrabold m-1">
        {response[2]?.card?.card?.info?.name}
      </h1>
      <div className="m-2">
        <div className="border-2 w-md ml-180 m-4">
          <h4>{response[2]?.card?.card?.info?.avgRating}</h4>
          <h4>{response[2]?.card?.card?.info?.costForTwoMessage}</h4>
          <h4>{response[2]?.card?.card?.info?.cuisines.join(", ")}</h4>
          <h4>{response[2]?.card?.card?.info?.areaName}</h4>
        </div>
        {response[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((rest) => (
          <div
            key={
              response[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.categoryId
            }
          >
            <h2 className="font-bold">{rest?.card?.card?.title}</h2>
            {rest?.card?.card?.itemCards?.map((menuitm) => (
              <div
                key={menuitm?.card?.info?.id}
                className="border-1 m-2 p-2 hover:border-2"
              >
                <h4>{menuitm?.card?.info?.name}</h4>
                <h4>Price: {menuitm?.card?.info?.price / 100}</h4>
                <h4>
                  Rating:{" "}
                  {menuitm?.card?.info?.ratings?.aggregatedRating?.rating ||
                    "NA"}
                </h4>
                <h5>{menuitm?.card?.info?.description}</h5>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
