// import { useEffect, useState } from "react";
// import { HOMEPAGE_URL } from "./constants";

// const useRestbodyData = () => {
//   const [restaurantsData, setRestaurantsData] = useState(null);
//   useEffect(() => {
//     FetchInfo();
//   }, []);

//   const FetchInfo = async () => {
//     const res = await fetch(`${HOMEPAGE_URL}`);
//     const json = await res.json();
//     const dataJson =
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants;
//     setRestaurantsData(dataJson);
//   };

//   return restaurantsData;
// };

// export default useRestbodyData;
