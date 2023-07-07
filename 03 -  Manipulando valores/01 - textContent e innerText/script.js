"use strict";

/* textContet-> retonra o text com formataçõess, mas sem os elementos
    innerText-> retorna somente o texto, sem formatações ou elementos */

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "mari";
p.innerText = "mari";