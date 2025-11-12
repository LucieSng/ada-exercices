// Je déclare me fonction
async function fetchOffers() {
  const response = await fetch(
    "https://corsproxy.io/?https://codepassport.dev/api/offers"
  ); // Je fais ma requête avec fetch
  const offers = await response.json(); // Je convertis ma réponse en json
  const offersContainer = document.querySelector(".offres");

  for (let i = 0; i < offers.length; i++) {
    // Je crée une boucle pour tous les éléments
    offersContainer.innerHTML += `<h2>${offers[i].titre}</h2> <p>${offers[i].description}</p>`; // J'affiche HTML en ajoutant le titre et la description
  }
  return offers;
}
fetchOffers();
