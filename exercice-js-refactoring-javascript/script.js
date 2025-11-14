// Refactoring du code pour qu'il soit plus simple à la relecture
function sumNumber(arr) {
  // Vérifier si arr est bien un tableau
  if (!Array.isArray(arr)) {
    return "Erreur vous devez passer à un tableau de nombres";
  }

  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    number += arr[i];
  }
  return number;
}

console.log(sumNumber([1, 2, 3, 4])); // Devrait retourner 10
console.log(sumNumber([1, 2])); // Devrait retourner 3
console.log(sumNumber([0])); // Devrait retourner 0
console.log(sumNumber([1, 0])); // Devrait retourner 1

// Gestion des erreurs
console.log(sumNumber([1])); // Devrait retourner 1
console.log(sumNumber()); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(sumNumber("Huhu")); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
