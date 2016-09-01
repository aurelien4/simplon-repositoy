var valider = "Bienvenue"
var error = "Identifiant ou mot de passe incorrect";
var dico = new Map();
dico.set("joe@gmail.com","12345");
dico.set("aurelmoreau@gmail.com", "32415");
dico.set("michel@outlook.fr", "42134");
dico.set("noemie@gmail.fr","42123");
dico.set("fabien@hotmail.fr","98734");
var stock = new Map();
var login;
var mdp;
function log(){
   var login = document.getElementsByName("login")[0].value;
   var mdp= document.getElementsByName("motdepasse")[0].value;
  if(login.indexOf("@") != -1){
    console.log("ok");
  }else{
    alert(error);
    inscriptionclick();
    return;
  }
  if(login.length > 4){
    console.log("ok");
  }else{
    alert(error);
    inscriptionclick();
    return;
  }
  if(mdp == dico.get(login)){
    alert('bienvenue');
  }else{
    alert(error);
    inscriptionclick();
    return;
  };
};
function inscription(){
  var email = prompt("choissisez un email");
  var passe = prompt("choissisez un mdp");
  dico.set(email, passe);
  return;
};
function inscriptionclick(){
  souhait = prompt("souhaiter vous vous inscrire?");
  if(souhait == "oui"){
    souhait = true;
    if(souhait == true){
      var email = prompt("choissisez un email");
      var passe = prompt("choissisez un mdp");
      dico.set(email, passe);
      return;
    }
  }else{
    alert('A bientôt peut être.');
  }
}
/*function passOublier(){
  var oublier = prompt("entré votre Identifiant");
  if(oublier == dico.get()){
    alert("votre mot de passe est" );
  }else{
    alert("la funtion ne marche pas");
  };
};*/

log();
