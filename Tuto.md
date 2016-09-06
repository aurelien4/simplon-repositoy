# Intro

Le svg est un langage aux possibilités semblable au flash  

### Avantage:

* Contrairement au bitmap, on peux zoomer les images sans perdre de qualité.  
* On peut aussi imprimer a très haute résolution.  
* Contrairement au flash(avant flash 8), il existe des balises en SVG qui favorise le reférencement des documents par les moteurs de recherche.  

### Desavantages:

* Les utilisateur d'IE doivent se procurrer un plug-in.
* Ce plug-in et assez lourd.

# Structure d'un doc SVG

Le SVG est un langage basé sur le XML , donc tout document svg doit commencer par le déclaration XML:  

```
  <?xml version="1.0" standalone="no"?>

```
l'attribut standalone="no" indique que le document 'ne se    tien pas tout seul', il fait référence à des fichiers    externes entre autre une DTD, une DTD est un fichier qui indique quelles balises ont le droit d'être utilisées, avec quels attributs, etc  
le DTD du svg s'inclue dans la balise <!DOCTYPE>
```
<!DOCTYPE svg public "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
```
Finalement la balise dans lequelle nous allons inscrire notre code est tout simplement : 
```
<svg></svg>
```
Cette balise prend (au moins) 4 attributs:
* XMLNS l'espace de nom du svg(une page ou trouver l'information à sont sujet);  
* version, la version du langage(dans ce cas le svg 1.1);  
* width, La largeur du doc(en px);  
* height, la hauteur du doc(en px aussi);

### Recapitulons : 
```
<?xml version= " 1.0 " standalone= " no "?>
!DOCTYPE svg public " -//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns= "http://www.w3.org/2000/svg " version= " 1.1 "
    width= "500" height= "500" ></svg>
```
Le svg ce place en 1er parent de la balise Title, nous avons quelque autre balise tel que:  La balise <defs></defs> qui sert de "bazar" pour mettre les ligne de code qui vont être utilisé plusieurs fois, cela permet d'éviter les répétions et de gagner du temps.  
La balise <g></g> cette balise sert a grouper des éléments    #base dessin en SVG:  
Comme nous en avons rapidement parler dans la chapitre précédent le svg est un langage qui permet de "dessiner" et animé des formes plus ou moins complexe pour ce faire il existe plusieurs balise tels que:
* ```<rect x y height width/>``` qui permet de crée des rectangle par apport a l'axe X/Y.  
* ```<ellipse rx xy cx cy />``` qui permet de crée une ellipse, on peux influer sur ça position cx/cy, et sur le rayon avec rx/ry
* ```<circle cx cy r />``` même fonctionnement que l'ellipse mais celui si permet de dessiner des cercle
*```<line  x1 y1 x2 y2 />``` permet de crée un segment du point 1 a 2.  
*```<path d= « M0,0 50,50 t30,30 80,80 />``` Permet de faire des tracé avec des point d'ancrage(cela permet de faire des tracé plus libre).  
Nous pouvons aussi styliser nos formes en leurs ajoutant l'attribut "style" qui comporte "fill" pour l'intérieur de la forme et "stroke"pour le contour, l'opacité peut etre modifié avec fill/stroke-opacity.  
	
	#### Ici mettre un exercice de base (a discuter en groupe);

### Animation

Le plus gros intérêt du SVG est la facilité avec la quel on peux animer une ou plusieurs forme.
La balise que nous allons utiliser pour animé nos forme est tout simplement:  
	```<animate>```
Elle possède plusieurs attribut: 
* attributeName(La valeur de l'attribut sur le quel on veux influer.(X/Y/fill/stroke etc)).

* attributType elle prend comme valeur le langage sur lequel on influe dans la plupart des cas XML ou CSS.  
* from: début de l'animation.
* to : position final.
* fill: freeze(pour bloqué l'animation dans ca position final).
* begin(comme vous vous en douté il nous permet d'indiquer quand commencer l'animation il prend des valeurs en seconde pour l'instant).  
* dur (permet d'indiquer la durée de l'annimation).  

Vous pouvez aussi influer sur la nuance de vos formes avec: 

``` <animateColor attributeType='CSS' attributeName='fill/stroke/opacity/etc' from='#fff' to='#f00'  begin='0s' dur='3s' fill='freeze'/> ```  
Voilà nous savons faire des animation linéaire. Mais l’intérêt de tel animation est limité et il est largement possible de faire la même chose en CSS, grâce à: <aimateMotion> il est possible d'utiliser de réaliser des animations a partir de 'path, cela permet de faire des animations totalement librement dans le cadre qu'est votre <svg>, un petit exemple imagé:  

	Mettre un exemple d'animation part apport a une path.(a discuter en groupe).

Avec ceci nous pouvons donc réaliser des animation plus poussé.

	Exo ici.

# Le texte

La première chose a savoir avec le texte en SVG, c'est que la version actuel, ne gere pas les bloc. Heuresement il existe des technique pour contourner les lacune du SVG  

Ils existe quelque balises tel que ```<text x="20" y="20"></text>``` cette balise permet donc d'afficher des ligne de texte dans nos document, comme vous pouvez le voir elle contient les attribut x et y qui nous servent a positionner le texte, le point X/Y est positionner au bas gauche de la première lettre de la phrase.  
Comme pour les forme il est possible de styliser vos texte:

* Couleur et remplasse avec fill et stroke.
* taille du texte avec font-size.  
* Italique avec font-style.  
* gras avec font-weight.  
* la police avec font-family.  
* les sur/soulignement avec text-decoration.
* l'alignement du texte avec texte anchor(change la position de X/Y) exemple imagé conseillé ici(a discuter).  
* l'espacement des lettre entre les mots avec lettre-spacing (pour l'espacement entre chaque lettre) et word-spacing (pour l'espacement entre chaque mots).  
