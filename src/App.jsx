import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Companants/Home/Home";
import About from "./Companants/About/About";
import Blog from "./Companants/Blog/Blog";
import Layout from "./Companants/Layout/Layout";
import Error from "./Companants/Error/Error";
import ArticalDetailes from "./Companants/ArticalDetailes/ArticalDetailes";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "/blog/:slug", element: <ArticalDetailes /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>

    </>
  );
}

export default App;
