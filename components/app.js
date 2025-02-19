import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/About";
import Error from "./src/Error";
import Contact from "./src/Contact";
import MenuCard from "./src/MenuCard";

const App = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

// react-router-dom  will provide the routes connecting to the pages
// createBrowserRouter helps us to create a array of objects with path and it's components
// const routes = createBrowserRouter([
//   { path: "/", element: <App />, errorElement: <Error /> },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

// Creating child routes making the header constant with childern which accepts a array of  values
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <MenuCard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// To call that created routes object need to add the routes in the ReactProvider component
root.render(<RouterProvider router={routes} />);
