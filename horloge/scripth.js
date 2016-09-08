function calendrier(){
	var date = new Date();
	var jour = date.getDate();
	var moi = date.getMonth();
	var annee = date.getYear();
	console.log(jour+" "+moi+" "+annee);
if(annee <= 200){
	annee += 1900;
}

var mois = new Array("Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre");
var jourDansLeMois = new Array(31,28,31,30,31,30,31,31,30,31,30,31);


if(annee%4 == 0 && annee!= 1900){
	jourDansLeMois[1] = 29;
}
	total = jourDansLeMois[moi];
var dateDaurjourdhui = jour+" "+mois[moi]+" "+ annee;
console.log(dateDaurjourdhui);
depJ = date;
depJ.setDate(1);

if(depJ.getDate() == 2){
	depJ = setDate(0);
};
depJ = depJ.getDay();
    document.write('<table class="calendar" onload="opacite(document.getElementById(\'cal_body\'),20);"><tbody id="cal_body"><tr><th colspan="7">'+dateDaurjourdhui+'</th></tr>');
    document.write('<tr><th>Dim</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th></tr><tr>');
    sem = 0;
    for(i=1;i<=depJ;i++)
    {depJ
        document.write('<td class="cal_jours_av_ap">'+(jourDansLeMois[moi-1]-depJ+i)+'</td>');
        sem++;
    }
    for(i=1;i<=total;i++)
    {
        if(sem==0)
        {
            document.write('<tr>');
        }
        if(jour==i)
        {
            document.write('<td class="jourJ">'+i+'</td>');
        }
        else
        {
            document.write('<td>'+i+'</td>');
        }
        sem++;
        if(sem==7)
        {
            document.write('</tr>');
            sem=0;
        }
    }
    for(i=1;sem!=0;i++)
    {
        document.write('<td class="jourAvantApres">'+i+'</td>');
        sem++;
        if(sem==7)
        {
            document.write('</tr>');
            sem=0;
        }
    }
    document.write('</tbody></table>');
    
    return true;
}
function init(nombre) {
    /*cette fonction ci va me permettre d'indiquer à mes heures , minutes et secondes que si le nombre indiquer est négatif , 
    il le renvoye à 0 qui est un entier et donc de permettre d'afficher les nombres correctement en commencent de 0.*/
    return nombre < 0 ? '0' + nombre : nombre;
}
function horloge(){
	var date = new Date();
	var heures = date.getHours();
	var minute = date.getMinutes();
	var seconde = date.getSeconds();
	var afficheH = document.getElementById('hours');
	var afficheM = document.getElementById('mins');
	var afficheS = document.getElementById('sec');
	afficheH.innerText = init(heures)+ ":";
	afficheM.innerText = init(minute)+ ":";
	afficheS.innerText = init(seconde);
}
window.onload = function() {
    /*ici je fais l'actualisation de l'heure toute les secondes*/
   setInterval("horloge()", 1000);
}
