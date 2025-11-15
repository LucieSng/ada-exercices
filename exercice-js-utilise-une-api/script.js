// Tu peux maintenant aller explorer d’autres APIs un peu plus complexes comme DummyJSON par exemple et afficher leurs données sur une page web.
async function fetchRecipes() {
  const recipesContainer = document.querySelector(".recettes");
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  data.recipes.forEach((recipe) => {
    recipesContainer.innerHTML += `<div><h1>${recipe.id}</h1><br> <h2>${recipe.name}</h2><br> <h3>${recipe.ingredients}</h3><br>
    <p>${recipe.instructions}</p> <p>${recipe.tags}</p><br></div>`;
  });
  console.log(data);
}
fetchRecipes();
