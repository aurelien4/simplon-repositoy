/*
* Texte / Chaines de caractères / String
* fonctions utiles : indexOf, slice, charAt, toLowerCase
* cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String
 */

// longueur
var texte = "un texte";

// TODO
var nombreDeCaracteres = "huit-mot".length;
console.log('nombre de caracteres', nombreDeCaracteres); // 8

// TODO
var quatriemeCaractere = "texte".substring(3,4) ;
console.log('quatrieme caractere', quatriemeCaractere ); // t

// TODO
var quatriemeEtCinquiemeCaracteres = "textee".substring(3 , 5) ;
console.log('quatrieme et cinquieme caractere', quatriemeEtCinquiemeCaracteres ); // t

// TODO
var majuscule = "un texte".toUpperCase();
console.log('majuscule', majuscule ); // UN TEXTE

// TODO
var premierMot = "un mot".substring(0 , 3);
console.log('premierMot', premierMot ); // un

// TODO
var premierMotEnMajuscule = "un mot".substring(0, 3);
console.log('premierMotEnMajuscule', premierMotEnMajuscule.toUpperCase()); // un

var prenom = prompt('votre prenom ?');
// TODO
console.log("Prenom" +" "+ prenom)

/*
 * nombres
 * fonctions utiles : parseInt , parseFloat, isNaN
 */

var valeur1 = parseInt('15');
var somme = valeur1 + 3;
console.log('somme == 18', somme == 18 ); // true

var age = 32;
// TODO
console.log( "j'ai" +" "+ age +" "+ "ans"); // j'ai 32 ans

/*
* boucles & tableaux
 */

var mails = ["Joe@gmAil.com", "LEA@test.com", "Bob@gmAil.com"];
var nombreDeMails = mails.length;
console.log('nombreDeMails', nombreDeMails );

var dernierMail = mails[nombreDeMails -1];
console.log('dernierMail', dernierMail );

// est ce que tout les mails sont gmail
var queDesGmails;
if(mails.indexOf("gmAil") != -1){
	queDesGmails = false;
}else{
	queDesGmails = true;
}


console.log('tous les mails sont gmail : ', queDesGmails );

// mettre les mails en minuscules
var mailsMinuscule;
for( var i = 0 ; i < mails.length ; i++ ){

	mailsMinuscule = mails[0].toLowerCase() +" "+ mails[1].toLowerCase() +" "+ mails[2].toLowerCase();

}
console.log('mails en minuscules', mailsMinuscule);


// TODO : remplacez les @ par des _
function remplacement(){
	for(var = i ; i < mails.length){
		var replace = 
	}
}
// TODO : supprimez les .com
