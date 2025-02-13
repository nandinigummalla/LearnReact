import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement("h1", { id: "heading" }, "Hie from React");
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hie I am sib"),
    React.createElement("h1", {}, "Hie I am sib"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hie I am child1"),
    React.createElement("h1", {}, "Hie I am child2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
