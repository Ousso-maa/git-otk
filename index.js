let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");
let annee=document.getElementById("date");

let tabpersonne = []; // Ajout de la déclaration du tableau
let compteur = 0; // Supposons que vous avez besoin d'un compteur pour l'id

function verifier() {
    if(prenom.value === "" || nom.value === "" || annee.value.split('-')[0] === "") {
        return false;
    } else {
        return true;
    }
}

let mail; // Déclaration de la variable mail

function genererEmail() {
    if(verifier() === true) {
        mail = prenom.value.charAt(0) + nom.value + annee.value.split('-')[0] + "@supinfo.com";
        document.getElementById("email").value = mail;
    } else {
        alert("Veuillez remplir tous les champs");
    }
}

function AjoutPersonne() {
    if(nom.value !== "" && prenom.value !== "" && annee.value !== "" && mail !== "") { // Utilisation de la variable mail globale
        let nomv = nom.value;
        let prenomv = prenom.value;
        let dnaiss = annee.value;
        // let mail = mail.value; // Ne pas redéclarer mail ici, il est déjà déclaré en tant que variable globale

        tabpersonne.push({
            id: ++compteur,
            nom: nomv,
            prenom: prenomv,
            annee: dnaiss,
            email: mail // Correction de 'mail' au lieu de 'mmail'
        });
        afficheTableau();
    } else {
        alert("Tous les champs sont obligatoires");
    }
}

function afficheTableau() {
    let html = "";

    tabpersonne.forEach(ligne => {
        html += "<tr>";
        html += "<td>" + ligne['id'] + "</td>";
        html += "<td>" + ligne['nom'] + "</td>";
        html += "<td>" + ligne['prenom'] + "</td>";
        html += "<td>" + ligne['annee'] + "</td>"; // Utilisation de 'annee.value' au lieu de 'dt.value'
        html += "<td>" + ligne['email'] + "</td>"; // Correction de 'email' au lieu de 'mail'
        html += "<td><button class='btn btn-primary'>Modifier</button>";
        html += "<button class='btn btn-danger' onclick='supprimer(" + ligne['id'] + ")'>Supprimer</button></td>";
        html += "</tr>";
    });

    document.getElementById('body').innerHTML = html;
    nom.value = "";
    prenom.value = "";
    annee.value = "";
    mail = ""; // Réinitialisation de la variable mail après l'ajout
}
function supprimer(position){
    delete tabpersonne[position-1];
    afficheTableau();
}