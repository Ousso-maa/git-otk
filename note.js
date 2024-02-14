/*
let divelement = document.createElement('div');
let inputelement = document.createElement('input');
let buttonelement = document.createElement('button');
let pelement = document.createElement('p');

buttonelement.textContent = 'valider';

divelement.appendChild(inputelement);
divelement.appendChild(buttonelement);
divelement.appendChild(pelement);

document.body.appendChild(divelement);

function afficher(){
    pelement.innerHTML = inputelement.value;

}
buttonelement.addEventListener("click",afficher);
*/

//Ecrire un scrip qui demande a l'utilisateur le nombre de champ a generer

let nbre = parseInt(prompt("Entrer votre nombre"));

for(let i=0; i< nbre; i++){

let divelement = document.createElement('div');
let inputelement = document.createElement('input');
let pelement = document.createElement('p');
let labelelement = document.createElement('label');
labelelement.textContent = "champs"+(i+1);

divelement.appendChild(inputelement);
divelement.appendChild(pelement);
divelement.appendChild(labelelement);

document.body.appendChild(divelement);
}