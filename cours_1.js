//alert Nous permet d'afficher des messages d'avertissement ou afficher des données
//confirm Affiche des boites d'alerte avec des messages de confirmation
//console.log Permet d'afficher des informations au niveau du console
//prompt permet de saissir des donnees au niveau du console
//var nous permet de declarer des variables locales
//let pour les variables globales

/*var prenom = 'Ousmane'
var nom = 'ka'
var age = 17
console.log('Le type de prenom est :'+typeof(prenom))
console.log('Le type de nom est :'+typeof(nom))
console.log('Le type de age est :'+typeof(age))
var prenom = prompt('Donner votre prenom')
var nom = prompt('Donner votre nom')
var age = prompt('Donner votre age')
alert("Prenom : "+prenom+ " Nom :"+nom+ " Age : "+age)

var resultat = confirm('Voulez vous afficher les informations')
if(resultat){
    alert("Prenom : "+prenom+ " Nom :"+nom+ " Age : "+age)
}
else{
    alert("Bienvenu dans notre site")
}
*/

//Ecrire un programme qui demande a l'utilisateur de saisir deux entiers et de donne l'operateur de calcul
//le programme determine et affiche le resultat dans le console et dans un langage script

/*
var a = parseInt(prompt("Entrer votre entier a : "))
while(isNaN(a)){
    var a = parseInt(prompt("Nombre invalide! entrer votre entier a : "))
}
var b = parseInt(prompt("Entrer votre entier b : "))
while(isNaN(b)){
    var b = parseInt(prompt("Nombre invalide! Entrer votre entier b : "))
}
var operateur = prompt("Entrer votre operateur (/,*,+,-,%)")
while(operateur!=="/"&& operateur!=="*"&& operateur!=="+"&& operateur!=="%"){
    var operateur = prompt("Operateur invalide! Entrer votre operateur (/,*,+,-,%)")
}
var resultat 
switch (operateur) {
    case '+':
        resultat = parseInt(a+b)
        break;
    case '-':
        resultat = parseInt(a-b)
        break;
    case '*':
        resultat = parseInt(a*b)
        break;  
    case '/':
        resultat = parseInt(a/b)
        break;      

    default:
       
        break;
}
alert("Le resultat est : "+resultat)*/

//Ecrire un programme qui demande a l'utilisteur de saisir un jour de la semaine,utiliser une structure de controle
//switch pour afficher un message aproprie.Considere les diffrente variation de cache (Majuscule et minuscul)
//pour afficher une correspondance correct
//Si l'utilisateur saisie lundi c'est le premiere jour de la semaine
//Si l'utilisateur saisie mardi et jeudi afficher c'est un jour de milieu de semaine
//SI vendredi c'est bientot le weekend
//Samedi et dimanche c'est le weekend

var jour = prompt("Saisir le jour").toLocaleLowerCase(jour);
switch (jour) {
    case 'lundi':
        alert("Lundi est le premiere jour de la semaine")
        console.log("Lundi est le premiere jour de la semaine")
        break;
    case 'mardi':
        alert("Mardi est un jour de milieu de la semaine")
    case 'mercredi':
        alert("Mercredi est un jour de milieu de la semaine")
    case 'jeudi':
        alert("Jeudi est un jour de milieu de la semaine")
        break
    case 'vendredi':
        alert("C'est bientot le weekend")
        break
    case 'samedi':
        alert("Mardi est un jour de milieu de la semaine")
    case 'dimanche':
        alert("Jeudi est un jour de milieu de la semaine")
         break

    default:
        break;
}