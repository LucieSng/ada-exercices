// Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
// Je stocke le nombre saisi par l'utilisateur dans une variable pour la réutiliser, grâce à prompt il peut saisir un nombre.
// "parseInt" permet de convertir ce prompt en nombre.
let number = parseInt(prompt('Choisir un nombre entre 0 et 10'));

// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.
// Les || sont l'équivalent de "ou"
// isNan permet de vérifier que c'est un vrai nombre
// le \ dans l'alerte permet de ne pas casser la chaine de texte
if (isNaN(number) || number < 0 || number > 10) {
  alert('Votre saisie n\'est pas correcte');
}

// Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).
// Si la saisie est bien entre 0 et 10, alors débuter depuis le "number" saisi par l'utilisateur, enlever -1 à chaque boucle jusqu'à que le compteur atteigne 0.
// (!) Attention à la confusion, i>=0 compare i à 0 donc on se demande "est-ce que i est encore plus grand ou égal à 0 ?", alors que i=0 signifie donner la valeur 0 à i donc i devient 0.
else {
  for (let i = number; i >= 0; i--) {
  console.log(i);
  }
}