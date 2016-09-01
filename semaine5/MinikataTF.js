var prenom = "paul";

// TODO : ajouter une majuscule
prenom = "Paul";
console.log('prenom avec premiere lettre en majuscule', prenom ); //Paul

var users = ["joe", "lea", "bob", "ann"];
 users = ["Joe", "Lea" ,"Bob","Ann"];
// TODO : ajouter une majuscule à tous les prenoms de la liste
console.log('Prenoms avec premiere lettre en majuscule', users ); //Joe, Lea, Bob, Ann

// TODO : liste des prenoms qui commencent par une voyelle

// TODO : liste des prenoms qui commencent par une console


var notes = [10, 12, 13, 4, 8];
var somme = 0;
// TODO : calcul de la somme
for(i=0;i < notes.length; i++){
    somme += notes[i];
}
console.log('somme des notes', somme);

// TODO : calcul de la moyenne
var moyenne = somme%notes.length; 
console.log('moyenne', moyenne);

var nouvelleNote = 12;

// TODO : ajouter la note à liste
 notes.push(nouvelleNote);
// TODO : calcul de la nouvelle somme
var newsomme = 0;
for(i=0;i< notes.length;i++){
    newsomme += notes[i];
}
console.log('somme des notes', newsomme);
// TODO : calcul de la nouvelle moyenne
var newmoyenne = newsomme%notes.length;
console.log('moyenne', newmoyenne);


var notesLaPlusHaute = 0;
// TODO : trouvez la note la plus haute
for (i=0; i < notes.length; i++){
    if(notes[i] > notesLaPlusHaute){
            notesLaPlusHaute=notes[i];
    }
}
console.log('meilleure note', notesLaPlusHaute);
var notesLaPlusBasse = 0;
// TODO : trouvez la note la plus basse
for (i=0; i < notes.length; i++){
    if(notes[i] < notesLaPlusBasse){
            notesLaPlusBasse=notes[i];
    }
}

console.log('plus mauvaise note', notesLaPlusBasse);
// TODO : passage en fonctions
function calculSomme( tableauDeNotes ){
    var somme = 0;
    
    for(i=0; i < notes.length; i++){
        somme += notes[i];
    }
    
    return somme;
}

function calculMoyenne( tableauDeNotes ){   
    var moyenne;
    moyenne = somme%notes.length;
    return moyenne;
}
calculSomme();
calculMoyenne();
console.log("function"+" "+calculSomme());
console.log("function"+" "+calculMoyenne());