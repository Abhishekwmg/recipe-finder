import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bgrecipe from "../assets/bg-recipe.jpg";
import { Loader, SlidersHorizontal, Youtube, X } from "lucide-react";
import NoMeals from "./NoMeals";
import { initialData } from "../data/initislData";

const Hero = () => {
  const [recipe, setRecipe] = useState(initialData);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeArea, setActiveArea] = useState(null);

  const filterCategory = [...new Set(recipe.map((r) => r.strCategory))];
  const filterCuisine = [...new Set(recipe.map((r) => r.strArea))];

  const filteredRecipes = recipe.filter((r) => {
    const categoryMatch = activeCategory
      ? r.strCategory === activeCategory
      : true;
    const areaMatch = activeArea ? r.strArea === activeArea : true;

    return categoryMatch && areaMatch;
  });

  async function fetchRecipe() {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.trim().toLowerCase()}`,
      );

      if (!data.ok) {
        throw new Error("Something went wrong!");
      }

      const res = await data.json();
      setRecipe(res.meals || []);
    } catch (e) {
      setError(e);
      setRecipe([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!query.trim()) return;
    fetchRecipe();
  }, [query]);

  return (
    <>
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={bgrecipe}
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

          <button
            className="inline-flex items-center justify-center gap-2
             px-8 py-2.5 rounded-xl text-sm font-semibold text-white
             bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400
             hover:from-amber-400 hover:via-orange-500 hover:to-rose-500
             active:scale-[0.98]
             focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2
             transition-all duration-200 shadow-md cursor-pointer"
          >
            Search
          </button>

          <p className="max-w-xl my-8 text-xl md:text-base text-gray-200">
            Cooking is not just a hobby, it's passion mixed with real love for
            food and culture ✨.
          </p>
        </div>
      </section>
      {/* <section className="grid-rows-2">
        <div>
          <button>
            <SlidersHorizontal />
            Filter
          </button>
          {isLoading && <Loader />}
          {error && <p>{error}</p>}
          <div>
            <p>Filter 1: Categories - Vegetarian, Chicken, Mutton Etc.</p>
            <p>Filter 2: Cuisines</p>
            <p>Filter 3: Ingredients</p>
          </div>
        </div>
        <div>
          {recipe.length > 0 ? (
            recipe.map((r) => {
              return (
                <div key={r.id} className="">
                  <p>Food: {r.strMeal}</p>
                  <p>Cuisine: {r.strArea}</p>
                  <img src={r.strMealThumb} alt="" />
                  <p>
                    Watch this recipe on
                    <Link to={r.strYoutube}>
                      <Youtube />
                      Youtube
                    </Link>
                  </p>
                </div>
              );
            })
          ) : (
            <NoMeals />
          )}
        </div>
      </section> */}
      <section className="flex flex-col lg:flex-row gap-6 py-6 px-16">
        {/* ================= Filters Section ================= */}
        <aside className="w-full lg:w-1/5 bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-4">
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <button
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-4 cursor-pointer"
              onClick={() => {
                setActiveCategory(null);
                setActiveArea(null);
              }}
            >
              <X className="inline" size={18} />
              Clear All
            </button>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-800 mb-1">Category</p>
              <div className="flex flex-wrap gap-2">
                {filterCategory.map((item) => (
                  <button
                    key={item}
                    className={`px-3 py-1 rounded-full border transition cursor-pointer
    ${
      activeCategory === item
        ? "bg-gray-800 text-white border-gray-800"
        : "border-gray-300 text-gray-700 hover:bg-gray-100"
    }
  `}
                    onClick={() =>
                      setActiveCategory((prevItem) =>
                        prevItem === item ? null : item,
                      )
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-800 mb-1">Cuisine</p>
              <div className="flex flex-wrap gap-2">
                {filterCuisine.map((item) => (
                  <button
                    key={item}
                    className={`px-3 py-1 rounded-full border transition cursor-pointer
    ${
      activeArea === item
        ? "bg-gray-800 text-white border-gray-800"
        : "border-gray-300 text-gray-700 hover:bg-gray-100"
    }
  `}
                    onClick={() =>
                      setActiveArea((prevItem) =>
                        prevItem === item ? null : item,
                      )
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ================= Recipes Section ================= */}
        <div className="w-full relative lg:w-4/5 min-h-75">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader />
            </div>
          )}
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredRecipes.map((r) => (
                <div
                  key={r.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <img
                    src={r.strMealThumb}
                    alt={r.strMeal}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-4 space-y-2">
                    <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
                      {r.strMeal}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Cuisine: <span className="font-medium">{r.strArea}</span>
                    </p>
                    <p></p>

                    <div className="flex justify-between">
                      <Link
                        to={r.strYoutube}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sm text-red-600 hover:underline"
                      >
                        <Youtube size={16} />
                        Watch on YouTube
                      </Link>
                      <Link
                        to={`recipe/${r.idMeal}`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium 
             text-gray-700 bg-gray-100 rounded-lg
             hover:bg-gray-200 hover:text-gray-900
             transition-colors duration-200"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NoMeals />
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
