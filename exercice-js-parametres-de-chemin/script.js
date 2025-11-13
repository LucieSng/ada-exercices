// L’idée, c'est de créer une page web qui affiche les infos d’une donnée en particulier (un post ou une offre par exemple), plutôt qu’afficher la liste entière.
// Déclaration de la fonction en asynchrone
async function fetchUsers() {
  const user = document.querySelector(".user");
  const response = await fetch("https://dummyjson.com/users/1"); // Récupération des données json
  const users = await response.json(); // Convertir ma réponse en json
  user.innerHTML += `${users.firstName} ${users.lastName} ${users.email}`;
}
fetchUsers();
