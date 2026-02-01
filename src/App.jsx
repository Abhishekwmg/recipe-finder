import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import DetailRecipe from "./pages/DetailRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "detail-recipe",
        element: <DetailRecipe />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
