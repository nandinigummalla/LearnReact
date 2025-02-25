import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestInfo = (id) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_URL}${id}`);
    const json = await data?.json();
    setResponse(json?.data?.cards);
  };
  return response;
};

export default useRestInfo;
