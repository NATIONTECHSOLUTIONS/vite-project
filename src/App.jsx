import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/App.css";
import {
  About,
  Contactus,
  Home,
  Thehomelayout,
  Services,
  Resume,
  Portfolio,
  Blog,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Thehomelayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "contactus",
        element: <Contactus />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "Thehomelayout",
        element: <Thehomelayout />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
