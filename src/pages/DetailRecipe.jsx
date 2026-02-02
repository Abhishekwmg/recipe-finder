import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { separateIngredients } from "../utils/ingredients";
import { useMemo } from "react";

const DetailRecipe = () => {
  const recipe = useLoaderData();
  const derivedMeal = useMemo(() => {
    return {
      ...recipe,
      ingredients: separateIngredients(recipe),
    };
  }, [recipe]);

  console.log(derivedMeal);

  return (
    <>
      <h1>Detailed Recipe Page</h1>
      <div></div>
      <Link to="..">Back</Link>
    </>
  );
};

export default DetailRecipe;
