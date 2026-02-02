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

  const {
    idMeal,
    strMeal,
    strCategory,
    dateModified,
    strArea,
    strMealThumb,
    strInstructions,
    ingredients,
  } = derivedMeal;

  // return (
  //   <>
  //     <h1>Detailed Recipe Page</h1>

  //     <div key={idMeal}>
  //       <h1>{strMeal}</h1>
  //       <p>{strCategory}</p>
  //       <p>{dateModified || null}</p>
  //       <p>{strArea}</p>
  //       <img src={strMealThumb} alt={strMeal} />
  //       <p>{strInstructions}</p>
  //       {ingredients.map((ing) => {
  //         return (
  //           <ul key={ing.name}>
  //             <li>
  //               {ing.name}||{ing.measure}
  //             </li>
  //           </ul>
  //         );
  //       })}
  //     </div>

  //     <Link to="..">Back</Link>
  //   </>
  // );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Back */}
      <Link
        to=".."
        className="inline-flex items-center text-sm text-slate-500 hover:text-slate-800 mb-6"
      >
        ← Back
      </Link>

      {/* Header / Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl border border-slate-100 shadow-sm">
          <img
            src={strMealThumb}
            alt={strMeal}
            className="
      w-full
      h-56
      md:h-64
      object-cover
      transition-transform duration-300
      hover:scale-[1.02]
    "
          />
        </div>

        {/* Meta */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {strMeal}
          </h1>

          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700">
              {strCategory}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">
              {strArea}
            </span>
          </div>

          {dateModified && (
            <p className="text-xs text-slate-400">
              Last updated: {dateModified || null}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Ingredients</h2>

          <ul className="space-y-2">
            {ingredients.map((ing) => (
              <li
                key={`${ing.name}-${ing.measure}`}
                className="flex justify-between text-sm text-slate-700 border-b border-slate-100 pb-2"
              >
                <span>{ing.name}</span>
                <span className="text-slate-400">{ing.measure}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Instructions</h2>

          <p className="text-slate-700 leading-relaxed whitespace-pre-line">
            {strInstructions}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailRecipe;
