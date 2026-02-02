export async function loader({ params }) {
  const { id } = params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the meal", { status: 500 });
  }

  const data = await response.json();
  return data.meals[0];
}
