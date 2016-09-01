var voyelles = ["a","e","i","o","u","y"];    
// la fonction reçoit un caractère en paramètre et doit renvoyer true si le texte contient une voyelle, false sinon
function estUneVoyelle( lettre = null ){
    for(i=0; i < voyelles.length; i++){
        if(voyelles[i] == lettre){
            return true;
            break;
        }else{
            return false;
        }
    }
}

console.log("estUneVoyelle('f') :", estUneVoyelle('f') ); // false
console.log("estUneVoyelle('a') :", estUneVoyelle('a') ); // true
console.log("estUneVoyelle() :", estUneVoyelle() ); // false

// la fonction reçoit un texte en paramètre et doit renvoyer true si contient voyellesa
function contientUneVoyelle( textee ){
    for(var i = 0; i < voyelles.length ; i++){

        if( textee.indexOf(voyelles[i]) === -1){
            return false;
        }else{
            return true;
        }
    
    }
}

var resultata = contientUneVoyelle("Salut"); // true
console.log("resultata", resultata)

// la fonction reçoit un texte en paramètre et doit renvoyer le nombre de voyelle dans le texte
function compteVoyelle( texte ){
    var compteur = 0;
    for(var i = 0; i < texte.length ; i++){
        if(texte.indexOf(voyelles[i]) === -1){
            return false;
        }else{
            return compteur;
        }
    }
    
}

var resultate = compteVoyelle("Coucou"); // 4

console.log('resultate :', resultate);

// la fonction reçoit un texte en paramètre et doit renvoyer ce texte sans ses voyelles
function enleveVoyelle( texteAModifier ){

}

var resultat = enleveVoyelle("Coucou"); // doit renvoyer Cc

console.log('resultat :', resultat);