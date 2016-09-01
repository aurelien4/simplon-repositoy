
    var question1 = "De quelle couleur est le cheval blanc d'Henri IV ?";
    var question2 = "Combien y a t il de sept nains ?";
    var continuer = true
    // on affiche la question
    while(continuer == true){
    var reponseQuestion1 = prompt(question1);
    console.log('reponseQuestion1', reponseQuestion1); // on affiche la réponse dans la console

      // si la réponse donnée est "blanc"
      if(reponseQuestion1.toLowerCase() == "blanc"){
          alert('Bravo');
          // affichage de la 2nde question
          var reponseQuestion2 = prompt(question2);
          // si la réponse données est 7 ou 07 ou 7.0 ou en lettre
          if( Number.parseInt(reponseQuestion2) == "7" || reponseQuestion2.toLowerCase() == "sept"){
              alert('Bravo');
            } else {
              alert('Erreur');
              reponseQuestion2 = prompt(question2);
              alert(Number.parseInt(reponseQuestion2) == "7" || reponseQuestion2.toLowerCase() == "sept" ? 'Bravo' : 'Erreur');
            }
          } else {
            alert('Erreur');
            reponseQuestion1 = prompt(question1);
            //var messageAlerte = reponseQuestion1 == "blanc" ? 'Bravo' : 'Erreur';
            alert( (reponseQuestion1.toLowerCase() == "blanc") ? 'Bravo' : 'Erreur');
              // affichage de la 2nde question
              var reponseQuestion2 = prompt(question2);
                // si la réponse données est 7 ou 07 ou 7.0 ou en lettre
              if( Number.parseInt(reponseQuestion2) == "7" || reponseQuestion2.toLowerCase() == "sept"){
                alert('Bravo');
              } else { //Sinon on repose la question une deuxième fois
                alert('Erreur');
                reponseQuestion2 = prompt(question2);
                alert(Number.parseInt(reponseQuestion2) == "7" || reponseQuestion2.toLowerCase() == "sept" ? 'Bravo' : 'Erreur');
              }
            }
        if(reponseQuestion1.toLowerCase() == "blanc" && Number.parseInt(reponseQuestion2) == "7" || reponseQuestion2.toLowerCase() == "sept"){
          continuer = false;
        } else {
          continuer = true;
        }
      }
