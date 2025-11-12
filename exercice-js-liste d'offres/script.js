// Déclaration de la fonction
async function fetchOffers() {
  const offersContainer = document.querySelector(".offres");
  offersContainer.innerHTML = "Chargement des données..."; // Afficher le message de chargement
  try {
    // Récupérer les données
    const response = await fetch(
      "https://corsproxy.io/?https://codepassport.dev/api/offers"
    ); // Faire la requête avec fetch
    const offers = await response.json(); // Convertir ma réponse en json
    offersContainer.innerHTML = ""; // Vider le conteneur avant d'afficher les offres

    for (let i = 0; i < offers.length; i++) {
      // Générer le HTML dans une boucle
      offersContainer.innerHTML += `<h2>${offers[i].titre}</h2> <p>${offers[i].description}</p>`; // J'affiche HTML en ajoutant le titre et la description
    }
    return offers;
  } catch (error) {
    // Afficher le message d'erreur si quelque chose ne va pas
    offersContainer.innerHTML = "Une erreur est survenue lors du chargement";
  }
}

fetchOffers();
