const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//PERMET DE CREER TOUTE LES METHODES DE CERCLE CARRE ECT......

//POSITION DE LA SOURIS
let posX = 100, 
    posY = 0; 



canvas.addEventListener("mousemove", e => {
    posX = e.offsetX;

    posY = e.offsetY;

    console.log(posX,posY);//axe Y ne sert à rien dans ce genre de configuration

})

//rappel une fonction 60 fois par seconde pour une bonne fluidité on l'appel requestAnimation qui va execute la fonction anime 
//et  tout ce qui a a l'intérieur de ma fonction  "ctx.clearRect etc....... " et apres j'appelle egalement anim()

//clearRect on efface un canvas comment un tableau blanc que l'on efface,et ensuite on va dessiner quelque chose sous ctx.clear
//ensuite on rappel"requestAnimationFrame(anim),function anim() qui va effacer le dessin le redessiner effacer etc ... qui donne une ilusion d'animation"


function anim() {


    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.save()//je sauvegarde cet etat là
    ctx.beginPath()//je commence un chemin
    ctx.rect(posX-175,0,350,750);//je dessine un rectangle et je le déplace
    //ctx.fill()//je le remplisse
    ctx.clip()

    ctx.drawImage(document.querySelector("video"), 0, 0, canvas.width, canvas.height) //je dessine dans le canvas une vidéo pour afficher la video sur le canvas

    ctx.restore()
     requestAnimationFrame(anim)
}

anim();