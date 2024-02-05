function Generer(){
    //var prenom = prompt("Entrer votre prenom").toLowerCase();

    //var nom = prompt("Entrer votre nom").toLowerCase();
   
    var prenomLabel = document.getElementById("colorprenom");
    var nomLabel = document.getElementById("colornom");
    var emailLabel = document.getElementById("coloremail");

    var prenom = document.getElementById("prenom").value;

    var nom =document.getElementById("nom").value;

    var lowercaseprenom = prenom.toLowerCase();
    var lowercasenom = nom.toLowerCase();

    var date = new Date();

    var email = lowercaseprenom.charAt(0) + lowercasenom +date.getFullYear() +"@otkSupinfo.com";
    document.getElementById("email").value = email;

    prenomLabel.style.color = "green";
    nomLabel.style.color = "green";
    emailLabel.style.color = "green";
    
}

function Effacer(){
    var prenom = document.getElementById("prenom");

    var nom =document.getElementById("nom");

    prenom.value = "";
    nom.value = "";
}
function Majuscule(){
    var labels = document.querySelectorAll("label");
    labels.forEach(function(label){
        label.textContent = label.textContent.toUpperCase();
    })
}
Majuscule();