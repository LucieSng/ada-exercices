// Etape 1
// Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide.
function isValidDate(dateString) {
  const formatRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!formatRegex.test(dateString)) {
    return false;
  }

  const parts = dateString.split("/"); // ["dd", "mm", "yyyy"]
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  // Check year
  if (year < 1000 || year > 9999) {
    return false;
  }

  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return false;
  }

  return true;
}
console.log(isValidDate("03/03/2020"));

// Etape 2
// Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false.
function isPalindrome(dateString) {
  if (!isValidDate(dateString)) {
    return false;
  }

  const digitsOnly = dateString.replace(/\//g, "");

  const reversed = digitsOnly.split("").reverse().join("");

  return digitsOnly === reversed;
}

console.log(isPalindrome("11/02/2011"));

// Etape 3
// Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le x en paramètre.
function getNextPalindrome(count) {
  let arrayPalindrome = [];
  let currentDay = new Date();

  while (arrayPalindrome.length < count) {
    currentDay.setDate(currentDay.getDate() + 1);
    const day = String(currentDay.getDate()).padStart(2, "0");
    const month = String(currentDay.getMonth() + 1).padStart(2, "0");
    const year = currentDay.getFullYear();
    const currentDayString = `${day}/${month}/${year}`;
    if (isPalindrome(currentDayString)) {
      arrayPalindrome.push(currentDayString);
    }
  }
  return arrayPalindrome;
}

console.log(getNextPalindrome(5));
console.log(isPalindrome("Radar"));
