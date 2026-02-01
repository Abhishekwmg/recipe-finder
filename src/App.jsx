import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import DetailRecipe from "./pages/DetailRecipe";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "recipe",
        element: <DetailRecipe />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
