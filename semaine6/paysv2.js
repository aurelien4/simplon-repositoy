var pays = [
    {pays: 'France', capitale: 'Paris'},
    {pays: 'Espagne', capitale: 'Madrid'},
    {pays: 'Italie', capitale: 'Rome'},
    {pays: 'Belgique', capitale: 'Bruxelles'}
];
function rand(a){
	return Math.floor(Math.random()*a);
};

function game(){
	var index =	rand(pays.length);
do{
	
	console.log(index);
	var comparaison = pays[index].capitale;
	var erreur = false;
	var tentative = 0;
	
	if(tentative < 3){
		var repUtilisateur = prompt("Quel est la capitale de ce pays"+" "+ pays[index].pays).toLowerCase();
		 	
		 	if(repUtilisateur == comparaison.toLowerCase()){
		 	pays.splice(index, 1);
		 	alert("bien joué"+ " "+ comparaison +" "+ "est bien la capitale");
		 	erreur = true;
		 	}else{
		 	alert("Mauvais reponse");
		 	erreur = false;
		 	tentative++;
			}
	
	}else{
		alert("Perdu!");
		erreur = true;	
	}

}while(erreur == false)

fin_du_jeu();
}
function fin_du_jeu(){
	if(pays.length < 1){
		alert("Bien joué vous avez fini le mini jeu");
		replay();
	}else{
		game();
	}
}
function replay(){
	var souhait;
	var utilisateur = prompt("Souhaiter vous refaire une partie?");
	if(utilisateur == null){
		souhait = false;
	}else{
		souhait = true;
	}
		if(souhait == true){
			alert("Alors c'est partie");
			game();
		}else{
			alert("A un prochaine fois peut être");
		}
}
game();