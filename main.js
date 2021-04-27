//Exo1
// function reverseNumber (num) {
//     let numToStr = num.toString();
//     let array = numToStr.split("");
//     array = array.reverse();
//     let res = array.join("");
//     return res;
// }

// console.log(reverseNumber(4932));

//Exo2
// function divPar2 (num) {
//     switch (num%2) {
//         case 0:
//             return `Le num ${num} est divisible par 2. ${num}:2 = ${num/2}`;
//         default:
//             return "Ce nombre n'est pas divisible par 2";
//     }
// }

// console.log(divPar2(10));

//Exo3
// function logIn (mdp) {
//     let password = "hello";
//     let user = mdp;
//     while(user != password) {
//         user = prompt("Mauvais mdp. Reessayez")
//     }
//     alert("Bienvenue")
// }

// logIn(prompt("Entrez vote mdp"))

//Exo Bonus

function reverseNumber (num) {
    let numToStr = num.toString();
    let array = numToStr.split("");
    array = array.reverse();
    let res = array.join("");
    return res;
}

console.log(reverseNumber(4932));