import { useEffect, useState } from "react";
import avocado from "../assets/avocado.jpg";
import { RECIPE_API } from "../utils/consts";
import { SlidersHorizontal } from "lucide-react";

const Hero = () => {
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");

  async function fetchRecipe() {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.trim()}`,
    );

    const res = await data.json();
    setRecipe(res.meals || []);
  }

  console.log(recipe);

  useEffect(() => {
    if (query.trim() === "") return;
    fetchRecipe();
  }, [query]);

  return (
    <>
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={avocado}
          alt="avocado background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Find The{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Recipe
            </span>
            You Love <span className="text-4xl">😍</span>
          </h1>
          <div className="w-full max-w-md mb-4 rounded-md p-0.5 bg-gray-200 focus-within:bg-gradient-to-r focus-within:from-amber-300 focus-within:via-orange-400 focus-within:to-rose-400 transition-all">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search for recipes..."
              className="w-full px-4 py-3 rounded-md outline-none text-gray-800 bg-amber-50"
            />
          </div>

          <button className="bg-amber-50 py-2 px-10 mx-2.5 rounded-lg text-xl cursor-pointer">
            Search
          </button>

          <p className="max-w-xl my-8 text-xl md:text-base text-gray-200">
            Cooking is not just a hobby, it's passion mixed with real love for
            food and culture ✨.
          </p>
        </div>
      </section>
      <section className="grid-rows-2">
        <div>
          <button>
            <SlidersHorizontal />
            Filter
          </button>
          <div>
            <p>Filter 1: Categories - Vegetarian, Chicken, Mutton Etc.</p>
            <p>Filter 2: Cuisines</p>
            <p>Filter 3: Ingredients</p>
          </div>
        </div>
        <div>
          {recipe &&
            recipe.length > 0 &&
            recipe.map((r) => {
              return (
                <div key={r.id}>
                  <p>Food: {r.strMeal}</p>
                  <p>Cuisine: {r.strArea}</p>
                  <img src={r.strMealThumb} alt="" />
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Hero;
