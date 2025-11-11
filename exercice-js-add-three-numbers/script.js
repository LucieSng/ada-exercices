// Exercice 1
function addThreeNumbers() {
  return 1 + 2 + 3;
}
console.log("La somme est égale à ", addThreeNumbers());

// Exercice 2

let x = 4;
let y = 6;
let z = 8;

function addThreeNumbersWithArg(x, y, z) {
  return x + y + z;
}

console.log("Le résultat de la somme est ", addThreeNumbersWithArg(x, y, z));

// Exercice 3

let a = 50;
let b = 100;
let c = 200;
let d = 300;
let e = 400;
let f = 500;
let g = 600;

function addThreeNumbersWithArg(a, b, c) {
  return a + b + c;
}

function addThreeNumbersWithArg(d, e) {
  return d + e;
}

function addThreeNumbersWithArg(f, g) {
  return f + g;
}

console.log("Le résultat de la somme est ", addThreeNumbersWithArg(a, b, c));
console.log("Le résultat de la somme est ", addThreeNumbersWithArg(d, e));
console.log("Le résultat de la somme est ", addThreeNumbersWithArg(f, g));
