import React from "react";
import { GITHUB_URL } from "../utils/constants";
class UserClass extends React.Component {
  // constructer will be called when the class instance is created(that is class component is loaded)
  // props need to be accessed in the constructor and to access those values we need to super method with that props(calling parent class)
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      response: {},
    };
    console.log(this.props.name + "Constructor called");
  }

  // componentdidmount will be called once the pagemount done and only once
  // useEffect with [] array as dependency variable
  async componentDidMount() {
    // this.timer = setInterval(() => console.log("interval1"), 1000);

    let apiData = await fetch(`${GITHUB_URL}`);
    let res = await apiData.json();
    this.setState({
      response: res,
    });
    console.log(this.props.name + "didmount called");
  }

  componentDidUpdate() {
    // after the component did mount called the this will be called with prevstate and currsteate with ifelse else logic
    // it's similar to useEffect with dependency variable
    console.log("component did update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);

    // called when the component changes to stop the functions which are no need
    // to clean up the mess and improve performance
    // its similar to when return is there in useffect
    console.log("componentwill unmount");
  }

  render() {
    //destructing in the fly
    // to access any values from the constructor need to call with this
    // const { name } = this.props;
    // const { count2 } = this.state;

    console.log(this.props.name + "Render called");

    return (
      <div className="m-10 bg-gray-100 border-2 size-1/3 text-center shadow-xl hover:border-4">
        <h1 className="text-2xl m-5 font-extrabold">
          {this.state.response.name}
        </h1>
        <img
          className="rounded-4xl ml-10"
          src={this.state.response.avatar_url}
        />
        <h1 className="m-5">Repos : {this.state.response.public_repos}</h1>

        <button
          onClick={() =>
            this.setState({
              count2: this.state.count2 + 1,
            })
          }
        ></button>

        {/* we can do this way */}
        {/* <h1>Count is {this.state.count}</h1>
        <h2>Count2 with des : {count2}</h2>
        <button
          onClick={() =>
            this.setState({
              count2: this.state.count2 + 1,
            })
          }
        >
          Click count2
        </button>
        <h2>Name : {name}</h2>
        <h3> Location: Proddatur</h3>
        <h3>Tech : MERN</h3> */}
      </div>
    );
  }
}

export default UserClass;
