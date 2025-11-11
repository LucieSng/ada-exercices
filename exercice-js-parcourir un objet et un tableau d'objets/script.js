const obj = {
  candidate: "Le Filip",
  age: 29,
  city: "Paris",
  region: "Île-de-France",
};

const data = [
  {
    candidate: "Afrodite Amour",
    age: 27,
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
  },
  {
    candidate: "Edeha Noire",
    age: 34,
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
  },
  {
    candidate: "Le Filip",
    age: 29,
    city: "Paris",
    region: "Île-de-France",
  },
];

// Récupère dans l’objet obj uniquement le nom de la candidate pour l’afficher dans la console Résultat attendu : Le Filip
console.log(obj.candidate);

// Parcours le tableau d’objets data pour afficher dans la console la liste de tous les noms des candidates. Résultat attendu : Afrodite Amour Edeha Noire Le Filip
data.forEach((item) => console.log(item.candidate));

// Avec une boucle for
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i].candidate);
// }
