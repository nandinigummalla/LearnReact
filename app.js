import React from "react";
import ReactDOM from "react-dom/client";

// const head = React.createElement("h1", { id: "heading" }, "Hie from React");
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hie I am sib"),
//     React.createElement("h1", {}, "Hie I am sib"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hie I am child1"),
//     React.createElement("h1", {}, "Hie I am child2"),
//   ]),
// ]);

// JSX is html like syntax and it will convert as reactelement with babel  and then the react element will convert to js when its rendered using render
// JSX will have few attributes different from html and it follows camelcase

const head = <h1 className="hel">Hello from jsx</h1>;

const parent = <h1>I am a react element which is object at the end</h1>;

// everything in reactjs are components and those are of 2 types class and functional components
// functional components are functions which returns react elements and should be capitaize
// we cant return multiple tags individually everything shoul be clubbed in one tag or div  while returning

const HeaderComponent = () => {
  return (
    <>
      <h2>Hie</h2>
      <h1>Hi i am header with return</h1>
    </>
  );
};

const Title = () => <h2>I am title</h2>;

const TitleFun = function () {
  return <h1>Hie titlefunc</h1>;
};
// component composition -- components in other components
const HeaderComponentWithoutReturn = () => (
  <div>
    <Title />
    {Title()}

    <h1>Hi I am header without return</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering a react element
// root.render(parent);

//rendering a react component
root.render(<HeaderComponentWithoutReturn />);
