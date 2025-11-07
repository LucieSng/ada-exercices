// Étape 1
// Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.

// Tester la fonction en lui donnant une chaine de caractères “Hello, world”, et assurez-vous qu’elle renvoie bien ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

function getLatinCharacterList(text) {
  return text.split("");
}

// Étape 2
// À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.

function translateLatinCharacter(character) {
  return latinToMorse[character.toUpperCase()];

  // Le toUpperCase permet de transformer les minuscules en majuscules.
}

// Étape 3
function encode(text) {
  const array = []; // faire un tableau vide pour stocker le résultat
  const splittedText = getLatinCharacterList(text); // stocker le texte séparé grâce à la fonction dans une variable
  for (let i = 0; i < splittedText.length; i++) {
    // boucler sur le texte
    if (splittedText[i] == " ") {
      // gérer le cas où le caractère est un espace
      array.push("/"); // si c'en est un, alors mettre un / dans le tableau "array" pour représenter l'espace
    } else {
      // si non, traduire le texte directement en morse grâce à la fonction et push le morse dans le tableau
      array.push(translateLatinCharacter(splittedText[i]));
    }
  }
  return array.join(" "); // transformer le tableau en chaine de caractères
}

// console.log(encode("Ceci est un test"));

// Étape 4

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

// Fonction pour séparer chaque caractère morse
function getMorseCharacterList(text) {
  return text.split(" ");
}

// Fonction pour traduire chaque morse en lettre
function translateMorseCharacter(character) {
  return morseToLatin[character];
}

// Décoder de morse à texte
function decode(text) {
  const array = []; // initialiser un tableau pour stocker mon résultat

  const splittedText = getMorseCharacterList(text); // stocker le texte séparé grâce à la fonction dans une variable

  for (let i = 0; i < splittedText.length; i++) {
    // boucler sur le texte
    if (splittedText[i] == "/") {
      // gérer le cas où le morse est un /
      array.push(" "); // auquel cas, alors mettre un espace dans le tableau "array"
    } else {
      // sinon traduire du morse au français grâce à notre fonction, tout en s'assurant que chaque lettre sera en minuscule
      array.push(translateMorseCharacter(splittedText[i]).toLowerCase());
    }
  }
  return array.join(""); // transformer le tableau en chaine de caractères
}

// console.log(decode("-.-. . -.-. .. / . ... - / ..- -. / - . ... -"));

// Étape 5
// Utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.
// Je récupère l'élément input HTML
const inputUser = document.getElementById("text");
// Je crée la variable qui permet de récupérer les éléments bouton du HTML
const buttonTranslateMorse = document.querySelector(".latin-morse");
const buttonTranslateLatin = document.querySelector(".morse-latin");
// Je crée la variable qui permet de récupérer le résultat
const resultTranslate = document.querySelector(".result");

// Je veux qu'au clic sur "Traduire en morse", l'élément soit traduit.
buttonTranslateMorse.addEventListener("click", function () {
  resultTranslate.textContent = encode(inputUser.value);
});

// Je veux qu'au clic sur "Traduire en latin", l'élément soit traduit.
buttonTranslateLatin.addEventListener("click", function () {
  resultTranslate.textContent = decode(inputUser.value);
});

// Gestion des disabled boutons en fonction de l'input de l'utilisateur.
inputUser.addEventListener("input", function () {
  if (inputUser.value !== ``) {
    buttonTranslateMorse.disabled = false;
    buttonTranslateLatin.disabled = false;
  } else {
    buttonTranslateMorse.disabled = true;
    buttonTranslateLatin.disabled = true;
  }
});
