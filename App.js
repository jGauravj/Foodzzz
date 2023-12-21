import React from "react";
import ReactDOM from "react-dom";


const parent = React.createElement("div", {id: "parent"}, [
  React.createElement("div", {id:"child"}, [
    React.createElement("h1", {}, "Hey this is h1"),
    React.createElement("h2", {}, "Hey this is h2"),
  ]),
  React.createElement("div", {id:"child2"}, [
    React.createElement("h1", {}, "Hey this is h1"),
    React.createElement("h2", {}, "Hey this is h2"),
  ]),

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);