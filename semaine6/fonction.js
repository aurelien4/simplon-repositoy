//écrire une fonction qui prend un mail et un mot de passe et renvoie un Object avec ces informations
function email(mail , mdp){
	this.email = mail;
	this.mdp = mdp;
}
var utilisateur = new email("aurelmoreau@outlook.fr","mdnar");
console.log(utilisateur);

//écrire une fonction qui reçoit une nombre de secondes et renvoie un texte en minutes

function secondesEnMinutes(a){
	var secondes = Math.floor( a % 60 )
	var minutes = Math.floor( a / 60);
	console.log(minutes +"min"+" "+ secondes +"sec");
}
secondesEnMinutes(123); // renvoie 2m 3s

function secondesEnMinutess(b){
	var secondes = Math.floor(b % 60); 
	var minutes = Math.floor(b / 3600 * 60 % 4);
	var heures = Math.floor(b / 3600);
	console.log(heures+"h"+" "+minutes+"min"+" "+secondes+"s")
}

secondesEnMinutess(3723); // renvoie 1h 2m 3s

var eleves = [
    {prenom:'Lea',nom:'Petit', note:10},
    {prenom:'Joe',nom:'Martin', note:15},
    {prenom:'Bob',nom:'Dupond', note:12}
];

function calculMoyenneClasse(listeEleves){
    var calcul = 0;
 	var equation;
    do{
    	for(i in eleves){
    		console.log("note "+ eleves[i].note);
    		equation = eleves[i].note;
    		calcul += equation;

    	}
    }while(eleves < 1);
  	return calc = calcul / 3;

}
console.log(calculMoyenneClasse(eleves).toFixed(2) ); // renvoie 12.33 (2 chiffres après la virgule) 