import { use, useEffect, useState } from "react";

const UserFun = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  useEffect(() => {
    // this is similar to component unmount
    return () => console.log("called unmount in functions with return");
  });
  return (
    <div className="user">
      <h1>Count is {count}</h1>
      <h1>Count2 is {count2}</h1>
      <h2>Name : {name}</h2>
      <h3> Location: Proddatur</h3>
      <h3>Tech : MERN</h3>
    </div>
  );
};

export default UserFun;
