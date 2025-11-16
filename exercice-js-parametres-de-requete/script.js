// L’idée est de créer une page web qui affiche les infos d’une donnée en particulier (un post ou une offre par exemple), plutôt qu’afficher la liste entière.

async function fetchMovies() {
  const moviesContainer = document.querySelector(".movies");
  const response = await fetch("https://ghibliapi.vercel.app/films"); // Récupération des données json
  const data = await response.json(); // Convertir ma réponse en json
  for (let i = 0; i < data.length; i++) {
    const movie = data[i]; // Création d'une variable movie qui contient le numéro de film [i]
    moviesContainer.innerHTML += `<div> <h1>${movie.title}</h1> <h2>${movie.director}<h2> <p>${movie.release_date}</p> <img src="${movie.movie_banner}" alt="Affiche de ${movie.title}" width=300px></div>`;
  }
}
fetchMovies();
