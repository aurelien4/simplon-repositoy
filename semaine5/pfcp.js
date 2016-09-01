function game(){
	var question = prompt("Pierre, feuille, ciseau ou puit?").toLowerCase();
	console.log("question"+" "+question);
	var table = ['pierre','feuille','ciseau','puit'];
	var game = table[Math.floor(Math.random()*table.length)];
	console.log('game'+" "+game);
	var egalite = "egalité";

if(game == "pierre"){
	if(game == question){
		alert(egalite);
		rejouer();
	}else{
		if(question == "ciseau"){
			alert('vous perdez');
			rejouer();
		}else if(question == "puit" || question == "feuille"){
				alert("vous gagné");
				rejouer();
		}else{
				alert('comment tu est arrivé jusquici toi?');
			}
	}
}else{
	if(game == "feuille"){
		if(game == question){
			alert(egalite);
			rejouer();
		}else{
			if(question == "pierre" || question == "puit"){
				alert("you loose");
				rejouer();
			}else if(question == "ciseau"){
					alert("you win.");
					rejouer();
			}else{
					alert("comment tu est arrivé jusquici toi?");
			}
		}
	}else{
		if(game == "ciseau"){
			if(game == question){
				alert(egalite);
				game();
			}else{
				if(question == "puit" || question == "pierre"){
					alert("you win");
					rejouer();
				}else if(question == "feuille"){
						alert("you loose");
						rejouer();
				}else{
						alert("je sais pas comment t'est arrivé là toi");
				}
			}
		}else{
			if(game == "puit"){
				if(game == question){
					alert(egalite);
					game();
				}else{
					if(question == "pierre" || question == "ciseau"){
						alert("you loose");
						rejouer();
					}else if(question == "feuille"){
							alert("you win");
							rejouer();
					}else{
						alert('bienjoué tu est arrivé dans un bug');
					}

				}
			}else{
				alert("si t'arrive ici gg. ta casser le code ou tu sait pas lire et/ou écrire");
			}
		}
	}
}

}
function rejouer(){
	var replay = true;
	var demande = prompt("souhaiter vous rejouer?");
	if(demande ===  null){
		replay = false;
		console.log("bye");
	}else{
		if(replay = true){
		alert("alors c'est partie");
		game();
	}else{
		return alert("bye");
	}
	}
}
game();
