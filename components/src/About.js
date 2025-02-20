import UserFun from "./UserFun";
import UserClass from "./UserClass";
import { useEffect, Component } from "react";

// const About = () => {
//   console.log("called befor return");
//   useEffect(() => console.log("called useEffect"));
//   return (
//     <div className="about">
//       {console.log("called in  return")}
//       <h1> I am about</h1>
//       {/* <UserFun name={"Nandini from func"} /> */}
//       <UserClass name={"Nandini from class"} />
//     </div>
//   );
// };

class About extends Component {
  constructor() {
    super();
    console.log("parent constructor called ");
  }
  componentDidMount() {
    console.log("parent component didmount called ");
  }
  render() {
    console.log("called in  parent render ");
    return (
      <div className="about">
        <h1> About Page</h1>
        <UserClass name={"First"} />

        <UserFun />
        {/* <UserClass name={"Second"} />
        <UserClass name={"third"} /> */}
      </div>
    );
  }
}

export default About;
