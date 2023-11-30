import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Componends/Home/Home";
import Banner from "./Componends/Banner/Banner";
import About from "./Componends/About/About";
import Teacher from "./Componends/Teacher/Teacher";
import Courses from "./Componends/Courses/Courses";
import Review from "./Componends/Review/Review";
import Contact from "./Componends/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "our-teachers",
        element: <Teacher></Teacher>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
