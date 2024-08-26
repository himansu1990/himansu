let body = document.querySelector('body')
let cursor = document.querySelector('.cursor')
let slideImage = document.querySelectorAll('.slide-image')


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

