function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let res = parImpar(10); // Par
console.log(res);
