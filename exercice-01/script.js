// Je déclare une fonction avec les paramètres prénom et âge
function conduiteOK(firstName, age) {
  if (age >= 17) {
   console.log("Majeur")
  }
  else {
   console.log("Mineur")
  }
}
// Dans cette fonction j'affiche la condition si le chauffeur est autorisé à conduire ou pas

// J'appelle ma fonction avec les chauffeurs suivants
conduiteOK("Mathieu", 22);
conduiteOK("Léa", 15);
conduiteOK("Jean", 17);