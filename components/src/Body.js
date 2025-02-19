import { useEffect, useState } from "react";

// default import
import RestCard from "./RestCard";
import ShimmerUI from "./ShimmerUI";
import React from "react";
import { Link } from "react-router-dom";

// Adding arguments to function is same as adding properties to the functional components
// when mapping or looping we need to add key value for unique rendering and for performance improvement
// not using any key <<<<< using key as index <<<<<<<< using key as unique identifier ( best way)

const Body = () => {
  // hooks are utility functions provided by react and here destructuring happening the fly
  // local state variables declare with the below syntax and change with second param only
  // when the state variable changes with setState( name can be anything as our wish but as per industry rules we use this) then the whole header component will render again and reconcillation starts ( compare the both virtual doms and modify the state variable)
  // Re-rendering will happen for the whole component and the updated value will be taken as new variable and updated in the uI

  // should not declare the state variables --  outside the component and also during the conditional rendering or while looping
  // all state variables should be on the top in the component
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  //after the page rendered useEffect will be called ..useeffect contain callback function and dependent value
  //in useeffect receives one manadatory call back function and optional dependency varible
  // if there is no dependency variable then useffect will be rendered everytime the component renders
  // if [] is dependency variable then useeffect will be rendered only once after the initial  component render
  // if [variable] if any var is there then for every change is the var the useffect will be called/renders

  useEffect(() => {
    FetchData();
  }, []);

  // calling an api and rendering the data
  const FetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.74640&lng=78.54480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    const dataJson =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantsData(dataJson);
    setFilterData(dataJson);
  };

  if (restaurantsData?.length === 0) {
    return <ShimmerUI />;
  }

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
            onClick={() => {
              const resp = restaurantsData.filter((res) =>
                (res?.info?.name)
                  .toLocaleLowerCase()
                  .includes(searchVal.toLowerCase())
              );
              setFilterData(resp);
            }}
          >
            Submit
          </button>
        </div>
        <button
          className="filter"
          onClick={() => {
            return setFilterData(
              restaurantsData?.filter((res) => res?.info?.avgRating > 4.3)
            );
          }}
        >
          Get Rop Rated Restaurants
        </button>
      </div>
      <div className="rescontainer">
        {filterData?.map((rest) => (
          <Link
            className="resCardLi"
            key={rest?.info?.id}
            to={`/restaurants/${rest?.info?.id}`}
          >
            <RestCard resData={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

// default export
export default Body;
