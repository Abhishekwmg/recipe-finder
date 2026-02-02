import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import DetailRecipe from "./pages/DetailRecipe";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { loader as viewRecipeLoader } from "./loader/viewRecipeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipe/:id",
        element: <DetailRecipe />,
        loader: viewRecipeLoader,
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
