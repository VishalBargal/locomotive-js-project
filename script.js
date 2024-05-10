function loading(){
    
// start code for slide page 

var tl = gsap.timeline()


tl.to("#yellow",{
    top:"-100%",
    delay:0.5,
    duration:0.7,
    ease:"expo.out"

})

tl.from("#yellow1",{
    top:"100%",
    delay:0.9,
    duration:0.9,
    ease:"expo.out"
},"anim")

tl.to("#loader h1",{
    color:"black",
    delay:0.6,
    duration:0.7,
    
},"anim")
tl.to("#loader",{
    display:"none"
})

// end code for slide page 

}
loading()


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




var elems = document.querySelectorAll(".elem")
var main = document.querySelector("#page2")

elems.forEach(function(ele){
    // console.log(ele)
    ele.addEventListener("mouseenter",function(){
        // console.log("hello")
      var bgimg = ele.getAttribute("data-img")
    //   console.log(bgimg)
    // main.style.backgroundColor = "red"
    main.style.backgroundImage = `url(${bgimg})`


    })
})