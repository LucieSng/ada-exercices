// Refactoring dans ce code pour qu'il soit plus simple à la relecture
function number(arr) {
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    n += arr[i];
  }
  return n;
}

console.log(number([1, 2, 3, 4])); // Devrait retourner 10
console.log(number([1, 2])); // Devrait retourner 3
console.log(number([0])); // Devrait retourner 0
console.log(number([1, 0])); // Devrait retourner 1

// Gestion des erreurs
console.log(f1([1])); // Devrait retourner 1
console.log("Erreur : Vous devez passer un tableau de nombres"); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(f1("Huhu")); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
