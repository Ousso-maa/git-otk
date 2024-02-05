//Ecrire un programme qui demande a l'utilisateur qui donne un entier,le programme determine et affiche le table
// de multiplication
/*
let x = parseInt(prompt("Entrer un entier"))
var i = 0;
let elementRecupere = document.getElementById("resultat");
while(i <= 10){
    var resultat = i * x;
    elementRecupere.innerHTML += x+'*'+i+ '=' +resultat+'<br>';
    i++;
}
document.body.style.background='blue';
*/
//Ecrire un programme qui demande a l'utilisateur de saisir son prenom et nom,le programme determine et affiche son 
//adresse email

function Generer(){
    var prenom = prompt("Entrer votre prenom").toLowerCase();

    var nom = prompt("Entrer votre nom").toLowerCase();
    

    var date = new Date();

    var email = prenom.charAt(0) + nom +date.getFullYear() +"@otkSupinfo.com";
    document.getElementById("email").textContent = email;
}

 document.getElementById("prenom").value=prenom;
 document.getElementById("nom").value=nom;
 document.getElementById("email").value=email;

