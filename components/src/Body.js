import { useState } from "react";
import { ResList } from "../utils/ResData";

// default import
import RestCard from "./RestCard";

// Adding arguments to function is same as adding properties to the functional components
// when mapping or looping we need to add key value for unique rendering and for performance improvement
// not using any key <<<<< using key as index <<<<<<<< using key as unique identifier ( best way)

const Body = () => {
  // hooks are utility functions provided by react and here destructuring happening the fly
  const [restaurantsData, setRestaurantsData] = useState(ResList);
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="body">
      <div className="filterdata">
        <div className="search">
          <input
            className="searchbar"
            type="text"
            placeholder="Search for restaurant"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            className="submit"
            onClick={() =>
              setRestaurantsData(
                restaurantsData.filter((res) =>
                  (res?.info?.name)
                    .toLocaleLowerCase()
                    .includes(searchVal.toLowerCase())
                )
              )
            }
          >
            Submit
          </button>
        </div>
        <button
          className="filter"
          onClick={() => {
            return setRestaurantsData(
              restaurantsData.filter((res) => res?.info?.avgRating > 4.5)
            );
          }}
        >
          Get Rop Rated Restaurants
        </button>
      </div>
      <div className="rescontainer">
        {restaurantsData.map((rest) => (
          <RestCard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

// default export
export default Body;
