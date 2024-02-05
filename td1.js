function guessGame() {
    const nombre = Math.floor(Math.random() * 101);
    let x;
    let tententive = 0;
    do{
        x = parseInt(prompt("Deviner le nombre enter 1 ET 100"));
        if(isNaN(x) || x < 1 || x > 100){
            alert("Nombre invalide! Deviner le nombre :");
            continue;
        }
        tententive++;
    if(nombre == x){
        alert("Felicitation vous avez trouvez! le nombre est :" +x);
        break;
    }
    if(nombre > x ){
        alert("Trop petit");
    }
    else if(nombre < x){
        alert("Trop Grand");
    }
    }while(x != nombre);
    alert(`Vous avez tenter ${tententive} fois`)
}
guessGame();