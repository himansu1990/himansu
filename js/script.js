let body = document.querySelector('body')
let cursor = document.querySelector('.cursor')
let slideImage = document.querySelectorAll('.slide-image')
let menu = document.querySelector('.menu')
let menuDet = document.querySelector('.men-det')

body.addEventListener('mousemove', function(dets){
     cursor.style.left = dets.x + "px"
     cursor.style.top = dets.y + "px"
})

slideImage.forEach(function(dets){
dets.addEventListener('mouseenter', function(){
    dets.childNodes[3].style.display = 'block'
    console.log(dets.childNodes)
})

dets.addEventListener('mouseleave', function(){
    dets.childNodes[3].style.display = 'none'
})

})

//Create click event for menu
let siteMenu = 0

menu.addEventListener('click', function(){
    if(siteMenu == 0){
        menuDet.style.display = 'block'
        menuDet.style.marginTop = '-8em'
        // menu.style.marginTop = '-0.05em'
        menu.innerHTML = 'Close'
        siteMenu = 1
    }
    else if(siteMenu == 1){
        menuDet.style.display = 'none'
        menu.innerHTML = 'Menu'
        siteMenu = 0
    }

})
