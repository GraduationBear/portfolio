$(document).ready(function (){
    var intro=$(".intro")
    var nom=$(".nom")
    nom.css("opacity", "0")
    intro.css("opacity","0")
    nom.animate({opacity: 1},800,function (){
        intro.animate({opacity: 1},800)
    })






    //PARTIE EXPERIENCES//

    var tuileenac=$(".enac")
    var tuileanim=$(".anim")
    var textenac=$("#textenac")
    var textanim=$("#textanim")

    //Onpose les propriétés par défaut
    textenac.css("display", "none")
    textanim.css("display", "flex")

    //Quand on clique sur la tuile enac
    tuileenac.click(function (){
        if(textenac.css("display")==="none"){
            textanim.animate({height:'toggle'},function (){
                textenac.animate({height:'toggle'})
            })
        }
    })
    //Quand on clique sur la tuile Animateur
    tuileanim.click(function (){
        if(textanim.css("display")==="none"){
            textenac.animate({height:'toggle'},function (){
                textanim.animate({height:'toggle'})
            })
        }
    })

})
