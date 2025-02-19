import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { MENU_URL } from "../utils/constants";

// Creating a dynamic routing by creating a page which had dynamic url and connecting the both compinents using link which helps in getting the data without reloading the page
const MenuCard = () => {
  const [response, setResponse] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    let data = await fetch(`${MENU_URL}${id}`);
    data = await data?.json();
    setResponse(data);
  }, []);

  if (response === null) return <ShimmerUI />;

  return (
    <div className="menu">
      <h1>{response?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <div className="menudelivery">
        <div className="menudelitems">
          <h4>{response?.data?.cards[2]?.card?.card?.info?.avgRating}</h4>
          <h4>
            {response?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
          </h4>
          <h4>
            {response?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
          </h4>
          <h4>{response?.data?.cards[2]?.card?.card?.info?.areaName}</h4>
        </div>
        {response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (rest) => (
            <>
              <h2 className="cusinetitle">{rest?.card?.card?.title}</h2>
              {rest?.card?.card?.itemCards?.map((menuitm) => (
                <div className="menuitems">
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
            </>
          )
        )}
      </div>
    </div>
  );
};

export default MenuCard;
