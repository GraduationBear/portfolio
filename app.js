$(document).ready(function (){
    const burger = document.querySelector(".burger");
    const navmenu = document.querySelector(".nav-menu");

    burger.addEventListener("click",function (){
        burger.classList.toggle("active");
        navmenu.classList.toggle("active");
    })
    document.querySelectorAll(".nav-menu li").forEach(n=> n.addEventListener("click",()=>{
        burger.classList.remove("active");
        navmenu.classList.remove("active");
    }))
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


    const ratio = .1
    const options = {
        root : null,
        rootMargin : '0px',
        threshold: ratio
    }
    const handleIntersect = function (entries,observer){
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        })
    }
    const observer = new IntersectionObserver(handleIntersect, options);

    document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
        observer.observe(r)
    })
})

