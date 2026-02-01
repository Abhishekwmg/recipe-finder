const NoMeals = () => {
  return (
    <div class="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h2 class="text-lg font-semibold text-gray-800">No meals found 🍽️</h2>

      <p class="mt-2 text-sm text-gray-500 max-w-md">
        We couldn’t find any dishes matching your search. Try adjusting the
        keywords or explore something new.
      </p>

      <p class="mt-4 text-xs text-gray-400 italic">
        “Good food is always worth the search.”
      </p>
    </div>
  );
};

export default NoMeals;
