const candidates = [
  "Le Filip",
  "Ruby On The Nail",
  "Leona Winter",
  "Lula Strega",
  "Misty Phoenix",
  "Perseo",
  "Norma Bell",
  "Edeha Noire",
  "Magnetica",
  "Afrodite Amour",
];

// Accède au tableau pour afficher dans la console “Le Filip”
console.log(candidates[0]);

// Accède au tableau pour afficher dans la console “Edeha Noire”
console.log(candidates[7]);

// Parcours le tableau pour afficher dans la console ligne par ligne chaque nom des candidates
candidates.forEach((candidate) => {
  console.log(candidate);
});

// (Bonus) Parcours le tableau candidates pour afficher la liste des candidates dans une page HTML.
const listCandidates = document.querySelector(".candidates");

candidates.forEach((candidate) => {
  const listItem = document.createElement("li"); // Création d'un nouvel élément HTML liste, vide pour l'instant
  listItem.textContent = candidate; // Insérer le nom de la candidate à l'intérieur du <li>.
  listCandidates.appendChild(listItem); // Ajouter l'élément <li> comme un enfant de l'élément listCandidates, donc à l'intérieur de la liste dans le HTML
});
