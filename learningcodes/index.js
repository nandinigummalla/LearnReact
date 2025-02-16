import React from "react";
import ReactDOM from "react-dom/client";

const Header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I am h1"),
  React.createElement("h2", {}, "I am h2"),
  React.createElement("h3", {}, "I am h3"),
]);

const HeaderJsx = (
  <div className="title">
    <h1>Hi i am h1</h1>
    <h2> i am h2</h2>
    <h3> I am h3</h3>
  </div>
);

const Title = () => <h1>I am title</h1>;

const HeaderFunc = () => (
  <div className="title">
    <Title />
    {<Title />}
    {/* {Title}   */}
    {<Title></Title>}
    <h1 id="first">Hi i am h1</h1>
    <h2>Hi i am h2</h2>
    <h3> I am h3</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderFunc />);
