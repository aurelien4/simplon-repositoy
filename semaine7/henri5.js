var body = document.getElementById("body");

function validation1(){
	var reponseQuestion1 = document.getElementById('q1').value;
	 rep1 += reponseQuestion1;
	 game1();
	
}
function validation2(){
	var reponseQuestion2 = document.getElementById('q2').value;
	 rep2 += reponseQuestion2;
	 game2();
	
}
function felicitaion(){
	
	body.innerHTML = "<div class=\"containerP\"><h1 class=\"test\">Bravo!</h1> <button type=\"button\" class=\"but\" id=\"p1\" onclick=\"Quest2(1)\">Question suivante</button></div>";
	
}
function erreur(){
	body.innerHTML = "<div class=\"containerP\"><h1 class=\"test\">Mauvaise reponse!!</h1> <button type=\"button\" class=\"but\"  id=\"p0\" onclick=\"Quest1(0)\">Recommencer</button></div> ";
}
function Quest2(){
	body.innerHTML = "<div class=\"page\"><form><fieldset><legend>combien y'a-t-il de 7 nains ?</legend><input type=\"text\" name=\"question2\" id=\"q2\"  value=\"\"><button href=\"#\" type=\"button\" onclick=\"validation2()\">Valider</button></fieldset></form></div>";
}
function Quest1(){
	body.innerHTML = "<div class=\"page\"><form><fieldset><legend>De quel couleur est le cheval blanc d'henry IV</legend><input type=\"text\" name=\"question1\"  id=\"q1\" value=\"\"><button type=\"button\" href=\"#\" onclick=\"validation1()\">Valider</button></fieldset></form></div>";
}
function finDeJeu(){
	body.innerHTML = "<div class=\"containerP\"><h1 class=\"test\">Bien joué vous avez terminer la partie!</h1><button type=\"button\" href=\"#\" class=\"but\" id=\"replayBut\" onclick=\"reJouer()\">replay</button><button type=\"button\" class=\"but1\"onclick=\"fin()\">stop</button></div>";
}
var	rep1 ="";
var	rep2 ="";
function game1(){
	
	reponse1 = "blanc".toLowerCase();	
	console.log('rep1')
	if(rep1.toLowerCase() == reponse1){
		felicitaion();
	}else{
		erreur();
	}
}
function game2(){
	reponse2 = "sept".toLowerCase();
	reponses2 = 7;
	if(rep2.toLowerCase() == reponse2 || parseInt(rep2) == reponses2){
		finDeJeu();
	}else{
		erreur();
	}

}
function reJouer(){
		Quest1();
}
function fin(){
	body.innerHTML = "<div class=\"containerP\"><h1 class=\"test\">Merci d'avoir joué</h1></div>"
}